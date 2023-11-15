// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const cardTopBG: React.CSSProperties = {
  backgroundImage: 'url("/images/mesh-bg.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const personImg: React.CSSProperties = {
  backgroundImage: 'url("/images/person-img.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const overlay: React.CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(19, 19, 19, 0.00) 0%, #131313 100%)",
};

const WealthManagementCard: React.FC = () => {
  return (
    <div className="card md:max-lg:w-[65%] px-5 flex flex-col items-center rounded-lg w-full border border-[#FFFFFF0A] bg-[#131313]">
      <div
        style={cardTopBG}
        className="top overflow-hidden w-full relative py-8 flex flex-col items-center gap-2"
      >
        <div
          style={overlay}
          className="layer w-full h-full absolute top-8"
        ></div>

        {/* Send Message card */}
        <div className="trans-card w-full flex flex-col gap-5 rounded-xl py-6 px-4 border border-[#FFFFFF0A] bg-[#202020]">
          <div className="top flex flex-row items-center gap-4">
            {/* image container */}
            <div style={personImg} className="rounded-full w-14 h-14">
              
            </div>

            <div className="top-right flex flex-col items-start">
            <span className="SFRegular text-xl">Wade Warren</span>
            <span className="SFRegular text-sm text-[#989898]">Private Wealth Manager</span>


            </div>
          </div>

          <div className="bottom flex items-center justify-between">
              <span className="SFRegular">Send Message</span>
              <Image
              src="/svgs/icn-chat.svg"
              alt=""
              width={15}
              height={15}
            />
            </div>
        </div>
      </div>

      <div className="bottom flex flex-col py-6 items-start gap-4">
        <span className="SFMedium text-2xl">Wealth Management</span>
        <span className="SFRegular text-[#BDBDBD]">
          Make informed decisions for your financial future with our wealth
          management expertise.
        </span>
      </div>
    </div>
  );
};

export default WealthManagementCard;
