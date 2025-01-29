'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Menu, ChevronDown } from 'lucide-react';
import { MdEmail, MdPhone } from 'react-icons/md';
import MobileMenu from './MobileMenu';
import { RiFacebookFill } from 'react-icons/ri';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#800000] text-white">
      {/* Top Section */}
      <div className="flex items-center px-4 py-2">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image
              src="/logo-1.png"
              alt="Logo"
              width={180}
              height={180}
              className="cursor-pointer"
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
        </div>

        {/* Middle Section */}
        <div className="hidden md:flex flex-col items-center justify-center ml-[40px] lg:ml-64 2xl:ml-96">
          <div className="flex items-center space-x-6 text-sm">
            <MdEmail size={20} />
            <span>haddadmaher@yahoo.com</span>
            <a
              href="https://www.facebook.com/ajandhcontractors"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <RiFacebookFill size={20} />
            </a>
            <a
              href="https://www.instagram.com/YourPage"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajhcontractors-ajh-7072b9348/?original_referer="
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaLinkedin size={20} />
            </a>
            <MdPhone size={20} />
            <span>(973)-650-7080</span>
          </div>
          <nav className="flex space-x-4 mt-2 text-sm">
            <Link href="/">HOME</Link>
            <Link href="/aboutus">ABOUT</Link>

            <div className="relative group">
              <div className="flex items-center">
                <span>SERVICES</span>
                <ChevronDown className="ml-2 h-4 w-4 text-white group-hover:rotate-180 transition-transform duration-300" />
              </div>
              <div className="absolute hidden group-hover:flex flex-col bg-white text-[#800000] shadow-lg z-50">
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
                    className="px-4 py-2 hover:bg-[#800000] hover:text-white transition-all duration-300 whitespace-nowrap"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/gallery">GALLERY</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
        </div>

        {/* Right Section: Call to Action Button */}
        <div className="hidden lg-custom:flex ml-auto">
          <Link
            href="/contact"
            className="bg-[#ffffff] text-[#800000] px-8 py-2 rounded-full hover:bg-[#ffcc00] transition-all duration-300"
          >
            GET A QUOTE
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center ml-auto">
          <Menu
            className="h-6 w-6 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
