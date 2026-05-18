import  mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    
    email:{type:String,unique:true},
    otp:{type:String, default:null},
    role:{type:String, default:user}
},{
    timestamps:true,
});
export default mongoose.model("User",userSchema);