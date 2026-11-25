
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Project name is required'],
      trim: true,
      minlength: [3, 'Project name must be at least 3 characters'],
      maxlength: [100, 'Project name cannot exceed 100 characters']
    },

    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
      minlength: [3, 'Project description must be at least 3 characters'],
      maxlength: [1000, 'Project description cannot exceed 1000 characters']
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    timestamps: true
  }
);

// Index for faster owner-based queries
projectSchema.index({ owner: 1 });

// Prevent duplicate members and owner from appearing in members
projectSchema.pre('validate', function () {
  if (this.owner) {
    const ownerId = this.owner.toString();

    this.members = [
      ...new Map(
        this.members
          .filter(member => member.toString() !== ownerId)
          .map(member => [member.toString(), member])
      ).values()
    ];
  }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
