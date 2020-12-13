const __cls_loading_show = 'container--show-loading'
const __cls_loading_hide = 'container--hide-loading'

let isLoading = false

let __touchStartPoint = { x: 0, y: 0 }

const updateTouchStartPoint = (x, y) => {
    __touchStartPoint.x = x
    __touchStartPoint.y = y
}

const getTouchStartPoint = () => __touchStartPoint

const listContainer = document.querySelector('#list-container')

function showLoading () {
    if (isLoading) return
    isLoading = true
    listContainer.classList.remove(__cls_loading_hide)
    listContainer.classList.add(__cls_loading_show)
}

function hideLoading () {
    if (!isLoading) return
    isLoading = false
    listContainer.classList.remove(__cls_loading_show)
    listContainer.classList.add(__cls_loading_hide)
}

/**
 * @param {TouchEvent} e
 */
function handleTouchStart(e) {
    console.log({e})
    const { screenX, screenY } = e.touches[0]
    updateTouchStartPoint(screenX, screenY)
}

function handleTouchMove(e) {
    const { screenX, screenY } = e.touches[0]
    const moveLen = screenY - getTouchStartPoint().y
    doTouchMoveTask(moveLen)
}

/**
 * @param {number} moveLen
 */
function needLoadingCheck (moveLen) {
    return moveLen >= 100
}

/**
 * @param {number} moveLen
 */
function doTouchMoveTask (moveLen) {
    const needLoadingNow = needLoadingCheck(moveLen)
    if (needLoadingNow) {
        showLoading()
    } else {
        hideLoading()
    }
}

// var debounceHandleTouchMove = debounce(handleTouchMove, 100)

/**
 * @param {TouchEvent} e
 */
function handleTouchEnd(e) {
    hideLoading()
    console.log({
        touchEndEvent: e
    })
}

document.addEventListener('touchstart', handleTouchStart, false)
document.addEventListener('touchmove', handleTouchMove, false)
document.addEventListener('touchend', handleTouchEnd, false)

// /**
//  * debounce function
//  * @param {Function} fn
//  * @param {number} interval
//  */
// function debounce(fn, interval) {
//     let timeout = null

//     return (...args) => {
//         if (timeout) clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             fn.apply(null, args)
//             clearTimeout(timeout)
//         }, interval)
//     }
// }