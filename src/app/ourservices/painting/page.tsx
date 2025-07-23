import Copyright from '@/components/Copyright';
import Footer from '@/components/footersection/Footer';
import Header from '@/components/header/Header';
import PaintingSction from '@/components/servicepages/PaintingSection';
import StickyContactBar from '@/components/StickyContactBar';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <PaintingSction />
      <Footer />
      <Copyright />
      <StickyContactBar />
    </>
  );
};

export default page;
