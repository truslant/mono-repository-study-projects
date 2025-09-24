const net = require('node:net');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(data.toString('utf-8'));
    })


    const response = Buffer.from('')

})

server.listen(8000, "127.0.0.1", () => {
    console.log('Server is listening on:', server.address());
})