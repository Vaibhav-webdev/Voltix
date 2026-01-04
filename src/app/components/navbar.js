"use client"

import React from 'react'
import { signOut } from 'next-auth/react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navbar = () => {
  const { data: session, status } = useSession()
  const isLoggedIn = status === "authenticated"

  const pathname = usePathname()
  const [show, setshow] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [open, setOpen] = useState(false)

  const linkStyle = (path) =>
    pathname === path
      ? "text-black font-semibold"
      : "text-gray-400 hover:text-black cursor-pointer transition-colors"
  return (
    <div className="fixed top-0 left-0 w-screen lg:w-full bg-white z-50 shadow">
  {/* Top Bar */}
  <div className="flex justify-between items-center px-12 lg:px-20 py-4">
    <h2 className="font-black text-3xl cursor-pointer">Voltix</h2>

    {/* Desktop Menu */}
    <ul className="hidden lg:flex gap-6 font-semibold text-gray-500 items-center">
      <Link href="/" className={linkStyle("/")}>Home</Link>
      <Link href="/store" className={linkStyle("/store")}>Store</Link>
      <Link href="/about" className={linkStyle("/about")}>About</Link>

      {/* Pages Dropdown */}
      <li className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 hover:text-black"
        >
          Pages
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.22 8.22 10 12.94l4.78-4.72" />
          </svg>
        </button>

        {open && (
          <div className="absolute top-full mt-2 w-48 bg-white shadow rounded">
            <Link href="/privacy_policy" className="block px-4 py-2 hover:bg-gray-100">
              Privacy Policy
            </Link>
            <Link href="/terms" className="block px-4 py-2 hover:bg-gray-100">
              Terms Of Use
            </Link>
          </div>
        )}
      </li>

      <Link href="/contact" className={linkStyle("/contact")}>Contact</Link>
    </ul>
    {/* Desktop Auth Buttons */}
    <div className="hidden lg:flex gap-3">
      {isLoggedIn ? (
        <button
          onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}
          className="bg-black text-white px-6 py-3 rounded-2xl"
        >
          Logout
        </button>
      ) : (
        <>
          <Link href="/login?show=true">
            <button className="bg-black hover:bg-transparent cursor-pointer transition-all ease-in-out duration-200 border hover:text-black text-center text-white px-6 py-3 rounded-2xl">
              Register
            </button>
          </Link>
          <Link href="/login">
            <button className="border hover:bg-gray-200 cursor-pointer px-6 py-3 rounded-2xl">
              Login
            </button>
          </Link>
        </>
      )}
    </div>

    {/* Mobile Button */}
    <button
      onClick={() => setMobileOpen(!mobileOpen)}
      className="lg:hidden"
    >
      <div className="w-6 h-1 bg-black my-1"></div>
      <div className="w-6 h-1 bg-black my-1"></div>
      <div className="w-6 h-1 bg-black my-1"></div>
    </button>
  </div>

  {/* 🔥 Mobile Expand Menu */}
  <div
    className={`lg:hidden overflow-hidden transition-all duration-300 ${
      mobileOpen ? "max-h-[500px]" : "max-h-0"
    }`}
  >
    <ul className="flex flex-col gap-4 px-12 pb-6 font-semibold text-gray-600">
      <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
      <Link href="/store" onClick={() => setMobileOpen(false)}>Store</Link>
      <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
      <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>

      <Link href="/privacy_policy">Privacy Policy</Link>
      <Link href="/terms">Terms Of Use</Link>

      {!isLoggedIn ?
        <>
          <Link href="/login?show=true" className="font-bold">Register</Link>
          <Link href="/login" className="font-bold">Login</Link>
        </>
      : <>
          <Link href="/login" className="font-bold"><button onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}>Logout</button></Link>
        </>}
    </ul>
  </div>
</div>

  )
}

export default navbar
