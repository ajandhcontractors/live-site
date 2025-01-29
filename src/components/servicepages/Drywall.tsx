import Image from 'next/image';
import React from 'react';

const Drywall = () => {
  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center text-[#800000] mb-6">
        AJ&H Contractors - Drywall Services
      </h1>

      {/* Introduction paragraph */}
      <p className="text-lg text-gray-700 dark:text-white mb-6">
        Welcome to AJ&H Contractors: Your Drywall Experts
      </p>
      <p className="text-md text-gray-700 dark:text-white mb-6">
        At AJ&H Contractors, we specialize in providing high-quality drywall
        services for both residential and commercial properties. Whether you
        need new drywall installation, repairs, or finishing, our team is
        dedicated to delivering exceptional results with a focus on quality,
        efficiency, and attention to detail.
      </p>

      {/* Services List with image below content on small screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="space-y-6">
          <div className="service-item">
            <h2 className="text-2xl font-semibold text-[#800000]">
              Our Drywall Services:
            </h2>
            <ul className="list-inside list-disc text-gray-700 dark:text-white space-y-2 mt-4">
              <li>
                <strong>Drywall Installation:</strong>
                <p>
                  We offer professional drywall installation for new
                  construction, home renovations, or commercial projects. Our
                  team ensures precise installation with minimal disruption to
                  your space.
                </p>
              </li>
              <li>
                <strong>Drywall Repair:</strong>
                <p>
                  From small holes to large cracks, we expertly repair drywall
                  damage. Our seamless repairs restore your walls to their
                  original condition, ready for painting or finishing.
                </p>
              </li>
              <li>
                <strong>Drywall Finishing:</strong>
                <p>
                  We provide full drywall finishing services, including taping,
                  mudding, and sanding to create smooth, ready-to-paint
                  surfaces. Our attention to detail ensures a flawless finish
                  every time.
                </p>
              </li>
              <li>
                <strong>Soundproofing & Insulation:</strong>
                <p>
                  Enhance your space with our soundproofing and insulation
                  drywall services. We help improve both acoustics and energy
                  efficiency, providing a more comfortable living or working
                  environment.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/drywall1.jpg"
            alt="Drywall Services"
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
                Our team has extensive experience in drywall installation and
                repair, delivering high-quality work on every project.
              </p>
            </li>
            <li>
              <strong>Customized Solutions:</strong>
              <p>
                We provide tailored drywall services based on your specific
                needs, ensuring you get the best results for your space.
              </p>
            </li>
            <li>
              <strong>Quality Materials:</strong>
              <p>
                We use top-quality drywall materials and finishing products to
                ensure long-lasting results that look great and stand the test
                of time.
              </p>
            </li>
            <li>
              <strong>Affordable & Transparent Pricing:</strong>
              <p>
                Our pricing is competitive and transparent, so you’ll know
                exactly what to expect without hidden costs.
              </p>
            </li>
            <li>
              <strong>Efficient & Timely Completion:</strong>
              <p>
                We respect your time and work diligently to complete drywall
                projects on schedule, ensuring minimal disruption to your daily
                routine.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/drywall2.jpg"
            alt="Drywall Services"
            width={350} // Set width explicitly
            height={350}
            className="object-cover rounded-lg shadow-lg w-full max-w-[450px] aspect-square"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-semibold text-[#800000] mb-4">
          Get Your Drywall Project Started Today!
        </h3>
        <p className="text-lg text-gray-700 dark:text-white mb-4">
          Contact AJ&H Contractors for expert drywall services, whether you need
          installation, repairs, or finishing. We’re here to help transform your
          space with exceptional drywall craftsmanship.
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

export default Drywall;
