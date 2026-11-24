import mongoose from 'mongoose';


const taskSchema = new mongoose.Schema(
      {
            title : {
                  type : String,
                  required : [true,'Title is required'],
                  trim : true,
                  minlength : 3,
                  maxlength : 100
            },
            description: {
                  type : String,
                  required :true,
                  trim : true,
                  maxlength : 1000,
            },
            status : {
                  type : String,
                  enum : ['pending','in-progress','completed'],
                  default : 'pending'
            },
            priority : {
                  type : String,
                  enum : ['low','medium','high'],
                  default : 'medium'
            },
            dueDate : {
                  type : Date,
                  required : true,
                  default : Date.now
      },
      completedAt : {
            type : Date,
            default : null
      },
},
{
            timestamps : true,
      }
      
);

export default mongoose.model('Task',taskSchema);