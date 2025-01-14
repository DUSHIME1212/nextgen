"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export function Animatepara({children,className}:{children: React.ReactNode,className?:string}){

    const words = useRef<(HTMLSpanElement | null)[]>([]);
    
    useGSAP(() => {
        gsap.from(words.current, {
            duration: 1,
            y: -10,
            opacity:0,
            filter: "blur(10px)",
            stagger:0.02,
            ease: "power2.out",

        })
    })
    return(
        <p className={className}>
            {typeof children === 'string' && children.split(" ").map((word: string) => (
                <span key={Math.random()} className="overflow-visible" ref={el => { if (el) words.current.push(el); }}>
                    {word}{' '}
                </span>
            ))}
        </p>
    )
}