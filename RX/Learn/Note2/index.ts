import { fromEvent } from "rxjs"
import { map } from 'rxjs/operators'

function subscribeToTheRXButton () {
    const btn: HTMLButtonElement = document.querySelector('#rx-source-button')
    const counterDisplay: HTMLSpanElement =document.querySelector('#rx-counter-display')
    if (!btn||!counterDisplay) return
    let counter = 0

    const counterIOTAStram = fromEvent(btn, 'click').pipe(map(_ => counter++))
    counterIOTAStram.subscribe({
        next: counterNum => {
            console.log(counterNum)
            counterDisplay.innerText = '' + counter
        },
        error: err => {
            console.log('get err:', err)
        },
        complete: () => console.log('Tt is now stream complete')
    })
}

subscribeToTheRXButton()

export {}