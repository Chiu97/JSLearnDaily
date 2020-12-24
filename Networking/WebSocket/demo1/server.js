const ws = require('ws')

const wsApp = new ws.Server({ port: 9192 })

wsApp.on('connection', (conn) => {
    console.log('connected')

    conn.on('message', (msg) => {
        console.log('receive message from client:' + msg)
        conn.send('Echo:' + msg)
    })
})