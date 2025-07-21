// components/FooterRightSection.tsx
import React from "react";

const FooterRightSection: React.FC = () => {
  return (
    <div className="text-center sm:text-left">
      <h2 className="text-lg font-bold">Get In Touch</h2>
      <div className="mt-4 space-y-4">
        {/* General Queries Section */}
        <div>
          <h3 className="font-semibold">GENERAL QUERIES</h3>
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <a href="tel:9736507080" className="hover:text-red-800">
              (973)-650-7080
            </a>
          </div>
          <div className="flex flex-col items-center sm:items-start space-y-2">
            <a
              href="mailto:haddadmaher@yahoo.com"
              className="hover:text-red-800"
            >
              haddadmaher@yahoo.com
            </a>
            <a
              href="mailto:info@ajhcontractors.com"
              className="hover:text-red-800"
            >
              info@ajhcontractors.com
            </a>
          </div>
        </div>

        {/* Office Location Section */}
        <div>
          <h3 className="font-semibold ">OFFICE LOCATION</h3>
          <div className="flex justify-center items-center sm:justify-start space-x-2">
            <p>
              525 Lafayette Ave <br /> Hawthorne, NJ 07506
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterRightSection;
