import React from 'react'
import { Instagram } from 'lucide-react'
import { Facebook } from 'lucide-react'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import { Twitter } from 'lucide-react'

const footer = () => {
  return (
    <div className='bg-black text-white px-14 pb-4 pt-3 lg:px-30 lg:pb-8 lg:pt-18 rounded-xl'>
      <div>
        <div className='hidden lg:flex w-full'>
            <div className='w-[40vw]'>
                <h2 className='font-bold text-2xl'>Voltix</h2>
            </div>
            <div className='w-78'>
                <h2 className='font-bold text-xl'>Menu</h2>
            </div>
            <div className=''>
                <h2 className='font-bold text-xl'>Social Media</h2>
            </div>
        </div>
        <div className='hidden lg:flex pt-4 border-b-[1px] border-gray-600 pb-6'>
            <div className='w-[40vw]'>
                <div className='pr-42'>
                    <p className='text-gray-200'>Dive into a world where fashion meets expression. Our online clothing emporium is a curated destination for style enthusiasts</p>
                </div>
                <div className='flex gap-3 py-6'>
                    <div className='p-2 bg-gray-900 hover:bg-gray-800 rounded-lg'>
                        <Instagram className='cursor-pointer' />
                    </div>
                    <div className='p-2 bg-gray-900 hover:bg-gray-800 rounded-lg'>
                        <Facebook className='cursor-pointer' />
                    </div>
                    <div className='p-2 bg-gray-900 hover:bg-gray-800 rounded-lg'>
                        <Twitter className='cursor-pointer' />
                    </div>
                    <div className='p-2 bg-gray-900 hover:bg-gray-800 rounded-lg'>
                        <Linkedin className='cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='w-78 text-gray-300'>
                <ul className='flex flex-col gap-2'>
                    <li>
                        <Link href={"/"} className='hover:underline cursor-pointer'>Home</Link>
                    </li>
                    <li>
                        <Link href={"/about"} className='hover:underline cursor-pointer'>About Us</Link>
                    </li>
                    <li>
                        <Link href={"/store"} className='hover:underline cursor-pointer'>Store</Link>
                    </li>
                    <li>
                        <Link href={"/contact"} className='hover:underline cursor-pointer'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='text-gray-300'>
                <ul className='flex flex-col gap-2'>
                    <li className='hover:underline cursor-pointer'>Instagrame</li>
                    <li className='hover:underline cursor-pointer'>Facebook</li>
                    <li className='hover:underline cursor-pointer'>Twitter</li>
                    <li className='hover:underline cursor-pointer'>LinkdIn</li>
                </ul>
            </div>
        </div>
        <div className='flex text-sm lg:text-base justify-between pt-3 text-gray-300'>
            <div>copyright &copy; 2025 Voltix. All rights reserved</div>
            <div className='hidden lg:flex'>
                <span><Link href={"/terms"}>Terms & Conditions</Link></span> | <span><Link href={"/privacy_policy"}>Privacy Policy</Link></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer
