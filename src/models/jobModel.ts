import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    employer_name: { type: String, required: true },
    employer_logo: { type: String, required: true },
    job_title: { type: String, required: true },
    job_description: { type: String, required: true },
    job_country: { type: String, required: true },
    job_apply_link: { type: String, required: true },
});

const Job = mongoose.models.job || mongoose.model
("jobs", jobSchema)

export default Job;
