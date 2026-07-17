import React from "react";
import { motion } from "framer-motion";

import {
  FaPencilRuler,
  FaCalculator,
  FaLayerGroup,
  FaBullhorn,
  FaCode,
  FaFont,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaPencilRuler />,
    title: "Web Design & Creative",
    course: "8 Courses",
  },
  {
    icon: <FaCalculator />,
    title: "Finance & Accounting",
    course: "4 Courses",
  },
  {
    icon: <FaLayerGroup />,
    title: "IT & Software",
    course: "5 Courses",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    course: "4 Courses",
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    course: "8 Courses",
  },
  {
    icon: <FaFont />,
    title: "Content & Language",
    course: "3 Courses",
  },
];

export default function CategorySection() {
  return (
    <section className="relative pb-28">
      {/* Hero Section */}
      <div className="bg-[#0E2B33] relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-7xl">❤</div>
          <div className="absolute bottom-10 left-24 text-7xl">♫</div>
          <div className="absolute top-16 right-20 text-7xl">🤖</div>
          <div className="absolute bottom-16 right-40 text-7xl">◯</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left mt-10 lg:mt-0"
          >
            <p className="uppercase tracking-[5px] text-white text-sm font-semibold">
              START WITH
            </p>

            <h1 className="text-white text-4xl md:text-6xl lg:text-6xl mb-15 font-medium leading-tight mt-5">
              Professional Online
              <br />
              Courses
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Floating Category Card */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-5 bg-white rounded-[4px] shadow-2xl px-10 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 -mt-20 relative z-20"
      >
        {categories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            className="text-center cursor-pointer"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-sky-50 flex items-center justify-center text-3xl text-sky-600 hover:bg-yellow-400 hover:text-white transition-all duration-300">
              {item.icon}
            </div>

            <h3 className="mt-5 font-semibold text-gray-800 text-lg">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-2">{item.course}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
