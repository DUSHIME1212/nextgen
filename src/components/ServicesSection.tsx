"use client";

import gsap from "gsap";
import { Globe, Layout, Palette, Zap } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="">
        <div className="mb-16 space-y-4">
          <div className="inline-block rounded-full bg-blue-200 px-4 py-1.5 text-sm font-medium text-blue-500">
            Our Services
          </div>
          <h2 className="section-title ">
            Expert services for your digital needs
          </h2>
          <p className="section-subtitle mx-auto">
            We combine creativity with technical expertise to deliver
            exceptional digital experiences that elevate your brand and engage
            your audience.
          </p>
        </div>

        <div
          ref={servicesRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="service-item rounded-lg border border-blue-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-200 text-blue-500">
              <Layout size={24} />
            </div>
            <h3 className="font-display mb-3 text-xl font-medium">
              UI/UX Design
            </h3>
            <p className="text-muted-foreground">
              Creating intuitive and visually appealing user interfaces that
              enhance user experience and engagement.
            </p>
          </div>

          <div className="service-item rounded-lg border border-blue-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-200 text-blue-500">
              <Globe size={24} />
            </div>
            <h3 className="font-display mb-3 text-xl font-medium">
              Web Renovation
            </h3>
            <p className="text-muted-foreground">
              Transforming outdated websites into modern, responsive, and
              high-performing digital platforms.
            </p>
          </div>

          <div className="service-item rounded-lg border border-blue-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-200 text-blue-500">
              <Palette size={24} />
            </div>
            <h3 className="font-display mb-3 text-xl font-medium">
              Graphic Design
            </h3>
            <p className="text-muted-foreground">
              Crafting stunning visual assets, brand identities, and marketing
              materials that capture attention.
            </p>
          </div>

          <div className="service-item rounded-lg border border-blue-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-200 text-blue-500">
              <Zap size={24} />
            </div>
            <h3 className="font-display mb-3 text-xl font-medium">
              Brand Strategy
            </h3>
            <p className="text-muted-foreground">
              Developing comprehensive brand strategies that help businesses
              stand out in competitive markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
