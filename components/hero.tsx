// components/Navbar.tsx
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { TLSSocket } from "tls";

const divStyle: React.CSSProperties = {
    backgroundImage: 'url("/images/mesh-bg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };

  const heroImage: React.CSSProperties = {
    backgroundImage: 'url("/images/raft-hero-bg.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };

  const innerBG: React.CSSProperties = {
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)',
  };

  interface HeroProps{
    onAnimationStart: boolean;
  }

const Hero: React.FC<HeroProps> = ({ onAnimationStart }) => {

  useEffect(() => {

    if(onAnimationStart){

      console.log('Hello');

      const heroTextMain = document.querySelector('.main-hero-text');


      gsap.fromTo(heroTextMain, {
        y: 50,
        ease: 'power4',
        duration: 3,
        delay: 3,
        opacity: 0
      },{
        y: 0,
        opacity: 1
      });

      gsap.fromTo('.hero-subtitle', {
        x: -50,
      }, {
        x: 0,
        ease: 'power4',
        duration: 3,
        opacity: 1,
        delay: 0.5
      })

      gsap.to('.hero-upper', {
        opacity: 1,
        duration: 0.5,
        ease: 'power4'
      })

      gsap.fromTo('.main-hero-wrapper .hero-image', {
        width: '0%',
        opacity: 0,
      },{
        width: '100%',
        duration: 3,
        opacity: 1,
        delay: 2,
        ease: 'power4'
      })

      gsap.to('.card-raft, button', {
        opacity: 1,
        ease: 'power4',
        duration: 2.5,
        delay: 3.5,

        onComplete: () => {
          document.body.style.overflowY = 'unset';
        }
      })

    } 

  })

  return (
    <div className="main-hero-wrapper flex flex-col items-center justify-center px-6 md:px-10 3xl:px-12 py-24 gap-20">
     <div style={divStyle} className="hero-upper opacity-0 flex flex-col items-center gap-4">
        <div className="card-raft opacity-0 flex flex-row items-center gap-2 rounded-[6rem] py-2 px-4 border-[0.2px] border-[#989898] bg-[#FFFFFF26] backdrop-blur-[10px]">
            <span className="SFRegular text-[#DCDCDC]">Introducing Raft Cards</span>
            <Image src="/svgs/chevron-right.svg" alt="" width={20} height={20}/>
        </div>

        <div className="flex flex-col items-center gap-4 overflow-hidden w-fit h-fit">
        <h1 className="SFRegular opacity-0 main-hero-text text-4xl md:text-6xl lg:text-7xl 3xl:text-9xl md:w-[40rem] 3xl:w-[65rem] lg:leading-[5rem] text-center overflow-hidden">Building the future of banking.</h1>
        </div>

        <span className="SFRegular opacity-0 hero-subtitle text-[#BDBDBD] md:w-[35rem] md:text-2xl lg:leading-9 text-center">Experience the future of banking with RAFT. We&apos;re here to empower your financial journey.</span>

        <button className="bg-[#2B892E] SFMedium rounded-[6rem] px-8 py-4 3xl:px-10 3xl:py-5 2xl:text-xl opacity-0">Get Started</button>
    </div>
        


     <div style={heroImage} className="h-[24rem] lg:h-[35rem] xl:h-[45rem] 3xl:h-[55rem] w-0 rounded-lg opacity-0 hero-image">
        <div style={innerBG} className="inner w-full h-full">

        </div>
     </div>
      
    </div>
  );
};

export default Hero;
