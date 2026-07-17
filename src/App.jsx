import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homeone from "./components/Home one/Homeone";
import Aboutone from "./components/About one/Aboutone";
import Blogone from "./components/Blog one/Blogone";
import Contactone from "./components/Contact one/Contactsone";
import Homes from "./components/Home two/Homes";
import Courseone from "./components/Course one/Courseone";
import Contact from "./components/Contact two/Contact";
import Contactth from "./components/Contact three/Contactth";
import Blog from "./components/Blog two/Blog";
import Blogeth from "./components/Blog three/Blogeth";
import Home from "./components/Home three/Home";
import Course from "./components/Course two/Course";
import Courseth from "./components/Course three/Courseth";
import Faq1 from "./components/FAQ/Faq1";
import Team from "./components/Team/Team";
import Event1 from "./components/Event/Event1";
import Career1 from "./components/Career/Career1";
import Pricingthree from "./components/Pricing Three/Pricingthree";
import Pricingtwo from "./components/Pricing Two/Pricingtwo";
import Pricingone from "./components/Pricing one/Pricingone";
import Abouttwo from "./components/About two/Abouttwo";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homeone />} />
        <Route path="/home-one" element={<Homeone />} />
        <Route path="/home-three" element={<Home />} />
        <Route path="/about-one" element={<Aboutone />} />
        <Route path="/about-two" element={<Abouttwo />} />
        <Route path="/blog-one" element={<Blogone />} />
        <Route path="/blog-two" element={<Blog />} />
        <Route path="/blog-three" element={<Blogeth />} />
        <Route path="/contact-one" element={<Contactone />} />
        <Route path="/home-two" element={<Homes />} />
        <Route path="/course-one" element={<Courseone />} />
        <Route path="/course-two" element={<Course />} />
        <Route path="/course-three" element={<Courseth />} />
        <Route path="/faq" element={<Faq1 />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing-three" element={<Pricingthree />} />
        <Route path="/pricing-two" element={<Pricingtwo />} />
        <Route path="/pricing-one" element={<Pricingone />} />
        <Route path="/events" element={<Event1 />} />
        <Route path="/career" element={<Career1 />} />
        <Route path="/contact-two" element={<Contact />} />
        <Route path="/contact-three" element={<Contactth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
