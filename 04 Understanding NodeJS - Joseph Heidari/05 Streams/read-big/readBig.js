import fs from 'node:fs/promises';


(async () => {
    const fileHandleRead = await fs.open('src.txt', 'r');
    const fileHandleWrite = await fs.open('dest.txt', 'w');
    const streamRead = fileHandleRead.createReadStream({ highWaterMark: 64 * 1024 });

    const writeStream = fileHandleWrite.createWriteStream();

    let split = ''

    console.time('readBig')
    streamRead.on('data', (chunk) => {
        const numbers = chunk.toString('utf-8').split('  ');

        const firstNumber = numbers[0].trim();
        const secondNumber = numbers[1].trim();

        if (Number(firstNumber) + 1 !== Number(secondNumber)) {
            if (split) {
                numbers[0] = split + firstNumber
            }
        }
        const lastNumber = numbers[numbers.length - 1].trim();
        const preLastNumber = numbers[numbers.length - 2].trim();

        if (Number(lastNumber) - 1 !== Number(preLastNumber)) {
            split = numbers.pop().trim();
        }

        numbers.forEach(number => {
            if (number % 2 === 0) {
                writeStream.write(" " + number + " ");
                if (writeStream.writableNeedDrain) {
                    streamRead.pause()
                }
            }
        })
    })
    writeStream.on("drain", () => {
        streamRead.resume();
    })
    streamRead.on('end', () => {
        console.log('Done reading')
        console.timeEnd('readBig')
    })
})()