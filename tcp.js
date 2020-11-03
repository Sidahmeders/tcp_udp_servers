const net = require('net')

const server = net.createServer(socket => {
    socket.write('hello my client')
    socket.on('data', data => {
        console.log(data.toString())
    })
})

server.listen(8080)