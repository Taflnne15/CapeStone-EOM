const db = require("../config")

class Bookings{
    fetchBookings(req, res){
        const query = 
        `
        SELECT bookings.bookingID, Users.userID, 
        events.eventsID
        FROM bookings
        INNER JOIN 
        Users ON bookings.bookingID = Users.userID
        INNER JOIN 
        eventPosts on bookings.eventID = eventPosts.eventID
        `
        db.query(query, (err, results)=>{
            if(err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    fetchBookings(req, res){
        const query = `
        SELECT bookings.bookingID, Users.userID, 
        events.eventsID
        FROM bookings
        INNER JOIN 
        Users ON bookings.bookingID = Users.userID
        INNER JOIN 
        eventPosts on bookings.eventID = eventPosts.eventID
        WHERE bookingID = ${req.params.bookingsID};
        `
        db.query(query, [req.params.bookingID], (err, reults)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    insertBooking(req, res){
        const query =`
        INSERT INTO bookings VALUES(${req.params.bookingID}, ${req.params.userID}, ${req.params.bookingID})
        `
        db.query(query, [req.body, req.params.bookingID, req.params.userID, req.params.bookingID],
            (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "Your booking has been added successfully"
                })
            })
    }
    async updateBooking(req, res){
        const query =`
        UPDATE bookings SET ?
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Bookings Update successfully"
            });
        });
    
    }
    removeBookings(req, res){
        const query =`
        DELETE FROM bookings WHERE bookingID
= ${req.params.bookingID} `
db.query(query, [req.params.bookingID], (err)=>{
    if(err) throw err
    res.json({
        status: res.statusCode,
        msg: "Bookings deleted succesfully"
    });
});
    }


}
module.exports = Bookings