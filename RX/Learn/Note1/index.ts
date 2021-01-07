import { interval, of } from 'rxjs'
import { take, map, combineAll } from 'rxjs/operators'

const data = of(1, 2, 3, 4)

const source$ =  interval(1000).pipe(take(2))

const example$ = source$.pipe(
    map(val => interval(1000).pipe(
        map(i => `Result ${val}: ${i}`),
        take(5)
    ))
)

const subsription = data.subscribe(val => console.log(val))

const res = example$.pipe(combineAll())
console.log(res.forEach(v => console.log(v)))

export {}