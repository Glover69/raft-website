// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div className="navbar flex flex-row items-center justify-between px-5 py-4 border-b-[0.5px] border-[#3D3D3D]">
      <div className="left flex flex-row items-center gap-1">
        <Image src="/svgs/raft-logo-sm.svg" alt="" width={40} height={40}/>
        <span className="SFRegular text-2xl">Raft</span>
      </div>

      <div className="middle hidden lg:flex lg:items-center lg:gap-12">
        <span className="SFRegular">Solutions</span>
        <span className="SFRegular">Learn</span>
        <span className="SFRegular">About</span>
      </div>

      <div className="right-mobile lg:hidden">
      <Image src="/svgs/icn-menu.svg" alt="" width={40} height={40}/>
      </div>

      <div className="right-desktop hidden lg:flex items-center gap-4">
      <span className="SFMedium">Login</span>
      <button className="bg-[#2B892E] SFMedium rounded-[6rem] px-4 py-2 3xl:px-10 3xl:py-5 2xl:text-xl">Get Started</button>

      </div>

      
    </div>
  );
};

export default Navbar;
