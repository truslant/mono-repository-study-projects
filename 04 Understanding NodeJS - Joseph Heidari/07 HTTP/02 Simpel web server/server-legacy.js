const http = require('node:http');
const fs = require('node:fs/promises')

const server = http.createServer();

server.on('request', async (req, res) => {
    console.log(req.url)
    console.log(req.method)

    if (req.url === '/' && req.method === 'GET') {

        const htmlFileHandle = await fs.open('./public/index.html', 'r')
        const htmlReadStream = htmlFileHandle.createReadStream()

        res.setHeader('content-type', 'text/html');


        htmlReadStream.on('data', (chunk) => {
            res.write(chunk);
            if (res.writableNeedDrain) {
                htmlReadStream.pause();
                res.once('drain', () => {
                    htmlReadStream.resume()
                })
            }
        })
        htmlReadStream.on('close', () => {
            res.end()
        })
    }

    if (req.url === '/styles.css' && req.method === 'GET') {

        const fileHandle = await fs.open('./public/styles.css', 'r')
        const readStream = fileHandle.createReadStream()

        res.setHeader('content-type', 'text/css');
        readStream.pipe(res)

    }
    if (req.url === '/script.js' && req.method === 'GET') {

        const fileHandle = await fs.open('./public/script.js', 'r')
        const readStream = fileHandle.createReadStream()

        res.setHeader('content-type', 'text/javascript');
        readStream.pipe(res)

    }

    if (req.url === '/login' && req.method === 'POST') {
        res.setHeader('content-type', 'application/json');
        res.statusCode = 200;

        const body = {
            message: 'Logging you in...'
        }

        res.write(JSON.stringify(body));
        res.end();

    }
    if (req.url === '/user' && req.method === 'PUT') {
        res.setHeader('content-type', 'application/json');
        res.statusCode = 401;

        const body = {
            message: 'Authentication required to view this page...'
        }

        res.end(JSON.stringify(body));

    }

    if (req.url === '/upload' && req.method === 'PUT') {
        const fileHandle = await fs.open('./storage/image.jpg', 'w');
        const writeStream = fileHandle.createWriteStream();
        req.pipe(writeStream)
        req.on('end', () => {
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({ message: 'File was uploaded successfully' }));
        })
    }
})

server.listen(9000, () => {
    console.log('web server is live at:', server.address());
})