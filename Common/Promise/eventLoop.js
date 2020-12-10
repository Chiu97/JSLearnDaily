const log = (msg) => () => console.log(msg)

log(0)()
Promise.resolve(log(1)()).then(log(2))
setTimeout(log(3), 0)
log(4)()
