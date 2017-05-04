var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello Hook Test v8\n");
});

server.listen(9000);

console.log("Server running on Port 9000");
