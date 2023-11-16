// components/Navbar.tsx
"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const cardTopBG: React.CSSProperties = {
  backgroundImage: 'url("/images/mesh-bg.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const overlay: React.CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(19, 19, 19, 0.00) 0%, #131313 100%)",
};

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const layer = document.querySelector('.layer');

  useEffect(() => {

    const videoElement = videoRef.current;

    if (!videoElement) return;

    const playVideo = () => {
      videoElement.play();
    };

    const pauseVideo = () => {
        videoElement.pause();
      };

    gsap.to(videoElement, {
      scrollTrigger: {
        trigger: videoElement,
        start: 'top center', 
        end: 'bottom center', 
        scrub: true,
        // markers: true,
        onEnter: playVideo,
        onLeave: pauseVideo
      },
    });

    // gsap.fromTo('.layer', {
    //     opacity: 0
    // }, 
    // {
    //     opacity: 1,
    //     scrollTrigger: {
    //         trigger: '.layer',
    //         start: 'top center',
    //         end: 'bottom center',
    //         scrub: true,
    //     }
    // })

    // gsap.fromTo(layer, {
    //     opacity: 0.2,
    //   },
    //   {
    //     backgroundPositionX: '0%',
    //     opacity: 1,
    //     x: 100,
    //     stagger: 0.2,
    //     ease: 'back.out',
    //     scrollTrigger: {
    //       trigger: layer,
    //       start: 'top 50%',
    //       // end: 'top center',
    //       scrub: true,
    //       markers: true,
    //       // pin: true
    //     },
    //   });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };


    // videoRef.current?.play();
  }, []);

  return (
    <div className="video-background h-[30rem] lg:h-[40rem] xl:h-[45rem] 2xl:h-[50rem] relative">
      <div className="layer w-full h-full absolute bg-[#00000075] top-0 left-0 z-10"></div>
      <video
        className="w-full h-full object-cover absolute top-0 left-0"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/group-selfie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
