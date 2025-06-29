'use client';

import React from 'react';
import Link from 'next/link';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Left: Therapist Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Dr. Serena Blake, PsyD</h2>
          <p className="text-sm">
            1287 Maplewood Drive <br />
            Los Angeles, CA 90026
          </p>
        </div>

        {/* Middle: Useful Links */}
        <div>
          <h3 className="text-md font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#services" className="hover:underline">Services</Link></li>
            <li><Link href="#faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            <li><Link href="#book" className="hover:underline">Book a Session</Link></li>
          </ul>
        </div>

        {/* Right: Contact & Hours */}
        <div>
          <h3 className="text-md font-semibold text-white mb-2">Contact</h3>
          <p className="text-sm">Phone: (323) 555-0192</p>
          <p className="text-sm">Email: <a href="mailto:serena@blakepsychology.com" className="underline">serena@blakepsychology.com</a></p>
          <div className="mt-4">
            <h3 className="text-md font-semibold text-white mb-1">Office Hours</h3>
            <p className="text-sm">In-person: Tue & Thu, 10 AM – 6 PM</p>
            <p className="text-sm">Virtual: Mon, Wed & Fri, 1 PM – 5 PM</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-12">
        © {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
