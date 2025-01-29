// components/FooterLeftSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiFacebookFill } from 'react-icons/ri';

const FooterLeftSection: React.FC = () => {
  return (
    <div className="text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">
        <Image
          src="/logo-1.png"
          alt="AJ&H Contractors Logo"
          width={180}
          height={180}
          className="cursor-pointer" // No need for w-auto and h-auto
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <p className="mt-4 text-center sm:text-left">
        AJ&H Contractor is a leading Home Improvement <br /> Contractor and has
        served for over 23 years. We <br /> have experience tackling a range of
        residential <br />
        and commercial projects.
      </p>

      <div className="flex justify-center md:justify-start space-x-4 mt-4">
        <Link
          href="https://www.facebook.com/ajandhcontractors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <RiFacebookFill size={20} className="cursor-pointer" />
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
        <Link
          href="https://twitter.com/YourPage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaXTwitter size={20} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default FooterLeftSection;
