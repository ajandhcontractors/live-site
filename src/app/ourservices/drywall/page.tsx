import Drywall from '@/components/servicepages/Drywall';
import Footer from '@/components/footersection/Footer';
import Header from '@/components/header/Header';
import React from 'react';
import Copyright from '@/components/Copyright';

const page = () => {
  return (
    <>
      <Header />
      <Drywall />
      <Footer />
      <Copyright />
    </>
  );
};

export default page;
