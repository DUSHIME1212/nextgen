"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

const Loader = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const custom = CustomEase.create("custom", ".87, 0, .13, 1");

    
    gsap.set(progressRef.current, { width: "25%" });

    
    gsap.to(progressRef.current, {
      width: "100%",
      duration: 1.8,
      ease: custom,
      
    });

    
    gsap.fromTo(
      counterRef.current,
      { textContent: "0%" },
      {
        textContent: "100%",
        duration: 1.8, 
        ease: custom,
        snap: { textContent: 1 },
        onComplete: () => {
        if (progressRef.current) {
          progressRef.current.style.display = "none";
        }
      },
      }
    );

    
    gsap.to(heroRef.current, {
      delay: 1.8,
      ease:custom, 
      height: 0,

      duration: 1.5,
      onComplete: () => {
        
        if (heroRef.current) {
          heroRef.current.style.display = "none";
        }
      },
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className="fixed top-0 inset-0 z-[100] font-media flex items-center justify- bg-white"
    >
      <div
        ref={progressRef}
        className="progress-bar flex w-[25%] items-center justify-between gap-8 bg-blue-700 p-8 text-white"
      >
        <p>Loading</p>
        <p>
          <span ref={counterRef} id="counter">
            0%
          </span>
        </p>
      </div>
    </div>
  );
};

export default Loader;