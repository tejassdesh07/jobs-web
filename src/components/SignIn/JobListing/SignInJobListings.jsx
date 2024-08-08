import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";
import Button from "../../Button";

const SignInJobListings = () => {
  const [jobs, setJobs] = useState([
    {
      title: "Senior Product Developer",
      candidates: 0,
    },
    {
      title: "Succes Manager Devloper ",
      candidates: 178,
    },
    {
      title: "Community Programme Manger",
      candidates: 142,
    },

    // Add more jobs here if needed
  ]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  return (
    <div className="flex w-full">
      <div className=""> {/* Adjust width if necessary */}</div>
      <div className="flex flex-col w-full p-6 bg-white rounded-lg mx-auto">
        <h2 className="text-[36px] sm:text-[40px] md:text-[45px] lg:text-[64px] color-green lato font-[800]">
          Job Listings
        </h2>
        <p className="text-[24px] lato font-medium text-black">
          You can use this page to add, modify, or view jobs.
        </p>
        <div className="flex justify-between mt-[40px] border-b border-gray-200 py-[20px]">
          <h5 className=" text-[16px] sm:text-[20px] md:text-[24px] lato font-medium text-black">
            Job Title
          </h5>
          <h5 className=" text-[16px] sm:text-[20px] md:text-[24px] lato font-medium text-black">
            Number of Candidates
          </h5>
          <h5 className=" text-[16px] sm:text-[20px] md:text-[24px] lato font-medium text-black">
            Interview Link
          </h5>
        </div>
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex gap-x-[30px] justify-between items-center mt-[15px] p-[20px] text-[14px] sm:text-[20px] md:text-[24px] lato font-bold bg-[#dbeced] transition-all hover:bg-[#85bfc1] cursor-pointer"
          >
            <h5 className="w-[350px]">{job.title}</h5>
            <h5>{job.candidates}</h5>
            <h5
              className="flex items-center gap-x-[10px] cursor-pointer"
              onClick={() => handleCopy(`${job.title}, ${job.candidates}`)}
            >
              <IoCopyOutline className="text-2xl" />
              Copy to clipboard
            </h5>
          </div>
        ))}
        <Button to="/signin_job_detail">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          Add a job
        </Button>
      </div>
    </div>
  );
};

export default SignInJobListings;
