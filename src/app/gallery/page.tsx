import Copyright from '@/components/Copyright';
import Footer from '@/components/footersection/Footer';
import Header from '@/components/header/Header';
import StickyContactBar from '@/components/StickyContactBar';
import WorkGallery from '@/components/WorkGallery';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <WorkGallery />
      <Footer />
      <Copyright />
      <StickyContactBar />
    </>
  );
};

export default page;
