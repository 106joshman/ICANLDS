import React from "react";
import IcanLogo from "../../assets/Logo.jpg";

export const Logo = () => {
  return (
    // , cursor: 'pointer',
    <div className="w-[100px] h-[auto] cursor-pointer items-center flex">
      <img src={IcanLogo} alt="Logo" srcSet="" />
    </div>
  );
};
