'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BsHeart, BsChatQuote, BsPeople, BsFlower3, BsStar } from 'react-icons/bs';

export default function HeroSection() {
  const SLIDER_ITEMS = [
    {
      text: "Your story matters.",
      icon: <BsChatQuote className="inline-block mr-2 text-yellow-400" size={22} />,
    },
    {
      text: "Therapy is a journey.",
      icon: <BsPeople className="inline-block mr-2 text-yellow-400" size={22} />,
    },
    {
      text: "You are not alone.",
      icon: <BsHeart className="inline-block mr-2 text-yellow-400" size={22} />,
    },
    {
      text: "Healing begins here.",
      icon: <BsFlower3 className="inline-block mr-2 text-yellow-400" size={22} />,
    },
  ];

  // Duplicate first item at end for smooth transition loop
  const itemsWithClone = [...SLIDER_ITEMS, SLIDER_ITEMS[0]];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Looping fix logic
  useEffect(() => {
    if (index === SLIDER_ITEMS.length) {
      // After transition to last (duplicate), quickly reset without transition
      timeoutRef.current = setTimeout(() => {
        setTransition(false);
        setIndex(0);
      }, 700); // match transition duration
    } else {
      setTransition(true);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <Image
        src="/1.jpg"  // 👈 image public folder me ho
        alt="Background"
        fill
        className="absolute top-0 left-0 object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4 mt-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Healing Begins With Understanding
        </h1>
        <h2 className="text-lg md:text-2xl mb-4">
          Dr. Serena Blake, PsyD – Clinical Psychologist in Los Angeles
        </h2>

        {/* Smooth Vertical Slider */}
        <div className="h-10 overflow-hidden w-[320px] md:w-[400px] mb-6">
          <div
            className={`flex flex-col transition-transform duration-700 ease-in-out`}
            style={{
              transform: `translateY(-${index * 2.5}rem)`,
              transitionProperty: transition ? "transform" : "none",
            }}
          >
            {itemsWithClone.map((item, i) => (
              <div
                key={i}
                className="h-10 flex items-center justify-center gap-2 text-base md:text-lg"
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-white bg-yellow-500/20 px-4 py-2 rounded-full">
            <BsStar className="text-yellow-400" size={20} />
            <span className="text-sm md:text-base font-medium">Top Rated</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-yellow-500/20 px-4 py-2 rounded-full">
            <BsPeople className="text-yellow-400" size={20} />
            <span className="text-sm md:text-base font-medium">8+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-yellow-500/20 px-4 py-2 rounded-full">
            <BsChatQuote className="text-yellow-400" size={20} />
            <span className="text-sm md:text-base font-medium">500+ Sessions</span>
          </div>
        </div>
        <Link
          href="#contact"
          className="inline-block w-80 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition ms-2 mt-5"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
}
