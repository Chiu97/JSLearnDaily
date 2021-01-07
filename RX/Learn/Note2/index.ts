import { fromEvent } from "rxjs"
import { take } from "rxjs/operators"

function subscribeToTheRXButton () {
    const btn: HTMLButtonElement = document.querySelector('#rx-source-button')
    let counter = 0
    if (!btn) return

    const source$buttonClick = fromEvent(btn, 'click') 
    const subscription$buttonClick = source$buttonClick.pipe(take(3)).subscribe(event => {
        console.log(event)
        if (++counter>3) subscription$buttonClick.unsubscribe()
    })
}

subscribeToTheRXButton()

export {}