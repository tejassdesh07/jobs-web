import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { IoToggle } from 'react-icons/io5';

export const candidates = [
  { name: "Katherine Feng", date: "July 28, 2024", status: "Pending", slug: "katherine-feng", jobSlug: "senior-product-developer" },
  { name: "John Doe", date: "July 28, 2024", status: "Pending", slug: "john-doe", jobSlug: "senior-product-developer" },
  { name: "Mary Jane", date: "July 28, 2024", status: "Pending", slug: "mary-jane", jobSlug: "success-manager-developer" },
  { name: "Sahil Seth", date: "July 28, 2024", status: "Pending", slug: "sahil-seth", jobSlug: "community-programme-manager" },
  { name: "Xavier Dun", date: "July 28, 2024", status: "Pending", slug: "xavier-dun", jobSlug: "senior-product-developer" },
  { name: "Sage Rogers", date: "July 27, 2024", status: "Pending", slug: "sage-rogers", jobSlug: "senior-product-developer" },
  { name: "Jackson Liu", date: "July 27, 2024", status: "Pending", slug: "jackson-liu", jobSlug: "senior-product-developer" },
  { name: "Emily Clark", date: "July 27, 2024", status: "Pending", slug: "emily-clark", jobSlug: "senior-product-developer" },
  { name: "Zachary Aldenburg", date: "July 27, 2024", status: "Pending", slug: "zachary-aldenburg", jobSlug: "senior-product-developer" },
  { name: "Lorita Schuster", date: "July 26, 2024", status: "Pending", slug: "lorita-schuster", jobSlug: "senior-product-developer" },
  { name: "Michael Brown", date: "July 26, 2024", status: "Pending", slug: "michael-brown", jobSlug: "senior-product-developer" },
  { name: "Jessica Smith", date: "July 25, 2024", status: "Pending", slug: "jessica-smith", jobSlug: "success-manager-developer" },
  { name: "David Johnson", date: "July 25, 2024", status: "Pending", slug: "david-johnson", jobSlug: "community-programme-manager" },
  { name: "Sarah Williams", date: "July 24, 2024", status: "Pending", slug: "sarah-williams", jobSlug: "senior-product-developer" },
  { name: "James Brown", date: "July 24, 2024", status: "Pending", slug: "james-brown", jobSlug: "senior-product-developer" },
  { name: "Patricia Garcia", date: "July 23, 2024", status: "Pending", slug: "patricia-garcia", jobSlug: "success-manager-developer" },
  { name: "Robert Martinez", date: "July 23, 2024", status: "Pending", slug: "robert-martinez", jobSlug: "community-programme-manager" },
  { name: "Linda Rodriguez", date: "July 22, 2024", status: "Pending", slug: "linda-rodriguez", jobSlug: "senior-product-developer" },
  { name: "William Hernandez", date: "July 22, 2024", status: "Pending", slug: "william-hernandez", jobSlug: "senior-product-developer" },
  { name: "Barbara Wilson", date: "July 21, 2024", status: "Pending", slug: "barbara-wilson", jobSlug: "success-manager-developer" },
  { name: "Richard Moore", date: "July 21, 2024", status: "Pending", slug: "richard-moore", jobSlug: "community-programme-manager" },
  { name: "Susan Taylor", date: "July 20, 2024", status: "Pending", slug: "susan-taylor", jobSlug: "senior-product-developer" },
  { name: "Joseph Anderson", date: "July 20, 2024", status: "Pending", slug: "joseph-anderson", jobSlug: "senior-product-developer" },
  { name: "Margaret Thomas", date: "July 19, 2024", status: "Pending", slug: "margaret-thomas", jobSlug: "success-manager-developer" },
  { name: "Charles Jackson", date: "July 19, 2024", status: "Pending", slug: "charles-jackson", jobSlug: "community-programme-manager" },
  { name: "Dorothy White", date: "July 18, 2024", status: "Pending", slug: "dorothy-white", jobSlug: "senior-product-developer" },
  { name: "Christopher Harris", date: "July 18, 2024", status: "Pending", slug: "christopher-harris", jobSlug: "senior-product-developer" },
  { name: "Karen Martin", date: "July 17, 2024", status: "Pending", slug: "karen-martin", jobSlug: "success-manager-developer" },
  { name: "Matthew Thompson", date: "July 17, 2024", status: "Pending", slug: "matthew-thompson", jobSlug: "community-programme-manager" },
];


const TrNavLink = ({ to, children, className }) => {
  const navigate = useNavigate();

  return (
    <tr className={className} onClick={() => navigate(to)}>
      {children}
    </tr>
  );
};

