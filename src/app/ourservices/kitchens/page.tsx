import Copyright from '@/components/Copyright';
import Footer from '@/components/footersection/Footer';
import Header from '@/components/header/Header';
import KitchenSection from '@/components/servicepages/KitchenSection';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <KitchenSection />
      <Footer />
      <Copyright />
    </>
  );
};

export default page;
