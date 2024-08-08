import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCopyOutline } from 'react-icons/io5';
import { candidates } from "./[CandidateList]"

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
    return candidates.filter(candidate => candidate.jobSlug === jobSlug).length;
  };

  return (
    <div className="flex w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col w-full p-6 bg-white rounded-lg mx-auto">
        <h2 className="font-[700] text-[#007a7e] text-bigheading  lato">
          Job Listings
        </h2>
        <p className="text-paragraph lato font-medium text-black">
          You can use this page to add, modify, or view jobs.
        </p>
        <div className="flex justify-between mt-[40px] border-b border-gray-200 py-[10px]">
          <h5 className="text-title lato font-medium text-black">Job Title</h5>
          <h5 className="text-title lato font-medium text-black">Number of Candidates</h5>
          <h5 className="text-title lato font-medium text-black">Interview Link</h5>
        </div>
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex gap-x-[30px] justify-between items-center  p-[20px] text-title  lato font-bold bg-[#dbeced] transition-all hover:bg-[#85bfc1] cursor-pointer"
            onClick={() => handleJobClick(job.slug)}
          >
            <h5 className="w-[350px]">{job.title}</h5>
            <h5>{getCandidateCount(job.slug)}</h5>
            <h5 className="flex items-center gap-x-[10px] cursor-pointer" onClick={(e) => { e.stopPropagation(); handleCopy(`${job.title}, ${getCandidateCount(job.slug)}`); }}>
              <IoCopyOutline className="text-2xl" />
              Copy to clipboard
            </h5>
          </div>
        ))}
        <button
          onClick={() => navigate('/signin_job_detail')}
          className="flex items-center mt-[100px] self-center px-4 py-2 bg-teal-600 text-white rounded-md"
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
