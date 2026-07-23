import React from "react";
import { motion } from "framer-motion";

import hometwobg from "../../assets/11- Home Two Imgs/Hero.webp";

const features = [
  {
    title: "150+ online courses",
    desc: "Lorem ipsum dolor sit amet",
    icon: "◯",
  },
  {
    title: "Personalized learning",
    desc: "Lorem ipsum dolor sit amet",
    icon: "✒",
  },
  {
    title: "Lifetime update",
    desc: "Lorem ipsum dolor sit amet",
    icon: "↻",
  },
];

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      {/* HERO SECTION */}

      <section
        className="
          relative
          flex
          min-h-[620px]
          items-center
          overflow-hidden
          bg-cover
          bg-center
          sm:min-h-[680px]
          md:min-h-[720px]
          lg:h-[90vh]
          lg:min-h-[750px]
        "
        style={{
          backgroundImage: `url(${hometwobg})`,
        }}
      >
        {/* dark overlay */}

        <div className="absolute inset-0 z-10 bg-black/10" />

        {/* Personal Coach */}

        <motion.h1
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 0.2,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            absolute
            left-4
            top-20
            z-0
            select-none
            text-[52px]
            font-bold
            uppercase
            leading-[0.9]
            text-white
            sm:left-6
            sm:top-24
            sm:text-[68px]
            md:left-10
            md:top-28
            md:text-[84px]
            lg:text-[100px]
          "
        >
          Personal
          <br />
          Coach
        </motion.h1>

        {/* Right content */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
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
          className="
            relative
            z-20
            mx-auto
            flex
            w-full
            max-w-7xl
            justify-start
            px-5
            pt-60
            sm:px-6
            sm:pt-72
            md:justify-end
            md:px-10
            md:pt-52
            lg:pt-0
          "
        >
          <div
            className="
              mt-32
              w-full
              max-w-xl
              sm:mt-40
              md:mt-64
              lg:mt-80
            "
          >
            <p
              className="
                mb-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
                sm:mb-5
                sm:text-sm
                md:mb-6
              "
            >
              Online Learning
            </p>

            <h2
              className="
                text-3xl
                font-bold
                leading-tight
                text-white
                sm:text-4xl
                md:text-5xl
                lg:text-[52px]
              "
            >
              Transform <span className="text-yellow-400">learning</span> with
              <br className="hidden sm:block" />
              flexible online education
            </h2>
          </div>
        </motion.div>
      </section>

      {/* FEATURES CARD */}

      <section
        className="
          relative
          z-30
          -mt-10
          px-4
          sm:-mt-12
          sm:px-6
          md:-mt-14
          md:px-8
          lg:-mt-16
          lg:px-10
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
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
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-0
            overflow-hidden
            rounded-xl
            bg-white
            px-5
            py-3
            shadow-xl
            sm:px-7
            sm:py-5
            md:grid-cols-3
            md:gap-5
            md:p-8
            lg:gap-8
            lg:p-12
          "
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{
                once: true,
              }}
              className="
                flex
                items-center
                gap-4
                border-b
                border-gray-100
                py-5
                last:border-b-0
                sm:gap-5
                sm:py-6
                md:border-b-0
                md:py-0
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  text-xl
                  sm:h-14
                  sm:w-14
                  sm:text-2xl
                "
              >
                {item.icon}
              </div>

              <div className="min-w-0">
                <h3
                  className="
                    text-lg
                    font-semibold
                    leading-snug
                    text-slate-900
                    sm:text-xl
                    md:text-lg
                    lg:text-xl
                    xl:text-2xl
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    leading-relaxed
                    text-gray-500
                    sm:mt-2
                    sm:text-base
                  "
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
