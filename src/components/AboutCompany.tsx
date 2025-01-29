import Image from 'next/image';

const AboutCompany = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 pt-28 pb-28 lg:pl-72 lg:pr-72 md:pl-48 md:pr-48 sm:px-8 bg-white">
      {/* Image Section */}
      <div className="border border-[#800000] rounded-lg overflow-hidden w-full lg:w-[500px] order-1 mb-8 lg:mb-0 flex justify-center sm:mx-auto">
        <Image
          src="/abouts.jpeg"
          alt="AJ&H Home Improvement"
          width={500} // Set the desired width
          height={300} // Set the desired height
          className="object-cover w-full h-auto sm:max-w-full"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 w-full order-2">
        <h4 className="text-[#800000] font-bold text-sm uppercase mb-2 text-center sm:text-left">
          About Company
        </h4>
        <h2 className="text-5xl font-bold text-[#800000] mb-4 xs:text-xl text-center sm:text-left">
          About AJ&H Home <br /> Improvement
        </h2>
        <div className="flex flex-wrap gap-6 mb-4 justify-center sm:justify-start text-center sm:text-left">
          <span className="text-[#800000] font-bold text-sm flex items-center gap-1">
            <span className="material-icons"></span> Certified 
          </span>
          <span className="text-[#800000] font-bold text-sm flex items-center gap-1">
            <span className="material-icons"></span> Innovative Work
          </span>
          <span className="text-[#800000] font-bold text-sm flex items-center gap-1">
            <span className="material-icons"></span> Experienced
          </span>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 xs:text-l text-center sm:text-left">
          At AJ&H Home Improvement, we specialize in delivering high-quality
          home improvement and renovation services, including tiles
          installation, hardwood flooring, kitchen and bathroom remodeling,
          drywall installation, and painting. With years of experience, our team
          is committed to transforming your home or commercial property,
          focusing on exceptional craftsmanship, attention to detail, and
          reliable service. We ensure every project is completed on time, within
          budget, and to the highest standards.
        </p>
        <div className="flex justify-center sm:justify-start">
          <button className="px-6 py-2 text-[#800000] border border-[#800000] rounded-lg hover:bg-[#800000] hover:text-white transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
