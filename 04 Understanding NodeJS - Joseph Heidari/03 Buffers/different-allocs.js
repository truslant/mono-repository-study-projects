const { Buffer } = require('buffer');

console.log('Full poolsize: ', Buffer.poolSize);
console.log('Poolsize availabel for allocation:', Buffer.poolSize >>> 1);


const myBuffer = Buffer.alloc(10000, 0); //allocate memory safely (zeroing all the exising data)

const myUnsafeBuffer = Buffer.allocUnsafe(10000); //utilizing allocated for Node memory section without clearing the exising data in memory

const myUnsafeBufferSlow = Buffer.allocUnsafeSlow(10000); //utilizing external to Node memory section without clearing the exising data in memory

Buffer.from() //unsafe allocation, but immediatly filled with new data
Buffer.concat() //unsafe allocation, but immediatly filled with new data

for (let i = 0; i < myBuffer.length; i++) {
    if (myBuffer[i]) {
        console.log(`Buffer at address ${i} has the pre-existing data: ${myBuffer[i].toString(2)}`)
    }
}

for (let i = 0; i < myUnsafeBuffer.length; i++) {
    if (myUnsafeBuffer[i]) {
        console.log(`Buffer at address ${i} has the pre-existing data: ${myUnsafeBuffer[i].toString(2)}`)
    }
}


