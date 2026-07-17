import React from "react";
import { motion } from "framer-motion";
import herobg from "../../assets/Elearna - Home Three/herobg.webp";
import heroimg from "../../assets/Elearna - Home Three/heroimg.webp"; // your image

const features = [
  {
    title: "150+ online courses",
    desc: "Lorem ipsum dolor sit amet",
    icon: "◎",
  },
  {
    title: "Personalized learning",
    desc: "Lorem ipsum dolor sit amet",
    icon: "✎",
  },
  {
    title: "Lifetime update",
    desc: "Lorem ipsum dolor sit amet",
    icon: "↻",
  },
];

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden">
      {/* Hero */}
      <div className="relative bg-[#071C23] min-h-screen flex items-center  justify-center">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url(${herobg})`,
          }}
        ></div>

        {/* PERSONAL TEXT */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-16 mt-20 md:top-24 text-[70px] sm:text-[120px] md:text-[180px] lg:text-[220px] font-bold uppercase text-white leading-none pointer-events-none"
        >
          PERSONAL
        </motion.h1>

        <div className="relative z-10 max-w-7xl mx-auto px-6 p-20 lg:px-10 flex justify-center items-center">
          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={heroimg}
            alt=""
            className="w-[300px] sm:w-[420px] md:w-[520px] lg:w-[620px]"
          />

          {/* COACH */}
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute text-[70px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-bold text-yellow-400 uppercase"
          >
            Coach
          </motion.h2>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute bottom-16  sm:right-10 md:right-20 text-left"
          >
            <p className="uppercase text-white tracking-widest text-xs md:text-sm mb-3">
              Online Learning
            </p>

            <h3 className="text-white font-bold leading-tight text-2xl sm:text-4xl md:text-6xl">
              Digital <span className="text-yellow-400">learning</span>
              <br />
              empowerment hub
            </h3>
          </motion.div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="bg-[#FFFFFF] py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-full border flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <div>
                <h4 className="font-bold text-xl">{item.title}</h4>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
