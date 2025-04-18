"use client"
import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  index: number;
}

const TestimonialCard = ({ 
  name, 
  position, 
  company, 
  image, 
  quote, 
  rating, 
  index 
}: TestimonialCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { 
        y: 60, 
        opacity: 0,
        scale: 0.95
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100"
        }
      }
    );
    
    // Add hover animation
    cardRef.current.addEventListener("mouseenter", () => {
      gsap.to(cardRef.current, { 
        duration: 0.3,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      });
    });
    
    cardRef.current.addEventListener("mouseleave", () => {
      gsap.to(cardRef.current, { 
        y: 0, 
        duration: 0.3,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      });
    });
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className="relative bg-white rounded-xl p-6 shadow-md transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-16 relative h-16 mr-4 rounded-full overflow-hidden">
          <Image
          fill  
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-medium">{name}</h4>
          <p className="text-sm text-muted-foreground">{position}, {company}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-muted-foreground italic">"{quote}"</p>
      
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
        <span className="text-white text-4xl  font-bold">❝</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
