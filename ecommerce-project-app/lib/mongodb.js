//to connect mongodb include mongoose driver
import  mongoose from "mongoose";
//create Function
const connectdb=async()=>{
    try{
        //connect mongodb syntax
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongodb connected");
    }catch(error){
        console.error('error:',error);
    }
};
export default connectdb;