import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators'

export function simulateHttp(val: any, ms:number) {
    return interval(ms).pipe(take(1), map(_ => val))
}

export function TestSimulateHttp() {
    simulateHttp(100, 1000).subscribe(v => console.log('v:',v))
}

TestSimulateHttp()