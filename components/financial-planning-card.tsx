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

const FinancialPlanningCard: React.FC = () => {
  return (
    <div className="card md:max-lg:w-[65%] px-5 flex flex-col lg:col-span-2 items-center rounded-lg w-full border border-[#FFFFFF0A] bg-[#131313]">
      <div
        style={cardTopBG}
        className="top overflow-hidden w-full relative py-8 flex items-center justify-center"
      >
        <div
          style={overlay}
          className="layer w-full h-full absolute top-8"
        ></div>

<div className="grid grid-cols-3 gap-y-5 gap-2 w-fit justify-items-center">
 {/* Send Message card */}
 <div className="trans-card w-20 h-20 flex items-center justify-center rounded-xl border border-[#FFFFFF0A] bg-[#202020]">
          
          <Image
                src="/svgs/wallet-white.svg"
                alt=""
                width={35}
                height={35}
              />
          
          </div>
  
          <div className="trans-card w-20 h-20 flex items-center justify-center rounded-xl border border-[#FFFFFF0A] bg-[#202020]">
            
          <Image
                src="/svgs/ticket-white.svg"
                alt=""
                width={35}
                height={35}
              />
          
          </div>
  
          <div className="trans-card w-20 h-20 flex items-center justify-center rounded-xl border border-[#FFFFFF0A] bg-[#202020]">
            
          <Image
                src="/svgs/cash-white.svg"
                alt=""
                width={35}
                height={35}
              />
          
          </div>
  
          <div className="trans-card w-20 h-20 flex items-center justify-center rounded-xl border border-[#FFFFFF0A] bg-[#202020]">
            
          <Image
                src="/svgs/shopping-bag-white.svg"
                alt=""
                width={35}
                height={35}
              />
          
          </div>
  
          <div className="trans-card w-20 h-20 flex items-center justify-center rounded-xl border border-[#FFFFFF0A] bg-[#202020]">
            
          <Image
                src="/svgs/present-white.svg"
                alt=""
                width={35}
                height={35}
              />
          
          </div>
  
          <div className="trans-card w-20 h-20 flex items-center justify-center rounded-xl border border-[#FFFFFF0A] bg-[#202020]">
            
          <Image
                src="/svgs/report-white.svg"
                alt=""
                width={35}
                height={35}
              />
          
          </div>
</div>
       
      </div>

      <div className="bottom flex flex-col py-6 items-start gap-4">
        <span className="SFMedium text-2xl">Financial Planning</span>
        <span className="SFRegular text-[#BDBDBD] lg:w-3/4">
        Achieve your financial dreams with our comprehensive financial planning services, guiding you toward a secure future.
        </span>
      </div>
    </div>
  );
};

export default FinancialPlanningCard;
