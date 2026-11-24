import TaskController from "../controllers/TaskController"
import { Router } from "express"

const router = Router();

const taskController = TaskController();

router.post("/register",taskController.register);

export default router
