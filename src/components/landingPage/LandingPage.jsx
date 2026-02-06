import React from "react";
import Navbar from "../common/Navbar";
import HeroSection from "./HeroSection";
import Header from "../common/Header";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import OurServices from "./OurServices";
import ProjectsSection from "./ProjectsSection";
import DiscoverSection from "./DiscoverSection";
import RequestaQuote from "./RequestaQuote";
import TestimonialsCarousel from "./TestimonialsCarousel";
import Footer from "../common/Footer";


const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <FeaturesSection/>
      {/* <OurServices/> */}
      <ProjectsSection/>
      <DiscoverSection/>
      <RequestaQuote/>
     {/* <TestimonialsCarousel/> */}
    </>
  );
};

export default LandingPage;
