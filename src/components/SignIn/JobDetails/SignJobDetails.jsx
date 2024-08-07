import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Button";

const SignJobDetails = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  return (
    <div className="gap-x-[20px]">
      <div className="inset-0 flex items-center justify-center mt-[50px]">
        <div className="rounded-lg p-6 w-full relative">
          <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <h2 className="text-[38px] font-bold text-color-green inter mb-4">
            Job Details
          </h2>
          <div className="mb-4">
            <h3 className="text-[24px] inter font-medium">Job Title</h3>
            <input
              type="text"
              className="bg-[#D9EBEC] outline-none p-4 rounded-md mt-2 w-[100%] max-w-[1100px] h-[50px] text-[20px] inter font-medium text-black"
              value={jobTitle}
              onChange={handleJobTitleChange}
            />
          </div>
          <div>
            <h3 className="text-[24px] inter font-medium">Job Description</h3>
            <textarea
              className="bg-[#D9EBEC] outline-none p-4 rounded-md mt-2 w-full h-[300px] text-[20px] inter font-medium text-black"
              value={jobDescription}
              onChange={handleJobDescriptionChange}
            />
          </div>
          <div className="mt-[20px] w-full flex justify-end items-end">
            <Button
              to="/customize_interview"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignJobDetails;
