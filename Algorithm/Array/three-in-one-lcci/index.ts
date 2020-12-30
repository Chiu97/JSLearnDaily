class TripleInOne {
    // each array pointer points to the last element
    private p0 = 0
    private p1 = 1
    private p2 = 2
    private stack: number[]
    private stackSize: number
    
    constructor(stackSize: number) {
        this.stack = [undefined, undefined, undefined]
        this.stackSize = stackSize
    }

    private isFull(stackNum: number): boolean {
        switch(stackNum) {
            case 0:
                return this.p0 === this.stackSize
            case 1:
                return this.p1 - this.p0 === this.stackSize + 1
            case 2:
                return this.p2 - this.p1 === this.stackSize + 1
            default:
                throw new RangeError('stack num out of range (0 ~ 2)')
        }
    }

    push(stackNum: number, value: number): void {
        if (this.isFull(stackNum)) return
        switch (stackNum) {
            case 0:
                this.stack.splice(this.p0+1, 0, value)
                this.p0++
                this.p1++
                this.p2++
                break
            case 1:
                this.stack.splice(this.p1+1, 0, value)
                this.p1++
                this.p2++
                break
            case 2:
                this.stack.splice(this.p2+1, 0, value)
                this.p2++
                break
            default:
                throw new RangeError('stack num out of range (0 ~ 2)')
        }
    }

    pop(stackNum: number): number {
        if (this.isEmpty(stackNum)) return -1
        switch (stackNum) {
            case 0:
                this.p1--
                this.p2--
                return this.stack.splice(this.p0--, 1)[0]
            case 1:
                this.p2--
                return this.stack.splice(this.p1--, 1)[0]
            case 2:
                return this.stack.splice(this.p2--, 1)[0]
            default:
                throw new RangeError('stack num out of range (0 ~ 2)')
        }
    }

    peek(stackNum: number): number {
        if (this.isEmpty(stackNum)) return -1
        switch (stackNum) {
            case 0:
                return this.stack[this.p0]
            case 1:
                return this.stack[this.p1]
            case 2:
                return this.stack[this.p2]
            default:
                throw new RangeError('stack num out of range (0 ~ 2)')
        }
    }

    isEmpty(stackNum: number): boolean {
        switch (stackNum) {
            case 0:
                return this.stack[this.p0] === undefined
            case 1:
                return this.stack[this.p1] === undefined
            case 2:
                return this.stack[this.p2] === undefined
        }
    }
}

enum OPS {
    INIT,
    PUSH,
    POP,
    PEEK,
    ISEMPTY
}

let step = Number.POSITIVE_INFINITY
function mimicProcess (ops: OPS[], datas: number[][]): (null|number|boolean)[] {
    let inst: TripleInOne

    let i=0
    const res: (null|number|boolean)[] = []
    while (i<ops.length) {
        if (i>step) return res
        const data = datas[i]
        const firstEl = data[0]
        switch (ops[i]) {
            case OPS.INIT:
                inst = new TripleInOne(firstEl)
                res.push(null)
                break
            case OPS.PUSH:
                inst.push(data[0], data[1])
                res.push(null)
                break
            case OPS.POP:
                res.push(inst.pop(firstEl))
                break
            case OPS.PEEK:
                res.push(inst.peek(firstEl))
                break
            case OPS.ISEMPTY:
                res.push(inst.isEmpty(firstEl))
                break
        }
        i++
    }

    return res


}

const toOPS = (ops: string[]) => {
    return ops.map(op => {
        switch (op) {
            case 'TripleInOne': return OPS.INIT
            case 'peek': return OPS.PEEK
            case 'pop': return OPS.POP
            case 'push': return OPS.PUSH
            case 'isEmpty': return OPS.ISEMPTY
        }
    })
}

const leetcodeOps = [
  "TripleInOne",
  "peek",
  "pop",
  "isEmpty",
  "push",
  "pop",
  "push",
  "push",
  "pop",
  "push",
  "push",
  "isEmpty",
  "pop",
  "peek",
  "push",
  "peek",
  "isEmpty",
  "peek",
  "pop",
  "push",
  "isEmpty",
  "pop",
  "peek",
]
const leetcodeDatas = [
  [18],
  [1],
  [2],
  [1],
  [2, 40],
  [2],
  [0, 44],
  [1, 40],
  [0],
  [1, 54],
  [0, 42],
  [0],
  [1],
  [1],
  [0, 56],
  [2],
  [0],
  [2],
  [2],
  [1, 15],
  [1],
  [1],
  [0],
]
const leetcodeExpect = [
  null,
  -1,
  -1,
  true,
  null,
  40,
  null,
  null,
  44,
  null,
  null,
  false,
  54,
  40,
  null,
  -1,
  false,
  -1,
  -1,
  null,
  false,
  15,
  56
]
const fomattedLeetcodeOps = toOPS(leetcodeOps)
const res = mimicProcess(fomattedLeetcodeOps, leetcodeDatas)
const assert = require('assert')
assert.deepEqual(res, leetcodeExpect)
export {}