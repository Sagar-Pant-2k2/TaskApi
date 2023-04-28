const task = require('../models/task');

const getAllTask = async (req,res)=>{
    console.log("yeah")
    try {
        const tasks = await task.find();
        console.log(tasks);
        // res.send("lele takss");
        res.send(tasks);
        // res.status(200).json();
    }
    catch {
        res.status(500).json({ message: err.message });
    }
}

const addTask = async (req,res)=>{
    try{

        const newTask = new task ({
            "content" : req.body.content,
        });
        await newTask.save();
        console.log("saved success fully");
        res.json({
            "success" : "true"
        });
    }
    catch(err){
        console.log(err);
        res.json({
            "success" : "false"
        });
    }

}

const removeTask  = async (req,res)=>{
    const taskId = req.params.taskId;
    try {
      const deletedTask = await task.findByIdAndDelete(taskId);
      if (deletedTask) {
        res.status(200).json({ message: "Task deleted successfully" });
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }

}

const clearDb = async (req,res)=>{
    try{
        await  task.deleteMany({});
        res.status(200).json({
            message: "cleared db"
        });
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const editTASK = async(req,res)=>{
    try{
        await task.findByIdAndUpdate(taskId,{
            completed: true
        })
        console.log("updated successfully");
    }
    catch(err){
        console.log(err);
    }
    
}

module.exports = {
    getAllTask,
    addTask,
    removeTask,
    editTASK,
    clearDb
}