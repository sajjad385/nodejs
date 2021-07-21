let mysql = require('mysql')
let databaseConnectionConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password'
}
let con = mysql.createConnection(databaseConnectionConfig)
con.connect(function (error) {
    if (error) {
        console.log('Database Connection Failed')
    } else {
        console.log('Database Connection Successfully!')
    }
})