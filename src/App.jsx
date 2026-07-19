import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Homeone from "./components/Home one/Homeone";
import Homes from "./components/Home two/Homes";
import Home from "./components/Home three/Home";

import Aboutone from "./components/About one/Aboutone";
import Abouttwo from "./components/About two/Abouttwo";
import CourseOne from "./components/CourseOne/CourseOne"
import CourseTwo from "./components/Course two/Course";
import Courseth from "./components/Course three/Courseth";

import Blogone from "./components/Blog one/Blogone";
import Blog from "./components/Blog two/Blog";
import Blogeth from "./components/Blog three/Blogeth";

import Contactone from "./components/Contact one/Contactsone";
import Contact from "./components/Contact two/Contact";
import Contactth from "./components/Contact three/Contactth";

import Faq1 from "./components/FAQ/Faq1";
import Team from "./components/Team/Team";
import Event1 from "./components/Event/Event1";
import Career1 from "./components/Career/Career1";

import Pricingone from "./components/Pricing one/Pricingone";
import Pricingtwo from "./components/Pricing Two/Pricingtwo";
import Pricingthree from "./components/Pricing Three/Pricingthree";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home pages */}
        <Route path="/" element={<Homeone />} />
        <Route path="/home-one" element={<Homeone />} />
        <Route path="/home-two" element={<Homes />} />
        <Route path="/home-three" element={<Home />} />

        {/* About pages */}
        <Route path="/about-one" element={<Aboutone />} />
        <Route path="/about-two" element={<Abouttwo />} />

        {/* Course pages */}
        <Route path="/course-one" element={<CourseOne />} />
        <Route path="/course-two" element={<CourseTwo />} />
        <Route path="/course-three" element={<Courseth />} />

        {/* Blog pages */}
        <Route path="/blog-one" element={<Blogone />} />
        <Route path="/blog-two" element={<Blog />} />
        <Route path="/blog-three" element={<Blogeth />} />

        {/* Contact pages */}
        <Route path="/contact-one" element={<Contactone />} />
        <Route path="/contact-two" element={<Contact />} />
        <Route path="/contact-three" element={<Contactth />} />

        {/* Other pages */}
        <Route path="/faq" element={<Faq1 />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Event1 />} />
        <Route path="/career" element={<Career1 />} />

        {/* Pricing pages */}
        <Route path="/pricing-one" element={<Pricingone />} />
        <Route path="/pricing-two" element={<Pricingtwo />} />
        <Route path="/pricing-three" element={<Pricingthree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
