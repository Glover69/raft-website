import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FeatureSection from "../components/feature-section";
import SeamlessPaymentsCard from "../components/seamless-payment-card";
import SmartInvestingCard from "../components/smart-investing-card";
import WealthManagementCard from "../components/wealth-management-card";
import FinancialPlanningCard from "@/components/financial-planning-card";

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

      <div className="financial-freedom-section flex flex-col items-center justify-center gap-24 px-6 py-24 md:px-10 xl:px-14 2xl:px-32 3xl:px-40">
        <div className="flex flex-col items-center justify-center gap-6">
        <span className="SFRegular text-4xl w-[90%] leading-[3rem] md:text-6xl md:leading-[4.5rem] lg:text-7xl 3xl:text-9xl md:w-[40rem] lg:w-[45rem] 3xl:w-[75rem] lg:leading-[5rem] text-center">Your Financial Freedom, Your Way</span>
        <span className="SFRegular text-[#989898] md:w-[35rem] md:text-xl lg:w-[40rem] lg:leading-9 text-center">We believe that managing your finances should be effortless and cost-effective. That&apos;s why we offer you the freedom you deserve</span>
        </div>

        <div style={heroImage} className="h-[24rem] lg:h-[35rem] xl:h-[45rem] 3xl:h-[55rem] w-full rounded-lg">
        <div style={innerBG} className="inner w-full h-full">

        </div>
     </div>
       
      </div>
    </main>
  );
}
