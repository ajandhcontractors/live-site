// components/Footer.tsx
import React from 'react';
import FooterLeftSection from './FooterLeftSection';
import FooterRightSection from './FooterRightSection';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/van.jpg')`, // Replace with your image path
      }} 
    >
      <div className="bg-black bg-opacity-60 py-12 pb-24 px-4 sm:px-8 md:px-16 lg:pl-44">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <FooterLeftSection />

          {/* Middle Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold">Useful Links</h2>
            <div className="grid grid-cols-2 gap-x-8 mt-4">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-red-800">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus" className="hover:text-red-800">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-red-800">
                    CONTACT
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="hover:text-red-800">
                    FAQ&apos;s
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-red-800">
                    GALLERY
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-red-800"
                  >
                    SERVICES
                  </Link>
                
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <FooterRightSection />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
