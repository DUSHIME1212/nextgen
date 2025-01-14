import { GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsSlack, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="flex min-h-fit w-full flex-col items-center bg-blue-700 text-white justify-start px-8 py-8 md:px-16">
      <div className="mb-16 grid w-full grid-cols-1  md:grid-cols-3 lg:grid-cols-5">
        <div className="pr-8 md:col-span-2 flex flex-col gap-4">
          <h5 className="text-yellow-500">Logo Nextgen</h5>
          <p className="">
            Nextgen provides digital marketing solutions that are
            built to amplify your brand’s voice and expand your reach. We
            combine data-driven strategies with creative insight, making sure
            your business thrives in an ever-evolving digital world.
          </p>
        </div>
        <div>
            <h5 className="text-yellow-500">Our Agency</h5>
            <div className="flex flex-col gap-2 mt-4">
                <Link href="" className="hover:opacity-80 duration-300">Our Company</Link>
                <Link href="" className="hover:opacity-80 duration-300">Awards</Link>
                <Link href="" className="hover:opacity-80 duration-300">Blog</Link>
                <Link href="" className="hover:opacity-80 duration-300">Company News</Link>
                <Link href="" className="hover:opacity-80 duration-300">Contact</Link>
            </div>
        </div>
        <div>
        <h5 className="text-yellow-500">Digital Marketing</h5>
            <div className="flex flex-col gap-2 mt-4">
                <Link href="" className="hover:opacity-80 duration-300">Web Design & Development</Link>
                <Link href="" className="hover:opacity-80 duration-300">Social Media Management</Link>
                <Link href="" className="hover:opacity-80 duration-300">Marketing video Services</Link>
                <Link href="" className="hover:opacity-80 duration-300">Graphic Design</Link>
                <Link href="" className="hover:opacity-80 duration-300">Video Markerting</Link>
            </div>
        </div>
        <div>
        <h5 className="text-yellow-500">Search</h5>
            <div className="flex flex-col gap-2 mt-4">
                <Link href="" className="hover:opacity-80 duration-300">Search Engine Optimization</Link>
                <Link href="" className="hover:opacity-80 duration-300">Local SEO</Link>
                <Link href="" className="hover:opacity-80 duration-300">GEO Services</Link>
                <Link href="" className="hover:opacity-80 duration-300">PPC Management</Link>
                <Link href="" className="hover:opacity-80 duration-300">Social Media Advertising</Link>
            </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4  md:flex-row items-center justify-between border-t-2 border-white">
        <div className="flex w-full flex-row items-center mt-4 justify-start gap-4 md:w-2/3">
          <Link href={""}>
            <FaGithub size={24} />
          </Link>
          <Link href={""}>
            <FaLinkedinIn size={24} />
          </Link>
          <Link href={""}>
            <BsTwitterX size={24} />
          </Link>
          <Link href={""}>
            <BsSlack size={24} />
          </Link>
        </div>
        <p className="w-full md:text-right mt-4 md:w-1/3">
          Copyright © 2024 Nextgen Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
