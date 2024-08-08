import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoToggle } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import Button from "../../Button";

function SeniorProductDeveloper() {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
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

  return (
    <div className="mx-auto px-4">
      <header className="flex justify-between items-center ">
        {/* Add content if needed */}
      </header>
      <div className="flex max-md:flex-col gap-x-[30px]">
        <div className="w-full max-w-[1200px] mx-auto md:w-3/4">
          <div className="flex gap-x-[20px] items-center">
            <NavLink to="/add_detail">
              <IoMdArrowBack className="text-2xl -ml-11 max-md:ml-auto" />
            </NavLink>
            <h1 className="text-heading inter -ml-1 font-bold color-black">
              Senior Product Developer
            </h1>
          </div>
          <table className="min-w-full bg-white mt-5">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2 px-4 text-start">Candidate</th>
                <th className="py-2 px-4 text-start">Interview Date</th>
                <th className="py-2 px-4 text-start">Status</th>
              </tr>
            </thead>
          </table>
          <div className="mt-[200px]">
            <h6 className="text-[24px] font-bold inter text-center color-black">
              There are no candidates
            </h6>
            <button className="px-4 py-2 bg-color-green rounded-[20px] mt-[100px] md:mt-[250px] text-white shadow-md">
              Export to ATS
            </button>
          </div>
          <div className="flex justify-center mt-4"></div>
        </div>
        <div className="w-full md:w-auto md:ml-auto">
          <aside className="flex flex-col items-end">
          <div className="flex flex-col items-end">
                <a href="#" className="text-blue-500">
                  Edit job details
                </a>
                <button className="lato font-bold text-[14px] mt-[20px] color-black flex items-center gap-x-[5px]">
                  View Pluto candidate pool
                  <span>
                  <input
                  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchChecked"
                  defaultChecked
                />
                  </span>
                </button>
              </div>
            <div className="bg-white md:p-6 border rounded-[15px]  mt-5">
              
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
                </div>
                <div className="grid gap-x-[10px] gap-[10px] grid-cols-3 mt-3">
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
                  <h3 className="text-[16px] inter mb-2">Hide rejected candidates</h3>
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
}

export default SeniorProductDeveloper;
