import ContactSection from '@/components/ContactSection';
import Copyright from '@/components/Copyright';
import Footer from '@/components/footersection/Footer';
import Header from '@/components/header/Header';
import StickyContactBar from '@/components/StickyContactBar';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <ContactSection />
      <Footer />
      <Copyright />
      <StickyContactBar />
    </>
  );
};

export default page;
