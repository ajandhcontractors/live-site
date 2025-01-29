import React, { Dispatch, SetStateAction, useEffect } from 'react';
import Image from 'next/image';
import MenuContent from '../MenuContent'; // Import the new component

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  // Lock background scroll when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup to reset scroll behavior when the component is unmounted or menu is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[85%] bg-[#800000] text-white transform transition-transform duration-500 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } z-50`}
    >
      <div className="flex justify-between p-4">
        <Image
          src="/logo-1.png"
          alt="Logo"
          width={150}
          height={150}
          className="cursor-pointer"
          style={{ width: 'auto', height: 'auto' }}
        />

        <button
          className="text-white text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
      </div>

      {/* Menu Content */}
      <MenuContent setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default MobileMenu;
