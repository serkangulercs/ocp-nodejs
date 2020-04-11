const http = require('http');
const url  = require('url');

var server = http.createServer(function(req, resp) {

    var q = url.parse(req.url, true);

    resp.writeHead(200, {"Content-Type": "text/plain"});
    resp.end("Hi: " + q.query.name);

});

var port = 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
