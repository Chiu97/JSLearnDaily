### React Hooks  
-Reference:  
> https://overreacted.io/a-complete-guide-to-useeffect/  
  	https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e  
	https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889  
https://levelup.gitconnected.com/dissecting-react-hooks-how-to-use-them-and-are-they-replacing-redux-4bb96fa7569d  
https://www.robinwieruch.de/react-hooks-fetch-data  

  
  
React Hooks为函数组件提供了state以及类生命周期的使用，使用hook对于抽象组件中的stateful逻辑提取有很大帮助，同时，使用hooks在未来有可能可以统一创建组件的方式（当然，也不是说废除class的必要性）。而且函数组件也可以为我们避免this的指向问题。
Each Render has its own state, each render has its own effect.  
简单的useState例子:
```js
import React, { useState } from "react";

function MyComponent {
  // count: state
  // setCount: kind of like setState in class component
  const [count, setCount] = useState(0);

  return(
    // not a two way binding
    <div>{count}</div>
    <button onClick={setCount(count+1)}>Increase Count</button>
  );
}  
```  
  
关于Hook会不会因为每次渲染都需要创建函数而导致性能问题:  
```js
import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  onCountChange = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return(
      <div>{this.state.count}</div>
      <button onChange={this.onCountChange}>Increase Count</button>
    )
  }
}  
```    
  
