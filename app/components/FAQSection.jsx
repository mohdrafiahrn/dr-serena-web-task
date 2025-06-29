'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes — all virtual sessions are conducted via Zoom.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'A 24-hour notice is required to cancel or reschedule appointments.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-6 md:px-10 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-poppins">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-700 text-sm border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
