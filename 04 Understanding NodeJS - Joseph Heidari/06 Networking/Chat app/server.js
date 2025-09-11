//server.js

const net = require('net');

//net.Server instance
const server = net.createServer();

const clients = []

server.on('connection', (socket) => {
    console.log('A new connection to the server!')

    const clientId = clients.length + 1;

    socket.write(`id-${clientId}`);

    clients.forEach(client => client.socket.write(`User ${clientId} has joined the chat.`))

    clients.push({ id: clientId.toString(), socket })


    socket.on('data', (data) => {
        const dataString = data.toString('utf-8');
        clients.forEach(client => {
            const [id, message] = dataString.split('-message-')
            client.socket.write(`> User ${id}: ${message}`)
        })
    })

    socket.on('close', () => {
        clients.forEach(client => {
            client.socket.write(`User ${clientId} has left the chat.`)
        })
    })

    socket.on('error', (err) => {
        console.log(`Socket error for user ${clientId}: ${err.message}`);
    });

})

server.listen(3008, '127.0.0.1', () => {
    console.log('Open server on:', server.address())
})