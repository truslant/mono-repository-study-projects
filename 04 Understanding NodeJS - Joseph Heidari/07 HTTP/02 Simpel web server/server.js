const Butter = require('./butter');

const PORT = 4060;

const server = new Butter();

server.route('GET', '/', (req, res) => {
    res.status(200).sendFile('./public/index.html', 'text/html')
})
server.route('GET', '/styles.css', (req, res) => {
    res.status(200).sendFile('./public/styles.css', 'text/css')
})
server.route('GET', '/script.js', (req, res) => {
    res.status(200).sendFile('./public/script.js', 'text/javascript')
})

server.route('POST', '/login', (req, res) => {
    res.status(400).json({ error: 'Bad login info' })
});

server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`, server.server.address())
})