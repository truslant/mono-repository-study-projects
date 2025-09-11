// encryption.js

const { Transform } = require('node:stream');
const { pipeline } = require('node:stream/promises')
const fs = require('node:fs/promises')

class Encrypt extends Transform {
    constructor({ fileSize }) {
        super({ fileSize })
        this.fileSize = fileSize
        this.lastProgress = 0
        this.currentProgress
        this.bytesRead = 0
        console.log('Encryption progress: 0%')
        console.log(`File size: ${Math.floor(this.fileSize / 1000000)}MB`);
    }

    _transform(chunk, encoding, callback) {
        // console.log('Chunk size:', chunk.length)
        for (let i = 0; i < chunk.length; i++) {
            if (chunk[i] < 255) {
                chunk[i] = chunk[i] + 1
            }
        }

        this.bytesRead += chunk.length
        this.currentProgress = Math.floor(this.bytesRead / this.fileSize * 100)
        if ((this.currentProgress - this.lastProgress) >= 10 || this.currentProgress === 100) {
            this.lastProgress = this.currentProgress;
            console.log(`Encryption progress: ${this.currentProgress}% - encrypted data size: ${Math.floor(this.bytesRead / 1000000)}MB`)
        }
        this.push(chunk)
        callback(null)
    }
}
(async () => {
    const readFileHandle = await fs.open('source.txt', 'r');
    const writeFileHandle = await fs.open('encrypt.txt', 'w');

    const readStream = readFileHandle.createReadStream();
    const writeStream = writeFileHandle.createWriteStream();

    const fileSize = (await readFileHandle.stat()).size
    const encrypt = new Encrypt({ fileSize })

    await pipeline(readStream, encrypt, writeStream);

    // readStream.pipe(encrypt).pipe(writeStream);

})()

