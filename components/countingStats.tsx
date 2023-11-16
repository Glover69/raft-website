import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CountingStats = () => {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const countElement = countRef.current;
    const countOne = document.querySelector('.value .countOne');
    const countTwo = document.querySelector('.value .countTwo');
    const countThree = document.querySelector('.value .countThree');
    const countFour = document.querySelector('.countFour');


    

    if (!countElement) return;


    gsap.to(countOne, {
      duration: 2,
      innerHTML: 50,
      snap: 'innerHTML',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: countOne,
        start: 'bottom 70%',
        markers: true,
      }
    });

    gsap.to(countTwo, {
      delay: 1.5,
      duration: 2,
      innerHTML: '50000',
      snap: 'innerHTML',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: countTwo,
        start: 'bottom 70%'
      }
    });

    gsap.to(countThree, {
        delay: 2.5,
        duration: 0.5,
        innerHTML: '3',
        snap: 'innerHTML',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: countThree,
          start: 'bottom 70%'
        }
      });

      gsap.to(countFour, {
        delay: 3.5,
        duration: 0.5,
        innerHTML: '5',
        snap: 'innerHTML',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: countFour,
          start: 'bottom 70%'
        }
      });
    
  }, []);

  return (
    <div className="flex flex-row items-center justify-between md:max-lg:justify-center md:gap-16 w-full">
          <div className="cities flex flex-col gap-4 items-center">
            <div className="value flex items-center">
            <span ref={countRef} className="countOne SFMedium text-xl md:text-3xl lg:text-6xl">0</span>
            <span className="plus SFMedium text-xl md:text-3xl lg:text-6xl">+</span>
            </div>
            <span className="SFRegular text-[#BDBDBD] uppercase text-sm">Cities</span>
          </div>

          <div className="cities flex flex-col gap-4 items-center">
          <div className="value flex items-center">
            <span ref={countRef} className="countTwo SFMedium text-xl md:text-3xl lg:text-6xl">0</span>
            <span className="plus SFMedium text-xl md:text-3xl lg:text-6xl">+</span>
            </div>
            <span className="SFRegular text-[#BDBDBD] uppercase text-sm">Transactions</span>
          </div>

          <div className="cities flex flex-col gap-4 items-center">
          <div className="value flex items-center">
            <span ref={countRef} className="countThree SFMedium text-xl md:text-3xl lg:text-6xl">0</span>
            <span className="plus SFMedium text-xl md:text-3xl lg:text-6xl">M+</span>
            </div>
            <span className="SFRegular text-[#BDBDBD] uppercase text-sm">Users</span>
          </div>

          <div className="cities flex flex-col gap-4 items-center">
            <span ref={countRef} className="countFour SFMedium text-xl md:text-3xl lg:text-6xl">0</span>
            <span className="SFRegular text-[#BDBDBD] uppercase text-sm">User Ratings</span>
          </div>
        </div>
  );
};

export default CountingStats;
