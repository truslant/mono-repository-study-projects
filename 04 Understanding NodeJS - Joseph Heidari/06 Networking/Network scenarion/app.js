const http = require("http");

const port = 4080;
const hostname = "192.168.50.118";

const server = http.createServer((req, res) => {
  const data = { message: "Hi there!" };

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Connection", "close");
  res.statusCode = 200;
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  // server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`);
  // console.log(`Server running at http://${port}`);
});
