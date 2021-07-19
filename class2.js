var http = require('http')
var colors = require('colors')
var URL =require('url')
var server = http.createServer(function (request, response) {

    var myUrl = 'https://tracker.toptal.com/app/my-activities?start=2021-07-01&end=2021-07-18&projects=all'

    var myUrlObject  = URL.parse(myUrl,true)

    var myHostName = myUrlObject.host
    var myPathName = myUrlObject.pathname
    var mySearchQuery = myUrlObject.search

        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(myHostName+'<br>')
        response.write(myPathName+'<br>')
        response.write(mySearchQuery)
        response.end()

});
server.listen(8880);

console.log('Complied Successfully!'.red)