// components/Navbar.tsx
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const ReviewsSection: React.FC = () => {
  

  const profileImg: React.CSSProperties = {
    backgroundImage: 'url("/images/robert-fox.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="main-review-section flex flex-col px-6 py-10 items-center gap-10 lg:gap-20 bg-[#48D64C]">
      <span className="SFRegular text-[#070606] text-center text-4xl md:w-[30rem] md:text-6xl lg:text-7xl">
        Join over 3 million members
      </span>

      <div className="inner-reviews px-8 py-6 w-full md:w-3/4 flex flex-col items-start gap-6">
        <span className="SFRegular text-[#292929] text-lg">
          RAFT has transformed my approach to finance. Their smart investing
          options have helped me grow my wealth, and their user-friendly
          platform makes managing my money a breeze. I&apos;ve never felt more
          confident about my financial future.
        </span>

        <div className="reviewer w-full flex items-center justify-between">
          <div className="left flex flex-col items-start">
            <span className="SFMedium text-[#070606] text-xl">Robert Fox</span>
            <span className="text-[#292929] SFRegular">Happy RAFT User</span>
          </div>

          <div
            style={profileImg}
            className="profile w-12 h-12 rounded-full"
          ></div>
        </div>

        <div className="control-btns w-full flex items-center justify-end gap-4 mt-4">
          <div className="profile w-12 h-12 rounded-full border border-black flex items-center justify-center bg-white">
          <Image src="/svgs/arrow-small-left.svg" alt="" width={20} height={20}/>
          </div>
          <div className="profile w-12 h-12 rounded-full border border-black flex items-center justify-center bg-white">
          <Image src="/svgs/arrow-small-right.svg" alt="" width={20} height={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
