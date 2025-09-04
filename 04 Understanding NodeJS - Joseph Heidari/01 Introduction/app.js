const http = require('node:http');
const fs = require('node:fs')

const server = http.createServer();

server.on("request", (request, respone) => {

    const result = fs.readFileSync('./text.txt');

    respone.setHeader("Content-Type", "text/plain")

    respone.end(result);
})


server.listen(4080, '127.0.0.1', () => {
    console.log('Server is staret on: ', server.address())
})