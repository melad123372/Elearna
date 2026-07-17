import React from "react";
import { motion } from "framer-motion";

const items = [
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
    showButton: true,
  },
];

export default function WhyWeAre() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-10 lg:px-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="uppercase text-sm tracking-widest text-gray-500">
          Why we are
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mt-4">
          We believe in our good education and development system and we know
          how to work together to reach greater success
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white shadow-md hover:shadow-xl transition-all duration-300 p-6 overflow-hidden"
          >
            {/* Number */}
            <h3 className="text-blue-600 text-3xl font-bold">{item.id}</h3>

            {/* Title */}
            <h4 className="text-lg font-semibold mt-3 text-gray-900">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              {item.desc}
            </p>

            {/* Hover Button (ONLY shows on hover) */}
            {item.showButton && (
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <button className="bg-gray-900 text-white px-5 py-2 rounded-md text-sm hover:bg-black transition">
                  Get Started
                </button>
              </div>
            )}

            {/* Hover border animation effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
