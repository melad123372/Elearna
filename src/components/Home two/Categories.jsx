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
      className="py-20 px-5 md:px-10"
    >
      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-10
        "
      >
        {/* Left content */}

        <div className="lg:pr-10 py-10">
          <p
            className="
          text-sm
          font-semibold
          uppercase
          text-slate-800
          mb-6
          "
          >
            Top Categories
          </p>

          <h1
            className="
            text-5xl
            md:text-4xl
            font-bold
            text-slate-900
            leading-tight
            "
          >
            Discover leading
            <br />
            categories
          </h1>

          <button
            className="
            mt-10
            bg-slate-900
            text-white
            px-12
            py-3
            rounded-md
            text-lg
            hover:bg-slate-800
            transition
            "
          >
            Get Started
          </button>
        </div>

        {/* Cards */}

        <div
          className="
          lg:col-span-2
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-10
          p-5
          ml-10
          "
        >
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
              className="
              border
              border-slate-200
              rounded-md
              h-60
              flex
              flex-col
              items-center
              justify-center
              text-center
              hover:shadow-lg
              transition
              "
            >
              <div
                className="
                w-15
                h-15
                rounded-full
                bg-slate-100
                flex
                items-center
                justify-center
                text-4xl
                text-slate-800
                mb-6
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                text-xl
                font-bold
                text-slate-900
                max-w-[180px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                mt-4
                text-gray-500
                text-lg
                "
              >
                {item.courses}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
