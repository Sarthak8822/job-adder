"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { postReq } from "@/data/postReq";

interface Job {
  job_id: string;
  employer_name: string;
  employer_logo: string;
  job_title: string;
  job_description: string;
  job_country: string;
  job_apply_link: string;
}

export default function JobAdder() {
  const [jobDetails, setJobDetails] = useState({
    employer_name: "",
    employer_logo: "",
    job_title: "",
    job_description: "",
    job_country: "",
    job_apply_link: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setJobDetails({ ...jobDetails, [id]: value });
  };

  const handleAddJob = async () => {
    try {
      console.log("jobDetails: ", jobDetails);
      await postReq(jobDetails);

    } catch (error) {
      console.error("Error adding job:", error);
      // Handle error and display an error message to the user if needed
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Add a Job
      </h2>

      <form className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="jobtitle">Job Title</Label>
            <Input
              id="job_title"
              value={jobDetails.job_title}
              placeholder="Job Title"
              onChange={handleInputChange}
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="company">Company</Label>
            <Input
              id="employer_name"
              value={jobDetails.employer_name}
              onChange={handleInputChange}
              placeholder="Company"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="description">Description</Label>
          <Input
            id="job_description"
            value={jobDetails.job_description}
            placeholder="Description"
            onChange={handleInputChange}
            type="description"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="jobapplylink">Job Apply Link</Label>
          <Input
            id="job_apply_link"
            value={jobDetails.job_apply_link}
            placeholder="Job Apply Link"
            onChange={handleInputChange}
            type="jobapplylink"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="employerLogo">Employer Logo URL</Label>
          <Input
            id="employer_logo"
            value={jobDetails.employer_logo}
            placeholder="Employer Logo URL"
            onChange={handleInputChange}
            type="employerLogo"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          onClick={handleAddJob}
        >
          Add Job &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
