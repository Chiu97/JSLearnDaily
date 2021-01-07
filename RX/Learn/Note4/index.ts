import { interval } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators'

export function simulateHttp(val: any, ms:number) {
    return interval(ms).pipe(take(1), map(_ => val))
}

export function simulateLongPolling(val: any, ms:number) {
    return interval(ms).pipe(map(_ => val))
}

export function TestSimulateHttp() {
    simulateHttp(100, 1000).subscribe(
        v => console.log('v:',v), 
        () => {}, 
        () => {console.log('completed')}
    )
}

export function TestLongPolling() {
    const category$ = simulateLongPolling('Books', 5000)
    const book$ = category$.pipe(switchMap(
        (sourceVal) => {
            console.log('sourceVal:' + sourceVal)
            return simulateLongPolling('Item Book', 1000)
        }, (outter, inner, outerIdx, innerIdx) => {
            console.log({
                outter,
                inner,
                outerIdx,
                innerIdx
            })
            return [outter, inner]
        }
    ))
    book$.subscribe(
        console.log,
        console.error,
        () => console.log('book stream close')
    )
}


// TestSimulateHttp()
TestLongPolling()