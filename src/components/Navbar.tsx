"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { navlinks } from "@/lib/utils";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { MenuIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
      stagger:0.2
    });
  });
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between bg-white px-8 py-4 shadow-2xl shadow-blue-500/20 md:px-16 lg:px-32">
      <Link href={""} className="flex items-center gap-2 text-2xl font-bold">
        <div className="relative w-8 h-8">
          <Image src="/logo.png" alt="Logo" className="object-contain" fill />
        </div>
        Nextgen
      </Link>
      <div className="md:hidden">
        {open ? (
          <IoClose onClick={handleOpen} className="w-8 h-8" />
        ) : (
          <MenuIcon onClick={handleOpen} className="w-8 h-8" />
        )}
      </div>
      <div
        className={`flex w-fit flex-col gap-4 bg-white max-md:hidden md:flex-row md:items-center`}
      >
        {navlinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="duration-500  max-md:text-5xl"
          >
            <span className="links">{link.label}</span>
          </Link>
        ))}
        <Button
          variant={"gooeyLeft"}
          className="bg-blue-700 from-blue-100 py-6 text-white"
        >
          Start customizing
        </Button>
      </div>
      {open && <div
        className={`flex w-full flex-col gap-4 absolute top-16 min-h-screen left-0 bg-white p-8 md:flex-row md:items-center`}
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
      </div>}
    </nav>
  );
};

export default Navbar;
