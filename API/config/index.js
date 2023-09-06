require("dotenv").config()//import .env file to access env
const {createPool} = require("mysql")

//Set up database connection
const connection = createPool({
    host:process.env.dbHost,
    database:process.env.dbName,
    user:process.env.dbUser,
    password:process.env.dbPwd,
    multipleStatements: true,
    connectionLimit: 30,
})

module.exports={
    connection
}