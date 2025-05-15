"use client"
import { useEffect, useRef } from "react";
import { MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

const page = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);


  return (
    <>
      <main className="pt-28 pb-24 px-8 md:px-16">
        <div className="">
          <div ref={headerRef} className="mb-16 min-h-96 lg:bg-blue-700 text-blue-700 lg:text-white lg:p-32">
            <div className="inline-block -full bg-primary/10 px-4 py-1.5 text-sm font-medium lg:text-accent mb-4">
              Get in Touch
            </div>
            <h1 className="section-title">
              Contact us
            </h1>
            <p className="section-subtitle mx-auto">
              Have a project in mind? We'd love to hear about it. Drop us a line and let's create something amazing together.
            </p>
          </div>
          
          <div 
            ref={contentRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div className="bg-white -lg shadow-sm p-8 border border-dma-gray/20">
              <h2 className="text-2xl font-display font-medium mb-6">Send us a message</h2>
              <ContactForm />
            </div>
            
            <div className="bg-dma-light-gray -lg p-8">
              <h2 className="text-2xl font-display font-medium mb-6">Contact information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center -full bg-primary/10 text-primary flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Our Location</h3>
                    <p className="text-muted-foreground">Kigali, Rwanda</p>
                    <p className="text-muted-foreground">East Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center -full bg-primary/10 text-primary flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">hello@nextgen.com</p>
                    <p className="text-muted-foreground">info@nextgen.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center -full bg-primary/10 text-primary flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+250 123 456 789</p>
                    <p className="text-muted-foreground">+250 987 654 321</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center -full bg-white text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center -full bg-white text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-medium mb-4">Working Hours</h3>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
