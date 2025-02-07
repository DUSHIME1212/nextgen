"use client";

import { Button } from "@/components/ui/button";
import { api, blogExample, perks, questions } from "@/lib/utils";
import { Check, Plus } from 'lucide-react';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdEventAvailable } from "react-icons/md";
import { RiBuilding2Fill, RiSpaceShipFill } from "react-icons/ri";
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
gsap.registerPlugin(ScrollTrigger);





const Hero = () => {
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

  const packages = [
    {
      title: "Start-Ups",
      description:
        "Launch your startup with a cutting-edge web presence, ensuring your digital footprint extends beyond just a logo. From web applications to scalable backend solutions, we’ve got you covered.",
      bg: "bg-blue-200",
      color: "text-blue-700",
      link: "/",
      icon: <RiSpaceShipFill />,
    },
    {
      title: "Businesses",
      description:
        "Elevate your business with a trusted partner dedicated to fulfilling your technical, design, and marketing needs. Build fast, secure, and responsive platforms to boost efficiency and growth.",
      bg: "bg-yellow-200",
      color: "text-blue-700",
      link: "/",
      icon: <RiBuilding2Fill />,
    },
    {
      title: "Event Organizers",
      description:
        "Transform your events with our package tailored exclusively for event organizers. From event websites to real-time ticketing systems, we ensure a seamless online experience.",
      bg: "bg-gray-200",
      color: "text-blue-700",
      link: "/",
      icon: <MdEventAvailable />,
    },
  ];

  const [blogData, setBlogData] = useState<Blog[]>([]); 

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const { data } = await api.get("api/blogs?populate=*");
        // console.log(data);
        setBlogData(data.data);
        console.log(blogData);
        
        return data;

      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }

    fetchBlogData();
  }, []);

  console.log(blogData);
  if (!blogData) return <AnimationScreen/>;
  


  return (
    <>
    {/* <AnimationScreen/> */}
      {/* first */}
      <div className="grid place-items-center md:min-h-screen">
        <div className="relative flex size-full h-screen flex-col items-start justify-center rounded-2xl p-16 px-8 text-left text-white md:px-16 lg:px-32">
          <Image
            src={
              "https://pbs.twimg.com/media/GedOxpSaEAAMnK3?format=jpg&name=large"}
            alt=""
            className="z-0 object-cover"
            fill
          />
          <div className="absolute left-0 size-full bg-gradient-to-br from-blue-700/20 to-blue-500" />
          <div className="z-10 md:w-2/3">
            <h3 className="text-yellow-400 max-md:text-2xl">
              Providing Full-Stack Development, Web Design & Branding Solutions
              for an Effective Digital Experience
            </h3>
            <Animatepara className="pt-4 text-lg opacity-80 max-md:text-base">
              We offer exclusive packages that provide you with access to
              creative and technical solutions tailored to your business needs.
              Simple, reliable, and affordable – we’re here to take your digital
              presence to the next level.
            </Animatepara>
          </div>
          <div>
            <Button
              variant={"gooeyLeft"}
              className="mt-8 rounded-lg bg-white from-blue-200 px-8 py-6 text-blue-700"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="iitems-center flex min-h-screen flex-col items-center justify-center px-8 py-16 md:px-16">
        <h1 className="mb-16 w-full text-center md:w-2/3">
          Our Featured Branding projects
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="div relative flex flex-col items-center justify-center rounded-lg bg-yellow-200 p-8"
            >
              <div className="relative h-72 w-full rounded-2xl bg-gray-300"></div>
              <Link href={""}>
                <Plus className="absolute right-12 top-12 size-12 rounded-full bg-white p-4" />
              </Link>
              <h3 className="pt-4">Project {item}</h3>
              <p className="opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed odio dui. Nullam quis risus eget urn{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="iitems-center flex min-h-fit flex-col items-center justify-center px-8 py-16 md:px-16">
        <h1 className="mb-16 w-full text-center text-4xl md:w-1/3">
          Packages Designed Specifically for Your Business Needs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {packages.map((item, index) => (
            <div
              key={index}
              className={`div relative flex flex-col items-start justify-center rounded-lg p-8 ${item.bg} ${item.color}`}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-2xl bg-white/10 p-4 shadow-md">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
              </div>
              <p className="mt-8 opacity-80">{item.description}</p>
              <Link href={item.link}>
                <Button
                  variant={"gooeyLeft"}
                  className="mt-8 rounded-lg bg-white from-blue-200 px-8 py-6 text-blue-700"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* this is perks */}
      <div className="flex min-h-fit flex-col items-center justify-center px-8 py-16 md:px-16">
        <h1 className="mb-16 w-full text-center text-4xl md:w-1/3">
          Full of Perks You Won’t Find Anywhere Else
        </h1>
        <div className="grid grid-rows-1 gap-4">
          {perks.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-start justify-center gap-4"
            >
              <Check className="size-6 text-blue-700" />
              <p>{item.quote}</p>
            </div>
          ))}
        </div>
      </div>
      {/* this is qa */}
      <div className="flex min-h-fit flex-col items-start justify-center bg-blue-100 px-8 py-16 md:flex-row md:px-16">
        <div className="mb-8 flex w-full flex-col items-start justify-start md:w-1/3 md:flex-col md:p-8">
          <h1 className="mb-4 text-yellow-500">How it Works</h1>
          <p>Subscribe now, Get your website design Tomorrow!</p>
        </div>
        <div className="grid w-full grid-rows-1 gap-4 md:w-2/3">
          <Accordion type="single" collapsible>
            {questions.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border-none"
              >
                <AccordionTrigger className="justify-between text-2xl hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xl opacity-70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="flex min-h-fit flex-col items-start justify-center px-8 py-16 md:px-16">
        <div className="flex w-2/3 flex-col items-start text-start">
          <h1 className="mb-4 w-full text-start md:w-1/3">Blog</h1>
          <p className="w-full lg:w-2/3">
            Stay updated with the latest news, feature releases, and insights in
            the cybersecurity and infrastructure by reading Nextgen blog.
          </p>
        </div>
        {/* this is blogs */}
        <div className="mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(blogData) && blogData.map((blog: Blog) => (
            <div
              key={Math.random()}
              className="bg-blue- group relative flex flex-col items-start gap-4 overflow-clip text-center shadow-blue-700 duration-700 hover:shadow-2xl"
            >
              <div className="relative min-h-72 w-full">
                <Image
                  src={blog.banner.url || "/placeholder.svg"}
                  alt=""
                  className="object-cover"
                  fill
                />
              </div>
              {/* <div className="absolute left-1/2 top-1/2 -z-10 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 duration-700 group-hover:size-[720px]"/> */}
              <div className="p-4 px-8 text-start">
                <h1 className="text-2xl">{blog.title}</h1>
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
    </>
  );
};

export default Hero;
