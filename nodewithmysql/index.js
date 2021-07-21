let http = require('http')
let mysql = require('mysql')
let colors = require('colors')

let server =http.createServer((request,response)=> {
    let databaseConnectionConfig = {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'nodejs'
    }
    let con = mysql.createConnection(databaseConnectionConfig)
    con.connect(function (error) {
        if (error) {
            console.log('Database Connection Failed')
        } else {
            console.log('Database Connection Successfully!')
            /*insertUser(con)
            deleteUserById(con)
            updateUser(con)*/
            getUserList(con, response)
        }
    })
})
//Insert Query
insertUser = (connection) => {
    let sqlQuery = 'INSERT INTO `users`(`name`, `email`, `created_at`) VALUES ("Rani","rani@gmail.com","2021-07-21 00:00:00")';

    connection.query(sqlQuery, (error) => {
        if (!error) {
            console.log('New User Inserted Successfully!'.green)
        } else {
            console.log('Data Insert Failed!')
        }
    })
}

//Delete Query
deleteUserById = (connection) => {
    let deleteQuery = 'DELETE FROM `users` WHERE `id` = 3';
    connection.query(deleteQuery, (error) => {
        if (!error) {
            console.log('User Deleted Successfully!'.blue)
        } else {
            console.log('User Delete Failed!')
        }
    })

}

//Update Query

updateUser = (connection) => {
    let updateQuery = 'UPDATE `users` SET `name`="Mohammad Sajjad" WHERE `id` = 5'
    connection.query(updateQuery, function (error) {
        if (!error) {
            console.log('User Updated Successfully!'.yellow)
        } else {
            console.log('User Update Failed!')
        }
    })
}

//get user list query
getUserList = (connection,response) => {
    let getUserQuery = 'SELECT * FROM `users`';
    connection.query(getUserQuery, (error, result) => {
        if (error) {
            console.log('Get Users List Failed! ')
        } else {
            response.end(JSON.stringify(result))
        }
    })
}

server.listen(5050)