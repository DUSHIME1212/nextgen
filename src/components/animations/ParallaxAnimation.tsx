"use client"

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxAnimationProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxAnimation = ({
  children,
  speed = 0.5,
  className = "",
}: ParallaxAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      y: `${speed * -100}px`,
      ease: "none",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxAnimation;
