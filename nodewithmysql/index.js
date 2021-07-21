let mysql = require('mysql')
let colors = require('colors')
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
        console.log('Database Connection Successfully!'.red)
        insertUser(con)
        deleteUserById(con)
    }
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

deleteUserById = (connection) => {
    let deleteQuery = 'DELETE FROM `users` WHERE `id` = 2';
    connection.query(deleteQuery,(error)=>{
        if (!error){
            console.log('User Deleted Successfully!'.blue)
        }else{
            console.log('User Delete Failed!')
        }
    })

}