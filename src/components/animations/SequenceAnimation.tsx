"use client"

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface SequenceAnimationProps {
  children: ReactNode;
  delay?: number;
  staggerAmount?: number;
  className?: string;
}

const SequenceAnimation = ({
  children,
  delay = 0.2,
  staggerAmount = 0.2,
  className = "",
}: SequenceAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current.children,
      { 
        y: 30, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: delay,
        stagger: staggerAmount,
        ease: "power3.out",
      }
    );
  }, [delay, staggerAmount]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default SequenceAnimation;
