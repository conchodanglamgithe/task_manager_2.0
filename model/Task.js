const mongoose = require('mongoose')
const {Schema} = mongoose

const TaskSchema = new Schema({
    name:{
        required:[true,'must provide a string'],
        type:String,
        minLength:[4,'At least 4 characters are required'],
        maxLength:[200,'Maximum is 200 characters'],
        trim:true
    },
    completed:{
        default:false,
        type:Boolean
    }

},{timestamps:true})

module.exports = mongoose.model('Task',TaskSchema)