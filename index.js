const express = require('express')
require('dotenv').config()
const app = express()
const connectDB = require('./db/connect')
const errorHandler = require('./middleware/errorHandler')
const port = process.env.PORT
const taskHandler = require('./routes/task')

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('main page')
})
app.use('/api/v1/tasks',taskHandler)
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})
app.use(errorHandler)
connectDB(process.env.MONGO_URI)


