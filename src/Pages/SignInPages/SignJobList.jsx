import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";
import { candidates } from "./[CandidateList]";

const SignInJobList = () => {
  const jobs = [
    {
      title: "Senior Product Developer",
      slug: "senior-product-developer",
    },
    {
      title: "Success Manager Developer",
      slug: "success-manager-developer",
    },
    {
      title: "Community Programme Manager",
      slug: "community-programme-manager",
    },
  ];

  const navigate = useNavigate();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  const handleJobClick = (slug) => {
    navigate(`/candidate-list/${slug}`);
  };

  const getCandidateCount = (jobSlug) => {
    return candidates.filter((candidate) => candidate.jobSlug === jobSlug)
      .length;
  };

  return (
    <div className="flex w-full max-w-[1200px] mx-auto p-4 max-md:p-2">
      <div className="flex flex-col w-full p-6 max-md:px-3 bg-white rounded-lg mx-auto">
        <h2 className="text-[24px] max-md:text-center sm:text-[36px] md:text-[45px] lg:text-[64px] text-green-600 font-extrabold">
          Job Listings
        </h2>
        <p className="text-[16px] max-md:text-center sm:text-[20px] md:text-[24px] font-medium text-black">
          You can use this page to add, modify, or view jobs.
        </p>
        <div className="flex flex-col sm:flex-row justify-between mt-[20px] sm:mt-[40px] border-b border-gray-200 py-[10px] sm:py-[20px]">
          <h5 className="text-[14px] sm:text-[16px] md:text-[20px] font-medium text-black">
            Job Title
          </h5>
          <h5 className="text-[14px] sm:text-[16px] md:text-[20px] font-medium text-black">
            Number of Candidates
          </h5>
          <h5 className="text-[14px] sm:text-[16px] md:text-[20px] font-medium text-black">
            Interview Link
          </h5>
        </div>
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex flex-col max-md:text-center sm:flex-row gap-y-4 sm:gap-x-[30px] justify-between items-center border border-b-black border-opacity-[0.1] p-[10px] sm:p-[20px] text-[14px] sm:text-[20px] md:text-[24px] font-bold bg-[#dbeced] transition-all hover:bg-[#85bfc1] cursor-pointer"
          >
            <h5 onClick={() => handleJobClick(job.slug)} className="w-full sm:w-[350px]">
              {job.title}
            </h5>
            <h5>{getCandidateCount(job.slug)}</h5>
            <h5
              className="flex items-center gap-x-[10px] cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleCopy(`${job.title}, ${getCandidateCount(job.slug)}`);
              }}
            >
              <IoCopyOutline className="text-2xl" />
              Copy to clipboard
            </h5>
          </div>
        ))}
        <button
          onClick={() => navigate("/add_detail")}
          className="flex items-center mt-[20px] sm:mt-[50px] self-center px-4 py-2 bg-teal-600 text-white rounded-md"
        >
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
        </button>
      </div>
    </div>
  );
};

export default SignInJobList;
