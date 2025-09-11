const net = require('node:net');
const fs = require('node:fs/promises');

const clients = []

const server = net.createServer(() => {

})

server.on('connection', async (socket) => {
    console.log('New connection established!');
    let fileHandle, writeStream = undefined

    socket.on('data', async (data) => {
        if (!fileHandle) {

            socket.pause();

            let fileName;

            if (data.toString('utf-8').includes('filename: ')) {
                fileName = data.toString('utf-8').split('filename: ')[1]
            }

            fileHandle = await fs.open(`storage/${fileName}`, "w");

            writeStream = fileHandle.createWriteStream();

            socket.resume();

            return
        }

        writeStream.write(data);

        if (writeStream.writableNeedDrain) {
            socket.pause();
            writeStream.once('drain', () => {
                socket.resume();
            })
        }
    })

    // this event is triggered by client socket, but reflects on server socket.
    socket.on('end', async () => {
        console.log('Connection has ended.');
    })

    socket.on('close', () => {
        console.log('Connection has closed.');
        // console.log('close event - socket.readableEnded:', socket.readableEnded)
        // console.log('close event - socket.writableEnded:', socket.writableEnded)
        writeStream.end();
        writeStream, fileHandle = undefined;
    })

})



server.on('error', () => {

})

server.listen(5080, "::1", () => {
    console.log('Server is on:', server.address());
})
