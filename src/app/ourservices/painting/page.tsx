import Copyright from '@/components/Copyright';
import Footer from '@/components/footersection/Footer';
import Header from '@/components/header/Header';
import PaintingSction from '@/components/servicepages/PaintingSection';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <PaintingSction />
      <Footer />
      <Copyright />
    </>
  );
};

export default page;
