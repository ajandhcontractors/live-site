import React from 'react';
import ContactInfo from './ContactInfo';
import NavigationLinks from './header/NavigationLinks';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface MenuContentProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContent: React.FC<MenuContentProps> = ({ setIsMenuOpen }) => {
  return (
    <div className="flex flex-col p-4">
      <ContactInfo />
      <NavigationLinks setIsMenuOpen={setIsMenuOpen} />

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-4">
        <Link
          href="https://www.facebook.com/ajandhcontractors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook size={20} className="cursor-pointer" />
        </Link>
        <Link
          href="https://www.instagram.com/YourPage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={20} className="cursor-pointer" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ajhcontractors-ajh-7072b9348/?original_referer="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} className="cursor-pointer" />
        </Link>
      </div>

      {/* Description and Office Location */}
      <div className="mt-6 text-center text-sm my-4">
        <p>
          AJ&H Contractor is a leading Home Improvement Contractor and has
          served for over 23 years. We have experience tackling a range of
          residential and commercial projects.
        </p>
        <p className="mt-4">
          <strong>OFFICE LOCATION</strong>
          <br />
          525 Lafayette Ave, Hawthorne, NJ 07506
        </p>
      </div>
    </div>
  );
};

export default MenuContent;
