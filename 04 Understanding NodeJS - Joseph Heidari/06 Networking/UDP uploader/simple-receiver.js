const dgram = require('node:dgram');

const receiver = dgram.createSocket({ type: 'udp4', sendBufferSize: 2000 });

receiver.on('message', (message, remoteInfo) => {
    console.log(`Server got: ${message} - from ${remoteInfo.address}:${remoteInfo.port}`);
})

receiver.bind({ address: '127.0.0.1', port: 8000 });
receiver.on('listening', () => {
    console.log(`Server is listening at:`, receiver.address());
})

