import React from 'react'
import { Instagram } from 'lucide-react'
import { Facebook } from 'lucide-react'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import { Twitter } from 'lucide-react'

const footer = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 via-white to-green-50 
  text-black px-4 sm:px-8 md:px-16 py-8 rounded-xl">

  {/* Top Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-300 pb-8">

    {/* Brand */}
    <div>
      <h2 className="font-bold text-2xl">Resume.</h2>
      <p className="text-gray-600 mt-4 max-w-sm">
        Dive into a world where fashion meets expression. Our online clothing
        emporium is a curated destination for style enthusiasts.
      </p>

      {/* Social Icons */}
      <div className="flex gap-3 mt-6">
        {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
          <div
            key={i}
            className="p-2 bg-green-400 hover:bg-gray-800 rounded-lg transition"
          >
            <Icon className="cursor-pointer text-black hover:text-white" />
          </div>
        ))}
      </div>
    </div>

    {/* Menu */}
    <div>
      <h2 className="font-bold text-xl mb-4">Menu</h2>
      <ul className="flex flex-col gap-2 text-gray-600">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/about" className="hover:underline">About Us</Link></li>
        <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </div>

    {/* Social Links */}
    <div>
      <h2 className="font-bold text-xl mb-4">Social Media</h2>
      <ul className="flex flex-col gap-2 text-gray-600">
        <li className="hover:underline cursor-pointer">Instagram</li>
        <li className="hover:underline cursor-pointer">Facebook</li>
        <li className="hover:underline cursor-pointer">Twitter</li>
        <li className="hover:underline cursor-pointer">LinkedIn</li>
      </ul>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="flex flex-col sm:flex-row items-center justify-between 
    text-sm sm:text-base pt-4 text-gray-700 gap-3">

    <div>© 2026 Resume. All rights reserved</div>

    <div className="flex gap-2">
      <Link href="/terms" className="hover:underline">
        Terms & Conditions
      </Link>
      <span>|</span>
      <Link href="/privacy_policy" className="hover:underline">
        Privacy Policy
      </Link>
    </div>
  </div>

</div>

  )
}

export default footer
