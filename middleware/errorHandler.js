const {notFound} = require('../errors/notFound')

const errorHandler = (err,req,res,next)=>{
    if((err instanceof notFound)) {return res.status(err.statusCode).json({msg:err.message})}
    return res.status(500).json({msg:'Server error'})
}

module.exports = errorHandler