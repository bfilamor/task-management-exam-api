const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
    ownerName: {
        type: String
    },
    taskName: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
        default: "backlog"
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

})

module.exports = mongoose.model("Task", tasksSchema);