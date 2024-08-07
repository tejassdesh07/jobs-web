import { useState } from "react";
import Button from "../../Button";
Button;
const LandingPage = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-white max-w-[1300px] h-[80vh] mx-auto px-[30px] sm:px-[20px] flex flex-col items-center justify-center">
      <main className="flex flex-col w-full max-w-[900px] items-center text-center ">
        <h1 className="text-[36px] leading-[70px] max-md:leading-[50px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[60px] text-center lato font-medium">
          Shortlist <span className="italic">thousands</span> of{" "}
          <br className="max-md:hidden" /> candidates in{" "}
          <span className="text-[#007A7E] font-bold">minutes</span>
        </h1>
        <form className="mt-[70px] w-full  max-md:mt-[30px] flex  flex-col  lg:flex-row justify-center gap-y-[20px] gap-x-[20px]  ">
          <input
            type="email"
            placeholder="What's your email?"
            value={email}
            onChange={handleChange}
            required
            className=" w-full md:w-[472px] lg:px-6 md:px-4 px-3  lg:py-3 py-2 border rounded-[30px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-color-green"
          />
          <Button to="/signup_one">Get Started</Button>
        </form>
      </main>
    </div>
  );
};

export default LandingPage;
