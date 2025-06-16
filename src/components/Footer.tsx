'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footerv2() {
  return (
    <footer className=" px-4 bg-blue-700 text-yellow-500 md:px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Rating Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
           <img src="/logo.png" alt="" className='size-8' />
            <span className="text-xl text-white font-bold">Nextgen</span>
          </div>
          <p className="text-lg font-semibold">5.0</p>
          <p className="text-sm">Rated by our customers</p>
        </div>

        {/* Location Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="mb-4">Rwanda</p>
          <p>100% Remote Team</p>
          <p className="mt-4">Kigali</p>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Social</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Dribbble</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Behance</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Clutch</a></li>
          </ul>
        </div>
      </div>

      {/* Navigation and Copyright */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center border-t border-yellow-500 pt-4">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Button variant="link" className="text-white hover:text-gray-300">About Us</Button>
          <Button variant="link" className="text-white hover:text-gray-300">Case Study</Button>
          <Button variant="link" className="text-white hover:text-gray-300">Contact</Button>
        </div>
        <p className="text-sm">
          powered by - <a href="#" className="hover:underline">Nextgen developers rw</a>
        </p>
        <p className="text-sm mt-2 md:mt-0">© 2023 Nextgen Digital - All rights Reserved</p>
      </div>
    </footer>
  );
}