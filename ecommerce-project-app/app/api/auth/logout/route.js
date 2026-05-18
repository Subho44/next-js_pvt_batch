import { cookies } from "next/headers";

export async function POST() {
    const cookiestore = await cookies();
    cookiestore.delete("token");
    return Response.json({
            success:true,
            message:"logout successfully",
        });
}