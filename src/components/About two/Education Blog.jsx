import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import blogImg1 from "../../assets/Elearna - About Two/blogImg1.webp";
import blogImg2 from "../../assets/Elearna - About Two/blogImg2.webp";
import blogImg3 from "../../assets/Elearna - About Two/blogImg3.webp";

const blogPosts = [
  {
    id: 1,
    category: "Career",
    title: "Improve knowledge retention with visual learning",
    date: "October 4, 2024",
    image: blogImg1,
  },
  {
    id: 2,
    category: "Development",
    title: "Master online learning with proven strategies",
    date: "October 4, 2024",
    image: blogImg2,
  },
  {
    id: 3,
    category: "Teaching",
    title: "How to enhance your learning experience today",
    date: "October 3, 2024",
    image: blogImg3,
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const EducationBlog = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-[#f9f9f8] py-16 p-1 sm:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto w-full max-w-[1640px] px-4 sm:px-6 lg:px-8 xl:px-5">
        {/* Section heading */}
        <motion.div
          variants={sectionVariants}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mb-12 max-w-[950px] text-center sm:mb-14 lg:mb-16"
        >
          <motion.p
            variants={headingVariants}
            className="text-sm font-semibold uppercase tracking-[0.04em] text-[#102c31] sm:text-base lg:text-lg"
          >
            Education Blog
          </motion.p>

          <motion.h2
            variants={headingVariants}
            className="mt-4 text-[36px] font-semibold leading-[1.12] tracking-[-1.5px] text-[#102c31] sm:text-[46px] lg:text-[50px] xl:text-[50px]"
          >
            Our news and ideas
          </motion.h2>

          <motion.p
            variants={headingVariants}
            className="mx-auto mt-5 max-w-[940px] text-base font-medium leading-[1.75] text-[#777777] sm:text-lg lg:mt-6 lg:text-[15px] lg:leading-[1.7]"
          >
            Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus
            facilisis scelerisque vitae consectetur vitae. Amet faucibus
            venenatis donec mattis.
          </motion.p>
        </motion.div>

        {/* Blog cards */}
        <motion.div
          variants={cardsContainerVariants}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7 xl:grid-cols-3 xl:gap-9"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -10,
                      transition: {
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }
              }
              className="group flex h-full flex-col overflow-hidden rounded-[5px] bg-white shadow-[0_10px_40px_rgba(15,44,49,0.05)]"
            >
              {/* Image */}
              <div className="relative aspect-[1.33/1] w-full overflow-hidden bg-gray-100">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  whileHover={reduceMotion ? undefined : { scale: 1.07 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                <div className="pointer-events-none absolute inset-0 bg-[#102c31]/0 transition-colors duration-500 group-hover:bg-[#102c31]/10" />
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col px-6 py-7 sm:px-7 sm:py-8 lg:px-8 lg:py-9">
                <p className="text-sm font-semibold uppercase tracking-[0.03em] text-[#102c31] sm:text-[15px]">
                  {post.category}
                </p>

                <h3 className="mt-5 text-[21px] font-semibold leading-[1.35] tracking-[-0.4px] text-[#102c31] transition-colors duration-300 group-hover:text-[#e9a900] sm:text-[23px] lg:text-[25px]">
                  {post.title}
                </h3>

                <time
                  dateTime={post.date}
                  className="mt-auto block pt-8 text-lg font-medium text-[#888888] sm:text-xl"
                >
                  {post.date}
                </time>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationBlog;
