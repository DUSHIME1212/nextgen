"use client"

import { Button } from "@/components/ui/button";
import { perks, questions } from "@/lib/utils";
import { Check, FacebookIcon, InstagramIcon, LinkedinIcon, Plus, TwitchIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { MdEventAvailable } from "react-icons/md";
import { RiBuilding2Fill, RiSpaceShipFill } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaPinterestP, FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io5";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  useGSAP(() => {
    gsap.from("h1" , {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: "h1",
        start: "top 80%",
        end: "bottom 60%",
      }
    })
    gsap.from("p" , {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: "p",
        start: "top 80%",
        end: "bottom 60%",
      }
    })
    gsap.from(".div" , {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".div",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1
      }
    })
  })
  
  
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
  const footerlinks = [
    {
      href:"/",
      icon:<TiSocialFacebook />,
    },
    {
      href:"/",
      icon:<FaPinterestP />,
    },
    {
      href:"/",
      icon:<IoLogoLinkedin />,
    },
    {
      href:"/",
      icon:<FaXTwitter />,
    },
    
  ]

  return (
    <>
      {/* first */}
      <div className="grid pt-32 md:min-h-screen place-items-center px-8 py-16 md:px-16 lg:px-32">
        <div className="flex size-full h-fit  min-h-[512px] flex-col items-start justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 p-16 text-left text-white">
          <div className="md:w-2/3">
            <h3 className="text-yellow-400 max-md:text-2xl">
              Providing Full-Stack Development, Web Design & Branding Solutions
              for an Effective Digital Experience
            </h3>
            <p className="pt-4 text-lg max-md:text-base opacity-80">
              We offer exclusive packages that provide you with access to
              creative and technical solutions tailored to your business needs.
              Simple, reliable, and affordable – we’re here to take your digital
              presence to the next level.
            </p>
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
      <div className="iitems-center flex min-h-screen flex-col items-center justify-center px-8 py-16 md:px-16 lg:px-32">
        <h1 className="mb-16 w-full md:w-2/3 text-center">
          Our Featured Branding projects
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="relative div flex flex-col items-center justify-center rounded-lg bg-yellow-200 p-8"
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
      <div className="iitems-center flex min-h-fit flex-col items-center justify-center px-8 py-16 md:px-16 lg:px-32">
        <h1 className="mb-16 w-full md:w-1/3 text-center text-4xl">
          Packages Designed Specifically for Your Business Needs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {packages.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col div items-start justify-center rounded-lg p-8 ${item.bg} ${item.color}`}
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

      <div className="iitems-center flex min-h-fit flex-col items-center justify-center px-8 py-16 md:px-16 lg:px-32">
        <h1 className="mb-16 w-full md:w-1/3 text-center text-4xl">
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
      <div className="iitems-center flex min-h-fit flex-col md:flex-row items-start justify-center bg-blue-700 px-8 py-16 text-white md:px-16 lg:px-32">
        <div className="flex w-full flex-col md:flex-col items-start justify-start p-8 md:w-1/3">
          <h1 className="mb-4 text-7xl text-yellow-500">How it Works</h1>
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
      <div className="flex min-h-fit w-full flex-row items-center justify-start px-8 py-16 md:px-16 lg:px-32">
        <div className="grid w-full grid-cols-1 md:grid-cols-4 justify-start relative rounded-2xl bg-blue-200 p-8 md:min-h-[256px]">
          <div className="col-span-1 flex md:flex-col h-full p-4">
            <h1 className="mb-4 text-4xl text-blue-700">Get Started Today</h1>
            <p>Subscribe now, Get your website design Tomorrow!</p>
          </div>
          <div className="col-span-2 h-full p-4">
            <div className="flex flex-row items-center justify-center gap-4 text-gray-700">
              {
                footerlinks.map((link, index) => (
                  <Link href={link.href} key={index}>
                    {link.icon}
                  </Link>))
              }
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-4">
              <Link href={""} className="text-center text-base mt-4 w-full">@igor_wlrd</Link>
              <p className="text-center w-full">DESIGNED BY <span className="text-blue-700 font-bold">@__matt360</span> DEVELOPED BY  <span className="text-blue-700 font-bold">Nextgen</span></p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
