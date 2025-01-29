'use client';

import Image from 'next/image';

const InfoSection = () => {
  return (
    <section className="flex justify-center relative z-10 -mt-16">
      <div className="bg-white dark:bg-white py-8 w-[90%] sm:w-[80%] lg:w-[65%] h-auto border flex flex-col sm:flex-row shadow-lg">
        {/* First Partition */}
        <div className="flex-1 flex flex-col sm:flex-row lg:flex-row items-center sm:justify-center border-b border-gray-700 sm:border-b-0 sm:border-r p-4">
          <div className="mb-2 sm:mb-0 sm:mr-4">
            <Image
              src="/protection.png"
              alt="Reliability Icon"
              width={40}
              height={40}
              className="text-[#FFD700]" // Adjusted for better visibility
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-semibold text-gray-900">Reliability</p>
            <p className="text-black">Transparency Service</p>
          </div>
        </div>

        {/* Second Partition */}
        <div className="flex-1 flex flex-col sm:flex-row lg:flex-row items-center sm:justify-center border-t border-gray-700 sm:border-t-0 sm:border-x p-4">
          <div className="mb-2 sm:mb-0 sm:mr-4">
            <Image
              src="/quality.png"
              alt="Materials Icon"
              width={40}
              height={40}
              className="text-[#FFD700]" // Adjusted for better visibility
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-semibold text-gray-900">Materials</p>
            <p className="text-black">100% Quality Product</p>
          </div>
        </div>

        {/* Third Partition */}
        <div className="flex-1 flex flex-col sm:flex-row lg:flex-row items-center sm:justify-center border-t border-gray-700 sm:border-t-0 sm:border-l p-4">
          <div className="mb-2 sm:mb-0 sm:mr-4">
            <Image
              src="/tools.png"
              alt="Expert Staff Icon"
              width={40}
              height={40}
              className="text-[#FFD700]" // Adjusted for better visibility
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-semibold text-gray-900">Expert Staff</p>
            <p className="text-black">Trained & Experienced</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
