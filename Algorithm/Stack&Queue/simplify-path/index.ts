function simplifyPath(path: string): string {
    if (!path) return ''
    const pathStack = []

    const splitPath = path.split('/')
    splitPath.forEach(p => {
        if (!p||p==='.') return
        if (p==='..') {
            pathStack.pop()
            return
        }
        pathStack.push(p)
    })
    return '/' + pathStack.join('/')
};

const assert = require('assert')
const testCase = "/a//b////c/d//././/.." 
const output = simplifyPath(testCase)
const expectOutput = '/a/b/c'
assert.equal(output, expectOutput)
export {}