
import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[720px] px-8 py-16 md:px-16 lg:px-32">
      <div className="flex size-full min-h-[512px] flex-col items-start p-16 text-left justify-center text-white bg-blue-700">
        <div className="w-2/3">
        <h3>
          Providing Full-Stack Development, Web Design & Branding Solutions for
          an Effective Digital Experience
        </h3>
        <p className="text-lg opacity-80 pt-4">We offer exclusive packages that provide you with access to creative and technical solutions tailored to your business needs. 
          Simple, reliable, and affordable – we’re here to take your digital presence to the next level.
          </p>
        </div>
        <div>
          <Button variant={"gooeyRight"} className="bg-white text-blue-700 px-8 py-6 mt-8 rounded-lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
