import { fromEvent } from "rxjs"

function subscribeToTheRXButton () {
    const btn: HTMLButtonElement = document.querySelector('#rx-source-button')
    let counter = 0
    if (!btn) return

    const source$buttonClick = fromEvent(btn, 'click') 
    const subscription$buttonClick = source$buttonClick.subscribe(event => {
        console.log(event)
        if (++counter>3) subscription$buttonClick.unsubscribe()
    })
}

subscribeToTheRXButton()

export {}