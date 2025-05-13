"use client";

import { Button } from "@/components/ui/button";
import { api, blogExample, perks, questions } from "@/lib/utils";
import { Check, Plus } from 'lucide-react';
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdEventAvailable } from "react-icons/md";
import { RiBuilding2Fill, RiSpaceShipFill } from "react-icons/ri";
import { ArrowRight, Palette, Globe, Layout, Zap, Target, MessageSquare, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Animatepara } from "@/lib/Animation";
import Image from "next/image";
import { date } from "zod";
import { Blog } from "../blog/page";
import AnimationScreen from "./AnimationScreen";
import MarqueeSection from "@/components/MarqueeSection";
import HeroSection from "./HeroSection";
import HeroProjects from "./HeroProjects";
import TestimonialsSection from "@/components/TestimonialsSection";
import HeroPricing from "./HeroPricing";
import ServicesSection from "@/components/ServicesSection";
import HeroGrid from "./HeroGrid";
import Heroteam from "./Heroteam";
import HeroWhatwedo from "./HeroWhatwedo";
gsap.registerPlugin(ScrollTrigger);





const Hero = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const frameworksRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const sectionTitles = document.querySelectorAll(".section-title-animation");
    sectionTitles.forEach(title => {
      gsap.fromTo(
        title,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top bottom-=150",
          },
        }
      );
    });
    
    // Animate background elements
    const backgroundElements = document.querySelectorAll(".bg-shape");
    backgroundElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
          }
        }
      );
    });
  }, []);
  useGSAP(() => {
    gsap.from(".h1", {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: "h1",
        start: "top 80%",
        end: "bottom 60%",
      },
    });

    gsap.from(".div", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".div",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
      },
    });
  });



  const [blogData, setBlogData] = useState<Blog[]>([]); 

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const { data } = await api.get("api/blogs?populate=*");
        setBlogData(data.data);
        
        return data;

      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }

    fetchBlogData();
  }, []);

  if (!blogData) return <AnimationScreen/>;
  


  return (
    <section className="px-8 py-16 md:px-16">
      {/* first */}
      <HeroSection/>

      
          
      <ServicesSection/>
      {/* <MarqueeSection/> */}
      <HeroProjects/>
      <TestimonialsSection/>
      <HeroWhatwedo/>
      <HeroPricing/>
      <div className="flex min-h-fit flex-col items-start justify-center py-16">
        <div className="flex w-2/3 flex-col items-start text-start">
          <h1 className="mb-4 w-full text-start md:w-1/3">Blog</h1>
          <p className="w-full lg:w-2/3">
            Stay updated with the latest news, feature releases, and insights in
            the cybersecurity and infrastructure by reading Nextgen blog.
          </p>
        </div>
        <div className="mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(blogData) && blogData.map((blog: Blog) => (
            <div
              key={Math.random()}
              className="bg-blue- group relative flex flex-col items-start gap-4 overflow-clip text-center  duration-700"
            >
              <div className="relative min-h-72 w-full">
                <Image
                  src={blog.banner.url || "/placeholder.svg"}
                  alt=""
                  className="object-cover"
                  fill
                />
              </div>
              <div className="p-4 px-8 text-start">
                <h1 className="text-2xl min-h-20">{blog.title}</h1>
                <p className="line-clamp-2">{blog.shortdescription}</p>
              <Button asChild className="mt-4 bg-blue-700">
                <Link href={"blog/"+blog.slug}>
                  Read More</Link>
              </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Heroteam/>
    </section>
  );
};

export default Hero;
