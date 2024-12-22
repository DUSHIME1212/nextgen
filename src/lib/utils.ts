import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { MdEventAvailable } from "react-icons/md";
import { RiBuilding2Fill, RiSpaceShipFill } from "react-icons/ri";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navlinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
  { label: "Services", href: "/" },
  { label: "Our works", href: "/" },
  { label: "Resources", href: "/" },
  { label: "Blog", href: "/" },

]

// export const packages = [


//     {
//       title: "Start-Ups",
//       description:
//         "Launch your startup with a cutting-edge web presence, ensuring your digital footprint extends beyond just a logo. From web applications to scalable backend solutions, we’ve got you covered.",
//       bg: "bg-blue-200",
//       color: "text-blue-700",
//       link: "/",
//       icon: <RiSpaceShipFill />,
//     },
//     {
//       title: "Businesses",
//       description:
//         "Elevate your business with a trusted partner dedicated to fulfilling your technical, design, and marketing needs. Build fast, secure, and responsive platforms to boost efficiency and growth.",
//       bg: "bg-yellow-200",
//       color: "text-blue-700",
//       link: "/",
//       icon: <RiBuilding2Fill />,
//     },
//     {
//       title: "Event Organizers",
//       description:
//         "Transform your events with our package tailored exclusively for event organizers. From event websites to real-time ticketing systems, we ensure a seamless online experience.",
//       bg: "bg-gray-200",
//       color: "text-blue-700",
//       link: "/",
//       icon: <MdEventAvailable />,
//     },
//   ];

export const perks  = [
  {
    quote:"Send in as many design requests as your business requires you to."
  },
  {
    quote:"Pay one monthly flat fee no matter how much you send our way."
  },
  {
    quote:"A dedicated professional designers, always ready for your next project!"
  },
  {
    quote:"Send in as many design requests as your business requires you to."
  },
  {
    quote:"Scale up or down as needed, and pause or cancel at anytime."
  },
  {
    quote:"Each of your designs is made especially for you and is 100% yours."
  },

]