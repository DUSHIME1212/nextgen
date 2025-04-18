"use client"
import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScaleAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  triggerOffset?: number;
  stagger?: number;
  className?: string;
}

const ScaleAnimation = ({
  children,
  delay = 0,
  duration = 0.8,
  initialScale = 0.8,
  triggerOffset = 100,
  stagger = 0,
  className = "",
}: ScaleAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const elements = stagger > 0 
      ? elementRef.current.children 
      : elementRef.current;

    gsap.fromTo(
      elements,
      {
        scale: initialScale,
        opacity: 0,
      },
      {
        scale: 1,
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
  }, [delay, duration, initialScale, triggerOffset, stagger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScaleAnimation;
