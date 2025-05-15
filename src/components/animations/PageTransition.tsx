"use client";
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import CustomEase from 'gsap/CustomEase';
gsap.registerPlugin(CustomEase);

const animationease = CustomEase.create("hop", "0.9, 0, 0.1, 1");

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const revealer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!revealer.current) return;
    gsap.set(revealer.current, {
      scaleY: 1,
      autoAlpha: 1,
      transformOrigin: "center center",
    });
    const tl = gsap.to(revealer.current, {
      scaleY: 0,
      autoAlpha: 0,
      duration: 0.5,
      ease: animationease,
    });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div>
      <div 
        ref={revealer} 
        className="fixed top-0 left-0 z-50 w-screen h-screen bg-white"
      />
      {children}
    </div>
  );
};

export default PageTransition;