import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { navlinks } from '@/lib/utils'

const Navbar = () => {
  return (
    <nav className='flex px-8 md:px-16 lg:px-32 w-full py-4 justify-between items-center'>
        <Link href={""}>
            Logo
        </Link>
        <div className='flex text-xl gap-4 items-center'>
            {
                navlinks.map((link, index) => (
                        <Link href={link.href} key={index} className='group-hover:text-blue-700 duration-500'>
                            {link.label}
                        </Link>
                ))
            }
        <Button size={"lg"} className='bg-blue-700 text-lg py-6'>Start customizing</Button>
        </div>
    </nav>
  )
}

export default Navbar