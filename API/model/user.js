const db = require('../config')
const {hash, compare, hashSync} = require ('bcrpyt')

class Users {
fetchUsers(req, res){
    const query = `
    SELECT userID, userName, userSurname, userAge,
    userGender, userEmail, userInterest, userProfileUrl
    FROM Users; 
    `
    db.query(query,
        (err, results)=>{
            if (err) throw ErrorCodes,json({
                status: res.statusCode,
                results
            })
        })
}
fetchUser(req, res){
    const query = `
    SELECT userID, userName, userSurname, userAge,
    userGender, userEmail, userInterest, userProfileUrl
    FROM Users
    where userID =  ${req.params.id};
    `
    db.query(query, 
        (err, results)=>{
            if(err) throw err
            res.json({
                status: statusCode,
                results
            })
        })
}
login(req, res){
    const {userEmail, userPass} = req.body;
const query = `
SELECT userID, userName, userSurname, userAge, userGender, 
userEmail, userInterest, userProfileUrl
FROM Users
WHERE userEmail = '${userEmail}';
`
db.query(query, async(err, results)=>{
    if (err) throw err
    if (!results?.length){
        res.json({
            status: res.statusCode,
            msg: "You provided athe wrong email"
        })
    } else {
        compare(userPass, results[0].userPass, (cErr, cResult)=>{
            if(cErr) throw cErr
            //creating a token
            const token = createToken({
                userEmail,
                httpOnly
            });
            //saveToken
            res.cookie("LegitUser", token, {
                maxAge: 300000,
                httpOnly: true
            });
            if(cResult){
                res.json({
                    msg: "Logged In",
                    token,
                    result: results[0]
                });

            } else{
                res.json({
                    status: res.statusCode,
                    msg: "Invalid Password"
                });
            }
        })
    }
})

}
async register(req, res){
    const data = req.body
    //encrypt password
    data.userPass = hash(data.userPass, 15)
    //payload
    const user = {
        userEmail:data.userEmail,
        userPass:data.userPass
    }
    //creating users details 
    //the query
    const query =`
    INSERT INTO Users
    SET ?
    `
    db.query(query, [data], (err)=>{
        if(err) throw err 
        //creating token
        let token = createToken(user)
        res.cookie("LegitUser", token, {
            maxAge: 360000,
            hhtpOnly: true
        });
        res.json({
            status: res.statusCode,
            msg: "You are now registered"
        })   
    })
}
updateUser(req, res){
    const query =`
    UPDATE Users
    SET ?
    WHERE userID = ?
    `
    db.query(query, [req, body, req.params],
        (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record was updated"
            })
        })
}
deleteUser(req, res){
    const query = `
    DELETE FROM Users
    WHERE userID = ${req.params.id};
    `
    db.query(query, (err)=>{
        if(err) throw ErrorCodes.json({
            status: res.statusCode,
            msg: "The usee records were deleted"
        })
    })
}
}
module.exports = Users;
