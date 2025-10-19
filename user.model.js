import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name: {
      type: String,
      required: true, // to make a field mandatory
      minlength: 3,// minimum length of the string
      
      },
      

    
    email: {
    
      type:String,
    unique:true
    },
    age: {
      type: Number,
      min:18 , 
         // before cheaking return th
    },
      
    nationality: {
      type: String,
      default: "India",// default value if not provided
    }
},
{
  timestamps:true,
  toJson:{
    getters:true,
  }
})

export const user=mongoose.model("user", userSchema) 

export default userSchema // Exporting the schema to use it in other files
