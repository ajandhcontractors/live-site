import React from 'react';
import ContactInfo from '../ContactInfo';
import NavigationLinks from './NavigationLinks';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiFacebookFill } from 'react-icons/ri';

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
        <RiFacebookFill size={20} className="cursor-pointer" />
        <FaInstagram size={20} className="cursor-pointer" />
        <FaLinkedin size={20} className="cursor-pointer" />
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
