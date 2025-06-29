'use client';

import React from 'react';
import Link from 'next/link';

const services = [
    {
        title: 'Anxiety & Stress Management',
        description:
            'Learn to manage overwhelming emotions with practical tools and compassionate guidance. Dr. Blake uses evidence-based techniques to help you reduce anxiety and regain control over your life.',
        image: '/s1.jpg',
    },
    {
        title: 'Relationship Counseling',
        description:
            'Build healthier communication, resolve conflicts, and strengthen emotional connection. Whether you’re navigating a breakup or improving your current bond, Dr. Blake supports your journey.',
        image: '/s2.jpg',
    },
    {
        title: 'Trauma Recovery',
        description:
            'Heal from past experiences in a safe, supportive environment. Dr. Blake integrates trauma-informed care to help you rebuild trust, safety, and self-worth at your own pace.',
        image: '/s3.jpg',
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-16 px-6 md:px-10 bg-gray-50 text-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins">
                    Services Offered
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                    {service.description}
                                </p>
                                <a
                                    href="#contact"
                                    className="mt-6 inline-block bg-blue-500 text-white font-medium text-sm py-2 px-4 rounded-md hover:bg-blue-600 transition self-start"
                                >
                                    Consult Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Session Fees Section */}
                <div className="mt-16 text-center">
                    <h4 className="text-2xl font-semibold mb-2 text-gray-800">Session Fees</h4>
                    <p className="text-gray-600 text-lg">
                        $200 for Individual Sessions &nbsp; | &nbsp; $240 for Couples Sessions
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
