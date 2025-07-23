import Footer from '@/components/footersection/Footer';
import HardwoodFlooring from '@/components/servicepages/HardwoodFlooringSection';
import Header from '@/components/header/Header';
import React from 'react';
import Copyright from '@/components/Copyright';
import StickyContactBar from '@/components/StickyContactBar';

const page = () => {
  return (
    <>
      <Header />
      <HardwoodFlooring />
      <Footer />
      <Copyright />
      <StickyContactBar />
    </>
  );
};

export default page;
