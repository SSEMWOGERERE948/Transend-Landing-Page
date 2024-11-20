"use client"

import { useState } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0B1F3A] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-[#007FFF]" />
              <span className="text-white text-2xl font-bold">TRANSEND</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#home" className="text-white hover:text-[#007FFF] px-3 py-2 rounded-md font-medium">Home</Link>
              <Link href="/#services" className="text-white hover:text-[#007FFF] px-3 py-2 rounded-md font-medium">Services</Link>
              <Link href="/#destinations" className="text-white hover:text-[#007FFF] px-3 py-2 rounded-md font-medium">Destinations</Link>
              <Link href="/#testimonials" className="text-white hover:text-[#007FFF] px-3 py-2 rounded-md font-medium">Testimonials</Link>
              <Link href="/#contact" className="bg-[#007FFF] text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600">Contact Us</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#home" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/#services" className="text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link href="/#destinations" className="text-white block px-3 py-2 rounded-md text-base font-medium">Destinations</Link>
            <Link href="/#testimonials" className="text-white block px-3 py-2 rounded-md text-base font-medium">Testimonials</Link>
            <Link href="/#contact" className="bg-[#007FFF] text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}