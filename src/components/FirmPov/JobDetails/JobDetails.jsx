import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../Button";

const JobDetails = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="gap-x-[20px]">
      <div className="inset-0 flex items-center justify-center mt-[50px]">
        <div className="rounded-lg border p-6 w-full max-w-[1100px] relative">
          <Link
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            to="/add_job"
          >
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
          </Link>
          <h2 className="text-[38px] font-bold text-color-green inter mb-4">
            Job Details in
          </h2>
          <div className="mb-4">
            <h3 className="text-[22px] inter font-medium">Job Title</h3>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="bg-[#D9EBEC] outline-none p-4 rounded-md mt-2 w-[100%] h-[50px] text-[20px] inter font-medium text-black"
            />
          </div>
          <div>
            <h3 className="text-[22px] inter font-medium">Job Description</h3>
            <textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              className="bg-[#D9EBEC] outline-none p-4 rounded-md mt-2 w-full h-[300px] text-[20px] inter font-medium text-black"
            />
          </div>
          <div className="mt-[20px] w-full flex justify-end items-end">
            <Button to="/customize_interview">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
