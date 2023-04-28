const express = require('express');
const router = express.Router();

const task = require('../controllers/task');

router.get('/tasks',task.getAllTask);
router.post('/tasks',task.addTask);
router.delete('/tasks/:taskId',task.removeTask);
router.delete('/tasks',task.clearDb);
router.patch('/tasks/:taskId',task.editTASK);


module.exports = router;


