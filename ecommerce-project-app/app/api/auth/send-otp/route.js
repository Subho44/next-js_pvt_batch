import connectdb from "../../../../../lib/mongodb";
import User from "../../../../../models/User";
import transporter from "../../../../../lib/mailer";

export async function POST(request) {

    try {
        await connectdb();
        const body = await request.json();
        const {email} = body;
        let user = await User.findOne({email});

        if(!user){
            user = await User.create({
                email,
                role:"user",
            });
        }
        const otp = Math.floor(100000 +Math.random()*900000).toString();
        user.otp = otp;
        await user.save();

        await transporter.sendMail({
            from:process.env.EMAIL_USER,
            to:email,
            subject:"OTP VERIFICATION",

            html:`
            <h2>your otp code</h2>
            <h1>${otp}</h1>
            `,
        });
        return Response.json({
            success:true,
            message:"otp sent successfully",
        });
    } catch(error){
        console.error(error);
    }
    
}