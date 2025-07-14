"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShimmerButton } from "./magicui/shimmer-button";

export default function Footerv2() {
  return (
    <footer className="bg-black px-4 py-16 text-gray-500 md:px-8">
      <div className="mb-16 flex flex-col space-y-2">
        <p>Let’s Create Something Better Together</p>
        <h4>Write us on</h4>
        <Link href={"/"} className="text-5xl">
          hello@nextgen.digital
        </Link>
        <ShimmerButton className="size-fit bg-blue-500 shadow-2xl">
          Start a new project
        </ShimmerButton>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Logo and Rating Section */}
        <div className="flex flex-col  space-y-2 items-start">
          <div className="mb-2 flex items-center gap-2">
            <img src="/logo/Logo-4.png" alt="" className="w-32" />
          </div>
          <p className="text-lg font-semibold">5.0</p>
          <p className="text-sm">Rated by our customers</p>
        </div>

        {/* Location Section */}
        <div className="flex flex-col">
          <h3 className="mb-2 text-lg font-semibold">Location</h3>
          <p className="mb-4">Rwanda</p>
          <p>100% Remote Team</p>
          <p className="mt-4">Kigali</p>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col">
          <h3 className="mx-6 mb-2 text-lg font-semibold">Social</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Dribbble
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Behance
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Clutch
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation and Copyright */}
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between border-t border-gray-500 pt-4 md:flex-row">
        <div className="mb-4 flex space-x-4 md:mb-0">
          <Button variant="link" className="text-white hover:text-gray-300">
            About Us
          </Button>
          <Button variant="link" className="text-white hover:text-gray-300">
            Case Study
          </Button>
          <Button variant="link" className="text-white hover:text-gray-300">
            Contact
          </Button>
        </div>
        <p className="text-sm">
          powered by -{" "}
          <a href="#" className="hover:underline">
            Nextgen developers rw
          </a>
        </p>
        <p className="mt-2 text-sm md:mt-0">
          © 2023 Nextgen Digital - All rights Reserved
        </p>
      </div>
    </footer>
  );
}
