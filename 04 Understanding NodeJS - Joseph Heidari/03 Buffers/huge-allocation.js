const { Buffer, constants } = require('buffer')

const myContainer = Buffer.alloc(1e9)

console.log(constants.MAX_LENGTH)

setInterval(() => {
    // for (let i = 0; i < myContainer.length; i++) {
    //     myContainer[i] = 0x22;
    // }
    myContainer.fill(0x22);
}, 5000)

