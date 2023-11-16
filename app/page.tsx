'use client';

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


export default function Home() {

  const boxes = [
    { icon: '/svgs/wallet-white.svg' },
    { icon: '/svgs/ticket-white.svg' },
    { icon: '/svgs/cash-white.svg' },
    { icon: '/svgs/shopping-bag-white.svg' },
    { icon: '/svgs/present-white.svg' },
    { icon: '/svgs/report-white.svg' },
  ];

  const transactionCards = [   
    { text: '+ $22.15 Received from Nguyen Shane' },
    { text: '+ $300.52 Received from Cooper Kristin' },
    { text: '+ $50.00 Received from Miles Esther' },
  ];

  const freedomFeatures = [   
    {icon: '/svgs/cash-white.svg', title: 'No minimum balance fees', subtitle: 'Say goodbye to minimum balance fees. Your account, your balance—no hidden charges'},
    {icon: '/svgs/coins-white.svg', title: 'No monthly fees', subtitle: 'Bank with us without worrying about monthly fees. Keep more of your money where it belongs—in your account'},
    {icon: '/svgs/arrows-right-left.svg', title: 'No bank transfer fees', subtitle: 'Seamlessly transfer funds without the extra cost. Send and receive money with zero bank transfer fees.'}
  ];

  const confidentFutureCards = [   
    {icon: '/svgs/money-send-black.svg', title: 'Spend better', subtitle: 'Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress.'},
    {icon: '/svgs/wallet-minus.svg', title: 'Invest better', subtitle: 'Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress.'},
  ];


  const heroImage: React.CSSProperties = {
    backgroundImage: 'url("/images/financial-freedom-bg.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };

  const innerBG: React.CSSProperties = {
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)',
  };

  return (
    <main className="main-container w-full">
      <Navbar />
      <Hero />
      <FeatureSection/>

      <div className="journey-section flex flex-col items-center justify-center gap-24 px-6 py-24 md:px-10 xl:px-14 2xl:px-32 3xl:px-40">
        <div className="flex flex-col items-center justify-center gap-6">
        <span className="SFRegular text-4xl md:text-6xl lg:text-7xl 3xl:text-9xl md:w-[40rem] lg:w-[45rem] 3xl:w-[75rem] lg:leading-[5rem] text-center">Elevate Your Financial Journey with RAFT</span>
        <span className="SFRegular text-[#989898] md:w-[35rem] md:text-xl lg:w-[40rem] lg:leading-9 text-center">RAFT offers a world of financial possibilities. From investments to payments, we&apos;ve got you covered. Join us and unlock your financial potential today.</span>
        </div>
      

        <div className="flex flex-col items-center gap-6 lg:grid grid-cols-3 grid-row-2">
        <SeamlessPaymentsCard dataArray={transactionCards}/>
        <SmartInvestingCard/>
        <WealthManagementCard/>
        <FinancialPlanningCard dataArray={boxes}/>
        </div>
       
      </div>

      <div className="financial-freedom-section flex flex-col items-center justify-center gap-12 px-6 py-24 md:px-10 xl:px-14 2xl:px-32 3xl:px-40">
        <div className="flex flex-col items-center justify-center gap-6">
        <span className="SFRegular text-4xl w-[90%] leading-[3rem] md:text-6xl md:leading-[4.5rem] lg:text-7xl 3xl:text-9xl md:w-[40rem] lg:w-[45rem] 3xl:w-[75rem] lg:leading-[5rem] text-center">Your Financial Freedom, Your Way</span>
        <span className="SFRegular text-[#989898] md:w-[35rem] md:text-xl lg:w-[40rem] lg:leading-9 text-center">We believe that managing your finances should be effortless and cost-effective. That&apos;s why we offer you the freedom you deserve</span>
        </div>

        <div style={heroImage} className="h-[24rem] mt-6 lg:h-[35rem] xl:h-[45rem] 3xl:h-[55rem] w-full rounded-lg">
        <div style={innerBG} className="inner w-full h-full overflow-hidden relative">
          <MoneySendCard/>
          <MoneyReceiveCard/>

        </div>
        </div>

        <div className="flex flex-col items-start gap-8 lg:grid lg:grid-cols-3">
         <FreedomFeatures dataArray={freedomFeatures}/>

        </div>
       
      </div>

      <GreenBanner/>

      <div className="flex flex-col items-center justify-center gap-24 px-6 py-24 md:px-10 xl:px-24 2xl:px-32 3xl:px-40">
        <div className="flex w-full flex-col items-start justify-center gap-6">
        <span className="SFRegular text-4xl leading-[3rem] md:text-6xl md:leading-[4.5rem] lg:text-7xl 3xl:text-9xl md:w-[40rem] lg:w-[45rem] 3xl:w-[75rem] lg:leading-[5rem] text-start">Confidently Shape Your Financial Future</span>
        <span className="SFRegular text-[#989898] md:w-[35rem] md:text-xl lg:w-[40rem] lg:leading-9 text-left">At RAFT, we empower you to confidently shape your financial future. Our modern approach simplifies saving and investing, making it easier than ever.</span>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <ConfidentFutureCards dataArray={confidentFutureCards}/>
        </div>

        <div className="flex flex-row items-center justify-between md:max-lg:justify-center md:gap-16 w-full">
          <div className="cities flex flex-col gap-4 items-center">
            <span className="SFMedium text-xl md:text-3xl lg:text-6xl">50<span className="plus">+</span></span>
            <span className="SFRegular text-[#BDBDBD] uppercase text-sm">Cities</span>
          </div>

          <div className="cities flex flex-col gap-4 items-center">
            <span className="SFMedium text-xl md:text-3xl lg:text-6xl">50,000<span className="plus">+</span></span>
            <span className="SFRegular text-[#BDBDBD] uppercase text-sm">Transactions</span>
          </div>

          <div className="cities flex flex-col gap-4 items-center">
            <span className="SFMedium text-xl md:text-3xl lg:text-6xl">3<span className="plus">M+</span></span>
            <span className="SFRegular text-[#BDBDBD] uppercase text-sm">Users</span>
          </div>

          <div className="cities flex flex-col gap-4 items-center">
            <span className="SFMedium text-xl md:text-3xl lg:text-6xl">5</span>
            <span className="SFRegular text-[#BDBDBD] uppercase text-sm">User Ratings</span>
          </div>
        </div>

      
       
      </div>

      <VideoBackground/>

      
    </main>
  );
}
