const db = require('../config')
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require('../middleware/authenticate')

class Users {
fetchUsers(req, res){
    const query = `
        SELECT *
    FROM Users; 
    `
    db.query(query, (err, results) => {
        if(err) throw err;
        res.json({
          status: res.statusCode,
          results,
        });
      });
}
fetchUser(req, res){
    const query = `
    SELECT *
    FROM Users
    where userID =  ${req.params.id};
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
async login(req, res) {
    const { userEmail, userPass } = req.body;
    // query
    const query = `
        SELECT *
        FROM Users
        WHERE userEmail = '${userEmail}'
        `;
    db.query(query, async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You provided a wrong email.",
        });
      } else {
        await compare(userPass, result[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          // Create a token
          const token = createToken({
            userEmail,
            userPass,
          });
          if (cResult) {
            res.json({
              msg: "Logged in",
              token,
              result: result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid password or you have not registered",
            });
          }
        });
      }
    });
  }
  async register(req, res) {
    const data = req.body;
    // encrypt password
    data.userPass = await hash(data.userPass, 10);
    //payload - data coming from user
    const user = {
      userEmail: data.userEmail,
      userPass: data.userPass,
    };
    //query
    const query = `
        INSERT INTO Users
        SET ?;
        `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      //create token
      let token = createToken(user);
      res.json({
        status: res.statusCode,
        token,
        msg: "You are now registered",
      });
    });
  }
async updateUser(req, res){
const user = req.body;
console.log(user.userPass);
console.log(req.params.id);
    const query =`
    UPDATE Users
    SET ?
    WHERE userID = ${req.params.id}
    `
    user.userPass = await hash(user.userPass, 10)
    db.query(query, [user, req.params.id],
        (err)=>{
            if(err) throw err;
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
        if(err) throw err
        res.json({
            status: res.statusCode,
            msg: "The usee records were deleted"
        })
    })
}
}
module.exports = Users;
