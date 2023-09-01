const db = require('../config')
const {hash, compare, hashSync} = require('bcrypt')

class Users{
    fetchUsers(req,res){
        const query=`
        SELECT userId, userName, userAge, userGender
        userEmail, userInterest
        FROM Users
        `
        db.query(query,
            (err, results)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            })
    }
fetchUser(req, res){
    const query = `
    SELECT userID, userName, userSurname, userAge,
    userGender, userEmail, userInterest
    FROM Users
    `
    db.query(query,
        (err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
}
// login(req, res){
//     const {userEmail, userPass} = req.body;

//     const query = `
//     SELECT userID , userName, userSurname, userAge,
//     userGender, userEmail, userInterest, userProfileUrl
//     WHERE userEmail = `${userEmail}`
//     `
//     db.query(query, async(err, results)=>{
//         if( err) throw err;
//         if(!results?.length){
//             res.json({
//                 status: res.statusCode,
//                 msg: "invalid"
//             });
//         } else {
//             compare(userPass, results[])
//         }
    }


