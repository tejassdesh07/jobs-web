import React, { useState, useEffect  } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo";
import Button from "../../Button";

const EnterprisePlan = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    location: "",
    industry: "",
  });
  const industryOptions = ["Technology", "Healthcare", "Finance", "Education", "Manufacturing"];
  const [industry, setIndustry] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
  };
  
  return (
    <>
      <div className="max-w-[1500px] px-[20px] sm:px-[40px] lg:px-[60px] mx-auto mt-[40px]  flex items-center justify-center">
        <div className="flex flex-col md:flex-row md:p-6 bg-white rounded-lg  w-full">
          <div className="md:w-1/2 md:p-6 lg:p-10">
            <h2 className="text-[36px] sm:text-[40px] md:text-[45px] lg:text-[55px] color-green lato font-extralight">
              Enterprise Plan
            </h2>
            <ul className="list-inside space-y-4 lato text-[16px] list-none mt-[30px] sm:mt-[40px]">
              <li className="sm:mb-[20px] md:mb-[40px]">
                <strong>Discounted Pricing:</strong> On-demand pricing for all
                business sizes, ensuring cost efficiency with scale.
              </li>
              <li className="sm:mb-[20px] md:mb-[40px]">
                <strong>Premium Support:</strong> 24/7 direct support via a
                private Slack channel with our dedicated teams.
              </li>
              <li className="sm:mb-[20px] md:mb-[40px]">
                <strong>Data Security:</strong> Ensure your data's integrity
                with our commitment to HIPAA compliance.
              </li>
              <li className="sm:mb-[20px] md:mb-[40px]">
                <strong>Custom LLM:</strong> Enhance your AI capabilities with
                our tailored support, including prompt optimization, ATS
                integration, and automated messaging.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 p-6 mt-4 md:mt-0 lg:p-10 border border-[#0000001c] rounded-xl">
            <form className="space-y-4">
              <div>
                <label className="block color-black lato text-[16px]">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px]"
                />
              </div>
              <div>
                <label className="block color-black lato text-[16px]">
                  Work email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px]"
                />
              </div>
              <div>
                <label className="block color-black lato text-[16px]">
                  Company name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px]"
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block color-black lato text-[16px]">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px] outline-none"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block color-black lato text-[16px]">
                    Industry
                  </label>
                  <select
                    name="text"
                    value={industry}
                    onChange={handleIndustryChange}
                    className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px] outline-none"
                  >
                      <option value="" disabled>Select an industry</option>

                    {industryOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}

                  />
                </div>
              </div>
              <div className="flex flex-row-reverse">
                <Button to="/signup_two" type="submit">
                  Next
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterprisePlan;
