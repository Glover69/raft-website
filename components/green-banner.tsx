"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import SplitText from 'split-text';
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const GreenBanner: React.FC = () => {
  // const [lettersRef, setLettersRef] = useArrayRef();

  // function useArrayRef(){
  //     const lettersRef = useRef([]);
  //     lettersRef.current = [];
  //     return [lettersRef, (ref: any) => ref && lettersRef.current.push(ref)];
  // }

  // const elementRef = useRef(null);

  // const text = 'Smart investments, secure payments, and expert guidance, all in one'

  useEffect(() => {
    const text = new SplitType(".split-text", { types: "words" });
    const words = text.words;

    gsap.fromTo(words, {
      opacity: 0.2,
      stagger: 0.2,
    },
    {
      backgroundPositionX: '0%',
      opacity: 1,
      // x: 100,
      stagger: 0.2,
      ease: 'back.out',
      scrollTrigger: {
        trigger: ".split-text",
        start: 'top 50%',
        // end: 'top center',
        scrub: true,
        markers: false,
        // pin: true
      },
    });
    // const reveal = gsap.to(lettersRef.current, {
    //     scrollTrigger: {
    //         trigger: elementRef.current,
    //         scrub: true,
    //         start: 'top center',
    //         end: 'bottom 80%',

    //     },
    //     opacity: 0.2,
    //     stagger: 0.1

    // })

    // return () => {
    //     reveal.kill()
    // }
  }, []);

  return (
    <div className="main-green-container bg-[#48D64C] w-full h-fit p-6 md:p-10 lg:p-12 xl:p-24 2xl:p-32 flex">
        <span className="split-text text-[#070606] SFRegular text-6xl leading-[4.5rem] md:text-8xl md:leading-[7.5rem] xl:text-9xl xl:leading-[8.5rem] 2xl:text-[9rem] 2xl:leading-[9.5rem] lg:w-[90%]">
          Smart investments, secure payments, and expert guidance, all in one
        </span>
    </div>
  );
};

export default GreenBanner;
