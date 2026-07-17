import React from "react";
import Home from "../Home one/Home";
import LogoSection from "../Home one/LogoSection";
import TopCategories from "../Home one/TopCategories";
import QuickCourses from "../Home one/QuickCourses";
import Courses from "../Home one/Courses";
import PersonalizedLearning from "../Home one/PersonalizedLearning";
import Testimonials from "../Home one/Testimonials";
import PopularCourses from "./CourseExplorer";
import WhyWeAre from "../Home one/WhyWeAre";
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
