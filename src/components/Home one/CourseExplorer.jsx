import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

import expimg1 from "../../assets/1- Home One imgs/CourseSmallImage-1.webp";
import expimg2 from "../../assets/1- Home One imgs/CourseSmallImage-2.webp";
import expimg3 from "../../assets/1- Home One imgs/CourseSmallImage-3.webp";
import expimg4 from "../../assets/1- Home One imgs/CourseSmallImage-4.webp";

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
];

export default function CourseExplorer() {
  return (
    <section className="py-20 bg-[#EFF6F8] px-5 md:px-10 lg:px-5">
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
        <p className="text-gray-500 tracking-widest font-medium">
          TRENDING COURSES
        </p>

        <h1
          className="
          text-3xl
          md:text-4xl
          font-bold
          text-[#102a30]
          mt-5
        "
        >
          Explore our top programs
        </h1>
      </motion.div>

      {/* COURSE CARDS */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-5
      "
      >
        {courses.map((course, index) => (
          <motion.div
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
            whileHover={{
              y: -10,
            }}
            className="
              bg-white
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              transition
              rounded-xl
            "
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="
                  w-full
                  h-[200px]
                  object-cover
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
                className="
                  absolute
                  top-5
                  right-5
                  w-20
                  h-20
                  rounded-full
                  bg-blue-600
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-semibold
                "
              >
                {course.price}
              </motion.div>
            </div>

            {/* CONTENT */}
            <div className="p-8">
              <p
                className="
                text-gray-500
                text-sm
                tracking-wider
                font-medium
              "
              >
                {course.category}
              </p>

              <h2
                className="
                text-xl
                md:text-xl
                font-bold
                text-[#102a30]
                mt-4
                leading-snug
              "
              >
                {course.title}
              </h2>

              {/* RATING */}
              <div
                className="
                flex
                items-center
                gap-2
                mt-8
              "
              >
                <div
                  className="
                  flex
                  text-yellow-500
                "
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>

                <span
                  className="
                  text-gray-500
                  text-sm
                "
                >
                  {course.rating}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
