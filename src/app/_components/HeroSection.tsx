import { Particles } from "@/components/magicui/particles";
import { Button } from "@/components/ui/button";
import { Animatepara } from "@/lib/Animation";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-8 grid min-h-screen place-items-center">
      <div className="relative size-full flex flex-col items-start justify-center overflow-clip  p-16 px-8 text-left text-white md:px-16 lg:min-h-[520px] lg:px-32">
        <Image
          src={
            "https://pbs.twimg.com/media/GedOxpSaEAAMnK3?format=jpg&name=large"
          }
          alt=""
          className="-z-10 object-cover"
          fill
        />
        <div className="absolute left-0 size-full bg-gradient-to-br from-blue-700/20 to-blue-500/30" />

        <div>
          <div className="backdrop-blur- mb-10 rounded-lg p-8 lg:w-1/2">
            <div className="z-10">
              <h3 className="text-yellow-400 max-md:text-2xl">
                Providing Full-Stack Development, Web Design & Branding
                Solutions for an Effective Digital Experience
              </h3>
              <Animatepara className="pt-4 text-lg opacity-80 max-md:text-base">
                We offer exclusive packages that provide you with access to
                creative and technical solutions tailored to your business
                needs. Simple, reliable, and affordable – we’re here to take
                your digital presence to the next level.
              </Animatepara>
            </div>
            <h3 className="font-display my-4 text-xl text-white">
              Technologies we master
            </h3>
            <div className="flex flex-wrap justify-start gap-3">
              {[
                "React",
                "Next.js",
                "Tailwind CSS",
                "GSAP",
                "Framer Motion",
                "TypeScript",
                "Node.js",
                "Figma",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-500/20 bg-gradient-to-r from-yellow-500/40 to-yellow-700/10 px-3 py-1.5 text-sm font-medium text-yellow-500"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Particles
              className="absolute inset-0 z-0"
              quantity={1000}
              refresh
            />

            <Button
              variant={"gooeyLeft"}
              className="mt-8 rounded-lg bg-white from-blue-200 px-8 py-6 text-blue-700"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
