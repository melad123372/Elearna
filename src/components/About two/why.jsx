// src/components/AboutTwo/WhyWeAre.jsx

import { motion } from "framer-motion";

export default function WhyWeAre() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <motion.div
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
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-[900px] text-center"
      >
        <motion.p
          initial={{
            opacity: 0,
            letterSpacing: "0.18em",
          }}
          whileInView={{
            opacity: 1,
            letterSpacing: "0.08em",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            text-sm
            font-semibold
            uppercase
            text-[#102c31]
            sm:text-base
            lg:text-lg
          "
        >
          Why we are
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-4
            max-w-[850px]
            text-[28px]
            font-semibold
            leading-[1.35]
            tracking-[-0.025em]
            text-[#102c31]

            sm:text-[34px]
            sm:leading-[1.3]

            lg:text-[38px]
            lg:leading-[1.28]
          "
        >
          We believe in our good education and development system and we know
          how to work together to reach greater success
        </motion.h2>
      </motion.div>
    </section>
  );
}
