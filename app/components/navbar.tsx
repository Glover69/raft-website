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

      <div className="right">
      <Image src="/svgs/icn-menu.svg" alt="" width={40} height={40}/>
      </div>

      
    </div>
  );
};

export default Navbar;
