import Image from 'next/image';
import React from 'react';

const HardwoodFlooringSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center text-[#800000] mb-6">
        AJ&H Contractors - Hardwood Floor Services
      </h1>

      {/* Introduction paragraph */}
      <p className="text-lg text-gray-700 dark:text-white mb-6">
        Welcome to AJ&H Contractors: Your Hardwood Flooring Experts
      </p>
      <p className="text-md text-gray-700 dark:text-white mb-6">
        At AJ&H Contractors, we specialize in transforming your spaces with
        high-quality hardwood floors. Whether you need installation,
        refinishing, or repairs, our experienced team delivers exceptional
        results with attention to detail and craftsmanship.
      </p>

      {/* Services List with image below content on small screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="space-y-6">
          <div className="service-item">
            <h2 className="text-2xl font-semibold text-[#800000]">
              Our Hardwood Floor Services:
            </h2>
            <ul className="list-inside list-disc text-gray-700 dark:text-white space-y-2 mt-4">
              <li>
                <strong>Hardwood Floor Installation:</strong>
                <p>
                  We offer expert installation of all types of hardwood
                  flooring. From traditional to exotic woods, we ensure a
                  precise, beautiful finish that enhances your space.
                </p>
              </li>
              <li>
                <strong>Hardwood Floor Refinishing:</strong>
                <p>
                  Revitalize your floors with our refinishing services. We
                  remove scratches, scuffs, and old finishes, restoring your
                  hardwood floors to their original beauty.
                </p>
              </li>
              <li>
                <strong>Hardwood Floor Repair:</strong>
                <p>
                  Whether it’s warping, cracks, or dents, our team is skilled in
                  repairing damaged hardwood floors, bringing them back to life
                  with seamless results.
                </p>
              </li>
              <li>
                <strong>Custom Hardwood Designs:</strong>
                <p>
                  Want something unique? We design custom hardwood flooring
                  patterns that suit your personal style, including inlays and
                  borders.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/hardwood.jpeg"
            alt="Hardwood Flooring Services"
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
              <strong>Expert Craftsmanship:</strong>
              <p>
                Our skilled professionals are dedicated to delivering flawless
                results on every project.
              </p>
            </li>
            <li>
              <strong>Personalized Service:</strong>
              <p>
                We listen to your needs, offering tailored solutions to match
                your vision and style.
              </p>
            </li>
            <li>
              <strong>High-Quality Materials:</strong>
              <p>
                We use only premium hardwoods, ensuring lasting durability and
                beauty.
              </p>
            </li>
            <li>
              <strong>Transparent & Competitive Pricing:</strong>
              <p>
                Our pricing is straightforward with no hidden fees, offering
                great value for top-tier flooring services.
              </p>
            </li>
            <li>
              <strong>Efficient & Timely:</strong>
              <p>
                We complete your project on time, minimizing disruption while
                maintaining high standards.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/woodenflooring2.jpg"
            alt="Hardwood Flooring Services"
            width={350} // Set width explicitly
            height={350}
            className="object-cover rounded-lg shadow-lg w-full max-w-[450px] aspect-square"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-semibold text-[#800000] mb-4">
          Ready to Transform Your Space?
        </h3>
        <p className="text-lg text-gray-700 dark:text-white mb-4">
          Contact AJ&H Contractors today for all your hardwood flooring needs.
          From installation to refinishing and repairs, we provide quality
          craftsmanship that lasts.
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
      className="text-blue-500 dark:text-blue-400 font-medium hover:underline"
    >
      haddadmaher@yahoo.com
    </a>
  </p>
  <p>Address: 525 Lafayette Ave, Hawthrone, NJ 07506</p>
</div>

      </div>
    </div>
  );
};

export default HardwoodFlooringSection;
