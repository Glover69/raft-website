// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const divStyle: React.CSSProperties = {
    backgroundImage: 'url("/images/mesh-bg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',

  };

  const heroImage: React.CSSProperties = {
    backgroundImage: 'url("/images/raft-hero-bg.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    backgroundColor: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)',

  };

const Hero: React.FC = () => {
  return (
    <div className="main-hero flex flex-col items-center justify-center px-6 py-24 gap-20">
     <div style={divStyle} className="hero-upper flex flex-col items-center gap-4">
        <div className="card flex flex-row items-center gap-2 rounded-[6rem] py-2 px-4 border-[0.2px] border-[#989898] bg-[#FFFFFF26] backdrop-blur-[10px]">
            <span className="SFRegular text-[#DCDCDC]">Introducing Raft Cards</span>
            <Image src="/svgs/chevron-right.svg" alt="" width={20} height={20}/>
        </div>
        <span className="SFRegular text-4xl text-center">Building the future of banking.</span>
        <span className="SFRegular text-[#BDBDBD] text-center">Experience the future of banking with RAFT. We're here to empower your financial journey.</span>

        <button className="bg-[#2B892E] SFMedium rounded-[6rem] px-8 py-4">Get Started</button>
     </div>

     <div style={heroImage} className="h-[24rem] w-full rounded-lg"></div>
      
    </div>
  );
};

export default Hero;
