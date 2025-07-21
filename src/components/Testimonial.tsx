'use client';
import React, { useEffect } from 'react'; // Import useEffect
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    name: 'Shaun',
    title: 'Regional Manager, XL Park',
    review:
      'I have had the pleasure of working with the HARDWOOD FLOORS team for over a year. The team has been incredibly knowledgeable, efficient, and professional.',
    stars: 5,
  },
  {
    name: 'Vincent',
    title: 'Green Valley International',
    review:
      '"AJ&H Contractor did an amazing job installing tiles in my kitchen and bathrooms. The precision and attention to detail were top-notch. They worked efficiently and left no mess behind. I’m thrilled with the results and would definitely recommend their tile installation services to anyone looking for perfection."',
    stars: 5,
  },
  {
    name: 'Nathan',
    title: 'CEO, High Rise Construction',
    review:
      'I"AJ&H Contractor exceeded my expectations with my bathroom remodel. They turned my outdated bathroom into a modern and functional space. From selecting high-quality materials to completing the work on time, their professionalism and expertise were evident throughout the project."',
    stars: 5,
  },
  {
    name: 'Monica',
    title: 'Manager',
    review:
      'I hired AJ&H Contractor for interior painting, and I’m beyond impressed. They helped me pick the perfect colors for each room and executed the job flawlessly. The walls look stunning, and their attention to detail is remarkable. They’re the best in the business!',
    stars: 5,
  },
  {
    name: 'John',
    title: 'Developer',
    review:
      "I've had the privilege of collaborating with the BATHROOM REMODELING team for over a year. Their expertise, responsiveness, and professionalism have been outstanding.",
    stars: 5,
  },
];

const Testimonial: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  // Automatically play
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // Adjust time as needed
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="bg-gray-900 py-10 text-white">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((testimonial, index) => (
              <div
                className="embla__slide flex-shrink-0 w-[calc(100%-2rem)] sm:w-[400px] md:w-[500px] mx-4 bg-gray-800 p-6 rounded-lg shadow-lg"
                key={index}
              >
                <div className="flex items-center mb-4">
                  {/* <div className="bg-gray-700 w-[80px] h-[80px] mr-4 flex items-center justify-center text-white font-bold">
                    80x80
                  </div> */}
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <div className="mb-2 flex items-center">
                  {[...Array(testimonial.stars)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927a1 1 0 011.902 0l1.451 4.473a1 1 0 00.95.69h4.717a1 1 0 01.591 1.807l-3.81 2.764a1 1 0 00-.364 1.118l1.451 4.473a1 1 0 01-1.536 1.118l-3.81-2.764a1 1 0 00-1.175 0l-3.81 2.764a1 1 0 01-1.536-1.118l1.451-4.473a1 1 0 00-.364-1.118L2.342 9.897a1 1 0 01.591-1.807h4.717a1 1 0 00.95-.69l1.451-4.473z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-300">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
