'use client';

import Copyright from '@/components/Copyright';
import FAQ from '@/components/Faq';
import Footer from '@/components/footersection/Footer';
import Header from '@/components/header/Header';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <FAQ />
      <Footer />
      <Copyright />
    </>
  );
};

export default page;
