import React from "react";
import { motion } from "framer-motion";

import {
  FaBookOpen,
  FaWallet,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBookOpen />,
    title: "Learn anything",
    desc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
  },

  {
    icon: <FaWallet />,
    title: "Save money",
    desc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
  },

  {
    icon: <FaGraduationCap />,
    title: "Flexible courses",
    desc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
  },

  {
    icon: <FaCertificate />,
    title: "Unlimited certificate",
    desc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
  },
];

export default function WhyWeAre() {
  return (
    <section
      className="
      bg-[#f1f8fa]
      py-16
      px-5
      overflow-hidden
    "
    >
      {/* HEADER */}

      <motion.div
        initial={{
          opacity: 0,
          y: -40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{
          once: true,
        }}
        className="
          text-center
          max-w-3xl
          mx-auto
        "
      >
        <p
          className="
          text-[#102b35]
          font-semibold
          text-sm
          tracking-wider
        "
        >
          WHY WE ARE
        </p>

        <h1
          className="
          mt-5
          text-3xl
          md:text-4xl
          font-bold
          text-[#102b35]
        "
        >
          Elevate your professional journey
        </h1>

        <p
          className="
          mt-4
          text-gray-500
          text-base
          md:text-lg
          leading-7
        "
        >
          Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
          mus. Vitae diam dolor lacus amet integer ut.
        </p>
      </motion.div>

      {/* FEATURES */}

      <div
        className="
        max-w-7xl
        mx-auto
        mt-14
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-10
      "
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
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
            }}
            className="
                text-center
                group
              "
          >
            {/* ICON */}

            <div
              className="
                flex
                justify-center
                text-4xl
                text-[#102b35]
                mb-6
                transition-all
                duration-300
                group-hover:-translate-y-2
              "
            >
              {item.icon}
            </div>

            {/* TITLE */}

            <h2
              className="
                text-xl
                font-semibold
                text-[#102b35]
              "
            >
              {item.title}
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-5
                text-gray-500
                text-base
                leading-7
                max-w-xs
                mx-auto
              "
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
