"use client"

import gsap from 'gsap';
import { Globe, Layout, Palette, Zap } from 'lucide-react';
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
    const servicesRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!servicesRef.current) return;

    const serviceItems = servicesRef.current.querySelectorAll(".service-item");
    gsap.fromTo(
      serviceItems,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top bottom-=100",
        },
      }
    );
    })
  return (
    <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute w-72 h-72 bg-blue-200   -z-20 rounded-full blur-3xl opacity-20 -top-20 -left-20 animate-pulse-soft bg-shape"></div>
          <div className="absolute w-64 h-64 bg-blue-200   rounded-full blur-3xl opacity-20 bottom-20 right-20 animate-pulse-soft bg-shape"></div>
          
          <div className="">
            <div className="mb-16">
              <div className="inline-block rounded-full bg-blue-200   px-4 py-1.5 text-sm font-medium text-blue-500   mb-4">
                Our Services
              </div>
              <h2 className="section-title section-title-animation">
                Expert services for your digital needs
              </h2>
              <p className="section-subtitle mx-auto">
                We combine creativity with technical expertise to deliver exceptional digital experiences that elevate your brand and engage your audience.
              </p>
            </div>
            
            <div 
              ref={servicesRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <div className="service-item bg-white rounded-lg p-6 shadow-sm border border-blue-200  hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-200   text-blue-500   mb-6">
                  <Layout size={24} />
                </div>
                <h3 className="text-xl font-display font-medium mb-3">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  Creating intuitive and visually appealing user interfaces that enhance user experience and engagement.
                </p>
              </div>
              
              <div className="service-item bg-white rounded-lg p-6 shadow-sm border border-blue-200  hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-200   text-blue-500   mb-6">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Web Renovation</h3>
                <p className="text-muted-foreground">
                  Transforming outdated websites into modern, responsive, and high-performing digital platforms.
                </p>
              </div>
              
              <div className="service-item bg-white rounded-lg p-6 shadow-sm border border-blue-200  hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-200   text-blue-500   mb-6">
                  <Palette size={24} />
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Graphic Design</h3>
                <p className="text-muted-foreground">
                  Crafting stunning visual assets, brand identities, and marketing materials that capture attention.
                </p>
              </div>
              
              <div className="service-item bg-white rounded-lg p-6 shadow-sm border border-blue-200  hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-200   text-blue-500   mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Brand Strategy</h3>
                <p className="text-muted-foreground">
                  Developing comprehensive brand strategies that help businesses stand out in competitive markets.
                </p>
              </div>
            </div>
          </div>
        </section>
        

  )
}

export default ServicesSection