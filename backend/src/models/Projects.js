import mongoose from 'mongoose';

const projectSchema   = new mongoose.Schema ({
      name : {
            type : String,
            required : true,
      },
      decription : {
            type: String,
            required: true,
            minlength : 3,
            trim : true,
            maxlength : 1000,
      },
      owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true,
      },

      members : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
      }]


}
,{
      timestamp : true,
});

export default mongoose.model("Project",projectSchema);