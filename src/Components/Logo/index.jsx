import React from "react";
import IcanLogo from "../../assets/Logo.jpg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    // , cursor: 'pointer',
    <div className="w-[100px] h-[auto] cursor-pointer items-center flex">
      <Link to="/">
        <img src={IcanLogo} alt="Logo" srcSet="" />
      </Link>
    </div>
  );
};
