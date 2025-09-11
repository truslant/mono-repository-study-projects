//client.js

const net = require('net');
const readline = require('readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const clearLine = (dir) => {
    return new Promise((resolve, reject) => {
        process.stdout.clearLine(dir, () => {
            resolve();
        })
    })
}
const moveCursor = (dx, dy) => {
    return new Promise((resolve, reject) => {
        process.stdout.moveCursor(dx, dy, () => {
            resolve();
        })
    })
}

let id;


//net.Socket instance
const socket = net.createConnection({
    host: "127.0.0.1",
    port: 3008
}, async () => {
    const ask = async () => {
        const message = await rl.question('Enter a message > ');
        //move cursor up and clear the entire line at cursor position
        await moveCursor(0, -1)
        await clearLine(0)
        socket.write(`${id}-message-${message}`);
    }
    console.log('Connected to server!');

    ask();

    socket.on('data', async (data) => {
        console.log();
        await moveCursor(0, -1);
        await clearLine(0);

        if (data.toString('utf-8').substring(0, 2) === 'id') {
            //if ID is communicated
            id = data.toString('utf-8').substring(3);
            console.log(`Your id is ${id}`)
        } else {
            // message
            console.log(data.toString('utf-8'));
        }

        ask();
    })

});



socket.on('error', (error) => {
    console.log('Ops, error happened:', error)
})

socket.on('close', () => {
    console.log('Closed!')
})

socket.on('end', () => {
    console.log('Ended!')
})