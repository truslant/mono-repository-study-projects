const fs = require('node:fs/promises');

(async () => {
    const fileHandle = await fs.open('writeMany.txt', 'w');

    const stream = fileHandle.createWriteStream();

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
        await fileHandle.close();
    })
})();

