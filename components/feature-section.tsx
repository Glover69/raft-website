// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";


const FeatureSection: React.FC = () => {
  return (
    <div className="main-feature-section flex flex-col items-center gap-7 lg:gap-12">
    <span className="SFRegular uppercase text-[#BDBDBD] lg:text-2xl">Featured and seen in</span>

    <div className="bottom flex flex-row items-center gap-16">
    <Image src="/svgs/forbes.svg" alt="" width={100} height={100}/>
    <Image src="/svgs/cnbc.svg" alt="" width={80} height={80}/>
    <Image src="/svgs/bloomberg.svg" alt="" width={100} height={100}/>
    <Image src="/svgs/reuters.svg" alt="" width={100} height={100}/>
    <Image src="/svgs/cnn-logo.svg" alt="" width={100} height={100}/>


    </div>
      
    </div>
  );
};

export default FeatureSection;
