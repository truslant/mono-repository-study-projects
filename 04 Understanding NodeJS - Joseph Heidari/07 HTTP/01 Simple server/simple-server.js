const http = require('node:http');

const server = http.createServer();

// request is readable stream, response is writable stream
server.on('request', (request, response) => {

    console.log('----- METHOD: -----');
    console.log(request.method);

    console.log('----- URL: -----');
    console.log(request.url);

    console.log('----- HEADERS: -----');
    console.log(request.headers);
    const name = request.headers.name;

    console.log('----- BODY: -----');

    let data = '';

    request.on('data', (chunk) => {
        data += chunk.toString();
    })

    request.on("end", () => {
        data = JSON.parse(data);
        console.log(data);
        console.log('Name:', name);

        // response.setHeader("content-type", "application/json")

        response.writeHead(200, {
            "content-type": "application/json"
        });
        response.end(JSON.stringify({ message: `Post with the title ${data.title} was created by ${name}` }))
        
    })

})

server.listen(8050, () => {
    console.log("Server is listening on http: ", server.address());
})