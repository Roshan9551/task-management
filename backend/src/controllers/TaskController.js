import UserModel from "../models/User";
import { Router } from "express";
import TaskServices from "../services/TaskServices";

class TaskController{
    constructor (){
        this.taskServices = new TaskServices();

    }
    register = async(req,res) => {
        try {
            const {name,email,password,role} = req.body;

            return res.status(201).json({
                success : true,
                message : "User registered successfully"
            })
             
        } catch (error) {
             return res.status(400).json({
               success: false,
               message: error.message,
             });
        }
    }

}

// const registerUser = async(req,res) => {
// try {
//         const user = await UserModel.create(req.body);
//         res.status(201).json({
//             message : "User registered successfully"
//         })


//     } catch (error) {
//        res.status(500).json({
//         message : error.message
//        })
        
// }



export default router