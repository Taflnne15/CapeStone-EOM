const db = require('../config')

class Events {
fetchEvents(req, res){
    const query = `
    SELECT eventID ,eventName, 
    eventDescription, eventDate
    FROM eventPosts; 
    `
    db.query(query, (err, data)=>{
        if (err) throw err
        res.json({
            status: res.statusCode,
            data
        });
    });
}
updateEvents(req, res){
    const query = `
    UPDATE eventPosts SET ?
    WHERE eventID ;
    `
    db.query(query,[req, body, req.params.ID],
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
    const query=`
    INSERT INTO eventPosts
    SET ?
    `
    db.query(query, (err)=>{
        if(err) throw err
        res.json({
            status: res.statusCode,
            msg: "The events record has been created"
        })
    })
}
}

module.exports = Events