// decryption.js

const { Transform } = require('node:stream');
const { pipeline } = require('node:stream/promises')
const fs = require('node:fs/promises')

class Decrypt extends Transform {
    _transform(chunk, encoding, callback) {

        for (let i = 0; i < chunk.length; i++) {
            if (chunk[i] < 255) {
                chunk[i] = chunk[i] - 1
            }
        }

        this.push(chunk)
        callback(null)
    }
}
(async () => {
    const readFileHandle = await fs.open('encrypt.txt', 'r');
    const writeFileHandle = await fs.open('decrypt.txt', 'w');

    const readStream = readFileHandle.createReadStream();
    const writeStream = writeFileHandle.createWriteStream();


    await pipeline(readStream, decrypt, writeStream);

    // readStream.pipe(encrypt).pipe(writeStream);

})()


const decrypt = new 