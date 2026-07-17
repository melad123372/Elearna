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
    title: "Web  Design & Creative",
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
      {/* Hero */}
      <div className="bg-[#0E2B33] h-[420px] flex items-center justify-center px-5 relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-12 left-10 text-8xl">❤</div>
          <div className="absolute bottom-12 left-20 text-8xl">♫</div>
          <div className="absolute top-20 right-20 text-8xl">🤖</div>
          <div className="absolute bottom-16 right-44 text-8xl">◯</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center z-10"
        >
          <p className="uppercase tracking-widest text-white text-sm font-semibold">
            START WITH
          </p>

          <h1 className="text-white font-medium leading-tight mt-4 text-4xl md:text-6xl">
            Professional Online
            <br />
            Courses
          </h1>
        </motion.div>
      </div>

      {/* Floating Card */}

      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl px-6 py-6
        grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8
        -mt-20 relative z-20"
      >
        {categories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            viewport={{ once: true }}
            className="text-center cursor-pointer"
          >
            {/* Icon */}

            <div className="w-15 h-15  mx-auto rounded-full bg-sky-50 flex items-center justify-center text-3xl text-sky-600">
              {item.icon}
            </div>

            <h3 className="mt-5 font-bold text-gray-800 text-md">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-2 text-lg">{item.course}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
