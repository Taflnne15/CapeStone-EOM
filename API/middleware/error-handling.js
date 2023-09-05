function errorhandling(err,req,res,next){
    if(err){
        let status = err.status || 500
        res.json({
            status,
            msg:"error,try again later."
        })
    }
    next()
}
module.exports = errorhandling