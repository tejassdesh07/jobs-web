import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo";
import Button from "../../Button";

const DiveDeeper = () => {
  const [formData, setFormData] = useState({
    aboutCompany: "",
    companyValues: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-[1500px] px-[20px] sm:px-[40px] lg:px-[60px] mx-auto  flex items-center justify-center">
      {/* <Logo /> */}
      <div className="flex flex-col md:p-6  w-full">
        <div className="px-5">
          <h2 className="text-[36px] sm:text-[40px] md:text-[45px] lg:text-[64px] color-green lato font-[800]">
            Let&apos;s dive deeper
          </h2>
          <p className="lato text-[10px] sm:text-[20px] md:text-[24px] font-medium  color-black ">
            Providing us with additional information will enable us to formulate
            a smarter interview.
          </p>
        </div>
        <div className=" mt-3 border p-[20px] sm:p-[30px] lg:p-[40px] rounded-[30px]">
          <form className="w-full space-y-4">
            <div>
              <label className="block color-black text-[11px] sm:text-[22px] md:text-[22px] font-medium inter">
                About Company
              </label>
              <textarea
                name="aboutCompany"
                value={formData.aboutCompany}
                onChange={handleChange}
                className="mt-1 p-2 w-full h-24 border rounded-[15px] outline-none bg-[#D9EBEC]"
              ></textarea>
            </div>
            <div>
              <label className="block color-black text-[20px] sm:text-[22px] md:text-[22px] font-medium inter">
                Company Values
              </label>
              <textarea
                name="companyValues"
                value={formData.companyValues}
                onChange={handleChange}
                className="mt-1 p-2 w-full h-24 border rounded-[15px] outline-none bg-[#D9EBEC]"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <Button to="/signup_one">Back</Button>
              <Button to="/add_job">Get started</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiveDeeper;
