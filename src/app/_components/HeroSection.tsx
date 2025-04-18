import { Button } from '@/components/ui/button'
import { Animatepara } from '@/lib/Animation'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="grid place-items-center  ">
    <div className="relative flex lg:min-h-[520px] overflow-clip flex-col items-start justify-center rounded-2xl p-16 px-8 text-left text-white md:px-16 lg:px-32">
      <Image
        src={
          "https://pbs.twimg.com/media/GedOxpSaEAAMnK3?format=jpg&name=large"}
        alt=""
        className="z-0 object-cover"
        fill
      />
      <div className="absolute left-0 size-full bg-gradient-to-br from-blue-700/20 to-blue-500" />
  
      <div>
        
        <div  className="mb-10 lg:w-1/2  rounded-lg  backdrop-blur-sm p-8 border border-blue-50/20 ">
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
            <h3 className="text-white mt-8 font-display text-xl">Technologies we master</h3>
            <div className="flex flex-wrap  justify-start gap-3">
              {["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "TypeScript", "Node.js", "Figma"].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-yellow-700/10 text-yellow-500 rounded-full border border-blue-500/20 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}

            </div>

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
  )
}

export default HeroSection