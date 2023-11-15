'use client';
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
    const text = new SplitType('.split-text', {types: 'words'});
    console.log(text);

    // gsap.to(text.words,
    // {
    //     scrollTrigger: {
    //         trigger: '.inner-green',
    //         start: 'top 20%',
    //         end: 'top center',
    //         scrub: 2,
    //         pin: true,
    //         markers: true,
    //     },
    //     opacity: 1,
    //     stagger: 0.2,

    // })
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
    <div className="main-green-container bg-[#48D64C] w-full h-fit p-6 md:p-10 lg:p-12 xl:p-20 flex">
        <div className="inner-green w-full h-full flex">
        <span className="split-text text-[#070606] SFRegular text-6xl leading-[4.5rem] md:text-8xl md:leading-[7.5rem] xl:text-9xl xl:leading-[8.5rem] 2xl:text-[9rem] 2xl:leading-[9.5rem] lg:w-[90%]">
      Smart investments, secure payments, and expert guidance, all in one
      </span>
        </div>
      
    </div>
  );
};

export default GreenBanner;


