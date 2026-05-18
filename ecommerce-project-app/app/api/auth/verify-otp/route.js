import connectdb from "../../../../../lib/mongodb";
import User from "../../../../../models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request) {

    try {
        await connectdb();
        const body = await request.json();
        const {email,otp} = body;
        let user = await User.findOne({email,otp});

        if(!user){
           return Response.json({
            success:false,
            message:"invalid otp",
        });
        }
        const token = jwt.sign(
            {
                id:user._id,
                email:user.email,
                role:user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1d",
            }

        );
        const cookistore = await cookies();
        cookistore.set("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"strict",
        });
        user.otp = null;
        await user.save();

        return Response.json({
            success:true,
            message:"login successfully",
            role:user.role
        });
    } catch(error){
        console.error(error);
    }
    
}