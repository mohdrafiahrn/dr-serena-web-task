'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const validate = () => {
    let newErrors = {};

    // Name validation: only alphabets
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Only alphabets are allowed';
    }

    // Phone: 10-digit number
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be a 10-digit number';
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = 'This field is required';
    }

    // Preferred time
    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Please select date and time';
    }

    // Checkbox
    if (!formData.agree) {
      newErrors.agree = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully! ✅');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agree: false,
      })
    }
  };

  // today's date in yyyy-mm-ddTHH:MM
  const todayISO = new Date().toISOString().slice(0, 16);

  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-poppins">
          Book a Free Consultation
        </h2>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              maxLength={10}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              What brings you here? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Preferred Time (DateTime Picker) */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Preferred date & time to reach you <span className="text-red-500">*</span>
            </label>
            <input
              type="datetime-local"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              min={todayISO}
            />
            {formData.preferredTime && (
              <p className="text-sm text-gray-600 mt-1">
                Selected: {new Date(formData.preferredTime).toLocaleString('en-US', {
                  weekday: 'short',
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                })}
              </p>
            )}
            {errors.preferredTime && (
              <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>
            )}
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm text-gray-700">
              I agree to be contacted <span className="text-red-500">*</span>
            </label>
          </div>
          {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
