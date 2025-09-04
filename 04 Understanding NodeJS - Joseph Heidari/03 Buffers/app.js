const { Buffer } = require('buffer')

const memoryContainer = Buffer.alloc(4);

memoryContainer[0] = 0xf4;
memoryContainer[1] = 0x34;
// memoryContainer.writeInt8(-34, 2);
memoryContainer[2] = 0x00;
memoryContainer[3] = 0xff;

console.log(memoryContainer);
console.log(memoryContainer[0]);
console.log(memoryContainer[1]);
// console.log(memoryContainer.readInt8(2));
console.log(memoryContainer[2]);
console.log(memoryContainer[3]);

console.log(memoryContainer.toString("hex"))


// auto-allocation of memory for buffer
const buffCont = Buffer.from([0x48, 105, 0x21]) //accepts decimals as well
console.log(buffCont.toString('utf-8'));

const buffCont2 = Buffer.from("486921", "hex")
console.log(buffCont2.toString('utf-8'));

const buffCont3 = Buffer.from("string", "utf8")
console.log(buffCont3.toString('hex'));

const buffCont4 = Buffer.from("737472696e67", "hex")
console.log(buffCont4.toString('utf8'));

const buffCont5 = Buffer.from("F09F99", "hex")
console.log(buffCont5.toString('utf8'));