const fs = require('node:fs/promises');
const { pipeline } = require('node:stream/promises');


(async () => {
    try {
        const readHandle = await fs.open('src.txt', 'r');
        const writeHandle = await fs.open('dest.txt', 'w');

        const readStream = readHandle.createReadStream();
        const writeStream = writeHandle.createWriteStream();
        console.time('pipeline');
        await pipeline(readStream, writeStream);
    } catch (error) {
        console.log(error)
    }
    console.timeEnd('pipeline');
})();
