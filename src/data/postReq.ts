// data/postReq.tsx
"use server"

import { connect } from "@/dbConfig/dbConfig";


export const postReq = async (jobDetails: any) => {
    try {
        const response = await fetch('http://localhost:3000/api/addJob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobDetails),
        });
        return response.status
    } catch (error) {
        console.error('Error adding job:', error);
        throw error;
    }
};