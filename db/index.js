const mysql = require('mysql2')

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Calpico299',
    database: 'todo_db'
})