const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const {verifyToken} = require('../middleware/authenticate')
const routes = express.Router()
const {users, bookings, events} = require('../model')

routes.get('^/$|/Capstone-eomp', (req, res, next)=>{
    users.fetchUsers(req,res)
    console.log("Welcome back user")
})
routes.get('/user/:id', (req,res)=>{
    users.fetchUser(req, res)
})

routes.post('/register', bodyParser.json(),
(req, res)=>{
    user.updateUser(req, res)
})

routes.patch('users/:id', bodyParser.json(),(
req, res)=>{
users.updateUsers(req, res)
})

routes.delete('/users/:id', (req, res)=>{
    users.deleteUsers(req, res)
})
module.exports = {
    express,
    routes
}
