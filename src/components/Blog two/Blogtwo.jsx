import React from "react";
import { motion } from "framer-motion";
import Timg2 from "../../assets/15- Blog Two Imgs/BlogHeroImage.webp"; // Change to your image

export default function BlogHero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={Timg2}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="uppercase tracking-[3px] text-white text-sm sm:text-base font-semibold mb-6"
          >
            NEWS AND JOURNALS
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="text-white font-medium leading-tight
            text-4xl
            sm:text-5xl
            md:text-5xl
            lg:text-6xl"
          >
            Planning to transition
            <br />
            to a new career?
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
