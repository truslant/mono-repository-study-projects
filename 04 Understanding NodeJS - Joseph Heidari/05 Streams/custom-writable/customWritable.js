const { Writable } = require('node:stream');
const fs = require('node:fs/promises')

class FileWriteStream extends Writable {
    constructor({ highWaterMark = 64000, fileName } = {}) {
        super({ highWaterMark });
        this.fileName = fileName;
        this.fd = null;
        this.fileHandle = null;
        this.chunks = [];
        this.chunksSize = 0;
        this.numberOfWrites = 0;
    }

    // this will run after constructor and will delay execution of other methods untill the callback function is run

    async _construct(callback) {
        try {
            this.fileHandle = await fs.open(this.fileName, 'w')
            this.fd = this.fileHandle.fd;
            callback()

        } catch (error) {
            callback(err)
        }
    }

    async _write(chunk, encoding, callback) {
        this.chunks.push(chunk);
        this.chunksSize += chunk.length;

        if (this.chunksSize > this.writableHighWaterMark) {
            try {
                await this.fileHandle.write(Buffer.concat(this.chunks))
                this.chunks = [];
                this.chunksSize = 0;
                ++this.numberOfWrites;
                callback();
            } catch (error) {
                callback(err)
            }
        } else {
            // when done, call the callback fn
            callback();
        }
    }

    async _final(callback) {
        try {
            await this.fileHandle.write(Buffer.concat(this.chunks))
            this.chunks = [];
            this.chunksSize = 0
            callback()
        } catch (error) {
            callback(error)
        }
    }

    async _destroy(error, callback) {
        try {
            console.log('Number of writes:', this.numberOfWrites);
            this.numberOfWrites = 0;
            await this.fileHandle.close()
            callback(error || null)
        } catch (err) {
            callback(err)
        }
    }
}

(async () => {

    const stream = new FileWriteStream({ fileName: 'text.txt' });

    console.log("Steam buffer size:", stream.writableHighWaterMark)
    let i = 0;
    let j = 0;
    const numberOfWrites = 1e+7
    console.time('manyTimes');
    const writeManyInBatches = () => {
        while (i < numberOfWrites) {
            const buff = Buffer.from(` ${i} `, 'utf-8')
            i++;
            if (i >= numberOfWrites) {
                stream.end(buff)
            } else {
                stream.write(buff)
                if (stream.writableNeedDrain) break;
            }
        }
    }

    writeManyInBatches();

    stream.on("drain", () => {
        writeManyInBatches()
        j++
    })

    stream.on("finish", async () => {
        console.timeEnd('manyTimes');
        console.log(`Drains: ${j}`)
        console.log(`Data drained:`, j * stream.writableHighWaterMark)
    })
})();