import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import Timg1 from "../../assets/11- Home Two Imgs/CourseImage-1.webp";
import Timg2 from "../../assets/11- Home Two Imgs/CourseImage-2.webp";
import Timg3 from "../../assets/11- Home Two Imgs/CourseImage-3.webp";
import Timg4 from "../../assets/11- Home Two Imgs/CourseImage-4.webp";
import Timg5 from "../../assets/11- Home Two Imgs/CourseImage-5.webp";
import Timg6 from "../../assets/11- Home Two Imgs/CourseImage-6.webp";

const courses = [
  {
    title: "Building single page applications with angular",
    category: "DEVELOPMENT",
    price: "Free",
    rating: "5.00 (328)",
    image: Timg1,
  },
  {
    title: "Database integration with MongoDB",
    category: "DEVELOPMENT",
    price: "$59",
    rating: "4.49 (756)",
    image: Timg2,
  },
  {
    title: "Operations management and process improvement",
    category: "FINANCE",
    price: "Free",
    rating: "5.00 (812)",
    image: Timg3,
  },
  {
    title: "Risk management and business continuity",
    category: "MANAGEMENT",
    price: "$49",
    rating: "4.88 (210)",
    image: Timg4,
  },
  {
    title: "Design systems and pattern libraries",
    category: "DESIGN",
    price: "$99",
    rating: "5.00 (1.2K)",
    image: Timg5,
  },
  {
    title: "Full-stack development with the MERN stack",
    category: "DEVELOPMENT",
    price: "$72",
    rating: "5.00 (985)",
    image: Timg6,
  },
];

export default function Courses() {
  return (
    <section className="overflow-hidden bg-[#EFF6F8] py-14 sm:py-16 lg:py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-3xl px-4 text-center sm:mb-12 lg:mb-14"
      >
        <p className="text-xs font-semibold tracking-[0.22em] text-blue-600 sm:text-sm">
          ONLINE LEARNING
        </p>

        <h1 className="mt-3 text-3xl font-bold leading-tight text-[#102A2F] sm:text-4xl lg:text-5xl">
          Top online courses
        </h1>
      </motion.div>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:gap-6 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 lg:px-8">
        {courses.map((course, index) => (
          <motion.article
            key={course.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative min-h-[510px] overflow-hidden rounded-xl bg-[#0F252A] shadow-lg sm:min-h-[500px] lg:min-h-[520px]"
          >
            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

            {/* Hover Corner Border */}
            <div className="pointer-events-none absolute inset-4 opacity-0 transition-all duration-500 group-hover:inset-5 group-hover:opacity-100 sm:inset-5">
              <span className="absolute left-0 top-0 h-20 w-20 border-l border-t border-white/80 sm:h-24 sm:w-24" />

              <span className="absolute bottom-0 right-0 h-20 w-20 border-b border-r border-white/80 sm:h-24 sm:w-24" />
            </div>

            {/* Price */}
            <div className="absolute right-4 top-4 z-10 flex h-14 min-w-14 items-center justify-center rounded-full bg-blue-600 px-2 text-sm font-semibold text-white shadow-lg sm:right-6 sm:top-6 sm:h-16 sm:min-w-16 sm:text-base">
              {course.price}
            </div>

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 lg:p-7">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-white/80 sm:mb-4 sm:text-xs">
                {course.category}
              </p>

              <h2 className="line-clamp-2 text-xl font-bold leading-snug text-white sm:text-2xl">
                {course.title}
              </h2>

              {/* Rating */}
              <div className="mt-4 flex flex-wrap items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className="text-xs text-yellow-400 sm:text-sm"
                  />
                ))}

                <span className="ml-1 text-xs text-gray-300 sm:ml-2 sm:text-sm">
                  {course.rating}
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="w-full rounded-md bg-yellow-400 px-4 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 sm:flex-1"
                >
                  Course Details
                </button>

                <button
                  type="button"
                  className="w-full rounded-md border border-white/30 bg-[#0F252A]/90 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17363D] sm:flex-1"
                >
                  Buy Course
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
