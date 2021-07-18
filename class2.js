var http = require('http')
const colors = require('colors')
var server = http.createServer(function (request, response) {
    if (request.url == '/') {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<h1>Home Page!</h1>')
        response.end()
    } else if (request.url == '/about') {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<h1>About Page!</h1>')
        response.end()
    } else if (request.url == '/contact') {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<h1>Contact Page!</h1>')
        response.end()
    }
});
server.listen(8880);

console.log('Complied Successfully!'.red)