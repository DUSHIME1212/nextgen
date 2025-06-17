import { Particles } from "@/components/magicui/particles";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Animatepara } from "@/lib/Animation";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-8 grid min-h-screen lg:grid-cols-2">
      <div className="relative h-screen">
        <Image
          src={
            "https://pbs.twimg.com/media/GedOxpSaEAAMnK3?format=jpg&name=large"
          }
          fill
          alt=""
          className="w-full object-cover"
        />
        <Particles className="absolute inset-0 z-0" quantity={1000} refresh />
      </div>
      <div className="relative flex size-full flex-col items-start justify-center overflow-clip bg-blue-700 px-8 text-left text-white md:px-16">
        <div>
          <div className="backdrop-blur- mb-10 rounded-lg p-8">
            <div className="z-10">
              <h3 className="text-yellow-400 max-md:text-2xl">
                Providing Full-Stack Development, Web Design & Branding
                Solutions for an Effective Digital Experience
              </h3>
              <Animatepara className="pt-4 text-sm opacity-80 max-md:text-base">
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

            <ShimmerButton
              shimmerColor="#facc15"
              background="#1d4ed8"
              shimmerSize="0.2rem"
              className="mt-8 rounded-lg text-yellow-500 px-8"
            >
              Book a call
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
