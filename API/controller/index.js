const express = require('express')
const bodyParser = require('body-parser')
const {
    verifyToken
} = require('../middleware/authenticate')
const routes = express.Router()
const {
    users,
    bookings,
    events
} = require('../model')

routes.get('/users', (req, res) => {
    users.fetchUsers(req, res)
})
routes.get('/users/:id', (req, res) => {
    users.fetchUser(req, res)
})

routes.post('/register', bodyParser.json(),
    (req, res) => {
        users.register(req, res)
    })

routes.post('/login', bodyParser.json(),
    (req, res) => {
        users.login(req, res)
    })

routes.patch('/users/:id', bodyParser.json(), (
    req, res) => {
    users.updateUser(req, res)
})

routes.delete('/users/:id', (req, res) => {
    users.deleteUser(req, res)
})


// Define your routes
routes.get('/bookings', (req, res) => {
    bookings.fetchAllBookings(req, res);
});

routes.get('/bookings/:userID', (req, res) => {
    bookings.fetchBookingsByUserID(req, res);
});

routes.get('/booking/:bookingID', (req, res) => {
    bookings.getBookingByID(req, res);
});

routes.post('/bookings/:eventID', bodyParser.json(), (req, res) => {
    bookings.insertBooking(req, res);
});

routes.put('/bookings/:bookingID', (req, res) => {
    bookings.updateBooking(req, res);
});

routes.delete('/bookings/:bookingID', (req, res) => {
    bookings.removeBooking(req, res);
});


// Events
routes.get('/eventPosts', (req, res) => {
    events.fetchEvents(req, res)
})

routes.get('/eventPosts/:eventID', (req, res) => {
    events.fetchEventByID(req, res)
})

// Update an event
routes.put('/eventPosts/:eventID', bodyParser.json(), (req, res) => {
    events.updateEvents(req, res);
});

// Delete an event
routes.delete('/eventPosts/:eventID', (req, res) => {
    events.deleteEvents(req, res);
});

// Create a new event
routes.post('/eventPosts', bodyParser.json(), (req, res) => {
    events.createEvents(req, res);
});

module.exports = {
    express,
    routes
}