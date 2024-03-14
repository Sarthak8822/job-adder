// app/api/addJob.ts
"use server"
import { NextApiRequest, NextApiResponse } from 'next';
import {connect} from '@/dbConfig/dbConfig';
import Job from '@/models/jobModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            await connect(); // Connect to MongoDB

            const { employer_name, employer_logo, job_title, job_description, job_country, job_apply_link } = req.body;

            const newJob = new Job({
                employer_name,
                employer_logo,
                job_title,
                job_description,
                job_country,
                job_apply_link
            });

            await newJob.save(); // Save the job to MongoDB

            res.status(201).json({ message: 'Job added successfully' });
        } catch (error) {
            console.error('Error adding job:', error);
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
