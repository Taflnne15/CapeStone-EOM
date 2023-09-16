const db = require("../config")

class Bookings {
    fetchAllBookings(req, res) {
        const query =
            `
        SELECT * 
        FROM bookings
        `
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    fetchBookingsByUserID(req, res) {
        const query =
            `
            SELECT eventPosts.*, bookings.bookingID
            FROM bookings
            INNER JOIN eventPosts ON bookings.eventID = eventPosts.eventID
            INNER JOIN Users ON bookings.userID = Users.userID
            WHERE Users.userID = ${req.params.userID};            
        `
        db.query(query, [req.params.userID], (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    getBookingByID(req, res) {
        const query = `
        SELECT eventPosts.*
        FROM bookings
        INNER JOIN 
        eventPosts on bookings.eventID = eventPosts.eventID
        WHERE bookingID = ${req.params.bookingID};
        `
        db.query(query, [req.params.bookingID], (err, results) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    insertBooking(req, res) {
        const {
            userID
        } = req.body


        const query = `
        INSERT INTO bookings (eventID, userID) VALUES (?, ?);
        `

        db.query(query, [req.params.eventID, userID],
            (err) => {
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "Your booking has been added successfully"
                })
            })
    }

    removeBooking(req, res) {
        const query = `
        DELETE FROM bookings WHERE bookingID
= ${req.params.bookingID} `
        db.query(query, [req.params.bookingID], (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Bookings deleted succesfully"
            });
        });
    }


}
module.exports = Bookings