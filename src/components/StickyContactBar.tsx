import React from 'react';

const StickyContactBar: React.FC = () => {
  return (
    <div className="bg-[#800000] text-white text-center py-4 sticky bottom-0 w-full z-20">
      <p>
        Please contact us at{' '}
        <a href="tel:+19736507080" className="underline font-semibold">
          (973)-650-7080
        </a>{' '}
        for a Free Estimation
      </p>
    </div>
  );
};

export default StickyContactBar;
