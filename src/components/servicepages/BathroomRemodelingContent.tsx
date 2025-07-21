import Image from 'next/image';
import React from 'react';

const BathroomRemodelingContent = () => {
  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center text-[#800000] mb-6">
        AJ&H Contractors - Bathroom Remodeling Services
      </h1>

      {/* Introduction paragraph */}
      <p className="text-lg text-gray-700 dark:text-white mb-6">
        Welcome to AJ&H Contractors: Your Bathroom Renovation Experts
      </p>
      <p className="text-md text-gray-700 dark:text-white mb-6">
        At AJ&H Contractors, we specialize in transforming bathrooms into
        beautiful, functional spaces. Whether you’re looking to update a small
        powder room or fully remodel your master bath, our skilled team provides
        top-quality craftsmanship and personalized service, ensuring your
        bathroom meets your vision and needs.
      </p>

      {/* Services List with image below content on small screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="space-y-6">
          <div className="service-item">
            <h2 className="text-2xl font-semibold text-[#800000]">
              Our Bathroom Remodeling Services:
            </h2>
            <ul className="list-inside list-disc text-gray-700 dark:text-white space-y-2 mt-4">
              <li>
                <strong>Full Bathroom Renovations</strong>
                <p>
                  We handle complete bathroom overhauls, from layout changes to
                  the installation of new fixtures, tiles, and finishes. Your
                  new bathroom will combine style and functionality perfectly.
                </p>
              </li>
              <li>
                <strong>Shower & Tub Installation</strong>
                <p>
                  Whether you&apos;re interested in a sleek modern shower or a
                  luxurious soaking tub, we install high-quality options that
                  elevate the look and feel of your bathroom.
                </p>
              </li>
              <li>
                <strong>Vanity & Cabinet Installation</strong>
                <p>
                  Upgrade your storage and aesthetics with custom vanities and
                  cabinets designed to complement your space. We provide stylish
                  solutions for every size and layout.
                </p>
              </li>
              <li>
                <strong>Tile & Backsplash Installation</strong>
                <p>
                  From floors to walls, our tile experts install stunning
                  designs in a variety of materials, giving your bathroom a
                  sophisticated, polished look.
                </p>
              </li>
              <li>
                <strong>Plumbing & Electrical Services</strong>
                <p>
                  We provide plumbing and electrical upgrades to ensure your
                  bathroom remodel is both functional and safe, including
                  lighting, faucets, and fixture installations.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/bathroom.jpeg"
            alt="Bathroom Remodeling Services"
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
              <strong>Experienced Team:</strong>
              <p>
                Our skilled professionals bring years of experience to every
                bathroom remodel, ensuring quality craftsmanship and attention
                to detail.
              </p>
            </li>
            <li>
              <strong>Personalized Designs:</strong>
              <p>
                We collaborate with you to create a bathroom that reflects your
                style, whether it&apos;s modern, traditional, or custom-designed
                to your preferences.
              </p>
            </li>
            <li>
              <strong>Quality Materials:</strong>
              <p>
                We use premium materials and fixtures, ensuring your bathroom is
                both beautiful and durable for years to come.
              </p>
            </li>
            <li>
              <strong>Affordable & Transparent Pricing:</strong>
              <p>
                We offer competitive pricing with no hidden fees, providing you
                with outstanding value for your bathroom remodel.
              </p>
            </li>
            <li>
              <strong>Efficient & On-Time Completion:</strong>
              <p>
                We respect your time and aim to complete your bathroom remodel
                on schedule, minimizing disruption to your daily routine.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/bathroom.jpeg"
            alt="Bathroom Remodeling Services"
            width={350} // Set width explicitly
            height={350}
            className="object-cover rounded-lg shadow-lg w-full max-w-[450px] aspect-square"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-semibold text-[#800000] mb-4">
          Transform Your Bathroom Today!
        </h3>
        <p className="text-lg text-gray-700 dark:text-white mb-4">
          Ready to create a bathroom that feels like a retreat? Contact AJ&H
          Contractors for expert remodeling services, from design to
          installation, and every step in between.
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

export default BathroomRemodelingContent;
