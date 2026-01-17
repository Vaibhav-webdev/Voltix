"use client"

import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { X } from "lucide-react"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
  const router = useRouter()
  return (
  <nav className="w-full bg-green-100 px-10 sm:px-8 md:px-16 py-4 flex items-center justify-between relative">
      
      {/* Logo */}
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
        resume<span className="text-green-500">.</span>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-8 text-gray-600">
        <li>
          <Link href="#" className="hover:text-green-600">
            Home
          </Link>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("feature")}
            className="hover:text-green-600"
          >
            Features
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("testimonial")}
            className="hover:text-green-600"
          >
            Testimonials
          </button>
        </li>
        <li>
          <Link href="/contact" className="hover:text-green-600">
            Contact
          </Link>
        </li>
      </ul>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={() => router.push("/dashboard")}
          className="px-5 py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition"
        >
          Get started
        </button>
        <button
          onClick={() => router.push("/login")}
          className="px-7 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Login
        </button>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-gray-700"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50">
          <ul className="flex flex-col gap-4 px-6 py-6 text-gray-700">
            <li>
              <Link href="#" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("feature");
                  setOpen(false);
                }}
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("testimonial");
                  setOpen(false);
                }}
              >
                Testimonials
              </button>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>

            {/* Divider */}
            <hr className="my-2" />

            {/* Mobile Actions */}
            <button
              onClick={() => {
                router.push("/dashboard");
                setOpen(false);
              }}
              className="w-full py-3 rounded-full bg-green-500 text-white font-medium"
            >
              Get started
            </button>
            <button
              onClick={() => {
                router.push("/login");
                setOpen(false);
              }}
              className="w-full py-3 rounded-full border border-gray-300"
            >
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