关于使用箭头函数和bind带来的破坏pureComponent问题:  
[codesandbox demo](https://codesandbox.io/s/54k49onoyl?from-embed)
```js
  class User extends PureComponent {
    // ...
  }

  class PanelForUsers extends Component {
    constructor(props) {
      super(props);
      this.state = {users:[
          { id: 1, name: 'Curry' },
          { id: 2, name: 'Modric' },
          { id: 3, name: 'Joey' }
          ]}
    }
    
    deleteUser = id => {
      this.setState(prevState => {
        return {
          users: prevState.users.filter(user => user.id !== id)
        }
      })
    }

    render() {
      <ul>
        {this.state.users.map(user => {
          return (
            <User 
              key={user.id}
              name={user.name}
              id={user.id}
              onDeleteClick={() => this.deleteUser(user.id)}
            />
          )
        })}
      </ul>
    }
  }
```  

hooks对于回调函数向下传递的解决办法:  
useReducer&useContext
  ```js
  const TodosDispatch = React.createContext(null);

  function TodosApp() {
    // Note: `dispatch` won't change between re-renders
    const [todos, dispatch] = useReducer(todosReducer);

    return (
      <TodosDispatch.Provider value={dispatch}>
        <DeepTree todos={todos} />
      </TodosDispatch.Provider>
    );
  }

  function DeepChild(props) {

    const dispatch = useContext(TodosDispatch);

    function handleClick() {
      dispatch({ type: 'add', text: 'hello' });
    }

    return (
      <button onClick={handleClick}>Add todo</button>
    );
  }
  ```

useState的底层实现原理大致如下:
```js
  let state;
  let setters;
  let cursor = 0;
  let firstRun = true;
  
  createSetters = (cursor) => {
    return (val) => state[cursor] = val 
  }

  setState = (initVal) => {
    if(firstRun) {
      state.push(initVal);
      setters.push(createSetter(cursor));
      firstRun = false;
    }

    const setter = setters[cursor];
    const value = state[cursor];
    cursor++;

    return [value, setter];
  }

  function HookComponent() {
    const [content, setContent] = useState('Learning');
    const [status, setStatus] = useState('Undone');

    return(
      <div>
        <Button onClick={() => setStatus('done')}>{status}</Button>
      </div>
    )
  }

  function MyComponent() {
    // 重制指针
    cursor = 0;
    return <HookComponent />
  }
  ```  

  #### useEffect  

  useEffect接受两个参数，第一个是effect function，第二个是监听数组。  
  使用useEffect:
  ```js
    const [user, setUser] = useState(null);

    useEffect(() => { // effect function
      subscribeUser().then(user => setUser(user))
      // cleanup function
      return unSubscribeUser();
    });
  ```
  React会记住你写的effect函数，并且在dom改变完成后调用。 
  以简单的counter为例，做一个比喻：
  ```js
  import React, { useState, useEffect } from "react";

  function MyComponent {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `You clicked ${count} times`;
    })

    return(
      <div>{count}</div>
      <button onClick={setCount(count+1)}>Increase Count</button>
    );
  }  
  ```  
  #### 当你点击一次按钮  
  组件：react，把我的state设置为<mark>1</mark>  
  react：ok，把你的state为<mark>1</mark>时的ui给我  
  组件：这是渲染的结果:
  ```html
  <div>1</div>
  <button>Increase Count</button>
  ```  
  你搞好后记得调用我的effect函数:  
  ```js
  () => { document.title = 'You clicked 1 times' }
  ```  
  react:👌，更新ui。浏览器老哥，我改变dom了。  
  浏览器:收到，我已经重新绘制屏幕了。  
  react：好的，那我也要调用这次渲染对应的effect函数了.
  ```js
  // run
  document.title = 'You clicked 1 times'
  ```    
  如果有cleanup的话在调用effect之前会先去调用老的cleanup。例如说点击两次按钮，第二次在执行count=2对应的effect之前会先执行count=1对应的cleanup函数。  
  hooks依赖闭包，但也因此没有指向问题, 因为闭包帮助hooks保存了状态。在类组件中，虽然是没有直接更改原来的state，但用新的state去替换旧的state依然是改变了this.state的指向。 
    
  如何限定effect的调用  
  ```js
  function Greeting({ name }) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      document.title = 'Hello, ' + name;
    });

    return (
      <h1 className="Greeting">
        Hello, {name}
        <button onClick={() => setCounter(count + 1)}>
          Increment
        </button>
      </h1>
    );

  }
  ```  
  变更部分:  
  ```js

    useEffect(() => {
      document.title = 'Hello, ' + name;
    }, [name]);

  ```  
  在监视数组（更确切的说是依赖）里面明确需要的部分(但不能漏)，这样的话就能保证依赖不变，effect函数也不会被调用。  
  ![](https://overreacted.io/deps-compare-correct-fae247cd068eedbd4b62ba50592d2b3d.gif)  
  有些人把依赖设置为空数组，想要模拟componentDidMount,只运行一次effect代码，但之中缺乏依赖有的时候会导致问题，也是非常不鼓励的行为。如，如果你想设立一个inteval，达到每秒counter+1的目的，如果使用空数组的行为：  
  [codesanbox demo](https://codesandbox.io/s/musing-jackson-tgm5o)  

  ```js
  import React, { useState, useEffect, useRef } from "react";
  import ReactDOM from "react-dom";

  function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const id = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearInterval(id);
    }, []);

    return <h1>{count}</h1>;
  }

  const rootElement = document.getElementById("root");
  ReactDOM.render(<Counter />, rootElement);
  ```  
  看似显示数字会跟着变化，实际上却不会。根本原因在于，hooks所依赖的是闭包，这里的<mark>setCount(count + 1)</mark>,实际上相当于<mark>setCount(1)</mark>,因此，屏幕上会一直显示1。  
  如果把count加入依赖当然可以让屏幕数字发生变化，但是频繁执行setinterval不是我们想要的，如果在新state的变更取决于老state的情况下，可以采用[函数式更新](https://reactjs.org/docs/hooks-reference.html#functional-updates)：
  ```js  
    useEffect(() => {
      const id = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }, []);
  ```  
  然而，这还不是最好的方法，当你设置一个state取决于上一个state的值的时候，用<mark>useReducer</mark>是更好的选择。  
  ```js
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' }); 
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  ```  
  因为react可以保证dispatch在组件生命周期内是维持不变的，所以可以避免重新设置interval的问题。  

  #### 关于函数嵌入effect中的问题 
  把使用的函数放在render作用域之外  
  ```js
  function getFetchUrl(query) {
    return 'https://hn.algolia.com/api/v1/search?query=' + query;
  }

  function SearchResults() {
    useEffect(() => {
      const url = getFetchUrl('react');
      // ...
    }, []); 

    useEffect(() => {
      const url = getFetchUrl('redux');
      // ...
    }, []); 

    // ...
  }
  ```

  使用useCallback  
  ```js
  function SearchResults() {
    const getFetchUrl = useCallback((query) => {
      return 'https://hn.algolia.com/api/v1/search?query=' + query;
    }, []);  
    useEffect(() => {
      const url = getFetchUrl('react');
      // ...
    }, [getFetchUrl]); 

    useEffect(() => {
      const url = getFetchUrl('redux');
      // ...
    }, [getFetchUrl]);

    // ...
  }
  ```  
  想要根据props中的query作出变更  
  ```js
    const getFetchUrl = useCallback(() => {
      return 'https://hn.algolia.com/api/v1/search?query=' + query;
    }, [query]);
  ```  
  如果是类组件就很难作出这样的效果  
  ```js
  class Parent extends Component {
    state = {
      query: 'react'
    };
    fetchData = () => {
      const url = 'https://hn.algolia.com/api/v1/search?query=' + this.state.query;
      // ... Fetch data and do something ...
    };
    render() {
      return <Child fetchData={this.fetchData} />;
    }
  }
  ```  
  ```js
  class Child extends Component {
    state = {
      data: null
    };
    componentDidMount() {
      this.props.fetchData();
    }
    componentDidUpdate(prevProps) {
      // 🔴 This condition will never be true
      if (this.props.fetchData !== prevProps.fetchData) {
        this.props.fetchData();
      }
    }
    render() {
      // ...
    }
  }
  ```  
  ```js
  // now this.props.fetchData !== prevProps.fetchData always true
    render() {
      return <Child fetchData={this.fetchData.bind(this, this.state.query)} />;
    }
  ```  
  唯一的办法就是把query也一并传下来.  
    
  类中的竞争问题:  
  ```js
  class Article extends Component {
    state = {
      article: null
    };
    componentDidMount() {
      this.fetchData(this.props.id);
    }
    componentDidUpdate(prevProps) {
      if (prevProps.id !== this.props.id) {
        this.fetchData(this.props.id);
      }
    }
    async fetchData(id) {
      const article = await API.fetchArticle(id);
      this.setState({ article });
    }
    // ...
  }
  ```  
  hooks的权宜之计:  
  ```js
  function Article({ id }) {
    const [article, setArticle] = useState(null);

    useEffect(() => {
      let didCancel = false;

      async function fetchData() {
        const article = await API.fetchArticle(id);
        if (!didCancel) {
          setArticle(article);
        }
      }

      fetchData();

      return () => {
        didCancel = true;
      };
    }, [id]);

    // ...
  }
  ```