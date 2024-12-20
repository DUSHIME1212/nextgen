import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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