import AboutCompany from '@/components/AboutCompany';
import Copyright from '@/components/Copyright';
import Footer from '@/components/footersection/Footer';
import Header from '@/components/header/Header';
import StickyContactBar from '@/components/StickyContactBar';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <AboutCompany />
      <Footer />
      <Copyright />
      <StickyContactBar />
    </>
  );
};

export default page;
