import UserModel from "../models/User";

class TasksRepository{
    //repository communicate withe the database
    async createUser(userData){
        return await UserModel.create(userData)
    }
    async findUserbyEmail(email){
        return await UserModel.findOne({email})
    }
}