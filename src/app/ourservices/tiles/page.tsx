import Copyright from '@/components/Copyright';
import Footer from '@/components/footersection/Footer';
import Header from '@/components/header/Header';
import TileSection from '@/components/servicepages/TilesSection';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <TileSection />
      <Footer />
      <Copyright />
    </>
  );
};

export default page;
