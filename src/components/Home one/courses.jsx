import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import {
  FaBookOpen,
  FaUserGraduate,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

/* =========================
   Images
========================= */

import carimg1 from "../../assets/Elearna - Home One/carimg1.webp";
import carimg2 from "../../assets/Elearna - Home One/carimg2.webp";
import carimg3 from "../../assets/Elearna - Home One/carimg3.webp";
import carimg4 from "../../assets/Elearna - Home One/carimg4.webp";
import carimg5 from "../../assets/Elearna - Home One/carimg5.webp";
import carimg6 from "../../assets/Elearna - Home One/carimg6.webp";
import carimg7 from "../../assets/Elearna - Home One/carimg7.webp";
import carimg8 from "../../assets/Elearna - Home One/carimg8.webp";
import carimg9 from "../../assets/Elearna - Home One/carimg9.webp";
import carimg10 from "../../assets/Elearna - Home One/carimg10.webp";

/* =========================
   Categories
========================= */

const categories = [
  {
    label: "All courses",
    value: "ALL",
  },
  {
    label: "Design",
    value: "DESIGN",
  },
  {
    label: "Development",
    value: "DEVELOPMENT",
  },
  {
    label: "Management",
    value: "MANAGEMENT",
  },
  {
    label: "Finance",
    value: "FINANCE",
  },
];

/* =========================
   Courses Data
========================= */

const courses = [
  /* Design — 3 Cards */

  {
    id: 1,
    image: carimg1,
    category: "DESIGN",
    title: "Advanced Photoshop techniques for designers",
    price: "Free",
    rating: "5.00 (1.2K)",
    lessons: "8 Lessons",
    enrolled: "25k Enrolled",
  },
  {
    id: 2,
    image: carimg2,
    category: "DESIGN",
    title: "Modern UI/UX design principles and practices",
    price: "$45",
    rating: "4.91 (850)",
    lessons: "10 Lessons",
    enrolled: "18k Enrolled",
  },
  {
    id: 3,
    image: carimg3,
    category: "DESIGN",
    title: "Graphic design fundamentals for beginners",
    price: "$39",
    rating: "4.87 (640)",
    lessons: "7 Lessons",
    enrolled: "12k Enrolled",
  },

  /* Development — 3 Cards */

  {
    id: 4,
    image: carimg4,
    category: "DEVELOPMENT",
    title: "Database integration with MongoDB",
    price: "$59",
    rating: "4.49 (756)",
    lessons: "10 Lessons",
    enrolled: "7k Enrolled",
  },
  {
    id: 5,
    image: carimg5,
    category: "DEVELOPMENT",
    title: "Full-stack development with the MERN stack",
    price: "$72",
    rating: "5.00 (985)",
    lessons: "12 Lessons",
    enrolled: "22k Enrolled",
  },
  {
    id: 6,
    image: carimg6,
    category: "DEVELOPMENT",
    title: "React development from beginner to advanced",
    price: "$65",
    rating: "4.95 (920)",
    lessons: "14 Lessons",
    enrolled: "19k Enrolled",
  },

  /* Management — 2 Cards */

  {
    id: 7,
    image: carimg7,
    category: "MANAGEMENT",
    title: "Crisis management and problem-solving strategies",
    price: "Free",
    rating: "4.88 (210)",
    lessons: "6 Lessons",
    enrolled: "8k Enrolled",
  },
  {
    id: 8,
    image: carimg8,
    category: "MANAGEMENT",
    title: "Risk management and business continuity",
    price: "$49",
    rating: "4.88 (210)",
    lessons: "3 Lessons",
    enrolled: "8k Enrolled",
  },

  /* Finance — 2 Cards */

  {
    id: 9,
    image: carimg9,
    category: "FINANCE",
    title: "Financial planning and investment strategies",
    price: "Free",
    rating: "5.00 (812)",
    lessons: "12 Lessons",
    enrolled: "23k Enrolled",
  },
  {
    id: 10,
    image: carimg10,
    category: "FINANCE",
    title: "Accounting and financial management basics",
    price: "$55",
    rating: "4.86 (620)",
    lessons: "9 Lessons",
    enrolled: "14k Enrolled",
  },
];

/* =========================
   Animation Variants
========================= */

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gridVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -25,
    scale: 0.96,

    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

/* =========================
   Courses Component
========================= */

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const shouldReduceMotion = useReducedMotion();

  const filteredCourses =
    activeCategory === "ALL"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section className="overflow-hidden bg-[#eef7fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* =========================
            Header
        ========================= */}

        <motion.div
          variants={headerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mb-10 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <motion.p
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -30,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xs font-bold uppercase tracking-[0.12em] text-[#102b31] sm:text-sm"
            >
              Online learning
            </motion.p>

            <motion.h2
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#102b31] sm:text-4xl md:text-5xl lg:text-[52px]"
            >
              Top online courses
            </motion.h2>
          </div>

          {/* =========================
              Category Buttons
          ========================= */}

          <div className="flex max-w-full flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7">
            {categories.map((category, index) => {
              const isActive = activeCategory === category.value;

              return (
                <motion.button
                  key={category.value}
                  type="button"
                  onClick={() => setActiveCategory(category.value)}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 15,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -2,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.94,
                        }
                  }
                  className={`relative cursor-pointer whitespace-nowrap border-0 bg-transparent pb-2 text-sm font-medium outline-none transition-colors duration-300 sm:text-base ${
                    isActive
                      ? "text-[#102b31]"
                      : "text-gray-400 hover:text-[#102b31]"
                  }`}
                >
                  {category.label}

                  {isActive && (
                    <motion.span
                      layoutId="active-course-category"
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-[#2455e6]"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* =========================
            Animated Course Cards
        ========================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={gridVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            exit={shouldReduceMotion ? undefined : "exit"}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:gap-8"
          >
            {filteredCourses.map((course) => (
              <motion.article
                key={course.id}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -8,
                        transition: {
                          duration: 0.3,
                        },
                      }
                }
                className="group relative overflow-hidden bg-white shadow-sm transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(16,43,49,0.12)]"
              >
                {/* Image */}

                <div className="relative overflow-hidden">
                  <motion.img
                    src={course.image}
                    alt={course.title}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.08,
                          }
                    }
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-[220px] w-full object-cover sm:h-[240px] lg:h-[250px] xl:h-[270px]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[#102b31]/0 transition-colors duration-500 group-hover:bg-[#102b31]/10" />
                </div>

                {/* Price Circle */}

                <motion.div
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          scale: 0,
                          rotate: -90,
                        }
                  }
                  animate={{
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    delay: 0.25,
                    type: "spring",
                    stiffness: 220,
                    damping: 16,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.1,
                          rotate: 5,
                        }
                  }
                  className="absolute right-5 top-[188px] z-20 flex h-16 w-16 items-center justify-center rounded-full bg-[#2455e6] text-base font-medium text-white shadow-lg sm:top-[208px] lg:top-[218px] xl:right-7 xl:top-[234px] xl:h-[74px] xl:w-[74px] xl:text-lg"
                >
                  {course.price}
                </motion.div>

                {/* Card Content */}

                <div className="px-6 pb-0 pt-10 sm:px-7">
                  <p className="text-xs font-bold uppercase tracking-[0.05em] text-[#102b31]">
                    {course.category}
                  </p>

                  <h3 className="mt-5 min-h-[58px] text-xl font-bold leading-[1.4] tracking-[-0.02em] text-[#102b31] transition-colors duration-300 group-hover:text-[#2455e6] sm:text-[22px] lg:min-h-[66px]">
                    {course.title}
                  </h3>

                  {/* Rating */}

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star, starIndex) => (
                        <motion.span
                          key={star}
                          initial={
                            shouldReduceMotion
                              ? false
                              : {
                                  opacity: 0,
                                  scale: 0,
                                }
                          }
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            delay: 0.25 + starIndex * 0.06,
                            type: "spring",
                            stiffness: 300,
                            damping: 18,
                          }}
                        >
                          <FaStar className="text-[15px] text-[#ffb000]" />
                        </motion.span>
                      ))}
                    </div>

                    <span className="text-xs text-gray-400 sm:text-sm">
                      {course.rating}
                    </span>
                  </div>

                  {/* Course Information */}

                  <div className="mt-7 grid grid-cols-2 border-t border-gray-200">
                    <div className="flex min-h-[64px] items-center justify-center gap-2 border-r border-gray-200 px-2 text-xs text-[#102b31] sm:text-sm">
                      <FaBookOpen className="shrink-0 text-[13px]" />

                      <span>{course.lessons}</span>
                    </div>

                    <div className="flex min-h-[64px] items-center justify-center gap-2 px-2 text-xs text-[#102b31] sm:text-sm">
                      <FaUserGraduate className="shrink-0 text-[13px]" />

                      <span>{course.enrolled}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Button */}

                <motion.button
                  type="button"
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.97,
                        }
                  }
                  className="absolute bottom-0 left-0 z-30 flex h-[64px] w-full translate-y-full items-center justify-center gap-3 bg-[#ffb000] font-semibold text-[#102b31] transition-transform duration-500 group-hover:translate-y-0"
                >
                  Course Details
                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            x: [0, 5, 0],
                          }
                    }
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatDelay: 0.8,
                    }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.button>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* =========================
            Bottom CTA
        ========================= */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
                  scale: 0.96,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 1.02,
                }
          }
          className="mx-auto mt-14 flex max-w-[760px] flex-col items-center justify-center gap-2 rounded-3xl bg-[#102b31] px-6 py-5 text-center text-sm text-white sm:mt-20 sm:flex-row sm:rounded-full sm:text-base"
        >
          <span>We assist you in finding the ideal tutor at no cost.</span>

          <motion.button
            type="button"
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    x: 4,
                  }
            }
            whileTap={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 0.96,
                  }
            }
            className="font-semibold underline decoration-1 underline-offset-4 transition-colors duration-300 hover:text-[#ffb000]"
          >
            Browse All Available Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
