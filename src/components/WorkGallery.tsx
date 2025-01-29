'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const WorkGallery = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Sample image data for before/after
  const works = [
    {
      before: '/before1.jpeg', // Replace with actual image path
      after: '/after1.jpeg', // Replace with actual image path
    },
    {
      before: '/before2.jpeg', // Replace with actual image path
      after: '/after2.jpeg', // Replace with actual image path
    },
    {
      before: '/before3.jpeg', // Replace with actual image path
      after: '/after3.jpeg', // Replace with actual image path
    },
  ];

  const handleZoom = (image: string) => {
    setZoomedImage(image);
  };

  const handleClose = () => {
    setZoomedImage(null);
  };

  return (
    <div className="bg-white px-8 py-2">
      <h5 className="text-xl font-bold text-center text-[#800000] my-4">
        WORK GALLERY
      </h5>
      <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#800000] mb-12">
        Recently Completed Works
      </h2>

      {/* Image Rows */}
      <div className="space-y-8">
        {works.map((work, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-center sm:space-x-8 items-center space-y-8 sm:space-y-0"
          >
            {/* Before Image */}
            <div className="flex flex-col items-center">
              <div
                className="relative overflow-hidden rounded-lg group cursor-pointer w-[300px] h-[220px] sm:w-[400px] sm:h-[300px] max-w-[500px] max-h-[500px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
                onClick={() => handleZoom(work.before)}
              >
                <Image
                  src={work.before}
                  alt="Before image"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:blur-none"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <span className="text-white text-4xl">🔍</span>
                </div>
              </div>
              {/* Box for Before */}
              <div className="bg-[#800000] text-white text-center py-2 px-8 sm:px-20 mt-2 rounded shadow-md">
                <p className="text-sm font-bold uppercase">Before</p>
              </div>
            </div>

            {/* After Image */}
            <div className="flex flex-col items-center">
              <div
                className="relative overflow-hidden rounded-lg group cursor-pointer w-[300px] h-[220px] sm:w-[400px] sm:h-[300px] max-w-[500px] max-h-[500px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
                onClick={() => handleZoom(work.after)}
              >
                <Image
                  src={work.after}
                  alt="After image"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:blur-none"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <span className="text-white text-4xl">🔍</span>
                </div>
              </div>
              {/* Box for After */}
              <div className="bg-[#800000] text-white text-center py-2 px-8 sm:px-20 mt-2 rounded shadow-md">
                <p className="text-sm font-bold uppercase">After</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative w-11/12 h-3/4 shadow-xl">
            <Image
              src={zoomedImage}
              alt="Zoomed Image"
              fill
              style={{ objectFit: 'contain' }}
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-red-500 p-2 rounded-full shadow-lg"
              onClick={handleClose}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkGallery;
