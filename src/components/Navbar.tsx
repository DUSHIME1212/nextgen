"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { navlinks } from "@/lib/utils";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { MenuIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ShimmerButton } from "./magicui/shimmer-button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  useGSAP(() => {
    gsap.from(".links", {
      opacity: 0,
      x: "-100px",
      duration: 1,
      ease: "power2.inOut",
      filter: "blur(10px)",
      stagger: 0.2,
    });
  });

  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      const currentScrollY = window.scrollY;

      if (!nav) return;

      // Show nav at top or when scrolling up
      if (currentScrollY <= 50) {
        // At top (within 50px)
        gsap.to(nav, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        gsap.to(nav, {
          y: "-100%", // Hide nav
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        // Scrolling up
        gsap.to(nav, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      lastScrollY.current = currentScrollY; // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      ref={navRef}
      className="fixed z-50 flex w-full items-center justify-between bg-white px-8 py-2 shadow-2xl shadow-blue-500/20 md:px-16"
    >
      <Link href={"/"} className="flex items-center gap-2 text-2xl font-bold">
        <div className="relative h-8 w-8">
          <Image src="/logo.png" alt="Logo" className="object-contain" fill />
        </div>
        Nextgen
      </Link>
      <div className="md:hidden">
        {open ? (
          <IoClose onClick={handleOpen} className="h-8 w-8" />
        ) : (
          <MenuIcon onClick={handleOpen} className="h-8 w-8" />
        )}
      </div>
      <div
        className={`flex w-fit flex-col gap-4 bg-white max-md:hidden md:flex-row md:items-center`}
      >
        {/* {navlinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="duration-500  max-md:text-5xl"
          >
            <span className="links">{link.label}</span>
          </Link>
        ))} */}
        <ShimmerButton
          shimmerColor="#facc15"
          background="#1d4ed8"
          shimmerSize="0.2rem"
          className="rounded-lg text-yellow-500"
        >
          <Link href={"/contact"}>Contact us</Link>
        </ShimmerButton>
      </div>
      {open && (
        <div
          className={`absolute left-0 top-16 flex min-h-[90vh] w-full flex-col justify-end gap-4 bg-white p-8 md:flex-row md:items-center`}
        >
          {navlinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              onClick={() => setOpen(false)}
              className="duration-500 max-md:text-5xl"
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant={"gooeyLeft"}
            className="bg-blue-700 from-blue-100 py-6 text-white"
          >
            Start customizing
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
