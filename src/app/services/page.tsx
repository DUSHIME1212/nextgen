"use client"
import { Button } from "@/components/ui/button";
import { Animatepara } from "@/lib/Animation";
import React, {  } from "react";

const page = () => {
    
  return (
    <>
      <div className="min-h-20" />
      <div className="min-h-screen py-8">
        <div className="flex min-h-screen flex-col items-start justify-start gap-8 px-8">
          <h1 className="w-full md:w-2/3">
            We drive strategy, design brands, tell stories and more
          </h1>
          <div className="mt-8 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="min-h-96 bg-lime-500" />
            <div className="min-h-96 bg-sky-500" />
            <div className="min-h-96 bg-blue-500" />
            <div className="min-h-96 bg-red-500" />
          </div>
          <Animatepara className="w-2/3 text-xl font-normal opacity-80">
            Whether you require help with strategy, web or product design,
            development, app creation, or innovative tech, we have the expertise
            and experience to deliver uniquely branded and interactive solutions
            for your audience.
          </Animatepara>
          <h2 className="font-normal">
            We believe in well-crafted digital experiences through strategic
            foundations, collaborative design, and creative development.
          </h2>
          <div className="w-full grid gap-4 grid-cols-1">
            {
                [1,2,3].map(() => (
                    <div key={Math.random()} className="flex group flex-col">
                        <div className="flex py-8 flex-row justify-between">
                            <h4 className="font-normal">Brand Strategy</h4>
                            <Button>
                                Learn More
                            </Button>
                        </div>
                        <div className="min-h-56 hidden group-hover:flex duration-700">
                            <ul className="flex flex-col justify-start gap-4 h-full">
                                <li className="text-sm text-gray-500">Brand Positioning</li>
                                <li className="text-sm text-gray-500">Brand Messaging</li>
                                <li className="text-sm text-gray-500">Brand Identity</li>
                            </ul>

                        </div>
                    </div>
                ))
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default page;
