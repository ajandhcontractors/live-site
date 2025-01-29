import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface NavigationLinksProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ setIsMenuOpen }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="flex flex-col p-4">
      {/* Navigation Links */}
      <Link
        href="/"
        className="text-center py-2"
        onClick={() => setIsMenuOpen(false)}
      >
        HOME
      </Link>
      <Link
        href="/aboutus"
        className="text-center py-2"
        onClick={() => setIsMenuOpen(false)}
      >
        ABOUT
      </Link>
      <Link
        href="/gallery"
        className="text-center py-2"
        onClick={() => setIsMenuOpen(false)}
      >
        GALLERY
      </Link>
      <Link
        href="/contact"
        className="text-center py-2"
        onClick={() => setIsMenuOpen(false)}
      >
        CONTACT
      </Link>
      <div className="relative">
        <span
          className="text-center py-2 cursor-pointer flex items-center justify-center"
          onClick={() => setIsServicesOpen(!isServicesOpen)}
        >
          SERVICES
          <ChevronDown
            className={`ml-2 h-4 w-4 text-white transform transition-all duration-300 ${
              isServicesOpen ? 'rotate-180' : ''
            }`}
          />
        </span>
        {isServicesOpen && (
          <div className="flex flex-col bg-white text-[#800000] mt-2">
            {[
              'TILES',
              'HARDWOOD FLOORING',
              'KITCHENS',
              'BATHROOM REMODELING',
              'DRYWALL',
              'PAINTING',
            ].map((service, index) => (
              <Link
                key={index}
                href={`/ourservices/${service
                  .toLowerCase()
                  .replace(/ /g, '-')}`}
                className="px-4 py-2 text-center hover:bg-[#800000] hover:text-white transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {service}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationLinks;
