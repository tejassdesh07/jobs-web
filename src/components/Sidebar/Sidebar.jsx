import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { useState } from "react";

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const wrapperClasses = classNames(
    "  px-4 pr-0  pb-4 bg-light flex justify-between flex-col ",
    {
      ["w-[20]"]: !toggleCollapse,
    },
    {
      ["h-[100%"]: !toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0  ",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{
        transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
        height: "100%",
        // borderRight: "1px solid #e6e6e6",
      }}
    >
      <div className="flex flex-col h-full   ">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            ></span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            ></button>
          )}
        </div>

        <div className="w-full ">
          <div>
            <nav id="nav" className="lg:text-sm lg:leading-6 relative">
              <div className="color-black  flex flex-col items-center py-8 lg:border-r px-1 sm:px-[20px] h-full">
                <div className="rounded-full w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] flex justify-center items-center mx-auto  ">
                  <img
                    src="/sidebar_logo.png"
                    alt="Logo"
                    className="text-[30px] sm:text-[40px] text-white lato"
                  />
                </div>
                <div className="flex flex-col items-center space-y-8 text-[14px] sm:text-[14px] md:text-[16px] max-sm:mt-[20px] mt-[30px] ">
                  <NavLink
                    to="/signin_job_list"
                    className="flex items-center gap-1   flex-col"
                  >
                    <img className="w-[25px] h-[25px]" src="/job.png" />

                    <span className="lato text-[14px]">Job Listings</span>
                  </NavLink>
                  <NavLink
                    to="/notification"
                    className="flex items-center gap-1 justify-center  flex-col"
                  >
                    <img
                      className="w-[25px] h-[25px]"
                      src="/notifications.png"
                    />
                    <span className="lato text-[14px]">Notifications</span>
                  </NavLink>
                  <NavLink
                    to="/payment"
                    className="flex items-center gap-1 justify-center  flex-col"
                  >
                    <img className="w-[25px] h-[25px]" src="/payment.png" />

                    <span className="lato text-[14px]">Payment</span>
                  </NavLink>
                  <NavLink
                    to="/setting"
                    className="flex items-center gap-1 justify-center  flex-col"
                  >
                    <img className="w-[25px] h-[25px]" src="/setting.png" />

                    <span className="lato text-[14px]">Settings</span>
                  </NavLink>
                  <NavLink
                    to="/account"
                    className="flex items-center gap-1 justify-center  flex-col"
                  >
                    <img className="w-[25px] h-[25px]" src="/account.png" />

                    <span className="lato text-[14px]">Account</span>
                  </NavLink>
                  <NavLink
                    to="/"
                    className="flex items-center gap-1 justify-center  flex-col"
                  >
                    <img className="w-[25px] h-[25px]" src="/arrow.png" />
                    <span className="lato text-[14px]">Log out</span>
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
