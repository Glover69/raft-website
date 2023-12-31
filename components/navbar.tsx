// components/Navbar.tsx
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import LoadingScreen from "./loading-page";

interface NavbarProps {
  onAnimationStart: boolean;
  onAnimationEnd: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAnimationStart, onAnimationEnd }) => {

  useEffect(() => {

    if(onAnimationStart){
      
    const logo = document.querySelector(".navbar .left");
    const menuMobile = document.querySelector(".navbar .right-mobile");
    const navbar = document.querySelector('.navbar');
    const middleNav = document.querySelector('.navbar .middle');
    const rightNav = document.querySelector('.navbar .right-desktop');

    gsap.to(middleNav, {
      delay: 2,
      opacity: 1,
      y: 0,
      duration: 1
    })

    gsap.to(rightNav, {
      delay: 2,
      opacity: 1,
      y: 0,
      duration: 1
    })

    gsap.to(navbar,
      {
       delay: 1,
       opacity: 1,
       width: '100%',
       duration: 0.5,
       ease: 'power1.inOut',
     });
    
    gsap.to(logo,
     {
      delay: 2,
      opacity: 1,
      y: 0,
      duration: 1
    });

    gsap.to(menuMobile,
      {
       delay: 2.5,
       opacity: 1,
       x: 0,
       duration: 1,

       onComplete: () => {
        onAnimationEnd();
       }
     });
    }

  }, [onAnimationStart, onAnimationEnd]);


  
  return (
    <div className="navbar w-0 opacity-0 flex flex-row items-center justify-between px-5 py-4 border-b-[0.5px] border-[#3D3D3D]">
      <div className="left opacity-0 translate-y-[-2rem] flex flex-row items-center gap-1 lg:w-[10.5rem]">
        <Image className="raft-logo" src="/svgs/raft-logo-sm.svg" alt="" width={40} height={40}/>
        <span className="SFRegular text-2xl">Raft</span>
      </div>

      <div className="middle hidden opacity-0 translate-y-[-2rem] lg:flex lg:items-center lg:gap-12">
        <span className="SFRegular text-[#BDBDBD] 2xl:text-xl">Solutions</span>
        <span className="SFRegular text-[#BDBDBD] 2xl:text-xl">Learn</span>
        <span className="SFRegular text-[#BDBDBD] 2xl:text-xl">About</span>
      </div>

      <div className="right-mobile opacity-0 translate-x-[-2rem] lg:hidden">
      <Image src="/svgs/icn-menu.svg" alt="" width={40} height={40}/>
      </div>

      <div className="right-desktop opacity-0 translate-y-[-2rem] hidden lg:flex items-center gap-4">
      <span className="SFMedium 2xl:text-xl">Login</span>
      <button className="bg-[#2B892E] SFMedium rounded-[6rem] px-4 py-2 2xl:text-xl">Get Started</button>

      </div>

      
    </div>
  );
};

export default Navbar;
