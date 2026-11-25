import express from "express";

import {
    getAllUsers,
    getUserById,
} from "../controllers/UserController.js";

const UserRoutes = express.Router();

UserRoutes.get("/", getAllUsers);
UserRoutes.get("/:id", getUserById);

export default UserRoutes;