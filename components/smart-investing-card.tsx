// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const cardTopBG: React.CSSProperties = {
  backgroundImage: 'url("/images/mesh-bg.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const overlay: React.CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(19, 19, 19, 0.00) 0%, #131313 100%)",
};

const SmartInvestingCard: React.FC = () => {
  return (
    <div className="card md:max-lg:w-[65%] lg flex flex-col items-center rounded-lg w-full border border-[#FFFFFF0A] bg-[#131313]">
      <div
        style={cardTopBG}
        className="top overflow-hidden w-full relative py-8 flex flex-col items-end gap-2"
      >
        <div style={overlay} className="layer w-full h-full absolute top-8"></div>

        {/* Individual transactional cards (1/3) */}
        <div className="trans-card w-3/4 flex flex-row items-center gap-2 rounded-xl rounded-r-none py-3 px-4 border border-[#FFFFFF0A] bg-[#202020]">
          <div className="bg-[#2B4089] flex items-center justify-center rounded-lg w-8 h-8">
            <Image
              src="/svgs/coins-white.svg"
              alt=""
              width={15}
              height={15}
            />
          </div>
          <span className="SFRegular">
            Cryptocurrency
          </span>
        </div>

        {/* Individual transactional cards (2/3) */}
        <div className="trans-card w-[85%] flex flex-row items-center gap-2 rounded-xl rounded-r-none py-3 px-4 border border-[#FFFFFF0A] bg-[#202020]">
          <div className="bg-[#2B892E] flex items-center justify-center rounded-lg w-8 h-8">
            <Image
              src="/svgs/cash-white.svg"
              alt=""
              width={15}
              height={15}
            />
          </div>
          <span className="SFRegular">
            Smart Portfolio Investing
          </span>
        </div>

        {/* Individual transactional cards (3/3) */}
        <div className="trans-card w-3/4 flex flex-row items-center gap-2 rounded-xl rounded-r-none py-3 px-4 border border-[#FFFFFF0A] bg-[#202020]">
          <div className="bg-[#D06604] flex items-center justify-center rounded-lg w-8 h-8">
            <Image
              src="/svgs/invest-icn.svg"
              alt=""
              width={15}
              height={15}
            />
          </div>
          <span className="SFRegular">
            Sustainable Investing
          </span>
        </div>
      </div>

      <div className="bottom px-5 flex flex-col py-6 items-start gap-4">
        <span className="SFMedium text-2xl">Smart Investing</span>
        <span className="SFRegular text-[#BDBDBD]">Grow your wealth confidently with our personalized investment solutions, tailored to your financial goals.</span>
      </div>
    </div>
  );
};

export default SmartInvestingCard;
