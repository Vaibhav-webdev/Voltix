import { NextResponse } from "next/server";
import User from "../../../models/User";
import { connectDB } from "../../../lib/db";
import { auth } from "../../auth";

export async function POST(request) {
    try {
        const { title } = await request.json()
        
        const session = await auth()
        const email = session.user.email

        await connectDB()
        
        const user = await User.findOneAndUpdate(
            { email: email },
            {
                $push: {
                    resumes: {
                        title: title,
                    }
                }
            }
        )
        return NextResponse.json({
            success: true,
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
        })
    }
}