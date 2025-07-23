import BathroomRemodeling from '@/components/servicepages/BathroomRemodelingContent';
import Footer from '@/components/footersection/Footer';
import Header from '@/components/header/Header';
import React from 'react';
import Copyright from '@/components/Copyright';
import StickyContactBar from '@/components/StickyContactBar';

const page = () => {
  return (
    <>
      <Header />
      <BathroomRemodeling />
      <Footer />
      <Copyright />
      <StickyContactBar />
    </>
  );
};

export default page;
