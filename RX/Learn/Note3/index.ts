import { filter, map } from 'rxjs/operators'
import { of } from 'rxjs'

export function TestPipe() {
    const source_ofNum = of(1, -3, 4, 5, 7, -2)
    const doubleOps = (num: number) => num*2
    const positiveFilter = (num: number) => num>0
    const logOps = (v: any) => console.log(v)
    const println = () => console.log('-'.repeat(60))
    const source_positiveNums = source_ofNum.pipe(filter(positiveFilter))
    const source_doubleNums = source_ofNum.pipe(map(doubleOps))
    const source_positiveDoubleNums = source_ofNum.pipe(filter(positiveFilter), map(doubleOps))
    source_positiveNums.forEach(logOps)
    println()
    source_doubleNums.forEach(logOps)
    println()
    source_positiveDoubleNums.forEach(logOps)
}

TestPipe()