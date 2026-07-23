import React from "react";
import { motion } from "framer-motion";
import logo1 from "../../assets/1- Home One imgs/ClientsLogo.svg";
import logo2 from "../../assets/1- Home One imgs/ClientsLogo-2.svg";
import logo3 from "../../assets/1- Home One imgs/ClientsLogo-3.svg";
import logo4 from "../../assets/1- Home One imgs/ClientsLogo-4.svg";
import logo5 from "../../assets/1- Home One imgs/ClientsLogo-5.svg";
import logo6 from "../../assets/1- Home One imgs/ClientsLogo-6.svg";
export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function LogoSection() {
  return (
    <section className="bg-[#EFF6F8] py-20 overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          text-center
          text-xl
          md:text-2xl
          font-medium
          text-[#12202b]
          px-5
        "
      >
        Learn from 350+ leading universities and companies with us
      </motion.h2>

      {/* Logos Slider */}
      <div className="mt-14 overflow-hidden ">
        <motion.div
          className="  flex items-center gap-20 md:gap-32 w-max"
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
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="
                flex
                items-center
                justify-center
                w-36
                md:w-52
              "
            >
              <img
                src={logo}
                alt="company logo"
                className="
                  w-full
                  h-16
                  object-contain
                  opacity-50
                  hover:opacity-100
                  transition-all
                  duration-300
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
