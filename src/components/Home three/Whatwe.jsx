import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import offerImage from "../../assets/17- Home Three imgs/HomeOneVideoposter.jpg";

const features = [
  "Skill-based instruction",
  "Analytics and insights",
  "Global certification",
  "Customizable courses",
];

const easing = [0.22, 1, 0.36, 1];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: easing,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: -60,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: easing,
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: easing,
      staggerChildren: 0.13,
      delayChildren: 0.15,
    },
  },
};

const WhatWeOffer = () => {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-10 xl:px-14">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-24">
          {/* Left image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative mx-auto w-full max-w-[720px] pb-16 sm:pb-20 lg:mx-0 lg:pb-0"
          >
            <motion.div
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                duration: 0.35,
                ease: easing,
              }}
              className="relative overflow-hidden rounded-[5px]"
            >
              <motion.img
                src={offerImage}
                alt="Online course instructor"
                className="h-[440px] w-full object-cover object-center sm:h-[580px] lg:h-[690px] xl:h-[760px]"
                whileHover={{
                  scale: 1.045,
                }}
                transition={{
                  duration: 0.7,
                  ease: easing,
                }}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08272d]/10 via-transparent to-transparent" />
            </motion.div>

            {/* 50+ badge */}
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              transition={{
                duration: 0.75,
                delay: 0.35,
                ease: easing,
              }}
              whileHover={{
                y: -7,
                scale: 1.03,
              }}
              className="
                absolute -left-2 top-8
                flex min-h-[95px] items-center
                rounded-[5px] bg-[#08272d]
                px-5 py-4 text-white
                shadow-[0_22px_55px_rgba(8,39,45,0.24)]
                sm:-left-8 sm:top-14
                sm:min-h-[112px] sm:px-7
                lg:-left-12
                xl:-left-14
              "
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="relative">
                  <span className="block text-[42px] font-bold leading-none tracking-[-0.05em] text-[#ffb800] sm:text-[54px]">
                    50+
                  </span>

                  <motion.span
                    animate={{
                      rotate: [0, 15, -10, 0],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-4 -top-4 text-xl text-[#ffb800]"
                  >
                    ✦
                  </motion.span>
                </div>

                <p className="max-w-[145px] text-[16px] font-semibold leading-[1.35] sm:text-[20px]">
                  Free courses
                  <br />
                  listed online
                </p>
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.9,
              }}
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
                duration: 0.75,
                delay: 0.5,
                ease: easing,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                absolute bottom-0 right-3
                flex h-[150px] w-[175px]
                flex-col items-center justify-center
                bg-white px-5 text-center
                shadow-[0_20px_60px_rgba(8,39,45,0.14)]
                sm:right-0 sm:h-[175px] sm:w-[205px]
                lg:-bottom-1
              "
            >
              <span className="text-[54px] font-semibold leading-none tracking-[-0.05em] text-[#08272d] sm:text-[66px]">
                25
              </span>

              <p className="mt-2 text-[16px] leading-[1.3] text-[#737373] sm:text-[18px]">
                Years of
                <br />
                experience
              </p>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="lg:py-8"
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#08272d] sm:text-[16px]"
            >
              What we offer
            </motion.p>

            <motion.h2
              variants={fadeUpVariants}
              className="
                mt-5 max-w-[760px]
                text-[30px] font-semibold
                leading-[1.08] tracking-[-0.045em]
                text-[#08272d]
                sm:text-[48px]
                lg:text-[50px]
                xl:text-[50px]
              "
            >
              Personalized learning for your ambitions
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="
                mt-6 max-w-[760px]
                text-[16px] leading-[1.8]
                text-[#777777]
                sm:text-[18px]
                lg:text-[19px]
              "
            >
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. Vitae diam dolor lacus amet integer ut.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={sectionVariants}
              className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:mt-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  variants={fadeUpVariants}
                  whileHover={{
                    x: 6,
                  }}
                  className={`
                    flex items-start gap-3
                    text-[16px] font-semibold
                    text-[#08272d]
                    sm:text-[17px]
                    lg:text-[18px]
                    ${
                      index === 1
                        ? "sm:row-start-1 sm:col-start-2"
                        : index === 2
                          ? "sm:row-start-2 sm:col-start-1"
                          : index === 3
                            ? "sm:row-start-2 sm:col-start-2"
                            : ""
                    }
                  `}
                >
                  <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#08272d]" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 22px 55px rgba(8, 39, 45, 0.1)",
              }}
              transition={{
                duration: 0.35,
                ease: easing,
              }}
              className="
                mt-10 rounded-[5px]
                bg-[#edf6f8]
                p-6
                sm:p-8
                lg:mt-12 lg:p-8
              "
            >
              <div className="flex flex-col gap-7 sm:flex-row sm:items-center  sm:justify-between">
                <div>
                  <h3 className="text-[22px] font-semibold text-[#08272d] sm:text-[24px]">
                    Still have questions?
                  </h3>

                  <p className="mt-4 max-w-[390px] text-[16px] leading-[1.75] text-[#777777] sm:text-[18px]">
                    Lorem ipsum dolor sit amet conse ipsum blandit etiam
                    aliquam.
                  </p>
                </div>

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 20,
                  }}
                  className="
                    group flex h-[58px]
                    w-full shrink-0
                    items-center justify-center gap-3
                    rounded-[5px]
                    bg-[#08272d]
                    px-7 text-[16px]
                    font-medium text-white
        
                    sm:w-[210px]
                  "
                >
                  Get Started
                  <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
