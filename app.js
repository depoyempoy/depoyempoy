// Importing http core package/module provided by nodejs

var http = require('http');

// Creating a server

http.createServer(function (req, res) {

// Write response as Html(text)

res.writeHead(200, {'Content-Type': 'text/html'});

// Writing static text

res.end('Hello SATU World 2');

// Server listening on port number 4300

}).listen(4300);
