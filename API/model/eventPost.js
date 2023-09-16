const db = require('../config')

class Events {
fetchEvents(req, res){
    const query = `
    SELECT *
    FROM eventPosts; 
    `
    db.query(query, (err, results)=>{
        if (err) throw err
        res.json({
            status: res.statusCode,
            results
        });
    });
}

fetchEventByID(req, res){
    const query = `
    SELECT *
    FROM eventPosts
    WHERE eventID = ${req.params.eventID} 
    `
    db.query(query, (err, results)=>{
        if (err) throw err
        res.json({
            status: res.statusCode,
            results
        });
    });
}

updateEvents(req, res){
    const event = req.body
    const query = `
    UPDATE eventPosts SET ?
    WHERE eventID = ${req.params.eventID};
    `
    db.query(query, event,
      (err)=>{
        if(err) throw err
        res.json({
            status: res.statusCode,
            msg: "The events record has been updated"
        });
      })
}

deleteEvents(req, res){
    const query =`
    DELETE FROM eventPosts
    WHERE eventID = ${req.params.id};
    `
    db.query(query, (err)=>{
        if(err) throw err
        res.json({
status: res.statusCode,
msg: "The events record has been deleted"
        })
    })
}

createEvents(req, res){
    const event = req.body
    console.log(event);
    const query=`
    INSERT INTO eventPosts
    SET ?
    `
    db.query(query, [event], (err)=>{
        if(err) throw err
        res.json({
            status: res.statusCode,
            msg: "The events record has been created"
        })
    })
}
}

module.exports = Events