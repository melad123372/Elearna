import React from "react";
import { motion } from "framer-motion";

import heroImg from "../../assets/11- Home Two Imgs/BoyUsingLaptopImage.webp";

import logo1 from "../../assets/11- Home Two Imgs/ClientIconBlack.svg";
import logo2 from "../../assets/11- Home Two Imgs/ClientIconBlack-2.svg";
import logo3 from "../../assets/11- Home Two Imgs/ClientIconBlack-3.svg";
import logo4 from "../../assets/11- Home Two Imgs/ClientIconBlack-4.svg";
import logo5 from "../../assets/11- Home Two Imgs/ClientIconBlack-5.svg";
import logo6 from "../../assets/11- Home Two Imgs/ClientIconBlack-6.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function LearningSection() {
  return (
    <section className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <div
        className="
          relative
          min-h-[590px]
          bg-cover
          bg-[position:68%_center]
          sm:min-h-[570px]
          sm:bg-[position:60%_center]
          md:min-h-[570px]
          md:bg-center
          lg:min-h-[600px]
        "
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/45 md:bg-black/40" />

        {/* Hero Content */}
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
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-5
            pb-40
            pt-20
            sm:px-6
            sm:pb-36
            sm:pt-24
            md:px-10
            md:pb-32
            md:pt-28
            lg:px-12
            lg:pt-32
          "
        >
          <p
            className="
              text-xs
              font-semibold
              tracking-[0.2em]
              text-white
              sm:text-sm
            "
          >
            WHAT WE OFFER
          </p>

          <h1
            className="
              mt-4
              max-w-[320px]
              text-3xl
              font-semibold
              leading-[1.15]
              text-white
              sm:mt-5
              sm:max-w-lg
              sm:text-4xl
              md:max-w-xl
              md:text-5xl
            "
          >
            Personalized learning for
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            your ambitions
          </h1>

          <p
            className="
              mt-4
              max-w-[330px]
              text-sm
              leading-6
              text-gray-200
              sm:mt-5
              sm:max-w-lg
              sm:text-base
              sm:leading-7
              md:text-lg
            "
          >
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>

          <button
            type="button"
            className="
              mt-7
              rounded-md
              bg-yellow-400
              px-7
              py-3.5
              text-sm
              font-medium
              text-[#112a30]
              transition-colors
              duration-300
              hover:bg-yellow-500
              sm:mt-8
              sm:px-10
              sm:py-4
              sm:text-base
            "
          >
            Get Course
          </button>
        </motion.div>
      </div>

      {/* LOGO SECTION */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
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
          -mt-24
          mx-4
          max-w-6xl
          overflow-hidden
          rounded-md
          bg-white
          px-5
          py-8
          shadow-lg
          sm:-mt-20
          sm:mx-6
          sm:px-6
          sm:py-10
          md:mx-8
          md:px-8
          md:py-12
          lg:mx-auto
        "
      >
        <p
          className="
            mx-auto
            mb-7
            max-w-2xl
            text-center
            text-sm
            leading-6
            text-gray-700
            sm:mb-8
            sm:text-base
            md:text-lg
          "
        >
          Learn from 350+ leading universities and companies with us
        </p>

        {/* MARQUEE */}
        <div className="relative overflow-hidden">
          <motion.div
            className="
              flex
              w-max
              items-center
              gap-8
              sm:gap-10
              md:gap-12
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner logo ${(index % logos.length) + 1}`}
                className="
                  h-8
                  w-auto
                  flex-shrink-0
                  object-contain
                  opacity-70
                  transition-opacity
                  duration-300
                  hover:opacity-100
                  sm:h-10
                  md:h-12
                "
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
