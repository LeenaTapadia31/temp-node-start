const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to node page");
    res.end();
  }
  if (req.url === "/about") {
    res.end("about page");
  }
  res.end(`
  <h1>we can't find the page</h1>`);
});

server.listen(5000);
