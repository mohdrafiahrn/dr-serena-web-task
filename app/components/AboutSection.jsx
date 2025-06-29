'use client';

import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 ms-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Dr. Serena Blake –
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mt-2">
            Clinical Psychologist (PsyD)
          </h3>
          <p className="text-gray-700 text-base md:text-lg mt-6 leading-relaxed text-justify">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches like cognitive-behavioral therapy and mindfulness with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>

          <div className="mt-8">
            <Link
              href="#contact"
              className="inline-block bg-gray-400 text-white font-semibold px-6 py-3 rounded-2xl hover:bg-blue-600 hover:text-white transition"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/sb1.jpg"
            alt="Dr. Serena Blake"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
