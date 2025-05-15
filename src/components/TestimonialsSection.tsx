"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { ClientTweetCard } from "@/components/magicui/client-tweet-card";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Martinez",
    location: "New York, USA",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    content:
      "The team transformed our outdated website into a sleek, user-friendly platform that perfectly reflects our brand identity. Their UX design and attention to detail boosted our customer engagement significantly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marco Rossi",
    location: "Rome, Italy",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    content:
      "Their expertise in web development and brand strategy gave our business a stunning online presence. The custom-built website, paired with a cohesive brand identity, has elevated our market position.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Johnson",
    location: "London, UK",
    avatar:
      "https://images.unsplash.com/photo-1569913486515-b74bf7751574?w=150&h=150&fit=crop&crop=faces",
    content:
      "We partnered with them for a complete brand overhaul and website redesign. The result was a visually striking, high-performing site that captures our brand essence and drives conversions.",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid lg:bg-blue-700 overflow-hidden mb-8 lg:text-white md:p-16 lg:p-32 ">
      <div className="grid lg:grid-cols-3 space-y-4">
        <div className="pr-8 space-y-4">
          <div className="bg-yellow-500/20 inline-block rounded-full px-4 py-1.5 text-sm font-medium text-yellow-500">
          Client Testimonials
        </div>
        <div className="animate-fade-in mx-auto mb-12">
          <h2 className="my-4 text-yellow-500 font-media text-3xl font-bold md:text-4xl">
            What our People says about us
          </h2>
          <p className="w-2/3 lg:text-muted">
            We take pride in our work and the relationships we build with our
            clients. Here&apos;s what some of them have to say about their experience
            with us.
          </p>
        </div>
        </div>

        <div className="relative h-fit lg:col-span-2 w-full overflow-clip mx-auto">
          <div className="relative mx-auto h-[400px] w-full md:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  " absolute inset-0 p-8 transition-all duration-500 md:p-10",
                  activeIndex === index
                    ? "z-10 translate-x-0 opacity-100"
                    : index < activeIndex
                      ? "z-0 -translate-x-full opacity-0"
                      : "z-0 translate-x-full opacity-0",
                )}
              >
                <div className="flex h-full flex-col justify-center gap-6 md:flex-row">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-primary">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mb-2 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-500 text-primary" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <h4 className="text-center text-lg font-semibold md:text-left">
                      {testimonial.name}
                    </h4>
                    <p className="text-center text-sm text-muted md:text-left">
                      {testimonial.location}
                    </p>
                  </div>

                  <div className="flex flex-1 items-center">
                    <blockquote  className="italic font-dmsans lg:text-2xl lg:text-muted">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
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
        </div>
      </div>
    </section>
  );
}
