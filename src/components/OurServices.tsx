'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Bathroom Remodeling',
    description: 'Customized to Your Preferences',
    image: '/bathroom.jpeg',
    icon: '/path-to-your-icon1.png',
    link: '/ourservices/bathroom-remodeling',
    readMore: '/ourservices/bathroom-remodeling', // Add the Read More link here
  },
  {
    title: 'Hardwood Floors',
    description: 'Attention to Detail Guaranteed',
    image: '/hardwood.jpeg',
    icon: '/path-to-your-icon2.png',
    link: '/ourservices/hardwood-flooring',
    readMore: '/ourservices/hardwood-flooring',
  },
  {
    title: 'Kitchens',
    description: 'Efficient. Reliable. Exceptional Service',
    image: '/kitchen.jpeg',
    icon: '/path-to-your-icon3.png',
    link: '/ourservices/kitchens',
    readMore: '/ourservices/kitchens',
  },
  {
    title: 'Tile Installation',
    description: 'Durable and Beautiful Finishes',
    image: '/tiles.jpeg',
    icon: '/path-to-your-icon4.png',
    link: '/ourservices/tiles',
    readMore: '/ourservices/tiles',
  },
  {
    title: 'Painting Services',
    description: 'Enhancing Your Space with Colors',
    image: '/stairs.jpeg',
    icon: '/path-to-your-icon5.png',
    link: '/ourservices/painting',
    readMore: '/ourservices/painting',
  },
  {
    title: 'Drywall Installation',
    description: 'Smooth and Sturdy Walls',
    image: '/painting.jpeg',
    icon: '/path-to-your-icon6.png',
    link: '/ourservices/drywall',
    readMore: '/ourservices/drywall',
  },
];

const OurServices = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#800000] mb-8">
        OUR SERVICES
      </h2>
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-[#800000] mb-8 leading-normal sm:leading-relaxed">
        Discover AJ&H Contractors <br /> RESIDENTIAL & COMMERCIAL improvement{' '}
        <br />
        Design Build Remodeling Contractors Serving North Jersey Since 2000
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-16 lg:px-64">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col p-4"
          >
            <Link href={service.link}>
              <div className="w-full h-[400px] relative mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 ease-in-out transform hover:scale-105"
                  priority
                />
              </div>
            </Link> 
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {/* Conditionally render the "Read More" link if it exists */}
              {service.readMore && (
                <Link href={service.readMore} className="text-blue-500">
                  Read More
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Scoped styles for medium screens */}
      <style jsx>{`
        @media (min-width: 1024px) and (max-width: 1485px) {
          .grid {
            grid-template-columns: repeat(
              2,
              1fr
            ); /* Two columns in medium screens */
          }
          .grid {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OurServices;
