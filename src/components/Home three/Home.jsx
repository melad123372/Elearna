import React from "react";
import Homethree from "./Homethree";
import TopCategories from "./TopCategories";
import Cards from "./Cards";
import TrendingCourses from "./TrendingCourses";
import CourseExplorer from "./CourseExplorer";
import CourseInquirySection from "./CourseInquirySection";
import LogoSection from "./LogoSection";
import Whatwe from "./Whatwe";
import Testimonial from "./Testimonial";
import ReadyToStart from "./ReadyToStart";
import WhyWeAre from "./WhyWeAre";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Homethree />
      <TopCategories />
      <Cards />
      <TrendingCourses />
      <CourseExplorer />
      <CourseInquirySection />
      <LogoSection />
      <Whatwe />
      <Testimonial />
      <ReadyToStart />
      <WhyWeAre />
      <Footer />
    </div>
  );
};

export default Home;
