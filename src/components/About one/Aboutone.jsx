import React from "react";
import About from "./About";
import Cards from "./Cards";
import LearningSection from "./LearningSection";
import LogoSection from "./LogoSection";
import BecomeInstructor from "./BecomeInstructor";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
const Pages = () => {
  return (
    <div>
      <About />
      <Cards />
      <LearningSection />
      <LogoSection />
      <BecomeInstructor />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Pages;
