import React, { useState } from 'react';

const FAQ = () => {
  const services = [
    {
      name: 'TILES',
      faqs: [
        {
          question: '1. What types of tiles do you install?',
          answer:
            'We specialize in installing a wide variety of tiles, including ceramic, porcelain, natural stone, mosaic, and glass tiles, to suit any style or need.',
        },
        {
          question: '2. Can you help with tile selection and design?',
          answer:
            'Yes, our team can guide you through selecting the perfect tiles for your space and assist with design ideas to bring your vision to life.',
        },
        {
          question: '3. Can you repair or replace damaged tiles?',
          answer:
            'Yes, we provide tile repair and replacement services to restore the beauty and functionality of your surfaces.',
        },
      ],
    },
    {
      name: 'HARDWOOD FLOORING',
      faqs: [
        {
          question: '1. What types of hardwood flooring do you offer?',
          answer:
            'We provide a wide range of hardwood flooring options, including solid hardwood, engineered hardwood, and reclaimed wood, in various species and finishes.',
        },
        {
          question: '2. Can you refinish existing hardwood floors?',
          answer:
            'Yes, we offer hardwood floor refinishing services to restore the beauty of your worn or damaged floors.',
        },
        {
          question:
            '3. Can you install hardwood floors over existing flooring?',
          answer:
            'In many cases, yes. We assess the condition of your existing floor to determine if hardwood can be installed over it or if additional preparation is needed.',
        },
      ],
    },
    {
      name: 'KITCHEN',
      faqs: [
        {
          question:
            '1. What types of kitchen remodeling services do you offer?',
          answer:
            'We offer comprehensive kitchen remodeling services, including cabinetry installation, countertops, flooring, backsplashes, lighting, plumbing, and more.',
        },
        {
          question:
            '2. Can you handle plumbing and electrical work for my kitchen remodel?',
          answer:
            'Yes, we coordinate all aspects of your kitchen remodel, including plumbing, electrical, and appliance installation, ensuring a seamless process.',
        },
        {
          question: '3. What is the cost of a kitchen remodel?',
          answer:
            'Costs vary depending on the size and complexity of the project. We provide a detailed estimate after discussing your vision and requirements.',
        },
      ],
    },
    {
      name: 'BATHROOM REMODELING',
      faqs: [
        {
          question:
            '1. What types of bathroom remodeling services do you offer?',
          answer:
            'We provide full and partial bathroom remodeling services, including tile installation, vanities, shower enclosures, tubs, flooring, lighting, and plumbing upgrades.',
        },
        {
          question:
            '2. Can you create a bathroom that is accessible for people with mobility challenges?',
          answer:
            'Yes, we specialize in designing ADA-compliant and accessible bathrooms, including walk-in showers, grab bars, and other features.',
        },
        {
          question:
            '3. Do you handle bathroom repairs, like fixing leaks or replacing fixtures?',
          answer:
            'Yes, we provide repair services for damaged or outdated bathroom fixtures, tiles, and plumbing.',
        },
      ],
    },
    {
      name: 'DRYWALL',
      faqs: [
        {
          question: '1. What types of drywall services do you offer?',
          answer:
            'We provide drywall installation, repair, finishing, texturing, and patchwork for residential and commercial projects.',
        },
        {
          question: '2. What drywall textures do you offer?',
          answer:
            'We offer a variety of textures, including smooth finishes, knockdown, orange peel, and custom textures to match your design preferences.',
        },
        {
          question:
            '3. Can you match the existing texture on my walls or ceiling?',
          answer:
            'Yes, we have the expertise to seamlessly match the existing texture for a uniform look',
        },
      ],
    },
    {
      name: 'PAINTING',
      faqs: [
        {
          question: '1. What types of painting services do you offer?',
          answer:
            'We provide interior and exterior painting for residential and commercial properties, including walls, ceilings, trim, doors, and more.',
        },
        {
          question: '2. What types of paint do you use?',
          answer:
            'We use high-quality, durable paints from trusted brands. We can also use eco-friendly, low-VOC, or specialty paints based on your preferences.',
        },
        {
          question: '3. Do you repair damaged walls before painting?',
          answer:
            'Yes, we repair cracks, holes, and other imperfections in drywall or plaster to create a smooth surface for painting.',
        },
      ],
    },
  ];

  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleServiceAccordion = (index: number) => {
    setOpenServiceIndex(openServiceIndex === index ? null : index);
    setOpenFaqIndex(null); // Reset FAQ selection when switching services
  };

  const toggleFaqAccordion = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {services.map((service, serviceIndex) => (
          <div key={serviceIndex} className="border rounded-lg shadow">
            <button
              onClick={() => toggleServiceAccordion(serviceIndex)}
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold text-lg dark:text-black"
            >
              {service.name}
            </button>
            {openServiceIndex === serviceIndex && (
              <div className="px-4 py-2 space-y-2 bg-white dark:bg-gray-50">
                {service.faqs.map((faq, faqIndex) => (
                  <div key={faqIndex}>
                    <button
                      onClick={() => toggleFaqAccordion(faqIndex)}
                      className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 font-medium dark:text-black"
                    >
                      {faq.question}
                    </button>
                    {openFaqIndex === faqIndex && (
                      <div className="px-4 py-2 text-gray-700 dark:text-black">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
