const { Readable } = require('node:stream')
const fs = require('node:fs/promises')

class FileReadStream extends Readable {
    constructor({ highWaterMark = 64000, fileName }) {
        super({ highWaterMark })
        this.fileName = fileName;
        this.fileHandle = null;
    }
    async _construct(callback) {
        try {
            this.fileHandle = await fs.open('text.txt', 'r');
            callback()
        } catch (error) {
            callback(error)
        }
    }

    async _read(size) {
        try {
            const { buffer, bytesRead } = await this.fileHandle.read(Buffer.alloc(size), 0, size, null)
            //null is to indicate end of file / stream
            this.push(bytesRead ? buffer.subarray(0, bytesRead) : null)
        } catch (error) {
            this.destroy(error)
        }
    }

    async _destroy(error, callback) {
        try {
            await this.fileHandle.close();
            callback(error || null)
        } catch (err) {
            callback(err)
        }
    }
}

const stream = new FileReadStream({ fileName: 'text.txt' });

stream.on('data', (chunk) => {
    console.log(chunk.toString('utf-8'))
})

stream.on('end', () => {
    console.log('Stream has finished reading!')
})