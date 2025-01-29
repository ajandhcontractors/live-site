import AboutCompany from '@/components/AboutCompany';
import ContactSection from '@/components/ContactSection';
import Copyright from '@/components/Copyright';
import Footer from '@/components/footersection/Footer';
import Header from '@/components/header/Header';
import HeroSection from '@/components/herosection/HeroSection';
import OurServices from '@/components/OurServices';
import StickyContactBar from '@/components/StickyContactBar';
import Testimonial from '@/components/Testimonial';
import WorkGallery from '@/components/WorkGallery';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutCompany />
      <OurServices />
      <WorkGallery />
      <ContactSection />
      <Testimonial />
      <Footer />
      <Copyright />
      <StickyContactBar />
    </>
  );
}
