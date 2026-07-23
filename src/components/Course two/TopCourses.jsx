import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Timg1 from "../../assets/13- Course Two imgs/CourseImage-1.webp";
import Timg2 from "../../assets/13- Course Two imgs/CourseImage-2.webp";
import Timg3 from "../../assets/13- Course Two imgs/CourseImage-3.webp";
import Timg4 from "../../assets/13- Course Two imgs/CourseImage-4.webp";
import Timg5 from "../../assets/13- Course Two imgs/CourseImage-5.webp";
import Timg6 from "../../assets/13- Course Two imgs/CourseImage-6.webp";
import Timg7 from "../../assets/13- Course Two imgs/CourseImage-7.webp";
import Timg8 from "../../assets/13- Course Two imgs/CourseImage-8.webp";
import Timg9 from "../../assets/13- Course Two imgs/CourseImage-9.webp";
import Timg10 from "../../assets/13- Course Two imgs/CourseImage-10.webp";
import Timg11 from "../../assets/13- Course Two imgs/CourseImage-11.webp";
import Timg12 from "../../assets/13- Course Two imgs/CourseImage-12.webp";
const coursesOne = [
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

const coursesTwo = [
  {
    title: "Advanced React and Next JS Development",
    category: "DEVELOPMENT",
    price: "$69",
    rating: "5.00 (450)",
    image: Timg7,
  },
  {
    title: "Python Programming Master Course",
    category: "DEVELOPMENT",
    price: "Free",
    rating: "4.90 (620)",
    image: Timg8,
  },
  {
    title: "Digital Marketing Complete Guide",
    category: "MARKETING",
    price: "$55",
    rating: "4.80 (300)",
    image: Timg9,
  },
  {
    title: "Leadership and Team Management",
    category: "MANAGEMENT",
    price: "$80",
    rating: "5.00 (700)",
    image: Timg10,
  },
  {
    title: "UI UX Design Masterclass",
    category: "DESIGN",
    price: "$45",
    rating: "4.95 (520)",
    image: Timg11,
  },
  {
    title: "Cloud Computing and AWS Training",
    category: "TECHNOLOGY",
    price: "$99",
    rating: "5.00 (900)",
    image: Timg12,
  },
];

export default function Courses() {
  const [activeTab, setActiveTab] = useState(1);

  const showCourses = activeTab === 1 ? coursesOne : coursesTwo;

  return (
    <section className="overflow-hidden bg-[#EFF6F8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Heading */}
      <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 sm:text-sm">
          ONLINE LEARNING
        </p>

        <h1 className="mt-3 text-3xl font-bold leading-tight text-[#102A2F] sm:text-4xl lg:text-5xl">
          Top online courses
        </h1>
      </div>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -50,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {showCourses.map((course, index) => (
            <motion.div
              key={`${activeTab}-${course.title}`}
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative h-[520px] cursor-pointer overflow-hidden rounded-md shadow-lg sm:h-[510px] lg:h-[460px]"
            >
              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Border */}
              <div className="pointer-events-none absolute inset-4 opacity-0 transition duration-500 group-hover:opacity-100 sm:inset-5 lg:inset-6">
                <span className="absolute left-0 top-0 h-20 w-20 border-l border-t border-white sm:h-24 sm:w-24 lg:h-28 lg:w-28" />

                <span className="absolute bottom-0 right-0 h-20 w-20 border-b border-r border-white sm:h-24 sm:w-24 lg:h-28 lg:w-28" />
              </div>

              {/* Price */}
              <div className="absolute right-4 top-4 flex h-14 min-w-14 items-center justify-center rounded-full bg-blue-600 px-2 text-sm font-semibold text-white sm:right-6 sm:top-6 sm:h-16 sm:min-w-16 sm:text-base lg:right-8 lg:top-8">
                {course.price}
              </div>

              {/* Content */}
              <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8">
                <p className="mb-3 text-[11px] font-semibold tracking-[3px] sm:mb-4 sm:text-xs">
                  {course.category}
                </p>

                <h2 className="line-clamp-2 text-xl font-bold leading-snug sm:text-2xl">
                  {course.title}
                </h2>

                {/* Rating */}
                <div className="mt-4 flex flex-wrap items-center sm:mt-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className="mr-1 text-xs text-yellow-400 sm:text-sm"
                    />
                  ))}

                  <span className="ml-1 text-xs text-gray-300 sm:ml-2 sm:text-sm">
                    {course.rating}
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-5 flex translate-y-0 flex-col gap-3 opacity-100 transition-all duration-500 sm:mt-6 lg:translate-y-5 lg:flex-row lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  <button
                    type="button"
                    className="w-full rounded-md bg-yellow-400 px-4 py-3 text-sm font-medium text-black transition hover:bg-yellow-500 lg:w-auto lg:px-6"
                  >
                    Course Details
                  </button>

                  <button
                    type="button"
                    className="w-full rounded-md border border-white/20 bg-[#102A2F] px-4 py-3 text-sm text-white transition hover:bg-[#17363D] lg:w-auto lg:px-6"
                  >
                    Buy Course
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="mt-10 flex justify-center gap-3 sm:mt-12 sm:gap-5 lg:mt-14">
        {[1, 2].map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => setActiveTab(page)}
            aria-label={`Show course page ${page}`}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold shadow-md transition sm:text-xl ${
              activeTab === page
                ? "bg-[#FDB515] text-black"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </section>
  );
}
