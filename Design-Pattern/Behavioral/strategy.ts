type strategyType = 'ADD' | 'SUBSTRACT' | 'MULTIPLE'
enum StrategyType {
    ADD = 'ADD',
    SUBSTRACT = 'SUBSTRACT',
    MULTIPLE = 'MULTIPLE'
}

type TwoNumStrategy = (num1: number, num2: number) => number

const addStrategy: TwoNumStrategy = (num1, num2) => num1 + num2
const substractStrategy: TwoNumStrategy = (num1, num2) => num1 - num2
const multipleStrategy: TwoNumStrategy = (num1, num2) => num1 * num2

const strategyMap = {
    addStrategy,
    substractStrategy,
    multipleStrategy
}

class twoNumContext {
    private strategy: TwoNumStrategy

    switchStrategy(strategy: TwoNumStrategy) {
        this.strategy = strategy
    }

    execute(num1: number, num2: number) {
        if (this.strategy) return this.strategy(num1, num2)
        else throw new Error('You must define a strategy before execution')
    }         
}

function fnStrategy (type: StrategyType, num1: number, num2: number): void {
    const strategyContext = new twoNumContext()
    
    switch (type) {
        case StrategyType.ADD:
            strategyContext.switchStrategy(addStrategy)
            break
        case StrategyType.SUBSTRACT: 
            strategyContext.switchStrategy(substractStrategy)
            break
        case StrategyType.MULTIPLE:
        default:
            strategyContext.switchStrategy(multipleStrategy)
            break
    }

    const calResult = strategyContext.execute(num1, num2)

    console.log(`get calculate result: ${calResult}`)
}

fnStrategy(StrategyType.SUBSTRACT, 2, 3)