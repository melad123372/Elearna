import React from "react";
import { motion } from "framer-motion";

import category1 from "../../assets/Elearna - Home Three/category1.webp";
import category2 from "../../assets/Elearna - Home Three/category2.webp";
import category3 from "../../assets/Elearna - Home Three/category3.webp";
import category4 from "../../assets/Elearna - Home Three/category4.webp";

const categories = [
  {
    id: 1,
    title: "Web design and creative",
    image: category1,
  },
  {
    id: 2,
    title: "Finance and accounting",
    image: category2,
  },
  {
    id: 3,
    title: "Technology and software",
    image: category3,
  },
  {
    id: 4,
    title: "Digital marketing",
    image: category4,
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[3px] text-sm font-semibold text-gray-700">
            TOP CATEGORIES
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Discover leading categories
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-500 text-base md:text-lg leading-8">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus
            malesuada morbi in quam donec a pellentesque risus.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">
          {categories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative h-[420px] md:h-[370px] overflow-hidden rounded-[5px] cursor-pointer shadow-lg"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/70"></div>

              {/* Text */}
              <div className="absolute bottom-8 left-6 right-6">
                <motion.h3
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="text-white text-2xl md:text-2xl font-bold leading-tight"
                >
                  {item.title}
                </motion.h3>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/30 transition-all duration-500 rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