const CandidateList = () => {
  const { jobSlug } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    candidateMatch: "",
    experience: "",
    education: "",
    location: "",
    authorization: "",
    skill1: "",
    skill2: "",
    skill3: "",
    hideRejected: false,
  });

  const [candidateStatuses, setCandidateStatuses] = useState(
    candidates.reduce((acc, candidate) => {
      acc[candidate.slug] = candidate.status;
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const [isToggled, setIsToggled] = useState(false); // State for toggle

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  const handleStatusChange = (slug, newStatus) => {
    setCandidateStatuses((prev) => ({
      ...prev,
      [slug]: newStatus,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleClear = () => {
    setFormData({
      candidateMatch: "",
      experience: "",
      education: "",
      location: "",
      authorization: "",
      skill1: "",
      skill2: "",
      skill3: "",
      hideRejected: false,
    });
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case "Selected":
        return "bg-green-500";
      case "Rejected":
        return "bg-red-500";
      case "Pending":
      default:
        return "bg-yellow-200";
    }
  };

  const filteredCandidates = candidates.filter(candidate => candidate.jobSlug === jobSlug);

  return (
    <div className="mx-auto p-4 relative px-[100px] max-md:px-4">
      <div className="flex max-md:flex-col gap-x-[30px]">
        <div className="w-full md:w-3/4 max-w-[1200px] mx-auto">
          <header className="flex justify-between items-center py-4 max-w-[1200px] mx-auto">
            <div className="flex gap-x-[20px] items-center ">
              <IoMdArrowBack className="text-4xl cursor-pointer -ml-16" onClick={() => navigate(-1)} />
              <h1 className="text-[25px] sm:text-[30px] md:text-[36px] inter font-bold color-black ">
                Candidates for {jobSlug.replace(/-/g, ' ')}
              </h1>
            </div>
          </header>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 text-start border-gray-200">Candidate</th>
                <th className="py-2 px-4 text-start border-b border-gray-200">Interview Date</th>
                <th className="py-2 px-4 text-start border-b border-gray-200">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredCandidates.map((candidate, index) => (
                <tr
                  key={index}
                  className="text-center bg-[#d9ebec] hover:bg-[#85bfc1]"
                >
                  <TrNavLink to={`/candidate/${candidate.slug}`} className="block cursor-pointer py-3 px-4 text-start border-b border-solid border-white">{candidate.name}</TrNavLink>
                  <td className="py-2 px-4 text-start border-b border-solid border-white">{candidate.date}</td>
                  <td className="py-2 px-4 text-start border-b border-solid border-white">
                    <select
                      value={candidateStatuses[candidate.slug]}
                      onChange={(e) => handleStatusChange(candidate.slug, e.target.value)}
                      className={`flex sm:inline-block px-3 py-1 text-sm font-semibold text-gray-700 rounded-full ${getStatusBgColor(candidateStatuses[candidate.slug])}`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Selected">Selected</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="mt-4 px-4 py-2 bg-color-green rounded-[20px] text-white">
            Export to ATS
          </button>
          <div className="flex justify-center mt-4">
            <nav>
              <ul className="flex space-x-2">
                <li>
                  <a href="#" className="px-3 py-1 bg-gray-200 rounded">1</a>
                </li>
                <li>
                  <a href="#" className="px-3 py-1 bg-gray-200 rounded">2</a>
                </li>
                <li>
                  <a href="#" className="px-3 py-1 bg-gray-200 rounded">3</a>
                </li>
                <li>
                  <a href="#" className="px-3 py-1 bg-gray-200 rounded">4</a>
                </li>
                <li>
                  <span>...</span>
                </li>
                <li>
                  <a href="#" className="px-3 py-1 bg-gray-200 rounded">24</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="right-0 top-0 w-[30%] md:w-[400px]">
          <aside>
            <div className="bg-white md:p-6 rounded shadow">
              <a href="#" className="text-blue-500 ">
                Edit job details
              </a>
              <button
                onClick={handleToggle}
                className="lato font-bold text-[14px] mt-[20px] color-black flex items-center gap-x-[5px]"
              >
                View Pluto candidate pool
                <span>
                  <IoToggle className={`text-[40px] ${isToggled ? 'rotate-180' : ''}`} />
                </span>
              </button>
              <form onSubmit={handleSubmit} className="p-4 rounded-lg w-full">
                <h3 className="text-[16px] font-bold inter mb-2 color-black">
                  Candidate Match
                </h3>
                <p className="text-[10px] font-medium inter mb-2">
                  Select the percentage group to filter for matching candidates.
                </p>
                <select
                  name="candidateMatch"
                  value={formData.candidateMatch}
                  onChange={handleChange}
                  className="w-[60%] rounded-[20px] bg-[#d9ebec] p-2 mb-4 border border-gray-300 text-[14px]"
                >
                  <option value="">Select</option>
                  <option value="match1">Match 1</option>
                  <option value="match2">Match 2</option>
                </select>
                <hr />
                <h4 className="text-[16px] mt-4 inter color-black font-medium mb-[5px] text-md">
                  Optional Filters
                </h4>
                <div className="grid gap-x-[10px] gap-[10px] grid-cols-2 mt-3">
                  <div>
                    <h4 className="text-[16px] inter color-black font-medium mb-[5px]">
                      Experience
                    </h4>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full rounded-[20px] mt-1 bg-[#d9ebec] p-2 mb-2 px-4 border border-gray-300 text-[14px]"
                    >
                      <option value="">Select</option>
                      <option value="exp1">Experience 1</option>
                      <option value="exp2">Experience 2</option>
                    </select>
                  </div>
                  <div>
                    <h4 className="text-[16px] inter color-black font-medium mb-[5px]">
                      Education
                    </h4>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full rounded-[20px] bg-[#d9ebec] mt-1 p-2 mb-2 px-4 border border-gray-300 text-[14px]"
                    >
                      <option value="">Select</option>
                      <option value="edu1">Education 1</option>
                      <option value="edu2">Education 2</option>
                    </select>
                  </div>
                  <div>
                    <h4 className="text-[16px] inter color-black font-medium mb-[5px]">
                      Location
                    </h4>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full rounded-[20px] bg-[#d9ebec] mt-1 p-2 mb-2 px-4 border border-gray-300 text-[14px]"
                    >
                      <option value="">Select</option>
                      <option value="loc1">Location 1</option>
                      <option value="loc2">Location 2</option>
                    </select>
                  </div>
                  <div>
                    <h4 className="text-[16px] inter color-black font-medium mb-[5px]">
                      Authorization
                    </h4>
                    <select
                      name="authorization"
                      value={formData.authorization}
                      onChange={handleChange}
                      className="w-full rounded-[20px] bg-[#d9ebec] mt-1 p-2 mb-2 px-4 border border-gray-300 text-[14px]"
                    >
                      <option value="">Select</option>
                      <option value="auth1">Authorization 1</option>
                      <option value="auth2">Authorization 2</option>
                    </select>
                  </div>
                  <div>
                    <h4 className="text-[16px] inter color-black font-medium mb-[5px]">
                      Skill 1
                    </h4>
                    <select
                      name="skill1"
                      value={formData.skill1}
                      onChange={handleChange}
                      className="w-full rounded-[20px] bg-[#d9ebec] mt-1 p-2 mb-2 px-4 border border-gray-300 text-[14px]"
                    >
                      <option value="">Select</option>
                      <option value="skill1">Skill 1</option>
                      <option value="skill2">Skill 2</option>
                    </select>
                  </div>
                  <div>
                    <h4 className="text-[16px] inter color-black font-medium mb-[5px]">
                      Skill 2
                    </h4>
                    <select
                      name="skill2"
                      value={formData.skill2}
                      onChange={handleChange}
                      className="w-full rounded-[20px] bg-[#d9ebec] mt-1 p-2 mb-2 px-4 border border-gray-300 text-[14px]"
                    >
                      <option value="">Select</option>
                      <option value="skill1">Skill 1</option>
                      <option value="skill2">Skill 2</option>
                    </select>
                  </div>
                  <div>
                    <h4 className="text-[16px] inter color-black font-medium mb-[5px]">
                      Skill 3
                    </h4>
                    <select
                      name="skill3"
                      value={formData.skill3}
                      onChange={handleChange}
                      className="w-full rounded-[20px] bg-[#d9ebec] mt-1 p-2 mb-2 px-4 border border-gray-300 text-[14px]"
                    >
                      <option value="">Select</option>
                      <option value="skill1">Skill 1</option>
                      <option value="skill2">Skill 2</option>
                    </select>
                  </div>
                </div>
                <label className="mt-[15px] flex gap-x-[5px] items-center">
                  <input
                    type="checkbox"
                    name="hideRejected"
                    checked={formData.hideRejected}
                    onChange={handleChange}
                  />
                  <h3 className="text-[16px] inter mb-2">
                    Hide rejected candidates
                  </h3>
                </label>
                <div className="flex mt-4 gap-x-[20px]">
                  <button
                    type="submit"
                    className="p-2 bg-color-green rounded-[20px] text-white w-[100px] text-center"
                  >
                    Apply
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="p-2 bg-[#eeeeee] rounded-[20px] text-center w-[100px] color-black"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CandidateList;
