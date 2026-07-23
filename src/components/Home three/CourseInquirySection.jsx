import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

import backgroundImage from "../../assets/17- Home Three imgs/MainBg.webp";

const stats = [
  {
    value: 1.5,
    decimals: 1,
    suffix: "K",
    label: "FINISH SEASONS",
  },
  {
    value: 7.8,
    decimals: 1,
    suffix: "K",
    label: "ENROLLED",
  },
  {
    value: 100,
    decimals: 0,
    suffix: "%",
    label: "JOB PLACEMENT",
  },
];

const AnimatedNumber = ({ value, decimals = 0, suffix = "", delay = 0 }) => {
  const numberRef = useRef(null);

  const isInView = useInView(numberRef, {
    once: true,
    amount: 0.6,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      delay,
      ease: [0.22, 1, 0.36, 1],

      onUpdate: (latestValue) => {
        setDisplayValue(latestValue);
      },
    });

    return () => controls.stop();
  }, [isInView, value, delay]);

  return (
    <span ref={numberRef}>
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const leftItemVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    y: 20,
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const formVariants = {
  hidden: {
    opacity: 0,
    x: 70,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const formItemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const CourseInquirySection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="relative isolate min-h-[780px] overflow-hidden bg-[#07171a] lg:min-h-[620px]">
      {/* Background image */}
      <div
        className="
          absolute inset-0 z-0
          bg-cover bg-center bg-no-repeat
          sm:bg-cover
          
        "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 z-[1] bg-[#061619]/10" />

      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#061619]/90 via-[#061619]/55 to-[#061619]/35" />

      <div className="absolute inset-0 z-[3] bg-gradient-to-t from-[#061619]/45 via-transparent to-[#061619]/15" />

      {/* Animated glow */}
      <motion.div
        className="
          pointer-events-none absolute
          -left-32 top-1/2 z-[4]
          h-[350px] w-[350px]
          -translate-y-1/2 rounded-full
          bg-[#ffb800]/10 blur-[130px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div
        className="
          relative z-10 mx-auto flex
          min-h-[680px] max-w-[1500px]
          items-center px-5 py-12
          sm:px-8 sm:py-14
          md:py-16
          lg:min-h-[720px] lg:px-10 lg:py-14
          xl:px-16
        "
      >
        <div
          className="
            grid w-full items-center gap-10
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-12
            xl:gap-16
          "
        >
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="text-center text-white lg:text-left"
          >
            <motion.h2
              variants={leftItemVariants}
              className="
                mx-auto max-w-[750px]
                text-[32px] font-bold leading-[1.15]
                tracking-[-0.03em]
                sm:text-[40px]
                md:text-[46px]
                lg:mx-0 lg:text-[44px]
                xl:text-[50px]
              "
            >
              Get the courses by expert coach
            </motion.h2>

            <motion.p
              variants={leftItemVariants}
              className="
                mt-5 text-xl font-semibold
                text-[#ffb800]
                sm:text-2xl
                md:mt-6 md:text-[27px]
              "
            >
              Get started with us
            </motion.p>

            {/* Statistics */}
            <motion.div
              variants={leftItemVariants}
              className="
                mx-auto mt-10 grid max-w-[760px]
                grid-cols-1 overflow-hidden
                rounded-3xl border border-white/10
                bg-white/[0.05] backdrop-blur-sm
                sm:grid-cols-3
                lg:mx-0 lg:mt-14
                lg:overflow-visible lg:rounded-none
                lg:border-0 lg:bg-transparent
                lg:backdrop-blur-none
              "
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.45 + index * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    relative flex min-h-[125px]
                    flex-col items-center justify-center
                    px-5 py-5

                    lg:min-h-0
                    lg:items-start
                    lg:px-7
                    lg:py-2

                    first:lg:pl-0

                    ${
                      index !== stats.length - 1
                        ? "border-b border-white/25 sm:border-b-0 sm:border-r"
                        : ""
                    }
                  `}
                >
                  <motion.h3
                    whileHover={{
                      scale: 1.06,
                      color: "#ffb800",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="
                      text-[44px] font-bold leading-none
                      tracking-[-0.04em]
                      sm:text-[40px]
                      md:text-[46px]
                      xl:text-[54px]
                    "
                  >
                    <AnimatedNumber
                      value={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      delay={0.5 + index * 0.18}
                    />
                  </motion.h3>

                  <p
                    className="
                      mt-3 whitespace-nowrap
                      text-[12px] font-semibold
                      tracking-[0.02em] text-white/90
                      sm:text-xs
                      md:text-sm
                      xl:text-[14px]
                    "
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              mx-auto w-full max-w-[560px]
              rounded-[16px]
              border border-white/30
              bg-white/65
              p-5
              shadow-[0_25px_80px_rgba(0,0,0,0.3)]
              backdrop-blur-md
              sm:p-6
              md:p-7
              lg:max-w-none
              xl:p-8
            "
          >
            <motion.h3
              variants={formItemVariants}
              className="
                mb-5 text-center
                text-[24px] font-bold leading-tight
                tracking-[-0.02em] text-[#08272d]
                sm:text-[27px]
                md:mb-6 md:text-[30px]
              "
            >
              Course availability inquiry
            </motion.h3>

            <motion.form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <motion.div variants={formItemVariants}>
                <label htmlFor="student-name" className="sr-only">
                  Your name
                </label>

                <motion.input
                  id="student-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 12px 35px rgba(8, 39, 45, 0.15)",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    h-[52px] w-full
                    rounded-[7px]
                    border border-white
                    bg-white px-5
                    text-base font-medium text-[#08272d]
                    outline-none
                    placeholder:text-[#9b9b9b]/65
                    focus:border-[#ffb800]
                    sm:h-[56px] sm:px-6
                  "
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={formItemVariants}>
                <label htmlFor="student-email" className="sr-only">
                  Email address
                </label>

                <motion.input
                  id="student-email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 12px 35px rgba(8, 39, 45, 0.15)",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    h-[52px] w-full
                    rounded-[7px]
                    border border-white
                    bg-white px-5
                    text-base font-medium text-[#08272d]
                    outline-none
                    placeholder:text-[#9b9b9b]/65
                    focus:border-[#ffb800]
                    sm:h-[56px] sm:px-6
                  "
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={formItemVariants}>
                <label htmlFor="student-message" className="sr-only">
                  Message
                </label>

                <motion.textarea
                  id="student-message"
                  name="message"
                  placeholder="Message"
                  rows={3}
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 12px 35px rgba(8, 39, 45, 0.15)",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    min-h-[95px] w-full resize-none
                    rounded-[7px]
                    border border-white
                    bg-white px-5 py-4
                    text-base font-medium text-[#08272d]
                    outline-none
                    placeholder:text-[#9b9b9b]/65
                    focus:border-[#ffb800]
                    sm:min-h-[105px] sm:px-6
                  "
                />
              </motion.div>

              {/* Button */}
              <motion.div variants={formItemVariants}>
                <motion.button
                  type="submit"
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                    boxShadow: "0 18px 35px rgba(8, 39, 45, 0.3)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 20,
                  }}
                  className="
                    flex h-[50px] w-full
                    items-center justify-center
                    rounded-[7px]
                    bg-[#08272d]
                    px-8
                    text-base font-semibold text-white
                    sm:w-[185px]
                  "
                >
                  Inquire
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseInquirySection;
