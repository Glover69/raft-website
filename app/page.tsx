"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FeatureSection from "../components/feature-section";
import SeamlessPaymentsCard from "../components/seamless-payment-card";
import SmartInvestingCard from "../components/smart-investing-card";
import WealthManagementCard from "../components/wealth-management-card";
import FinancialPlanningCard from "../components/financial-planning-card";
import MoneySendCard from "../components/money-send-card";
import MoneyReceiveCard from "../components/money-receive-card";
import FreedomFeatures from "../components/freedomFeatures";
import GreenBanner from "../components/green-banner";
import ConfidentFutureCards from "../components/confident-future-cards";
import VideoBackground from "../components/videoBackground";
import NextGenFeatures from "../components/nextGenFeatures";
import CountingStats from "../components/countingStats";
import ReviewsSection from "../components/reviews-section";
import LoadingScreen from "../components/loading-page";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import locomotiveScroll from "locomotive-scroll";
import { SmoothScrollProvider } from "../public/contexts/SmoothScroll.context";
import JourneySection from "@/components/journey-section";
import Footer from "@/components/footer";

export default function Home() {
  // const scrollRef = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true,
  //     // Add any other Locomotive Scroll options as needed
  //   });

  //   // Cleanup when the component unmounts
  //   return () => {
  //     if (scroll) {
  //       scroll.destroy();
  //     }
  //   };
  // }, []);


  const nextGenFeatures = [
    {
      icon: "/svgs/document-duplicate.svg",
      title: "Contactless Technology",
      subtitle:
        "Our new cards come equipped with contactless technology, allowing you to make swift, secure payments with a simple tap.",
    },
    {
      icon: "/svgs/identification.svg",
      title: "Personalization",
      subtitle:
        "Customize your card to reflect your unique style. Choose from a range of designs that suit your personality.",
    },
    {
      icon: "/svgs/lock-closed.svg",
      title: "Enhanced Security",
      subtitle:
        "Your peace of mind is our priority. Our cards feature advanced security measures to protect your transactions and data.",
    },
  ];

  const freedomFeatures = [
    {
      icon: "/svgs/cash-white.svg",
      title: "No minimum balance fees",
      subtitle:
        "Say goodbye to minimum balance fees. Your account, your balance—no hidden charges",
    },
    {
      icon: "/svgs/coins-white.svg",
      title: "No monthly fees",
      subtitle:
        "Bank with us without worrying about monthly fees. Keep more of your money where it belongs—in your account",
    },
    {
      icon: "/svgs/arrows-right-left.svg",
      title: "No bank transfer fees",
      subtitle:
        "Seamlessly transfer funds without the extra cost. Send and receive money with zero bank transfer fees.",
    },
  ];

  const confidentFutureCards = [
    {
      icon: "/svgs/money-send-black.svg",
      title: "Spend better",
      subtitle:
        "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress.",
    },
    {
      icon: "/svgs/wallet-minus.svg",
      title: "Invest better",
      subtitle:
        "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress.",
    },
  ];

  const heroImage: React.CSSProperties = {
    backgroundImage: 'url("/images/financial-freedom-bg.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  const innerBG: React.CSSProperties = {
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)",
  };

  const [loadingScreenComplete, setLoadingScreenComplete] = useState(false);
  const [navbarComplete, setNavbarComplete] = useState(false);

  const handleLoadingScreenComplete = () => {
    //  state to indicate that LoadingScreen animation is complete
    setLoadingScreenComplete(true);
  };

  const handleNavbarAnimationComplete = () => {
    setNavbarComplete(true);
  };

  return (
    <main data-scroll-container className="main-container w-full relative">
        <LoadingScreen onAnimationCompletion={handleLoadingScreenComplete} />
        {/* {loadingScreenComplete && <Navbar onAnimationStart={handleNavbarAnimationStart} />} */}
        <Navbar
          onAnimationStart={loadingScreenComplete}
          onAnimationEnd={handleNavbarAnimationComplete}
        />
        <Hero onAnimationStart={navbarComplete} />
        <FeatureSection />

        <JourneySection/>

        <div className="financial-freedom-section flex flex-col items-center justify-center gap-12 px-6 py-24 md:px-10 xl:px-14 2xl:px-32 3xl:px-40">
          <div className="flex flex-col items-center justify-center gap-6">
            <span className="SFRegular text-4xl w-[90%] leading-[3rem] md:text-6xl md:leading-[4.5rem] lg:text-7xl 3xl:text-9xl md:w-[40rem] lg:w-[45rem] 3xl:w-[75rem] lg:leading-[5rem] text-center">
              Your Financial Freedom, Your Way
            </span>
            <span className="SFRegular text-[#989898] md:w-[35rem] md:text-xl lg:w-[40rem] lg:leading-9 text-center">
              We believe that managing your finances should be effortless and
              cost-effective. That&apos;s why we offer you the freedom you
              deserve
            </span>
          </div>

          <div
            style={heroImage}
            className="h-[24rem] mt-6 lg:h-[35rem] xl:h-[45rem] 3xl:h-[55rem] w-full rounded-lg"
          >
            <div
              style={innerBG}
              className="inner w-full h-full overflow-hidden relative"
            >
              <MoneySendCard />
              <MoneyReceiveCard />
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 lg:grid lg:grid-cols-3">
            <FreedomFeatures dataArray={freedomFeatures} />
          </div>
        </div>

        <GreenBanner />

        <div className="flex flex-col items-center justify-center gap-24 px-6 py-24 md:px-10 xl:px-24 2xl:px-32 3xl:px-40">
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <span className="SFRegular text-4xl leading-[3rem] md:text-6xl md:leading-[4.5rem] lg:text-7xl 3xl:text-9xl md:w-[40rem] lg:w-[45rem] 3xl:w-[75rem] lg:leading-[5rem] text-start">
              Confidently Shape Your Financial Future
            </span>
            <span className="SFRegular text-[#989898] md:w-[35rem] md:text-xl lg:w-[40rem] lg:leading-9 text-left">
              At RAFT, we empower you to confidently shape your financial
              future. Our modern approach simplifies saving and investing,
              making it easier than ever.
            </span>
          </div>

          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <ConfidentFutureCards dataArray={confidentFutureCards} />
          </div>

          <CountingStats />
        </div>

        <VideoBackground />

        <div className="flex flex-col items-center justify-center gap-20 px-6 py-24 md:px-10 xl:px-14 2xl:px-32 3xl:px-40">
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="SFRegular uppercase text-[#48D64C]">
              Introducing
            </span>
            <span className="SFRegular text-4xl w-[90%] leading-[3rem] md:text-6xl md:leading-[4.5rem] lg:text-7xl 3xl:text-9xl md:w-[40rem] lg:w-[45rem] 3xl:w-[75rem] lg:leading-[5rem] text-center">
              Introducing RAFT&apos;s Next-Gen Cards
            </span>
            <span className="SFRegular text-[#989898] md:w-[35rem] md:text-xl lg:w-[40rem] lg:leading-9 text-center">
              Discover RAFT&apos;s latest innovation - our new cards. Elevate
              your banking experience with cutting-edge features, security, and
              unprecedented convenience.
            </span>
          </div>

          <Image
            className="lg:w-72"
            src="/svgs/credit-card.svg"
            alt=""
            width={200}
            height={300}
          />
          {/* <img src="/images/credit-card-2.png" alt="" /> */}

          <div className="flex flex-col items-start gap-8 lg:grid lg:grid-cols-3">
            <NextGenFeatures dataArray={nextGenFeatures} />
          </div>
        </div>

        {/* Reviews Section */}
        <ReviewsSection />
        <Footer/>
    </main>
  );
}
