class TaskServices{
    //contains the business logics
    constructor(){
        this.taskRepo = new TasksRepository();
    }
    async registerUser(userData){
        const existingUser = await this.taskRepo.findUserbyEmail(userData.email);

        if(existingUser){
            throw new Error("User already exists");

        }
        const user = await this.taskRepo.createUser(userData);

        return user
    }
}export default TaskServices