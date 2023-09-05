//importing of models
const Users = require('./user')
const Events = require('./eventPost')
const Bookings = require('./bookings')

module.exports = {
    users: new Users(),
    bookings: new Bookings(),
    events: new Events()
}