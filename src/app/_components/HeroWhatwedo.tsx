import AnimatedContent from "@/components/animations/AnimatedContent";
import FadeContent from "@/components/animations/FadeContent";
import React from "react";

const HeroWhatwedo = () => {
  return (
    <div className="space-y-16">
      <div className="mb-20 space-y-4">
        <div className="inline-block -full bg-blue-200 px-4 py-1.5 text-sm font-medium text-blue-500">
          What we do
        </div>
        <h2 className="section-title md:w-2/3 font-media">
          Expert services for your digital needs
        </h2>
        <p className="section-subtitle mx-auto">
          We combine creativity with technical expertise to deliver exceptional
          digital experiences that elevate your brand and engage your audience.
        </p>
      </div>
      <div>
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="mb-8 overflow-clip grid grid-cols-3 gap-8 p-8">
            <AnimatedContent direction="horizontal" reverse delay={index * 0.9}>
              <div className="size-full bg-gray-700" />
            </AnimatedContent>
            <div className="flex flex-col justify-center">
              <div className="font-display mb-3 inline-flex items-center gap-2 text-xl font-medium">
                <span className="font-BWMono tracking-tighter">[{item}]</span>
                <h4 className="font-media text-xl font-thin">
                  Digital Product Design
                </h4>
              </div>
              <p className="text-muted-foreground">
                We create results-driven digital products to enhance your
                business and its output. By creating immersive digital
                experiences through UX and UI design.
              </p>
            </div>
            <div className="flex w-full flex-row justify-between">
              <div className="flex flex-col gap-4">
                {[
                  "Research",
                  "UX Audit",
                  "UX Design",
                  "UI Design",
                  "Prototyping",
                  "User Journey Mapping",
                  "Innovation Sprints",
                  "Content Strategy",
                  "Information Architecture",
                ].map((feature, i) => (
                  <span>{feature}</span>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {[
                  "Research",
                  "UX Audit",
                  "UX Design",
                  "UI Design",
                  "Prototyping",
                  "User Journey Mapping",
                  "Innovation Sprints",
                  "Content Strategy",
                  "Information Architecture",
                ].map((feature, i) => (
                  <span>{feature}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroWhatwedo;
