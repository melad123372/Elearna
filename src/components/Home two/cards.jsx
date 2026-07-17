import React from "react";
import { motion } from "framer-motion";

import cardimg1 from "../../assets/Elearna - Home Two/cardimg1.webp";
import cardimg2 from "../../assets/Elearna - Home Two/cardimg2.webp";
import cardimg3 from "../../assets/Elearna - Home Two/cardimg3.webp";

const blogs = [
  {
    id: 1,
    tag: "CAREER",
    title: "Improve knowledge retention with visual learning",
    date: "October 4, 2024",
    image: cardimg1,
  },
  {
    id: 2,
    tag: "DEVELOPMENT",
    title: "Master online learning with proven strategies",
    date: "October 4, 2024",
    image: cardimg2,
  },
  {
    id: 3,
    tag: "TEACHING",
    title: "How to enhance your learning experience today",
    date: "October 3, 2024",
    image: cardimg3,
  },
];

// container animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// card animation
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function BlogSection() {
  return (
    <section className="bg-[#f3f8fb] py-16 px-4 md:px-10">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="uppercase text-sm tracking-widest text-gray-500">
          Education Blog
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mt-2">
          Our news and ideas
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 h-[500px] gap-6 max-w-6xl mx-auto"
      >
        {blogs.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-xs font-semibold text-gray-500 uppercase">
                {item.tag}
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mt-3">{item.date}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
