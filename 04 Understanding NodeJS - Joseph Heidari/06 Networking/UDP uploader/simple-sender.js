const dgram = require('node:dgram');

const sender = dgram.createSocket({ type: 'udp4', sendBufferSize: 2000 });

sender.send('THis is a string', 8000, "127.0.0.1", (error, bytes) => {

    if (error) console.log(error);
    console.log(bytes);
})