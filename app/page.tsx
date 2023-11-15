import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FeatureSection from "../components/feature-section";
import SeamlessPaymentsCard from "../components/seamless-payment-card";

export default function Home() {
  return (
    <main className="main-container w-full">
      <Navbar />
      <Hero />
      <FeatureSection/>

      <div className="journey-section flex flex-col items-center justify-center gap-8 lg:grid px-6 py-24">
      <span className="SFRegular text-4xl md:text-6xl lg:text-7xl 3xl:text-9xl md:w-[40rem] 3xl:w-[65rem] lg:leading-[5rem] text-center">Elevate Your Financial Journey with RAFT</span>
        <span className="SFRegular text-[#989898] md:w-[35rem] md:text-2xl lg:leading-9 text-center">RAFT offers a world of financial possibilities. From investments to payments, we&apos;ve got you covered. Join us and unlock your financial potential today.</span>
        <SeamlessPaymentsCard/>
      </div>
    </main>
  );
}
