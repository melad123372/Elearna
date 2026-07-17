import React from "react";
import {
  FiEdit3,
  FiLayers,
  FiCode,
  FiFileText,
  FiTrendingUp,
  FiMonitor,
} from "react-icons/fi";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Creative web design",
    courses: "8 Courses",
    icon: <FiEdit3 />,
  },
  {
    title: "Finance accounting",
    courses: "10 Courses",
    icon: <FiTrendingUp />,
  },
  {
    title: "IT and software",
    courses: "5 Courses",
    icon: <FiLayers />,
  },
  {
    title: "Digital marketing",
    courses: "4 Courses",
    icon: <FiMonitor />,
  },
  {
    title: "Web development",
    courses: "8 Courses",
    icon: <FiCode />,
  },
  {
    title: "Content writing",
    courses: "3 Courses",
    icon: <FiFileText />,
  },
];

export default function Categories() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-3">
        {/* Left content */}
        <div className="py-4 text-center sm:py-6 lg:py-10 lg:pr-10 lg:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-800 sm:mb-6 sm:text-sm">
            Top Categories
          </p>

          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Discover leading
            <br className="hidden sm:block" />
            categories
          </h1>

          <button
            type="button"
            className="mt-7 w-full rounded-md bg-slate-900 px-8 py-3 text-base text-white transition hover:bg-slate-800 sm:mt-10 sm:w-auto sm:px-12 sm:text-lg"
          >
            Get Started
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:col-span-2 lg:ml-0 lg:p-0 xl:grid-cols-3 xl:gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="flex min-h-[210px] w-full flex-col items-center justify-center rounded-md border border-slate-200 px-5 py-7 text-center transition hover:shadow-lg sm:min-h-[230px] lg:min-h-[240px]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-3xl text-slate-800 sm:mb-6 sm:h-15 sm:w-15 sm:text-4xl">
                {item.icon}
              </div>

              <h3 className="max-w-[180px] text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                {item.title}
              </h3>

              <p className="mt-3 text-base text-gray-500 sm:mt-4 sm:text-lg">
                {item.courses}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
