import mongoose from "mongoose";

const companyschema = new mongoose.Schema({
    name:{
    type:String,
    required:true,
    minlength:3
  
},
logo:{
    type:String,
},
owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
}
})
export const company =mongoose.model('company',companyschema)
export default companyschema;                 