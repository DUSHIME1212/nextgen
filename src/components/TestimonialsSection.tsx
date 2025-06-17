"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { gettestimonial } from "@/sanity/queries";
import Beams from "./animations/Beams";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP animation for testimonial transition
  const animateTestimonial = (direction: "next" | "prev" | "jump") => {
    if (isAnimating || testimonials.length <= 1) return;

    setIsAnimating(true);

    const current = testimonialRefs.current[activeIndex];
    let nextIndex;

    if (direction === "next") {
      nextIndex = (activeIndex + 1) % testimonials.length;
    } else if (direction === "prev") {
      nextIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    } else {
      nextIndex = activeIndex; // for direct jumps
    }

    const next = testimonialRefs.current[nextIndex];

    if (current && next) {
      // Set initial positions
      gsap.set(next, {
        x: direction === "next" ? "100%" : "-100%",
        opacity: 0,
      });

      // Animate out current testimonial
      gsap.to(current, {
        x: direction === "next" ? "-100%" : "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });

      // Animate in next testimonial
      gsap.to(next, {
        x: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          setActiveIndex(nextIndex);
          setIsAnimating(false);
        },
      });
    }
  };

  const nextTestimonial = () => animateTestimonial("next");
  const prevTestimonial = () => animateTestimonial("prev");

  useEffect(() => {
    async function fetchTestimonials() {
      const res = await gettestimonial();
      setTestimonials(res);
      console.log(res);
    }
    fetchTestimonials();

    // Only set interval if there are multiple testimonials
    if (testimonials.length > 1) {
      const interval = setInterval(nextTestimonial, 8000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]); // Add testimonials.length to dependency array

  return (
    <section className="relative mb-8 grid w-full overflow-hidden min-h-screen p-8 md:p-16 lg:bg-blue-700 lg:p-32 lg:text-white">
      <div className="absolute size-full top-0 left-0">
        <Beams
          beamWidth={9.6}
          beamHeight={15}
          beamNumber={12}
          lightColor="#1d4ed8"
          speed={2}
          noiseIntensity={1.75}
          scale={0.3}
          rotation={45}
        />
      </div>
      <div className="grid z-10 space-y-4 lg:grid-cols-3">
        <div className="space-y-4 pr-8">
          <div className="inline-block rounded-full bg-yellow-500/20 px-4 py-1.5 text-sm font-medium text-yellow-500">
            Client Testimonials
          </div>
          <div className="animate-fade-in mx-auto mb-12">
            <h2 className="my-4 text-3xl font-bold text-yellow-500 md:text-4xl">
              What our People says about us
            </h2>
            <p className="w-2/3 text-muted">
              We take pride in our work and the relationships we build with our
              clients. Here&apos;s what some of them have to say about their
              experience with us.
            </p>
          </div>
        </div>

        <div className="relative mx-auto h-fit w-full overflow-clip lg:col-span-2">
          <div className="relative mx-auto h-[400px] w-full md:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => {
                  testimonialRefs.current[index] = el;
                }}
                className={cn(
                  "absolute inset-0 p-8 md:p-10",
                  activeIndex === index
                    ? "z-10 translate-x-0 opacity-100"
                    : "z-0 translate-x-full opacity-0", // GSAP will handle positioning
                )}
              >
                <div className="flex h-full flex-col justify-center gap-6 md:flex-row">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-primary">
                      <img
                        src={
                          testimonial.image?.asset?.url || testimonial.avatar
                        }
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mb-2 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "fill-yellow-500 text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <h4 className="text-center text-lg text-white font-semibold md:text-left">
                      {testimonial.name}
                    </h4>
                    <p className="text-center text-sm text-muted md:text-left">
                      {testimonial.location}
                    </p>
                  </div>

                  <div className="flex flex-1 items-center">
                    <blockquote className="font-dmsans italic lg:text-2xl text-white">
                      "{testimonial.testimonial}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {testimonials.length > 1 && (
            <div className="mt-8 flex justify-between">
              <button
                onClick={prevTestimonial}
                className="rounded-full border border-border bg-inherit p-2 transition-colors hover:bg-muted"
                disabled={isAnimating}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous testimonial</span>
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (index !== activeIndex) {
                        animateTestimonial("jump");
                        setActiveIndex(index);
                      }
                    }}
                    className={`h-3 w-3 rounded-full transition-all ${
                      activeIndex === index
                        ? "w-6 bg-yellow-500"
                        : "bg-muted-foreground/30 hover:bg-muted/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="rounded-full border border-border bg-inherit p-2 transition-colors hover:bg-muted"
                disabled={isAnimating}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next testimonials</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
