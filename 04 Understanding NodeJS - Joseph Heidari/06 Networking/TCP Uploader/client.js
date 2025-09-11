const net = require('node:net');
const fs = require('node:fs/promises');
const path = require('node:path')

const clearLine = (dir) => {
    return new Promise((resolve, reject) => {
        process.stdout.clearLine(dir, () => {
            resolve()
        })
    })
}

const modeCursor = (dx, dy) => {
    return new Promise((resolve, reject) => {
        process.stdout.moveCursor(dx, dy, () => {
            resolve()
        })
    })
}


const socket = net.createConnection({
    host: '::1',
    port: 5080,
}, async () => {

    // console.log('process.argv:', process.argv);

    console.log('Connected to server!')

    // pull 3rd argument at the console input ((1)node (2)client.js (3)../uploads/text.txt)
    const filePath = process.argv[2];



    // get filename from the file path
    const fileName = path.basename(filePath);

    socket.write(`filename: ${fileName}`);

    const fileHandle = await fs.open(filePath, "r");
    const readStream = fileHandle.createReadStream();

    const fileSize = (await fileHandle.stat()).size;
    let uploadedPercentage = 0;
    let currentPercentage = 0;
    let bytesUploaded = 0;

    console.log();
    // console.log('Socket write buffer size:', socket.writableLength)
    readStream.on('data', (data) => {
        socket.write(data);

        if (socket.writableNeedDrain) {
            // console.log('Socket write buffer is full')
            readStream.pause();
            socket.once('drain', () => {
                // console.log('Socket write buffer was flashed')
                readStream.resume()
            })
        }
        bytesUploaded += data.length;
        currentPercentage = Math.floor(bytesUploaded / fileSize * 100)
        if ((currentPercentage - uploadedPercentage) >= 5) {
            uploadedPercentage = currentPercentage;

            modeCursor(0, -1);
            clearLine(0)
            console.log(`Uploading: ${uploadedPercentage}%`)
        }
    })


    readStream.on('end', () => {
        console.log('Data transmission is over!')
        socket.end()
    })

    readStream.on('close', () => {
        fileHandle.close();
        console.log('Read Stream is closed!')
    })

})


