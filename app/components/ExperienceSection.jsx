'use client';

import React from 'react';
import { FaUserGraduate, FaClock } from 'react-icons/fa';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-6 md:px-20 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 font-poppins">
          Experience & Sessions
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Experience Box */}
          <div className="bg-blue-100 shadow-md rounded-xl p-6 w-full max-w-sm flex flex-col items-center">
            <FaClock className="text-blue-600 text-4xl mb-3" />
            <h3 className="text-2xl font-semibold">8+ Years</h3>
            <p className="text-gray-600 mt-2 text-sm text-center">
              of compassionate, evidence-based practice in psychology
            </p>
          </div>

          {/* Sessions Box */}
          <div className="bg-green-100 shadow-md rounded-xl p-6 w-full max-w-sm flex flex-col items-center">
            <FaUserGraduate className="text-green-600 text-4xl mb-3" />
            <h3 className="text-2xl font-semibold">500+ Sessions</h3>
            <p className="text-gray-600 mt-2 text-sm text-center">
              helping individuals overcome anxiety, trauma, and relationship issues
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
