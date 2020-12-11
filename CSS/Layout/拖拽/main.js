const CLS_LIST = {
    DRAGGING: 'dragging'
}

const allowDrop = event => {
    event.preventDefault();
};

/**
 * remove a class from the element
 * @param {HTMLElement} el
 * @param {string} cls
 * @returns {void}
 */
const removeCls = (el, cls) => el.classList.remove(cls)

/**
 * add a class to element
 * @param {HTMLElement} el
 * @param {string} cls
 * @returns {void}
 */
const addCls = (el, cls) => el.classList.add(cls)

/**
 * @param {DragEvent}
 */
const handleDrop = (event) => {
    const outerHtml = event.dataTransfer.getData('text/html')
    const id = event.dataTransfer.getData('text/plain')
    const prePositionEl = document.querySelector(`[data-id="${id}"]`)
    prePositionEl && prePositionEl.remove()
    console.log({event, outerHtml, prePositionEl})
    event.currentTarget.innerHTML = event.currentTarget.innerHTML + outerHtml
}


/**
 * debounce function
 * @param {Function} fn
 * @param {number} interval
 */
function debounce(fn, interval) {
    let timeout = null

    return (...args) => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn(args)
            clearTimeout(timeout)
        }, interval)
    }
}

{(function initDragListener() {
    Array.from(document.querySelectorAll('.draggable')).forEach(el => {

        el.addEventListener('dragstart', (e) => {
            e?.dataTransfer?.setData('text/html', e.currentTarget.outerHTML)
            e?.dataTransfer?.setData('text/plain', e.currentTarget.dataset.id)
            console.log('drag start')
            console.log({transfer: e.dataTransfer})
            addCls(e.currentTarget, CLS_LIST.DRAGGING)
        })

        el.addEventListener('dragend', (e) => {
            removeCls(e.currentTarget, CLS_LIST.DRAGGING)
        })
    })
})()}

window.allowDrop = allowDrop
window.handleDrop = handleDrop