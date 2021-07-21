let mysql = require('mysql')
let databaseConnectionConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database:'nodejs'
}
let con = mysql.createConnection(databaseConnectionConfig)
con.connect(function (error) {
    error ? console.log('Database Connection Failed'): console.log('Database Connection Successfully!')
})