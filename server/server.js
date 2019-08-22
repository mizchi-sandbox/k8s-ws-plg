// var http = require('http');

// var handleRequest = function(request, response) {
//   console.log('Received request for URL: ' + request.url);
//   response.writeHead(200);
//   response.end('Hello World!');
// };
// var www = http.createServer(handleRequest);
// www.listen(8080);
var server = require("ws").Server;
var s = new server({ port: 5001 });

s.on("connection", function(ws) {
  ws.on("message", function(message) {
    console.log("Received: " + message);

    s.clients.forEach(function(client) {
      client.send(message + " : " + new Date());
    });
  });

  ws.on("close", function() {
    console.log("I lost a client");
  });
});
