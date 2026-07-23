import React from "react";

import Home from "./Home";
import LogoSection from "./LogoSection";
import TopCategories from "./TopCategories";
import QuickCourses from "./QuickCourses";
import Courses from "./courses";
import PersonalizedLearning from "./PersonalizedLearning";
import Testimonials from "./Testimonials";
import PopularCourses from "./CourseExplorer";
import WhyWeAre from "./WhyWeAre";
import Footer from "./Footer";

function Homeone() {
  return (
    <div>
      <Home />
      <LogoSection />
      <TopCategories />
      <QuickCourses />
      <Courses />
      <PersonalizedLearning />
      <Testimonials />
      <PopularCourses />
      <WhyWeAre />
      <Footer />
    </div>
  );
}

export default Homeone;
