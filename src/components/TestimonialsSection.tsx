"use client"

import { testimonials } from '@/lib/testimonials'
import React, { useRef } from 'react'
import TestimonialCard from './cards/TestimonialCard'

const TestimonialsSection = () => {
    const testimonialsRef = useRef<HTMLDivElement>(null);
  return (
    <section className="py-24 bg-white">
          <div className="" ref={testimonialsRef}>
            <div className="mb-20">
              <div className="inline-block rounded-full bg-blue-200   px-4 py-1.5 text-sm font-medium text-blue-500   mb-4">
                Client Testimonials
              </div>
              <h2 className="section-title section-title-animation">
                What our clients say
              </h2>
              <p className="section-subtitle mx-auto">
                Don't just take our word for it. Here's what our clients have to say about their experience working with Nextgen team Design.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  position={testimonial.position}
                  company={testimonial.company}
                  image={testimonial.image}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
  )
}

export default TestimonialsSection