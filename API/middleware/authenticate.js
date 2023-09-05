const db = require('../config')
const {sign, verify} = require('jsonwebtoken')

function createToken(user){
    return sign({
        userEmail: user.userEmail,
        userPass: user.userPass

    }, process.env.SECRET_KEY,
    )
}
function verifyToken(req, res, next){
    try{
        console.log("Get token req.headers['authorization']");
        const token = req.headers["authorization"]
        console.log(token);
        next()
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: e.message
        })
    }
}
module.exports = {
    createToken,
    verifyToken
}


