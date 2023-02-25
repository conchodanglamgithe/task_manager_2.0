const Task = require('../model/Task')
const asyncWrapper = require('../middleware/asyncWrapper')
const {createNotFoundError,notFound} = require('../errors/notFound')
const getAllTasks =asyncWrapper(async(req,res)=>{
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})


const createTask = asyncWrapper(async (req,res)=>{
   
    const {name} = req.body 
    const task = await Task.findOne({name:name})
    if(task){return res.status(409).json({msg:`task ${name} already exists.`})}
    await Task.create(req.body)
    res.status(201).json({msg:'ok'})
}) 
const getTask = asyncWrapper(async (req,res,next)=>{
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task)return next(createNotFoundError(`No task with id ${taskID}.`,404))
    res.status(200).json({task})
} )

const deleteTask = asyncWrapper(async (req,res,next)=>{
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task)return next(createNotFoundError(`No task with id ${taskID}.`,404))
    res.status(200).send(tasks)
})

const updateTask = asyncWrapper(async (req,res,next)=>{
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true})
    if(!task){const error = (createNotFoundError(`No task with id ${taskID}.`,404))
                
            return next(error)}
    res.status(200).json({task})
})

module.exports = {getAllTasks,createTask,deleteTask,updateTask,getTask}



