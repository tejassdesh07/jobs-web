import { NavLink } from "react-router-dom";
import Button from "../../Button";

const Ready = () => {
  return (
    <div className=" w-full h-screen max-w-[1300px] mx-auto px-[10px] sm:px-[20px] ">
      <div className="mt-2">
        <h2 className=" md:w-[80%] text-center md:text-start mx-auto text-[33px] md:text-[40px] font-bold lato color-green">
          Ready?
        </h2>
      </div>
      <div className="w-full sm:w-[70%] mx-auto">
        <div className="w-full ">
          <div className="text-[20px] inter font-medium  p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[25px] sm:text-[28px] md:text-[32px] font-medium inter">
              <div className="sm:col-span-2">
                <p>
                  <strong>
                    {" "}
                    Now that we have what we need, our AI is going to call you.
                    Remember its an AI, not a person!
                  </strong>
                </p>
              </div>
              <div className="sm:col-span-2">
                <p> A few tips: </p>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>XX</strong>
                  </li>
                  <li>
                    <strong>XX</strong>
                  </li>
                  <li>
                    <strong>XX</strong>
                  </li>
                </ul>
              </div>
              <div className="sm:col-span-2">
                <p>
                  <strong>
                    If you’re curious, here’s a demo recording of how your call
                    may go:
                  </strong>
                </p>
              </div>
              {/* Audio */}
              <div className="sm:col-span-2 mt-[20px] border w-fit p-3 rounded-full">
                <audio controls>
                  <source src="audio/StockTune-Whispers Of Yesterday_1723077290.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[40px] flex justify-end items-center w-full">
          <Button to="/do_i_swear">Call Me</Button>
        </div>
      </div>
    </div>
  );
};

export default Ready;
