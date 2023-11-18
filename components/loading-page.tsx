import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface LoadingScreenProps {
    onAnimationCompletion: () => void;
  }

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onAnimationCompletion }) => {

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    if(document.body.style.overflowY = 'hidden'){
        console.log('hidden');
    }

    const loader = document.querySelector('.raft-loader');
    const loaderScreen = document.querySelector('.loader-screen');
    const main = document.querySelector('main');


    function loaderFunc(){
        // document.body.style.overflowY = 'hidden';
        
        gsap.to(loader, 
        {
            opacity: 1,
            duration: 1.5,
            ease: 'power1.inOut',
            repeat: 6,
            yoyo: true
        });
    }

    loaderFunc();

    gsap.to(loaderFunc, {
        duration: 7.5,

        onComplete: () => {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.5,
                ease: 'power1.in'
            });

            gsap.to(loaderScreen, {
                display: 'none',
                height: 0,
                opacity: 0,
                delay: 0.5,
                duration: 1,
                ease: 'power1.inOut',

                onComplete: () => {
                    onAnimationCompletion();
                }
            });
        }
    })
   
    

    
  }, [onAnimationCompletion]);

  return (
    <div className="loader-screen bg-black flex items-center absolute top-0 left-0 z-30 justify-center w-full h-screen">
    <Image className='raft-loader opacity-20' src="/svgs/raft-logo-sm.svg" alt="" width={100} height={100}/>
    </div>
  );
};

export default LoadingScreen;
