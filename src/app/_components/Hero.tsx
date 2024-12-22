import { Button } from "@/components/ui/button";
import { perks } from "@/lib/utils";
import { Check, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { MdEventAvailable } from "react-icons/md";
import { RiBuilding2Fill, RiSpaceShipFill } from "react-icons/ri";

const Hero = () => {
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

  return (
    <>
      {/* first */}
      <div className="grid min-h-screen place-items-center px-8 py-16 md:px-16 lg:px-32">
        <div className="flex size-full max-h-[512px] flex-col items-start justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 p-16 text-left text-white">
          <div className="w-2/3">
            <h3 className="text-yellow-400">
              Providing Full-Stack Development, Web Design & Branding Solutions
              for an Effective Digital Experience
            </h3>
            <p className="pt-4 text-lg opacity-80">
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
        <h1 className="mb-16 w-2/3 text-center">
          Our Featured Branding projects
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center rounded-lg bg-yellow-200 p-8"
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
      <div className="iitems-center flex min-h-screen flex-col items-center justify-center px-8 py-16 md:px-16 lg:px-32">
        <h1 className="mb-16 w-1/3 text-center text-4xl">
          Packages Designed Specifically for Your Business Needs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {packages.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-start justify-center rounded-lg p-8 ${item.bg} ${item.color}`}
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

      <div className="iitems-center flex min-h-screen flex-col items-center justify-center px-8 py-16 md:px-16 lg:px-32">
        <h1 className="mb-16 w-1/3 text-center text-4xl">
          Full of Perks You Won’t Find Anywhere Else
        </h1>
        <div className="grid grid-rows-1 gap-4">
          {perks.map((item, index) => (
            <div key={index} className="flex flex-row items-start justify-center gap-4">
              <Check className="size-6 text-blue-700" />
              <p>{item.quote}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="iitems-center flex min-h-screen flex-col items-center justify-center px-8 py-16 md:px-16 lg:px-32">
        <h1 className="mb-16 w-1/3 text-center text-4xl">
          Full of Perks You Won’t Find Anywhere Else
        </h1>
        <div className="grid grid-rows-1 gap-4">
          {perks.map((item, index) => (
            <div key={index} className="flex flex-row items-start justify-center gap-4">
              <Check className="size-6 text-blue-700" />
              <p>{item.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
