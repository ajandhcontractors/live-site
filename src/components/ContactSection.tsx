'use client';

import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    const formData = new FormData(e.target as HTMLFormElement);
    const formObj = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      service: formData.get('service')?.toString() || '',
      requirements: formData.get('requirements')?.toString() || '',
    };

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObj),
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMessage('Your message has been sent successfully!');
      } else {
        setErrorMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error occurred:', error); // Log the error for debugging purposes
      setErrorMessage('An unknown error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between w-full px-6 md:px-16 lg:px-72 py-12 bg-gray-100">
      {/* Left Section - Contact Form */}
      <div className="w-full md:w-96 bg-gray-900 text-white p-8 rounded-md shadow-md">
        <h3 className="text-red-500 text-xs uppercase font-semibold mb-2">
          Get A Quote
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Free Estimation</h2>
        <p className="text-sm text-gray-300 mb-6">
          Please fill out the form and provide details of your request, we will
          reply back.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 text-sm bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 text-sm bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-500"
              required
            />
          </div>
          <div>
            <select
              name="service"
              defaultValue="" // Use defaultValue for an initial value
              className="w-full p-3 text-sm bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-500"
              required
            >
              <option value="" disabled>
                Service You Need
              </option>
              <option value="COMMERCIAL">COMMERCIAL</option>
              <option value="RESIDENTIAL">RESIDENTIAL</option>
            </select>
          </div>
          <div>
            <textarea
              name="requirements"
              placeholder="Your Requirements..."
              className="w-full p-3 text-sm bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-500"
              rows={4}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold bg-[#800000] text-white rounded hover:bg-red-600 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Request'}
            </button>
          </div>
        </form>

        {successMessage && (
          <div className="mt-4 text-green-500">{successMessage}</div>
        )}

        {errorMessage && (
          <div className="mt-4 text-red-500">{errorMessage}</div>
        )}
      </div>

      {/* Right Section - Q&A */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-8">
        <h3 className="text-[#800000] text-xs uppercase font-semibold mb-2">
          Common Questions & Answers
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#800000]">
          Get Detailed Answers
        </h2>
        <div className="bg-[#800000] shadow-md p-6 rounded-md">
          <h4 className="text-xl font-semibold text-white mb-4">Who Are We?</h4>
          <p className="text-white text-l leading-relaxed">
            Welcome to AJ&H Contractor, your trusted partner in design, build,
            and remodeling services in North Jersey since 2000. With over two
            decades of experience, we specialize in transforming houses into
            dream homes through expert craftsmanship, innovative designs, and a
            commitment to quality. From concept to completion, our dedicated
            team works closely with you to ensure every detail reflects your
            vision and enhances your living space. Whether you&apos;re planning
            a kitchen renovation, bathroom upgrade, or a full-scale home
            remodel, AJ&H Contractor delivers exceptional results you can count
            on. Let us bring your dream home to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
