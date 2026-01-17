import { NextResponse } from "next/server";
import User from "../../../models/User";
import { auth } from "../../auth";
import { connectDB } from "../../../lib/db";

export async function POST(request) {
    try {
        const { id, PersonalData , imageUrl, template, ProfessionalSummary, color, Experience, Project, Education, Skills } = await request.json()

        const session = await auth()
        const email = session.user.email
        
        await connectDB()

        const updatedUser = await User.findOneAndUpdate({
             email: email,
             "resumes._id": id
            },
            {
                 $set: { 
                    "resumes.$.fullName": PersonalData.name, 
                    "resumes.$.email": PersonalData.email, 
                    "resumes.$.location": PersonalData.location, 
                    "resumes.$.profession": PersonalData.profession, 
                    "resumes.$.phone": PersonalData.phone, 
                    "resumes.$.linkedInProfile": PersonalData.linkedInProfile, 
                    "resumes.$.website": PersonalData.website, 
                    "resumes.$.color": color, 
                    "resumes.$.template": template, 
                    "resumes.$.image": imageUrl, 
                    "resumes.$.professionalSummary": ProfessionalSummary.professionalSummary, 
                    "resumes.$.experience": Experience, 
                    "resumes.$.education": Education, 
                    "resumes.$.projects": Project, 
                    "resumes.$.skills": Skills
                 } },
                 { new: true }
                );

        return NextResponse.json({
            success: true,
        })
    } catch (error) {
        return NextResponse.json({
            error: error,
            success: false,
        })
    }
}