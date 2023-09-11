const express = require('express')
const bodyParser = require('body-parser')
const {verifyToken} = require('../middleware/authenticate')
const routes = express.Router()
const {users, bookings, eventPost} = require('../model')

routes.get('/users', (req, res)=>{
    users.fetchUsers(req,res)
})
routes.get('/user/:id', (req,res)=>{
    users.fetchUser(req, res)
})
routes.get('./eventPosts',(req, res)=>{
    eventPosts.fetcheventPosts(req, res)
})

routes.post('/register', bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})

routes.post('/login', bodyParser.json(),
(req, res)=>{
    users.login(req, res)
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
