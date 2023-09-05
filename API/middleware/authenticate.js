const db = require('../config')
const {sign, verify} = require('jsonwebtoken')

function createToken(user){
    return sign({
        userEmail: user.userEmail,
        userPass: user.userPass

    }, process.env.SECRET_KEY,
    )
}


