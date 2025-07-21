import Image from 'next/image';
import React from 'react';

const TileSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center text-[#800000] mb-6">
        AJ&H Contractors - Tile Services
      </h1>

      {/* Introduction paragraph */}
      <p className="text-lg text-gray-700 dark:text-white mb-6">
        Welcome to AJ&H Contractors: Your Tile Experts
      </p>
      <p className="text-md text-gray-700 dark:text-white mb-6">
        At AJ&H Contractors, we provide professional tile installation, repair,
        and maintenance services for both residential and commercial properties.
        Whether you’re updating your kitchen backsplash, installing new floors,
        or renovating your bathroom, our team delivers high-quality tile
        services that enhance the beauty and functionality of your space.
      </p>

      {/* Services List with image below content on small screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="space-y-6">
          <div className="service-item">
            <h2 className="text-2xl font-semibold text-[#800000]">
              Our Tile Services:
            </h2>
            <ul className="list-inside list-disc text-gray-700 dark:text-white space-y-2 mt-4">
              <li>
                <strong>Tile Installation</strong>
                <p>
                  We offer expert installation of all types of tile, including
                  ceramic, porcelain, marble, and mosaic. Whether for floors,
                  walls, or backsplashes, we ensure precise, durable, and
                  beautiful tile work.
                </p>
              </li>
              <li>
                <strong>Tile Repair & Restoration</strong>
                <p>
                  If your tiles are cracked, chipped, or damaged, our team can
                  provide fast and effective repairs to restore the beauty and
                  integrity of your surfaces.
                </p>
              </li>
              <li>
                <strong>Grout & Caulking</strong>
                <p>
                  We offer grout and caulking services to keep your tiles in top
                  condition, preventing water damage and ensuring a clean,
                  professional finish.
                </p>
              </li>
              <li>
                <strong>Custom Tile Designs</strong>
                <p>
                  Looking for a unique touch? We offer custom tile layouts and
                  designs, from intricate patterns to feature walls, to make
                  your space stand out.
                </p>
              </li>
              <li>
                <strong>Tile Cleaning & Maintenance</strong>
                <p>
                  Our cleaning and maintenance services help keep your tiles
                  looking new, removing stains, mold, and grime to maintain
                  their beauty for years to come.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/kitchen.jpeg"
            alt="Tile Services"
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
              <strong>Skilled Professionals:</strong>
              <p>
                Our experienced team is trained in all aspects of tile
                installation and repair, delivering flawless results every time.
              </p>
            </li>
            <li>
              <strong>High-Quality Materials:</strong>
              <p>
                We use premium tiles and materials to ensure durability and a
                perfect finish for all your tile projects.
              </p>
            </li>
            <li>
              <strong>Personalized Service:</strong>
              <p>
                We work closely with you to choose the right tile materials and
                design that match your style and needs.
              </p>
            </li>
            <li>
              <strong>Affordable & Transparent Pricing:</strong>
              <p>
                Our pricing is competitive and transparent, so you know exactly
                what to expect with no hidden costs.
              </p>
            </li>
            <li>
              <strong>Efficient & Timely Completion:</strong>
              <p>
                We work efficiently to complete your tile project on time,
                leaving you with beautiful, functional spaces.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/tiles1.jpg"
            alt="Tile Services"
            width={350} // Set width explicitly
            height={350}
            className="object-cover rounded-lg shadow-lg w-full max-w-[450px] aspect-square"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-semibold text-[#800000] mb-4">
          Transform Your Space with Tile Today!
        </h3>
        <p className="text-lg text-gray-700 dark:text-white mb-4">
          Contact AJ&H Contractors for expert tile installation, repair, and
          maintenance services. We’re here to bring your vision to life with
          high-quality tile craftsmanship.
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

export default TileSection;
