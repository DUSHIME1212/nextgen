"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HowItWorksStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}

const HowItWorksStep = ({ 
  step, 
  title, 
  description, 
  icon, 
  color, 
  index 
}: HowItWorksStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!stepRef.current || !iconRef.current || !contentRef.current) return;
    
    // Main entry animation
    gsap.fromTo(
      stepRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stepRef.current,
          start: "top bottom-=100"
        }
      }
    );
    
    // Icon bounce animation
    gsap.fromTo(
      iconRef.current,
      { scale: 0 },
      { 
        scale: 1, 
        duration: 0.6, 
        delay: index * 0.2 + 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: stepRef.current,
          start: "top bottom-=100"
        }
      }
    );
    
    // Content reveal
    gsap.fromTo(
      contentRef.current.children,
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.15,
        delay: index * 0.2 + 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stepRef.current,
          start: "top bottom-=100"
        }
      }
    );
  }, [index]);
  
  return (
    <div 
      ref={stepRef}
      className="relative flex items-start p-6"
    >
      {/* Step connector line */}
      {index < 3 && (
        <div className="absolute top-24 left-12 w-0.5 h-24 bg-gray-200"></div>
      )}
      
      {/* Icon container */}
      <div 
        ref={iconRef}
        className={`w-16 h-16 rounded-lg flex items-center justify-center mr-6 z-10 ${color}`}
        style={{ boxShadow: `0 8px 20px -4px ${color.includes('pink') ? 'rgba(236, 72, 153, 0.3)' : color.includes('blue') ? 'rgba(96, 165, 250, 0.3)' : color.includes('purple') ? 'rgba(167, 139, 250, 0.3)' : 'rgba(174, 219, 54, 0.3)'}` }}
      >
        {icon}
      </div>
      
      {/* Content */}
      <div ref={contentRef} className="flex-1">
        <div className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-black/5 mb-2">
          Step {step}
        </div>
        <h3 className="text-xl font-display font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksStep;
