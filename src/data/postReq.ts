// data/postReq.tsx
"use server"

import { connect } from "@/dbConfig/dbConfig";

connect();

export const postReq = async (jobDetails: any) => {
    try {
        console.log("Data request:", jobDetails)
        const response = await fetch('http://localhost:3000/api/addJob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobDetails),
        });
        console.log("Response:", response)

        return response
    } catch (error) {
        console.error('Error adding job:', error);
        throw error;
    }
};
