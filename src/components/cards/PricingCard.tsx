"use client"
import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  color: string;
  index: number;
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  popular = false, 
  buttonText, 
  color,
  index
}: PricingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={cardRef}
      className={`relative -2xl border p-6 transition-all duration-300 ${popular ? 'border-primary/30 shadow-xl z-10' : 'border-gray-200 shadow-md'}`}
      style={{ 
        backgroundColor: popular ? `${color}05` : 'white',
        zIndex: popular ? 5 : 1 
      }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary px-4 py-1 -full text-white text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div ref={contentRef}>
        <h3 className="text-xl font-display font-medium mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-display font-medium">{price}</span>
          {price !== 'Custom' && <span className="text-muted-foreground ml-1">/project</span>}
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <div className={`w-5 h-5 -full ${color} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                <Check size={12} className="text-white" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <Link
          href="/contact"
          className={`block w-full py-3 -md text-center font-medium transition-colors ${
            popular 
              ? 'bg-primary text-white hover:bg-primary/90' 
              : 'bg-white border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
