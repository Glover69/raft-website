import React, { useEffect } from "react";
import FinancialPlanningCard from "./financial-planning-card";
import SeamlessPaymentsCard from "./seamless-payment-card";
import SmartInvestingCard from "./smart-investing-card";
import WealthManagementCard from "./wealth-management-card";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const boxes = [
  { icon: "/svgs/wallet-white.svg" },
  { icon: "/svgs/ticket-white.svg" },
  { icon: "/svgs/cash-white.svg" },
  { icon: "/svgs/shopping-bag-white.svg" },
  { icon: "/svgs/present-white.svg" },
  { icon: "/svgs/report-white.svg" },
];

const transactionCards = [
  { text: "+ $22.15 Received from Nguyen Shane" },
  { text: "+ $300.52 Received from Cooper Kristin" },
  { text: "+ $50.00 Received from Miles Esther" },
];

const JourneySection = () => {
  useEffect(() => {
    const text = new SplitType(".main-txt", { types: "words" });
    const words = text.words;

    gsap.fromTo(words,
      {
        opacity: 0.2,
        stagger: 0.2,
      },
      {
        opacity: 1,
        stagger: 0.2,
        ease: "back.out",
        scrollTrigger: {
          trigger: ".main-txt",
          start: "top 90%",
          scrub: true,
        //   markers: true,
        },
      }
    );

    gsap.fromTo(".sub-txt",
        {
          x: -50,
          opacity: 0
        },
        {
          x: 0,
          ease: "back.out",
          opacity: 1,
          scrollTrigger: {
            trigger: ".sub-txt",
            start: "top 90%",
            scrub: true,
            // markers: true,
          },
        }
      );

      gsap.fromTo('.financial-planning-card', {
        y: 120,
        opacity: 0
      },
      {
        y: 0,
        ease: "power4",
        opacity: 1,
        scrollTrigger: {
          trigger: ".financial-planning-card",
          start: "top 90%",
          scrub: true,
          // markers: true,
        },
      })

      gsap.fromTo('.seamlesscard', {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        ease: "power4",
        opacity: 1,
        scrollTrigger: {
          trigger: ".seamlesscard",
          start: "top 90%",
          scrub: true,
          // markers: true,
        },
      })

      gsap.fromTo('.smartinvestingcard', {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        ease: "power4",
        opacity: 1,
        scrollTrigger: {
          trigger: ".smartinvestingcard",
          start: "top 70%",
          scrub: true,
          // markers: true,
        },
      })

      gsap.fromTo('.wealthmanagementcard', {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        ease: "power4",
        opacity: 1,
        scrollTrigger: {
          trigger: ".wealthmanagementcard",
          start: "top 70%",
          scrub: true,
          // markers: true,
        },
      })

  }, []);
  return (
    <div className="journey-section flex flex-col items-center justify-center gap-24 px-6 py-24 md:px-10 xl:px-14 2xl:px-32 3xl:px-40">
      <div className="flex flex-col items-center justify-center gap-6">
        <span className="main-txt SFRegular text-4xl md:text-6xl lg:text-7xl 3xl:text-9xl md:w-[40rem] lg:w-[45rem] 3xl:w-[75rem] lg:leading-[5rem] text-center">
          Elevate Your Financial Journey with RAFT
        </span>
        <span className="sub-txt SFRegular text-[#989898] md:w-[35rem] md:text-xl lg:w-[40rem] lg:leading-9 text-center">
          RAFT offers a world of financial possibilities. From investments to
          payments, we&apos;ve got you covered. Join us and unlock your
          financial potential today.
        </span>
      </div>

      <div className="flex flex-col items-center gap-6 lg:grid grid-cols-3 grid-row-2">
        <SeamlessPaymentsCard dataArray={transactionCards} />
        <SmartInvestingCard />
        <WealthManagementCard />
        <FinancialPlanningCard dataArray={boxes} />
      </div>
    </div>
  );
};

export default JourneySection;
