var http = require('http')
const colors = require('colors')
var server = http.createServer(function (request,response){
    response.end('Hello World')
});
server.listen(8880);

console.log('Complied Successfully!'.red)