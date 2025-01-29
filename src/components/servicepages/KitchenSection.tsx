import Image from 'next/image';
import React from 'react';

const KitchenSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center text-[#800000] mb-6">
        AJ&H Contractors - Kitchen Services
      </h1>

      {/* Introduction paragraph */}
      <p className="text-lg text-gray-700 dark:text-white mb-6">
        Welcome to AJ&H Contractors: Your Kitchen Renovation Experts
      </p>
      <p className="text-md text-gray-700 dark:text-white mb-6">
        At AJ&H Contractors, we specialize in creating beautiful, functional
        kitchens that suit your style and needs. Whether you’re looking for a
        complete remodel or a small update, our expert team delivers
        high-quality craftsmanship and personalized service to bring your vision
        to life.
      </p>

      {/* Services List with image below content on small screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="space-y-6">
          <div className="service-item">
            <h2 className="text-2xl font-semibold text-[#800000]">
              Our Kitchen Services:
            </h2>
            <ul className="list-inside list-disc text-gray-700 dark:text-white space-y-2 mt-4">
              <li>
                <strong>Kitchen Remodeling</strong>
                <p>
                  We offer full kitchen renovations, transforming your space
                  with modern layouts, high-end finishes, and smart storage
                  solutions.
                </p>
              </li>
              <li>
                <strong>Cabinet Installation & Refacing</strong>
                <p>
                  Update your kitchen with custom cabinetry or refinish your
                  existing cabinets for a fresh new look, enhancing both style
                  and functionality.
                </p>
              </li>
              <li>
                <strong>Countertop Installation</strong>
                <p>
                  Choose from a wide range of materials, including granite,
                  quartz, and marble, for beautiful and durable countertops that
                  complement your kitchen design.
                </p>
              </li>
              <li>
                <strong>Backsplash Installation</strong>
                <p>
                  Add character and style to your kitchen with custom tile
                  backsplashes that are both practical and eye-catching.
                </p>
              </li>
              <li>
                <strong>Lighting & Plumbing</strong>
                <p>
                  From lighting upgrades to plumbing adjustments, we handle all
                  the details to ensure your kitchen is both beautiful and
                  functional.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/kitchen1.jpg"
            alt="Kitchen Services"
            width={350} // Set width explicitly
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
              <strong>Experienced Professionals:</strong>
              <p>
                Our team has years of experience in kitchen design and
                renovation, delivering results that meet your needs and exceed
                expectations.
              </p>
            </li>
            <li>
              <strong>Customized Solutions:</strong>
              <p>
                We work closely with you to understand your vision and provide
                tailored solutions that match your style and budget.
              </p>
            </li>
            <li>
              <strong>High-Quality Materials:</strong>
              <p>
                We use only premium materials, ensuring that your kitchen is not
                only beautiful but durable and long-lasting.
              </p>
            </li>
            <li>
              <strong>Affordable & Transparent Pricing:</strong>
              <p>
                We offer competitive pricing with no hidden fees, providing you
                with value for every dollar spent.
              </p>
            </li>
            <li>
              <strong>On-Time Completion:</strong>
              <p>
                We complete projects efficiently and on time, minimizing
                disruption to your daily life.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/kitchen2.jpg"
            alt="Kitchen Services"
            width={350} // Set width explicitly
            height={350}
            className="object-cover rounded-lg shadow-lg w-full max-w-[450px] aspect-square"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-semibold text-[#800000] mb-4">
          Transform Your Kitchen Today!
        </h3>
        <p className="text-lg text-gray-700 dark:text-white mb-4">
          Ready to create the kitchen of your dreams? Contact AJ&H Contractors
          for expert kitchen renovations, from design to installation, and
          everything in between.
        </p>

        {/* Contact Info */}
        <div className="text-lg text-gray-800 dark:text-white">
          <p>Phone: (973) 650-7080</p>
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

export default KitchenSection;
