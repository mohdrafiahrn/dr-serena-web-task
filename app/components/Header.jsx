'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo or Therapist Name */}
        <div className="flex flex-col">
          {/* <Image
            src="/logo 3.png"  // 👈 make sure logo.png is inside public folder
            alt="Dr. Serena Blake Logo"
            width={220}
            height={50}
            className="object-contain"
          /> */}
          <a href=''>
            <h1 className='text-4xl font-bold '>Dr.Serena Blake</h1>
            <h2 className='bg-blue-500 p-1 text-xl text-center text-white'>PSYCHOLOGICAL SERVICES</h2>
          </a>
        </div>

        {/* Menu for desktop */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="#about" className="px-4 py-2 hover:bg-blue-100 hover:text-blue-700 hover:rounded-md transition duration-200">About</Link>

          <Link href="#services" className="px-4 py-2 hover:bg-blue-100 hover:text-blue-700 hover:rounded-md transition duration-200">Services</Link>

          <Link href="#faq" className="px-4 py-2 hover:bg-blue-100 hover:text-blue-700 hover:rounded-md transition duration-200" >FAQ</Link>

          <Link href="#contact" className="px-4 py-2 hover:bg-blue-100 hover:text-blue-700 hover:rounded-md transition duration-200">Contact</Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 text-gray-700 font-poppis font-medium bg-white">
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
