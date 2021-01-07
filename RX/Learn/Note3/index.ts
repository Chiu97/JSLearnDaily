import { filter, map, scan, take } from 'rxjs/operators'
import { combineLatest, interval, of } from 'rxjs'

const logOps = (v: any) => console.log(v)
const println = () => console.log('-'.repeat(60))
export function TestPipe() {
    const source_ofNum = of(1, -3, 4, 5, 7, -2)
    const doubleOps = (num: number) => num*2
    const positiveFilter = (num: number) => num>0
    const source_positiveNums = source_ofNum.pipe(filter(positiveFilter))
    const source_doubleNums = source_ofNum.pipe(map(doubleOps))
    const source_positiveDoubleNums = source_ofNum.pipe(filter(positiveFilter), map(doubleOps))
    source_positiveNums.forEach(logOps)
    println()
    source_doubleNums.forEach(logOps)
    println()
    source_positiveDoubleNums.forEach(logOps)
}

export function TestCombine() {
    const source_delay75 = interval(75).pipe(take(5))
    const source_delay100 = interval(100).pipe(take(5))

    const source_combine = combineLatest([source_delay75, source_delay100])
    source_combine.subscribe(v => console.log(v))
}

export function TestScan() {
    const source_number = interval(20).pipe(take(5))
    const source_counter = source_number.pipe(scan((acc, _) => acc+1, 0))
    source_counter.forEach(logOps)
}

// TestPipe()
// TestCombine()
TestScan()