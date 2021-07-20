var http = require('http')
var fs = require('fs')

var server = http.createServer(function (request, response) {
    //Asynchronous File system
    // fs.readFile('home.html', function (error, data) {
    //     response.writeHead(200, {'Content-Type': 'text/html'})
    //     response.write(data)
    //     response.end()
    //
    // })
    //synchronous File system
    var data = fs.readFileSync('home.html')
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write(data)
    response.end()

});
server.listen(5050)
console.log('Complied Successfully')