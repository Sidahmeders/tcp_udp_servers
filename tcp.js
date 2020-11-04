const net = require('net')

const server = net.createServer(socket => {
    socket.write('hello my client')
    socket.on('data', data => {
        console.log(data.toString())
    })
})

server.listen(8080, () => console.log('server started...'))

// telnet 127.0.0.1 8080