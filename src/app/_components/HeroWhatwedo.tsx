import AnimatedContent from "@/components/animations/AnimatedContent";
import FadeContent from "@/components/animations/FadeContent";
import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const services = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Digital Product Design",
    description:
      "We create results-driven digital products to enhance your business and its output. By creating immersive digital experiences through UX and UI design.",
    features: [
      "Research",
      "UX Audit",
      "UX Design",
      "UI Design",
      "Prototyping",
      "User Journey Mapping",
      "Innovation Sprints",
      "Content Strategy",
      "Information Architecture",
    ],
  },
  {
    id: 2,
    title: "Web Development",

    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "We build scalable, high-performance websites tailored to your business needs, ensuring seamless functionality and exceptional user experiences.",
    features: [
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "CMS Implementation",
      "Performance Optimization",
      "Responsive Design",
      "E-commerce Solutions",
      "SEO Optimization",
      "Web Accessibility",
    ],
  },
  {
    id: 3,
    title: "Brand Strategy",
    img: "https://i.pinimg.com/736x/8b/31/d5/8b31d543fbe902f65a5574de1c9a6e67.jpg",
    description:
      "We craft compelling brand identities that resonate with your audience, fostering trust and loyalty through strategic storytelling and design.",
    features: [
      "Brand Identity Design",
      "Market Research",
      "Logo Design",
      "Brand Guidelines",
      "Visual Storytelling",
      "Tone of Voice Development",
      "Competitor Analysis",
      "Campaign Strategy",
      "Social Media Branding",
    ],
  },
];



const HeroWhatwedo = () => {
  return (
    <div className="space-y-16 p-8 md:px-16 lg:px-32">
      <div className="mb-20 flex flex-col space-y-2 items-center text-center">
        <div className="inline-flex items-center gap-2 bg-blue-200 px-4 py-1.5 text-sm font-medium text-blue-500">
          <RiVerifiedBadgeFill/>
          What we do
        </div>
        <h2 className="md:w-2/3 font-dmsans">
          Expert services for your digital needs
        </h2>
        <p className="mx-auto md:w-2/3">
          We combine creativity with technical expertise to deliver exceptional
          digital experiences that elevate your brand and engage your audience.
        </p>
      </div>
      <div>
        {services.map((item, index) => (
          <div key={index} className="mb-8 overflow-clip grid lg:grid-cols-2 gap-8 p-8">
            <AnimatedContent direction="horizontal" reverse delay={index * 0.9} className="relative">
              <img  src={item.img} className="size-full object-cover max-h-96 bg-gray-700" />
            </AnimatedContent>
            <div className="flex flex-col justify-center">
              <div className="font-display mb-3 inline-flex items-center gap-4 text-xl font-medium">
                {/* <span className="">[ {index + 1} ]</span> */}
                <h4 className="font-dmsans text-xl ">
                  {item.title}
                </h4>
              </div>
              <p className="text-muted-foreground">
                {item.description}
              </p>
              <div className="flex text-sm w-full mt-4 flex-wrap gap-2">
                {
                item.features.map((feature, i) => (
                  <span className="w-fit p-2 font-light inline-flex items-center gap-2 duration-300 cursor-pointer hover:bg-blue-200 px-4 py-1.5 text-sm text-blue-500" key={i}>{feature}</span>
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
