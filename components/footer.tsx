import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 px-6 py-24 pb-8 md:px-10 xl:px-24 3xl:px-32">
      <div className="top w-full">
        <div className="border-b border-b-[#3D3D3D] pb-10 w-full">
          <div className="flex flex-row items-center w-full">
            <Image
              className="raft-logo lg:w-32 lg:h-32"
              src="/svgs/raft-logo-sm.svg"
              alt=""
              width={90}
              height={90}
            />
            <span className="SFRegular text-6xl lg:text-8xl">Raft</span>
          </div>
        </div>
      </div>

      <div className="bottom w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
      <div className="qr-code-container w-fit rounded-lg border-white border-dashed border px-4 py-5 flex flex-row items-center gap-4">
        <Image
          className="qr-code"
          src="/svgs/qr-code.svg"
          alt=""
          width={80}
          height={80}
        />
        <div className="right flex flex-col items-start gap-2">
          <span className="SFRegular w-52">
            Scan to download App on the Play Store and App Store.
          </span>
          <div className="flex items-center gap-2">
            <Image
              className="qr-code"
              src="/svgs/play-store.svg"
              alt=""
              width={30}
              height={30}
            />
            <Image
              className="qr-code"
              src="/svgs/app-store.svg"
              alt=""
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>

      <div className="link-group flex flex-row items-start gap-6 lg:gap-12 flex-wrap lg:flex-nowrap gap-y-8">
        <div className="link-section flex flex-col gap-4 items-start w-[45%] md:w-1/5 lg:w-32 xl:w-40">
          <span className="link-title SFMedium text-xl">About us</span>

          <div className="flex flex-col items-start gap-2">
            <span className="links SFRegular text-[#EFEFEF]">Our Company</span>
            <span className="links SFRegular text-[#EFEFEF]">Careers</span>
            <span className="links SFRegular text-[#EFEFEF]">Press kits</span>

          </div>
        </div>

        <div className="link-section flex flex-col gap-4 items-start w-[45%] md:w-1/5 lg:w-32 xl:w-40">
          <span className="link-title SFMedium text-xl">Legal</span>

          <div className="flex flex-col items-start gap-2">
            <span className="links SFRegular text-[#EFEFEF]">Terms of use</span>
            <span className="links SFRegular text-[#EFEFEF]">Privacy Policy</span>
            <span className="links SFRegular text-[#EFEFEF]">About us</span>
          </div>
        </div>

        <div className="link-section flex flex-col gap-4 items-start w-[45%] md:w-1/5 lg:w-32 xl:w-40">
          <span className="link-title SFMedium text-xl">Support</span>

          <div className="flex flex-col items-start gap-2">
            <span className="links SFRegular text-[#EFEFEF]">Contact Us</span>
            <span className="links SFRegular text-[#EFEFEF]">FAQ&apos;s</span>
          </div>
        </div>
      </div>
      </div>

      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center gap-2">
          <span className="SFRegular text-sm md:text-base">English (United Kingdom)</span>
          <Image
              className=""
              src="/svgs/chevron-down.svg"
              alt=""
              width={20}
              height={20}
            />
        </div>

        <span className="SFRegular text-sm md:text-base">&copy; Raft Corp, LLC.</span>
      </div>

      
    </div>
  );
};

export default Footer;
