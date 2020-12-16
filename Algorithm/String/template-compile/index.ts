const assert = require('assert')

interface String {
    replaceAll: (RegExp, string) => string
}

const getAllObjPathRegex = /{{([\w.]+)?}}/g
/**
 * 编译模板, 并且用数据对象的属性值替换
 */
function compile_template(data: Object, template: string): string {
    function replace (str: string, objPath: string): string {
        let attrs = objPath.split('.')
        let currentAttr: Object = data
        for (let i=0; i<attrs.length; i++) {
            if (!Object.getOwnPropertyNames(attrs[i])) {
                return '{{}}'
            }
            currentAttr = currentAttr[attrs[i]]
        }
        return `{{${String(currentAttr)}}}`
    }

    // @ts-ignore
    const res = template.replaceAll(getAllObjPathRegex, replace)

    return res
}

const testTemplate = `
    <div>{{logo}}</div>
    <div>{{user.name}}</div>
`
const testObj = {
    logo: 'Jenkins Always Works',
    user: {
        name: 'chiu',
        gender: 'male'
    }
}

const testOutput = compile_template(testObj, testTemplate)
const expectOutput = testTemplate.replace('logo', testObj.logo).replace('user.name', testObj.user.name)
assert.equal(testOutput, expectOutput, 'it should replace correctly')
export default compile_template