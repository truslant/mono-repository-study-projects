const {Buffer} = require('buffer')

const myContainer = Buffer.alloc(3);

myContainer[0] = 0x48
myContainer[1] = 0x69
myContainer[2] = 0x21

console.log(myContainer.toString('utf-8'));




