"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"




export function Animatepara({ children, className }: { children: React.ReactNode; className?: string }) {
  const words = useRef<(HTMLSpanElement | null)[]>([])
  const containerRef = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(words.current, {
          duration: 1,
          y: -10,
          opacity: 0,
          filter: "blur(10px)",
          stagger: 0.02,
          ease: "power2.out",
        })
      }, containerRef)

      return () => ctx.revert() 
    },
    { scope: containerRef }
  )

  return (
    <p ref={containerRef} className={className}>
      {typeof children === 'string' &&
        children.split(" ").map((word: string, index: number) => (
          <span key={index} className=" overflow-visible" ref={(el) => { words.current[index] = el }}>
            {word}{' '}
          </span>
        ))}
    </p>
  )
}

