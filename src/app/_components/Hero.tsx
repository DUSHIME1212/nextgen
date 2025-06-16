"use client";

import { Button } from "@/components/ui/button";
import { api, blogExample, perks, questions } from "@/lib/utils";
import { Check, Plus, ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { MdEventAvailable } from "react-icons/md";
import { RiBuilding2Fill, RiSpaceShipFill } from "react-icons/ri";
import {
  ArrowRight,
  Palette,
  Globe,
  Layout,
  Zap,
  Target,
  MessageSquare,
  Sparkles,
} from "lucide-react";
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
import Heroteam, { SkeletonTeamCard } from "./Heroteam";
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
    sectionTitles.forEach((title) => {
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
        },
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
          },
        },
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

  if (!blogData) return <AnimationScreen />;

  return (
    <section className="py-16">
      <HeroSection />
      <ServicesSection />
      <HeroProjects />
      <TestimonialsSection />
      <HeroWhatwedo />
      <HeroPricing />
      <div className="flex min-h-fit flex-col items-start justify-center p-8 py-24 md:px-16 lg:px-32">
        <div className="flex w-full flex-col space-y-4 items-center text-center">
          <span className="flex items-center gap-2 border-2 border-yellow-500 bg-white/10 p-1 px-4 text-yellow-500">
            <ZapIcon
              className="-ms-0.5 opacity-60"
              size={12}
              aria-hidden="true"
            />
            Articles
          </span>
          <h1 className="mb-4 w-full text-start md:w-2/3">
            Insight and Updates
          </h1>
          <p className="w-full lg:w-2/3">
            A collection of hand-picked articles for freelancers, by
            freelancers. Deep dives, insights, and honest advice to navigate the
            freelance landscape.
          </p>
        </div>
        <div className="mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog: Blog) => (
            <Suspense fallback={<SkeletonTeamCard />}>
              <Link
                href={"blog/" + blog.slug}
                key={Math.random()}
                className="bg-blue- group relative flex flex-col items-start gap-4 overflow-clip text-center duration-700"
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
                  <h1 className="min-h-20 text-2xl">{blog.title}</h1>
                  <p className="line-clamp-2">{blog.shortdescription}</p>
                </div>
              </Link>
            </Suspense>
          ))}
        </div>
      </div>
      <Heroteam />
    </section>
  );
};

export default Hero;
