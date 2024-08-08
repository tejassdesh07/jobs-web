import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import Button from "../Button";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navbarRef = useRef(null);
  const profileRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const loggedInProfileUrl = "/profile";
  const loggedOutSignInUrl = "/signup_one";
  const loggedOutScheduleDemoUrl = "/welcome_to_pluto";

  // Define a function to check if the current path is a logged-in URL
  const isLoggedInUrl = (path) => {
    const loggedInUrls = ["/dashboard", "/profile", "/signin_job_list","/add_job","/customize_interview","/senior_product"];
    const dynamicUrls = [/^\/candidate\/.+$/, /^\/candidate-list\/.+$/];

    return loggedInUrls.includes(path) || dynamicUrls.some((regex) => regex.test(path));
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsProfileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderButtons = () => {
    if (!isLoggedInUrl(location.pathname)) {
      return (
        <>
          <li>
            <NavLink className="px-3 py-2 max-md:w-[40%] m-auto whitespace-nowrap border rounded-[15px] shadow-md text-[14px] font-medium text-center block text-white bg-[#007A7E]" to="/signup_one">Sign in</NavLink>
          </li>
          <li>
            <NavLink className="px-3 py-2 max-md:w-[40%] m-auto max-md:mt-0 whitespace-nowrap border rounded-[15px] shadow-md text-[14px] font-medium text-center block text-white bg-[#007A7E]" to="/welcome_to_pluto">Schedule a demo</NavLink>
          </li>
        </>
      );
    }
    return null;
  };

  return (
    <nav className="bg-white border-gray-200 z-50">
      <div className="flex items-center justify-between mx-auto p-4 relative px-[80px] max-md:px-[10px] max-tablet:px-[35px]" ref={navbarRef}>
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="w-[150px] h-[70px] max-md:-ml-3 object-cover" alt="Logo" />
        </NavLink>
        <div className={`flex-grow flex items-center ${!isLoggedInUrl(location.pathname) ? "justify-end" : ""}`}>
          {!isLoggedInUrl(location.pathname) && (
            <div className={`absolute z-40 w-full left-0 top-[80%] transform ease-in duration-300 overflow-hidden lg:relative lg:top-auto ${isOpen ? "max-h-screen" : "max-h-0"} lg:max-h-none lg:flex lg:items-center lg:justify-center lg:w-auto`} id="navbar-default">
              <ul className="font-medium flex flex-col max-md:gap-2 p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-[#007A7E] lg:bg-white lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0">
                <li>
                  <NavLink to="/comming-soon" className="sm:px-3 lg:px-4  sm:py-1.5 lg:py-2.5 text-[13px] font-medium text-center block text-white lg:text-black rounded" aria-current="page">
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/comming-soon" className="sm:px-3 lg:px-4  sm:py-1.5 lg:py-2.5 text-[13px] font-medium text-center block text-white lg:text-black rounded" aria-current="page">
                    Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/comming-soon" className="sm:px-3 lg:px-4  sm:py-1.5 lg:py-2.5 text-[13px] font-medium text-center block text-white lg:text-black rounded" aria-current="page">
                    Our Story
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/comming-soon" className="sm:px-3 lg:px-4  sm:py-1.5 lg:py-2.5 text-[13px] font-medium text-center block text-white lg:text-black rounded" aria-current="page">
                    Contact
                  </NavLink>
                </li>
                {renderButtons()}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedInUrl(location.pathname) && (
            <li ref={profileRef} className="relative z-[2000] list-none">
              <button onClick={toggleProfileDropdown} className="flex z-[2000] items-center justify-center text-gray-500 lg:text-black focus:outline-none">
                <FaUserCircle size={30} />
              </button>
              {isProfileOpen && (
                <div className="absolute z-[4000] top-11 -right-7 max-md:-right-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  
                  <NavLink to="/" className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Logout
                  </NavLink>
                </div>
              )}
            </li>
          )}
          {!isLoggedInUrl(location.pathname) && (
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-self-end justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isOpen} onClick={toggleNavbar}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
