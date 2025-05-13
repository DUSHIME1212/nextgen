"use client"

import PricingCard from '@/components/cards/PricingCard'
import React from 'react'

const HeroPricing = () => {
  const pricingRef = React.useRef<HTMLDivElement>(null);
  return (
    <section className="py-24 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 -full blur-3xl opacity-20 animate-pulse-soft bg-shape"></div>
    
    <div className="" ref={pricingRef}>
      <div className="mb-20 space-y-4">
        <div className="inline-block -full bg-blue-200   px-4 py-1.5 text-sm font-medium text-blue-500 ">
          Pricing Plans
        </div>
        <h2 className="section-title font-media md:w-2/3">
          Transparent pricing for every need
        </h2>
        <p className="section-subtitle mx-auto">
          Choose the plan that works best for your project. Not sure which one is right for you? Contact us for a custom quote.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PricingCard 
          title="Basic"
          price="500,000 rwf"
          description="Perfect for small businesses looking to establish their online presence."
          features={[
            "Simple website design",
            "Mobile responsive",
            "Up to 5 pages",
            "Basic SEO setup",
            "Contact form integration"
          ]}
          buttonText="Get Started"
          color="bg-blue-400"
          index={0}
        />
        
        <PricingCard 
          title="Professional"
          price="800,000 rwf"
          description="Ideal for growing businesses that need comprehensive digital solutions."
          features={[
            "Custom website design",
            "Mobile responsive",
            "Up to 10 pages",
            "Advanced SEO optimization",
            "Content management system",
            "Social media integration",
            "1 month of support"
          ]}
          buttonText="Choose Plan"
          color="bg-primary"
          popular={true}
          index={1}
        />
        
        <PricingCard 
          title="Enterprise"
          price="Custom"
          description="Tailored solutions for established businesses with complex requirements."
          features={[
            "Premium custom design",
            "Unlimited pages",
            "E-commerce functionality",
            "Advanced analytics",
            "API integrations",
            "Performance optimization",
            "3 months of priority support"
          ]}
          buttonText="Contact Us"
          color="bg-purple-400"
          index={2}
        />
      </div>
    </div>
  </section>)
}

export default HeroPricing