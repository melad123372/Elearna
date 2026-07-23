import React from "react";
import { FaStar, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

import expimg1 from "../../assets/17- Home Three imgs/CourseSmallImage.webp";
import expimg2 from "../../assets/17- Home Three imgs/CourseSmallImage-2.webp";
import expimg3 from "../../assets/17- Home Three imgs/CourseSmallImage-3.webp";
import expimg4 from "../../assets/17- Home Three imgs/CourseSmallImage-4.webp";
import expimg5 from "../../assets/17- Home Three imgs/CourseSmallImage-5.webp";
import expimg6 from "../../assets/17- Home Three imgs/CourseSmallImage-6.webp";
import expimg7 from "../../assets/17- Home Three imgs/CourseSmallImage-7.webp";
import expimg8 from "../../assets/17- Home Three imgs/CourseSmallImage-8.webp";

const courses = [
  {
    image: expimg1,
    price: "Free",
    category: "DEVELOPMENT",
    title: "Building single page applications with angular",
    rating: "5.00 (328)",
  },
  {
    image: expimg2,
    price: "$59",
    category: "DEVELOPMENT",
    title: "Database integration with MongoDB",
    rating: "4.49 (756)",
  },
  {
    image: expimg3,
    price: "$49",
    category: "MANAGEMENT",
    title: "Risk management and business continuity",
    rating: "4.88 (210)",
  },
  {
    image: expimg4,
    price: "$72",
    category: "DEVELOPMENT",
    title: "Full-stack development with the MERN stack",
    rating: "5.00 (985)",
  },
  {
    image: expimg5,
    price: "$72",
    category: "DEVELOPMENT",
    title: "Full-stack development with the MERN stack",
    rating: "5.00 (985)",
  },
  {
    image: expimg6,
    price: "$72",
    category: "DEVELOPMENT",
    title: "Full-stack development with the MERN stack",
    rating: "5.00 (985)",
  },
  {
    image: expimg7,
    price: "$72",
    category: "DEVELOPMENT",
    title: "Full-stack development with the MERN stack",
    rating: "5.00 (985)",
  },
  {
    image: expimg8,
    price: "$72",
    category: "DEVELOPMENT",
    title: "Full-stack development with the MERN stack",
    rating: "5.00 (985)",
  },
];

export default function CourseExplorer() {
  return (
    <section className="bg-[#EFF6F8] px-5 py-20 md:px-10 lg:px-5">
      {/* HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
        className="mb-12"
      >
        <p className="font-medium tracking-widest text-gray-500">
          TRENDING COURSES
        </p>

        <h1 className="mt-5 text-3xl font-bold text-[#102a30] md:text-4xl">
          Explore our top programs
        </h1>
      </motion.div>

      {/* COURSE CARDS */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course, index) => (
          <motion.article
            key={index}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              group
              relative
              z-0
              hover:z-50
            "
          >
            {/* MAIN CARD */}
            <motion.div
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                overflow-hidden
                rounded-xl
                bg-white
                shadow-sm
                transition-shadow
                duration-500
                group-hover:shadow-xl
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="
                    h-[200px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* PRICE */}
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600
                    text-xl
                    font-semibold
                    text-white
                  "
                >
                  {course.price}
                </motion.div>

                {/* DARK IMAGE OVERLAY */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[#07181c]/60
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* CONTENT */}
              <div
                className="
                  p-8
                  transition-opacity
                  duration-500
                  group-hover:opacity-30
                "
              >
                <p className="text-sm font-medium tracking-wider text-gray-500">
                  {course.category}
                </p>

                <h2 className="mt-4 text-xl font-bold leading-snug text-[#102a30]">
                  {course.title}
                </h2>

                {/* RATING */}
                <div className="mt-8 flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} />
                    ))}
                  </div>

                  <span className="text-sm text-gray-500">{course.rating}</span>
                </div>
              </div>
            </motion.div>

            {/* HOVER DETAILS CARD */}
            <div
              className={`
                pointer-events-none
                absolute
                top-1/2
                z-50
                hidden
                w-[390px]
                origin-center
                -translate-y-1/2
                scale-75
                rounded-md
                bg-white
                p-7
                opacity-0
                shadow-[0_25px_80px_rgba(0,0,0,0.30)]
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:pointer-events-auto
                group-hover:scale-100
                group-hover:opacity-100
                lg:block
                ${index % 4 === 3 ? "right-[45%]" : "left-[45%]"}
              `}
            >
              <h3 className="text-2xl font-bold leading-snug text-[#102a30]">
                {course.title}
              </h3>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-sm font-medium uppercase tracking-wide text-gray-500">
                <span>• 10 Lessons</span>
                <span>• 8K Enrolled</span>
              </div>

              <p className="mt-7 leading-7 text-gray-500">
                Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse
                imperdiet.
              </p>

              <ul className="mt-5 space-y-3 text-gray-500">
                <li className="flex items-center gap-3">
                  <FaCheck className="shrink-0 text-sm text-[#102a30]" />
                  <span>Lorem ipsum dolor sit amet consectetur</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="shrink-0 text-sm text-[#102a30]" />
                  <span>Professional learning materials</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="shrink-0 text-sm text-[#102a30]" />
                  <span>Lifetime course access</span>
                </li>
              </ul>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="
                    bg-[#ffb000]
                    px-4
                    py-4
                    font-semibold
                    text-[#102a30]
                    transition-colors
                    duration-300
                    hover:bg-[#102a30]
                    hover:text-white
                  "
                >
                  Course Details
                </button>

                <button
                  type="button"
                  className="
                    bg-[#102a30]
                    px-4
                    py-4
                    font-semibold
                    text-white
                    transition-colors
                    duration-300
                    hover:bg-blue-600
                  "
                >
                  Enroll
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
