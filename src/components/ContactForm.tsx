"use client"
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Toast } from "./ui/toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    if (!formRef.current) return;
    
    const inputs = formRef.current.querySelectorAll("input, textarea");
    
    gsap.fromTo(
      inputs,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      Toast({
        title: "Success",
        content: "Message sent successfully!",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted ? (
        <div className="bg-green-50 p-8 rounded-lg">
          <CheckCircle2 className="mx-auto text-blue-500 mb-4" size={48} />
          <h3 className="text-2xl font-display font-medium mb-3">Thank you!</h3>
          <p className="text-muted-foreground mb-6">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
          <Button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Send another message
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="w-full"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={6}
              required
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="hover:bg-blue-700/80 w-full bg-blue-700 text-white flex items-center"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <ArrowRight size={16} className="ml-2" />}
          </Button>
        </>
      )}
    </form>
  );
};

export default ContactForm;
