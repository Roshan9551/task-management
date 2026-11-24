import express from "express";
import TaskRoute from "../src/routes/tasksroutes"

const app = express();

app.use(express.json());

app.use("api/auth",TaskRoute);

app.listen(5000, (req, res) => {
    console.log("Server running")
});

