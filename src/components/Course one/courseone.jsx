import React from "react";
import Course from "./course";
import PopularCourses from "./PopularCourses";
import Footer from "./Footer";
const courseone = () => {
  return (
    <div>
      <Course />
      <PopularCourses />
      <Footer />
    </div>
  );
};

export default courseone;
