const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    "content" : {
        type: String,
        required : true,
        unique: true
    },
    "completed" :{
        type: Boolean,
        required : true,
        default : false
    }
    
});

const task = mongoose.model("Tasks",taskSchema);

module.exports = task;