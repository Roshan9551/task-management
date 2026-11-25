
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters'],
      maxlength: [100, 'Title cannot exceed 100 characters']
    },

    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      minlength: [3, 'Description must be at least 3 characters'],
      maxlength: [1000, 'Description cannot exceed 1000 characters']
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: [true, 'Task must belong to a project']
    },

    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending'
    },

    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium'
    },

    dueDate: {
      type: Date,
      required: [true, 'Due date is required']
    },

    completedAt: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

// Index for retrieving tasks belonging to a project
taskSchema.index({ project: 1 });

// Automatically manage completedAt when status changes
taskSchema.pre('save', function () {
  if (this.isModified('status')) {
    if (this.status === 'completed') {
      this.completedAt = this.completedAt || new Date();
    } else {
      this.completedAt = null;
    }
  }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
