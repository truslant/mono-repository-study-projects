const http = require('node:http');
const fs = require('node:fs/promises')

class Butter {
    constructor() {
        this.server = http.createServer();

        this.routes = {}
        this.middleware = []

        this.server.on('request', (req, res) => {
            console.log('A request came in...')

            const reqKey = req.method.toLocaleLowerCase() + req.url.toLocaleLowerCase()

            res.status = (code) => {
                res.statusCode = code;
                return res;
            }
            res.sendFile = async (path, mimeType) => {
                const fileHandle = await fs.open(path, 'r');
                const readStream = fileHandle.createReadStream();
                res.setHeader('content-type', mimeType);
                readStream.pipe(res);
            }
            res.json = function (object) {
                res.setHeader('content-type', 'application/json')
                res.end(JSON.stringify(object))
            }

            const runMiddleware = (req, res, middleware, index) => {
                if (index === middleware.length) {
                    if (this.routes[reqKey]) {
                        this.routes[reqKey](req, res)
                    } else {
                        res.status(404).json({
                            error: `Cannot ${req.method} ${req.url}`
                        })
                    }
                } else {
                    middleware[index](req, res, () => {
                        runMiddleware(req, res, middleware, index + 1)
                    })
                }
            }

            runMiddleware(req, res, this.middleware, 0);

        })
    }

    beforeEach(cb) {
        this.middleware.push(cb)
    }

    listen(port, callback) {
        this.server.listen(port, () => {
            callback()
        })
    }

    route(method, path, cb) {
        this.routes[method.toLowerCase() + path.toLowerCase()] = cb;
    }
}

module.exports = Butter