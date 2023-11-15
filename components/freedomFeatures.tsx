// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface freedomFeatures {
    dataArray: { icon: string; title: string; subtitle: string }[];
  }

const FreedomFeatures: React.FC<freedomFeatures> = ({ dataArray }) => {
  return (

    <>
    {dataArray.map((item, index) => (
    <div key={index} className="feature flex flex-col items-start gap-2">
    <div className="top flex items-center gap-2 lg:gap-3">
    <Image
      src={`${item.icon}`}
      alt=""
      width={20}
      height={20}
    />
    <span className="SFMedium text-lg">{item.title}</span>
    </div>
    <span className="SFRegular text-[#BDBDBD]">{item.subtitle}</span>
  </div>
    ))}
    </>
  );
};

export default FreedomFeatures;
