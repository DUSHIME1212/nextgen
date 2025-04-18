"use client"

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  triggerOffset?: number;
  stagger?: number;
  className?: string;
}

const FadeInAnimation = ({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 50,
  triggerOffset = 100,
  stagger = 0,
  className = "",
}: FadeInAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    let yValue = 0;
    let xValue = 0;

    switch (direction) {
      case "up":
        yValue = distance;
        break;
      case "down":
        yValue = -distance;
        break;
      case "left":
        xValue = distance;
        break;
      case "right":
        xValue = -distance;
        break;
    }

    const elements = stagger > 0 
      ? elementRef.current.children 
      : elementRef.current;

    gsap.fromTo(
      elements,
      {
        y: yValue,
        x: xValue,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: `top bottom-=${triggerOffset}`,
        },
      }
    );
  }, [delay, duration, direction, distance, triggerOffset, stagger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default FadeInAnimation;
