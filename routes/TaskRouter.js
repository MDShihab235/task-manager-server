import express from "express";

import {
  createTask,
  fetchAllTasks,
  updateTaskById,
  deleteTaskById,
} from "../controllers/TaskController.js";

const router = express.Router();

// To get all the tasks
router.get("/all", fetchAllTasks);

// To create a task
router.post("/create", createTask);

// To update a task
// router.put("/:id", updateTaskById);

router.route("/:id").put(updateTaskById).delete(deleteTaskById);

// To delete a task
// router.delete("/:id", deleteTaskById);

export default router;
