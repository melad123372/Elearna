import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiDollarSign, FiMonitor, FiAward } from "react-icons/fi";

const benefits = [
  {
    id: 1,
    title: "Learn anything",
    description:
      "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    icon: FiBookOpen,
  },
  {
    id: 2,
    title: "Save money",
    description:
      "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    icon: FiDollarSign,
  },
  {
    id: 3,
    title: "Flexible courses",
    description:
      "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    icon: FiMonitor,
  },
  {
    id: 4,
    title: "Unlimited certificate",
    description:
      "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    icon: FiAward,
  },
];

const easing = [0.22, 1, 0.36, 1];

const headerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUp = {
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

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.25,
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
      duration: 0.7,
      ease: easing,
    },
  },
};

const WhyWeAre = () => {
  return (
    <section className="overflow-hidden bg-[#edf6f8] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-14">
        {/* Section heading */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          className="mx-auto max-w-[900px] text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-[14px] font-semibold uppercase tracking-[0.1em] text-[#08272d] sm:text-[16px]"
          >
            Why we are
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="
              mt-5 text-[34px] font-semibold
              leading-[1.12] tracking-[-0.04em]
              text-[#08272d]
              sm:text-[42px]
              md:text-[48px]
              lg:text-[54px]
            "
          >
            Elevate your professional journey
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              mx-auto mt-5 max-w-[760px]
              text-[16px] leading-[1.8]
              text-[#777777]
              sm:text-[18px]
              md:text-[20px]
            "
          >
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </motion.p>
        </motion.div>

        {/* Benefit cards */}
        <motion.div
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            mt-14 grid grid-cols-1
            gap-6
            sm:mt-16 sm:grid-cols-2
            lg:mt-20 lg:grid-cols-4
            lg:gap-5
            xl:gap-8
          "
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 22px 55px rgba(8, 39, 45, 0.10)",
                }}
                transition={{
                  duration: 0.35,
                  ease: easing,
                }}
                className="
                  group rounded-[12px]
                  border border-transparent
                  px-6 py-9 text-center
                  sm:px-7 sm:py-10
                  lg:min-h-[270px]
                  lg:px-5
                  xl:px-8
                "
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: [0, -8, 8, 0],
                    scale: 1.12,
                  }}
                  transition={{
                    duration: 0.55,
                  }}
                  className="
                    mx-auto flex h-[72px] w-[72px]
                    items-center justify-center
                    rounded-full
                    bg-transparent
                    text-[#08272d]
                    transition-colors duration-300
                    group-hover:bg-[#ffb800]
                  "
                >
                  <Icon className="text-[44px] stroke-[1.2]" />
                </motion.div>

                {/* Title */}
                <h3
                  className="
                    mt-7 text-[21px]
                    font-semibold leading-tight
                    text-[#08272d]
                    sm:text-[23px]
                    lg:text-[21px]
                    xl:text-[24px]
                  "
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mx-auto mt-5 max-w-[350px]
                    text-[15px] leading-[1.8]
                    text-[#7b7b7b]
                    sm:text-[16px]
                    lg:text-[15px]
                    xl:text-[17px]
                  "
                >
                  {benefit.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWeAre;
