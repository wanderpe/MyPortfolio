import React from 'react'
import Image from 'next/image'
import { Socials } from '../constant'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-20 md:px-20'>
        <div className='flex flex-row gap-3 items-center'>
            
            
        </div>

        <div className='flex flex-row gap-5 mb-2'>
            {Socials.map((social)=> (
                <Link href={social.href} target='_blank'>
                  <Image
                  key={social.name}
                  src={social.src}
                  alt={social.name}
                  height={28}
                  width={28}
                  />
              </Link>
            ))}

        </div>
        

    </div>
  )
}
