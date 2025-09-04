const fs = require('node:fs/promises');

(async () => {
    try {
        const readHandle = await fs.open('src.txt', 'r');
        const writeHandle = await fs.open('dest.txt', 'w');
        console.time('selfStream');

        const readStream = readHandle.createReadStream();
        const writeStream = writeHandle.createWriteStream();

        readStream.pipe(writeStream);

        writeStream.on('finish', () => {
            console.log('Copy operations finished')
            console.timeEnd('selfStream');
            readHandle.close();
            writeHandle.close();
        })
    } catch (error) {
        console.log(error)
    }
})()




