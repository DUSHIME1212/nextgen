import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { navlinks } from '@/lib/utils'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex fixed bg-white z-50 px-8 md:px-16 lg:px-32 w-full py-4 shadow-2xl shadow-blue-500/20 justify-between items-center'>
        <Link href={""} className='flex items-center gap-2 text-2xl font-bold'>
            <div className='size-8 relative'>
                <Image src="/logo.png" alt="Logo" className='object-contain' fill/>
            </div>
            Nextgen
        </Link>
        <div className='flex gap-4 items-center'>
            {
                navlinks.map((link, index) => (
                        <Link href={link.href} key={index} className='group-hover:text-blue-700 duration-500'>
                            {link.label}
                        </Link>
                ))
            }
        <Button variant={"gooeyLeft"} className='bg-blue-700 text-white from-blue-100 py-6'>Start customizing</Button>
        </div>
    </nav>
  )
}

export default Navbar