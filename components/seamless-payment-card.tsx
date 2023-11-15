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

const SeamlessPaymentsCard: React.FC = () => {
  return (
    <div className="card px-6 flex flex-col items-center rounded-lg w-full border border-[#FFFFFF0A] bg-[#131313]">
      <div
        style={cardTopBG}
        className="top overflow-hidden w-full relative py-8 flex flex-col items-center gap-2"
      >
        <div style={overlay} className="layer w-full h-full absolute"></div>

        {/* Individual transactional cards (1/3) */}
        <div className="trans-card w-fit flex flex-row items-center gap-2 rounded-xl py-3 px-4 border border-[#FFFFFF0A] bg-[#202020]">
          <div className="bg-[#2B2B2B] flex items-center justify-center rounded-lg w-8 h-8">
            <Image
              src="/svgs/arrow-diagonal.svg"
              alt=""
              width={15}
              height={15}
            />
          </div>
          <span className="SFRegular text-xs">
            + $22.15 Received from Nguyen Shane
          </span>
        </div>

        {/* Individual transactional cards (2/3) */}
        <div className="trans-card w-fit flex flex-row items-center gap-2 rounded-xl py-3 px-4 border border-[#FFFFFF0A] bg-[#202020]">
          <div className="bg-[#2B2B2B] flex items-center justify-center rounded-lg w-8 h-8">
            <Image
              src="/svgs/arrow-diagonal.svg"
              alt=""
              width={15}
              height={15}
            />
          </div>
          <span className="SFRegular text-[0.85rem]">
            + $300.52 Received from Cooper Kristin
          </span>
        </div>

        {/* Individual transactional cards (3/3) */}
        <div className="trans-card w-fit flex flex-row items-center gap-2 rounded-xl py-3 px-4 border border-[#FFFFFF0A] bg-[#202020]">
          <div className="bg-[#2B2B2B] flex items-center justify-center rounded-lg w-8 h-8">
            <Image
              src="/svgs/arrow-diagonal.svg"
              alt=""
              width={15}
              height={15}
            />
          </div>
          <span className="SFRegular text-xs">
            + $50.00 Received from Miles Esther
          </span>
        </div>
      </div>

      <div className="bottom flex flex-col py-6 items-start gap-4">
        <span className="SFMedium text-2xl">Seamless Payments</span>
        <span className="SFRegular text-[#BDBDBD]">Enjoy secure, seamless transactions that make managing your money a breeze.</span>
      </div>
    </div>
  );
};

export default SeamlessPaymentsCard;
