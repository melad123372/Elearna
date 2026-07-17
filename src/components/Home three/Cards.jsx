import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    id: "01",
    title: "Flexibility and convenience",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    id: "02",
    title: "Course accessibility",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },

  {
    id: "03",
    title: "Cost-effectiveness",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    id: "04",
    title: "Personalized learning",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[#f5f8f8] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <p className="uppercase tracking-[3px] text-gray-600 font-semibold mb-4">
            Unlocking Potential
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#11252d]">
            Discover the boundless advantages and transformative power of
            eLearning for personal and professional growth in the digital age
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group bg-white  overflow-hidden h-[320px]
              transition-all duration-500
              hover:-translate-y-8 hover:shadow-2xl
              ${item.active ? "-mt-10 shadow-2xl" : ""}`}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Number */}
                <h1 className="text-4xl font-bold text-blue-600">{item.id}</h1>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#11252d] mt-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-6 mt-4 flex-1 overflow-hidden">
                  {item.desc}
                </p>

                {/* Button */}
                <div className="overflow-hidden max-h-0 opacity-0 mt-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-5">
                  <button className="px-10 bg-[#11252d]  text-white py-3 rounded-md transition duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
