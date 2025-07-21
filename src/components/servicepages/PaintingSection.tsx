import Image from 'next/image';
import React from 'react';

const PaintingSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center text-[#800000] mb-6">
        AJ&H Contractors - Painting Services
      </h1>

      {/* Introduction paragraph */}
      <p className="text-lg text-gray-700 dark:text-white mb-6">
        Welcome to AJ&H Contractors: Your Painting Professionals
      </p>
      <p className="text-md text-gray-700 dark:text-white mb-6">
        At AJ&H Contractors, we offer top-quality painting services for both
        residential and commercial properties. Whether you&apos;re updating a
        single room or giving your entire home or office a fresh look, our
        skilled painters deliver exceptional results with attention to detail
        and professional finishes.
      </p>

      {/* Services List with image below content on small screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="space-y-6">
          <div className="service-item">
            <h2 className="text-2xl font-semibold text-[#800000]">
              Our Painting Services:
            </h2>
            <ul className="list-inside list-disc text-gray-700 dark:text-white space-y-2 mt-4">
              <li>
                <strong>Interior Painting:</strong>
                <p>
                  Transform your living spaces with our interior painting
                  services. We handle everything from prepping the walls to
                  applying the perfect coat of paint, leaving you with a
                  beautiful, refreshed home or office.
                </p>
              </li>
              <li>
                <strong>Exterior Painting:</strong>
                <p>
                  Protect and enhance your property with our exterior painting
                  services. We use high-quality, weather-resistant paints to
                  ensure your home or business looks great and stays protected
                  for years.
                </p>
              </li>
              <li>
                <strong>Cabinet & Trim Painting:</strong>
                <p>
                  Refresh your kitchen or bathroom with our cabinet and trim
                  painting services. We provide meticulous, long-lasting
                  finishes that elevate your space’s overall appearance.
                </p>
              </li>
              <li>
                <strong>Wallpaper Removal & Surface Preparation:</strong>
                <p>
                  If you&apos;re tired of old wallpaper, we offer removal
                  services and prepare your walls for a smooth paint job,
                  ensuring a clean, polished finish.
                </p>
              </li>
              <li>
                <strong>Custom Painting & Finishes:</strong>
                <p>
                  Looking for something unique? We offer custom painting
                  services, including accent walls, faux finishes, and
                  decorative painting techniques to make your space truly stand
                  out.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/painting.jpeg"
            alt="Painting Services"
            width={350}
            height={350}
            className="object-cover rounded-lg shadow-lg w-full max-w-[450px] aspect-square"
          />
        </div>
      </div>

      {/* Why Choose Us section with image below content on small screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#800000]">
            Why Choose AJ&H Contractors?
          </h2>
          <ul className="list-inside list-disc text-gray-700 dark:text-white space-y-2 mt-4">
            <li>
              <strong>1. Experienced Painters:</strong>
              <p>
                Our team is skilled in all types of painting, providing expert
                craftsmanship for every project.
              </p>
            </li>
            <li>
              <strong>2. High-Quality Materials:</strong>
              <p>
                We use premium paints and materials to ensure long-lasting,
                beautiful results.
              </p>
            </li>
            <li>
              <strong>3. Attention to Detail:</strong>
              <p>
                We take pride in our work, ensuring clean lines, smooth
                surfaces, and a perfect finish every time.
              </p>
            </li>
            <li>
              <strong>Affordable & Transparent Pricing:</strong>
              <p>
                Our pricing is clear and competitive, providing great value for
                the quality of work we deliver.
              </p>
            </li>
            <li>
              <strong>Efficient & On-Time Completion:</strong>
              <p>
                We complete projects on schedule and with minimal disruption to
                your daily life, leaving you with a freshly painted space you’ll
                love.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/paint2.jpg"
            alt="Painting Services"
            width={350}
            height={350}
            className="object-cover rounded-lg shadow-lg w-full max-w-[450px] aspect-square"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-semibold text-[#800000] mb-4">
          Bring Color to Your Space Today!
        </h3>
        <p className="text-lg text-gray-700 dark:text-white mb-4">
          Contact AJ&H Contractors for all your painting needs. From freshening
          up a room to a full property makeover, our team is ready to transform
          your space with expert painting services.
        </p>

        {/* Contact Info */}
        <div className="text-lg text-gray-800 dark:text-white">
          <p>
    Phone:{' '}
    <a
      href="tel:9736507080"
      className="text-blue-500 dark:text-blue-400 font-medium hover:underline"
    >
      (973)-650-7080
    </a>
  </p>
          <p>
            Email:{' '}
            <a
              href="mailto:haddadmaher@yahoo.com"
              className="text-blue-500 dark:text-blue-400"
            >
              haddadmaher@yahoo.com
            </a>
          </p>
          <p>Address: 525 Lafayette Ave, Hawthorne, NJ 07506</p>
        </div>
      </div>
    </div>
  );
};

export default PaintingSection;
