import React from "react";
import Image from "next/image";


const MoneySendCard: React.FC = () => {
  return (
    <div className="card py-2 px-1 rounded-lg border border-[#070606] bg-white flex flex-col items-start gap-1 absolute top-[30%] left-2 md:left-[10%] xl:left-[12%] 3xl:left-[14%] w-20 scale-[0.75] md:scale-105 lg:scale-150 xl:scale-[1.75]">
      <div className="top h-12 w-full flex items-center justify-center bg-[#E7FFE8]">
      <Image
              src="/svgs/money-send.svg"
              alt=""
              width={20}
              height={20}
            />
      </div>
      <div className="bottom flex flex-col items-start">
        <span className="text-[#7C7C7C] SFRegular text-xs">Sent</span>
        <span className="text-[#070606] SFRegular">$250.12</span>
      </div>
    </div>
  );
};

export default MoneySendCard;
