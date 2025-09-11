const net = require('node:net');

const socket = net.createConnection({
    host: "127.0.0.1",
    port: 3099
},
    () => {
        const buff = Buffer.alloc(8);
        buff[0] = 0x12;
        buff[1] = 0x21;
        buff[2] = 0x33;
        buff[3] = 0xFF;
        socket.write(buff)
    }
)




