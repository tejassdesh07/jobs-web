import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ to, children , ...props }) => {
  return (
    <NavLink
      to={to}
      className="px-6 py-2   border rounded-[15px] shadow-md text-[13px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium text-center block   text-white bg-[#007A7E] "
      aria-current="page"
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default Button;
