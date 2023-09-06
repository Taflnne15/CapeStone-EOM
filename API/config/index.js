require("dotenv").config()//import .env file to access env
const {createPool} = require("mysql")

//Set up database connection
const connection = createPool({
    host:process.env.dbHost,
    user:process.env.dbUser,
    password:process.env.dbPwd,
    database:process.env.dbName,
    multipleStatements: true,
    connectionLimit: 30,
})

module.exports={
    connection
}