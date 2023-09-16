const express = require('express')
const bodyParser = require('body-parser')
const {verifyToken} = require('../middleware/authenticate')
const routes = express.Router()
const {users, bookings, events} = require('../model')

routes.get('/users', (req, res)=>{
    users.fetchUsers(req,res)
})
routes.get('/users/:id', (req,res)=>{
    users.fetchUser(req, res)
})
routes.get('/eventPosts',(req, res)=>{
    events.fetchEvents(req, res)
})

routes.post('/register', bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})

routes.post('/login', bodyParser.json(),
(req, res)=>{
    users.login(req, res)
})

routes.patch('/users/:id', bodyParser.json(),(
req, res)=>{
users.updateUser(req, res)
})

routes.delete('/users/:id', (req, res)=>{
    users.deleteUser(req, res)
})
module.exports = {
    express,
    routes
}
