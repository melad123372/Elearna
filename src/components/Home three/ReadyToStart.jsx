import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const easing = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: easing,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: easing,
    },
  },
};

const ReadyToStart = () => {
  return (
    <section className="overflow-hidden bg-[#edf6f8] px-3 pb-10 sm:px-5 sm:pb-12 lg:px-6 lg:pb-14">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="
          mx-auto w-full max-w-[1750px]
          rounded-[5px] bg-[#08272d]
          px-5 py-7
          sm:px-8 sm:py-8
          md:px-12
          lg:px-16 lg:py-9
          xl:px-24 xl:py-10
        "
      >
        <div
          className="
            flex flex-col gap-7
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-10
          "
        >
          {/* Heading */}
          <motion.h2
            variants={titleVariants}
            className="
              max-w-[520px]
              text-center
              text-[28px] font-semibold
              leading-[1.15]
              tracking-[-0.03em]
              text-white
              sm:text-[34px]
              md:text-[39px]
              lg:text-left lg:text-[42px]
              xl:text-[46px]
            "
          >
            Are you ready to start
            <br className="hidden sm:block" /> your journey?
          </motion.h2>

          {/* Buttons */}
          <div
            className="
              flex w-full flex-col gap-3
              sm:flex-row sm:justify-center
              lg:w-auto lg:justify-end
              lg:gap-5
              xl:gap-7
            "
          >
            {/* Browse Courses */}
            <motion.div variants={buttonVariants}>
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 20,
                }}
              >
                <Link
                  to="/course-one"
                  className="
                    flex h-[46px] w-full
                    items-center justify-center
                    rounded-[5px]
                    bg-[#ffb800]
                    px-4 py-1.5
                    text-[14px] font-medium
                    text-[#08272d]
                    shadow-[0_10px_25px_rgba(255,184,0,0.16)]
                    transition-colors duration-300
                    hover:bg-white
                    sm:w-[200px]
                    md:h-[48px]
                    md:w-[215px]
                    md:text-[15px]
                    xl:w-[230px]
                  "
                >
                  Browse Courses
                </Link>
              </motion.div>
            </motion.div>

            {/* Become A Teacher */}
            <motion.div variants={buttonVariants}>
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 20,
                }}
              >
                <Link
                  to="/register"
                  className="
                    flex h-[46px] w-full
                    items-center justify-center
                    rounded-[5px]
                    border border-white/90
                    bg-transparent
                    px-4 py-1.5
                    text-[14px] font-medium
                    text-white
                    transition-colors duration-300
                    hover:bg-white
                    hover:text-[#08272d]
                    sm:w-[200px]
                    md:h-[48px]
                    md:w-[215px]
                    md:text-[15px]
                    xl:w-[230px]
                  "
                >
                  Become A Teacher
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReadyToStart;
