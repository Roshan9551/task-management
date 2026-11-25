import Tasks from "../models/Tasks.js";

class TasksRepository{
    // create new task
    async createTask(taskData){
        return await Tasks.create(taskData);
    }

    // get all tasks
    async getAllTasks(){
        return await Tasks.find().populate("createdBy", "name email").populate("assignedTo","name email").populate("project", "name").sort({ createdAt: -1 });
    }

    // find task by id
    async getTaskById(taskId){
        return await Tasks.findById(taskId).populate("createdBy", "name email").populate("assignedTo", "name email").populate("project", "name");
    }

    // update task details
    async updateTask(taskId, updateData){
        return await Tasks.findByIdAndUpdate(
            taskId,
            { $set: updateData },
            {
                new: true,
                runValidators: true
            }
        );
    }

    // delete task
    async deleteTask(taskId){
        return await Tasks.findByIdAndDelete(taskId);
    }

    // search tasks by title and description
    async searchTasks(keyword){
        return await Tasks.find({
            $or: [
                {
                    title: {
                        $regex: keyword,
                        $options: 'i'
                    }
                },
                {
                    description: {
                        $regex: keyword,
                        $options: 'i'
                    }
                }
            ]
        }).populate("createdBy", "name email").populate("assignedTo", "name email").sort({ createdAt: -1 });
    }
}

export default TasksRepository;