import React from "react";
import Pricing from "./Pricing";
import PricingPlans from "./PricingPlans";
import LogoSection from "./LogoSection";
import PricingComparison from "./PricingComparison";
import Frequently from "./Frequently";
import TestimonialSection from "./TestimonialSection";
import Footer from "./Footer";

const pricingone = () => {
  return (
    <div>
      <Pricing />
      <PricingPlans />
      <LogoSection />
      <PricingComparison />
      <Frequently />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default pricingone;
