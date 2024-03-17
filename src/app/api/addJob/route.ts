// app/api/addJob.ts
"use server"
import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/dbConfig/dbConfig';
import Job from '@/models/jobModel';


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        await connect();
        const reqBody = await req.json()

        const { employer_name, employer_logo, job_title, job_description, job_country, job_apply_link } = reqBody;

        const newJob = new Job({
            employer_name,
            employer_logo,
            job_title,
            job_description,
            job_country,
            job_apply_link
        });

        const savedJob = await newJob.save(); // Save the job to MongoDB

        return NextResponse.json({
            message: "Job created successfully",
            success: true,
            status: 200,
            savedJob,
        })
    } catch (error: any) {
        console.error('Error adding job:', error);
        return NextResponse.json({ error: error.message })
        { status: 500 }
    }
}
