const Task = require("../models/Task");
const bcrypt = require("bcrypt");

module.exports.createTask = async (req, res) => {
    const { ownerName, taskName, description, status } = req.body;

    try {
        let newTask = new Task({
            ownerName: ownerName,
            taskName: taskName,
            description: description,
            status: status
        });
        await newTask.save().then(() => {
            return res.send(true);
        })

    } catch (error) {
        return res.send(false);
    }
}

module.exports.getAllTasks = async (req, res) => {
    try {
        await Task.find().then((task) => {
            return res.send(task)
        });

    } catch (error) {
        console.log(error.message);
        return res.send(false)
    }
}

module.exports.modifyTask = async (req, res) => {
    const { ownerName, taskName, description, status } = req.body;
    const { taskId } = req.params;

    try {
        let updatedTask = {
            ownerName: ownerName,
            taskName: taskName,
            description: description,
            status: status
        }
        await Task.findByIdAndUpdate(taskId, updatedTask).then(() => {
            return res.send(true);
        });


    } catch (error) {
        console.log(error.message);
        return res.send(false)
    }
}

module.exports.changeStatus = async (req, res) => {
    const { status } = req.body;
    const { taskId } = req.params;

    try {

        await Task.findByIdAndUpdate(taskId, { status: status }).then(() => {
            return res.send(true);
        });

    } catch (error) {
        console.log(error.message);
        return res.send(false)
    }
}

module.exports.deleteTask = async (req, res) => {
    const { taskId } = req.params;
    try {
        await Task.findByIdAndDelete(taskId).then(() => {
            return res.send(true)
        });

    } catch (error) {
        console.log(error.message);
        return res.send(false)
    }
}

