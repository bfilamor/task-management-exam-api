const express = require("express");
const taskController = require("../controllers/task");

const router = express.Router();

router.get("/all", taskController.getAllTasks);

router.post("/create", taskController.createTask);

router.put("/update/:taskId", taskController.modifyTask);

router.put("/changeStatus/:taskId", taskController.changeStatus);

router.delete("/delete/:taskId", taskController.deleteTask);

module.exports = router;