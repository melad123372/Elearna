import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaBook, FaUserGraduate } from "react-icons/fa";

// Background Images
import bg1 from "../../assets/Elearna - Home Three/bg1.webp";
import bg2 from "../../assets/Elearna - Home Three/bg2.webp";
import bg3 from "../../assets/Elearna - Home Three/bg3.webp";
import bg4 from "../../assets/Elearna - Home Three/bg4.webp";
import bg5 from "../../assets/Elearna - Home Three/bg5.webp";

const courses = [
  {
    title: "Building single page applications with Angular",
    rating: "5.00",
    reviews: 328,
    lessons: 6,
    enrolled: "12k",
    bg: bg1,
  },
  {
    title: "Database integration with MongoDB",
    rating: "4.49",
    reviews: 756,
    lessons: 10,
    enrolled: "7k",
    bg: bg2,
  },
  {
    title: "Operations management and process improvement",
    rating: "5.00",
    reviews: 812,
    lessons: 12,
    enrolled: "23k",
    bg: bg3,
  },
  {
    title: "Risk management and business continuity",
    rating: "4.88",
    reviews: 210,
    lessons: 3,
    enrolled: "8k",
    bg: bg4,
  },
  {
    title: "Design systems and pattern libraries",
    rating: "4.95",
    reviews: 645,
    lessons: 8,
    enrolled: "15k",
    bg: bg5,
  },
];

const leftVariant = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const rightVariant = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function TrendingCourses() {
  const [currentBg, setCurrentBg] = useState(courses[0].bg);
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-700"
      style={{
        backgroundImage: `url(${currentBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-12">
          {/* LEFT */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="self-start lg:sticky lg:top-28"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-white sm:mb-5 sm:text-sm md:mb-6 md:text-base">
              TRENDING COURSES
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Explore our top
              <br />
              programs
            </h1>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-7 sm:space-y-8 md:space-y-10"
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  x: 12,
                }}
                onMouseEnter={() => {
                  setCurrentBg(course.bg);
                  setActive(index);
                }}
                onClick={() => {
                  setCurrentBg(course.bg);
                  setActive(index);
                }}
                className="cursor-pointer py-2"
              >
                <h2
                  className={`mb-3 text-lg font-semibold leading-snug transition-all duration-300 sm:mb-4 sm:text-xl md:text-2xl ${
                    active === index
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {course.title}
                </h2>

                <div className="flex flex-col gap-3 text-sm text-gray-300 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-4 md:gap-x-8 md:text-base">
                  {/* Rating */}
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex gap-0.5 text-xs text-yellow-400 sm:text-sm md:text-base">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <span className="text-xs sm:text-sm md:text-base">
                      {course.rating} ({course.reviews})
                    </span>
                  </div>

                  {/* Lessons */}
                  <div className="flex items-center gap-2">
                    <FaBook className="shrink-0" />

                    <span>{course.lessons} Lessons</span>
                  </div>

                  {/* Students */}
                  <div className="flex items-center gap-2">
                    <FaUserGraduate className="shrink-0" />

                    <span>{course.enrolled} Enrolled</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
