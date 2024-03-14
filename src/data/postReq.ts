// data/postReq.tsx
"use server"

export const postReq = async (jobDetails: any) => {
    try {
        const response = await fetch('/api/addJob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobDetails),
        });
        console.log("Response:", response)

        if (!response.ok) {
            throw new Error('Failed to add job');
        }
    } catch (error) {
        console.error('Error adding job:', error);
        throw error;
    }
};
