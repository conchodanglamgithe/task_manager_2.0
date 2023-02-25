const mongoose = require('mongoose')

const connectDB = async (url)=>{
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB