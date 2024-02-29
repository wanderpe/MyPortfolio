import React from 'react'
import Image from 'next/image'
import { Socials } from '../constant'

export default function NavBar() {
  return (
    <div className='fixed top0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
        <div className='flex flex-row gap-3 items-center'>
            <Image

                src="/horseLogo.jpg"
                alt='logo'
                height={40}
                width={40}
                className='w-full h-full object-contain rounded-full'
            />
            <h1 className='text-white text-[25px] font-semibold'>
            Harvy Full stack developer
            </h1>
        </div>

        <div className='flex flex-row gap-5 mb-2'>
            {Socials.map((social)=> (
                <Image
                    key={social.name}
                    src={social.src}
                    alt={social.name}
                    height={28}
                    width={28}
                
                />
            ))}

        </div>
        

    </div>
  )
}
