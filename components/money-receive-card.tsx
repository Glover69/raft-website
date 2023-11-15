import React from "react";
import Image from "next/image";


const MoneyReceiveCard: React.FC = () => {
  return (
    <div className="card py-2 px-1 rounded-lg border border-[#070606] bg-white flex flex-col items-start gap-1 absolute bottom-[8%] lg:bottom-[12%] right-5 md:right-[22%] xl:right-[25%] 3xl:right-[28%] w-20 scale-[0.75] md:scale-105 lg:scale-150 xl:scale-[1.75]">
      <div className="top h-12 w-full flex items-center justify-center bg-[#FFE8E8]">
      <Image
              src="/svgs/money-receive.svg"
              alt=""
              width={20}
              height={20}
            />
      </div>
      <div className="bottom flex flex-col items-start">
        <span className="text-[#7C7C7C] SFRegular text-xs">Received</span>
        <span className="text-[#070606] SFRegular">$250.12</span>
      </div>
    </div>
  );
};

export default MoneyReceiveCard;
