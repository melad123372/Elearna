import React from "react";
import { motion } from "framer-motion";

import Bigimg from "../../assets/Elearna - Blog Two/Bigimg.webp";
import blog1 from "../../assets/Elearna - Blog Two/blog1.webp";
import blog2 from "../../assets/Elearna - Blog Two/blog2.webp";
import blog3 from "../../assets/Elearna - Blog Two/blog3.webp";
import blog4 from "../../assets/Elearna - Blog Two/blog4.webp";
import blog5 from "../../assets/Elearna - Blog Two/blog5.webp";
import blog6 from "../../assets/Elearna - Blog Two/blog6.webp";
import blog7 from "../../assets/Elearna - Blog Two/blog7.webp";
import blog8 from "../../assets/Elearna - Blog Two/blog8.webp";

const blogs = [
  {
    id: 1,
    image: Bigimg,
    date: "4.10.2024",
    author: "NINA LEFFLER",
    title: "Improve knowledge retention with visual learning",
  },
  {
    id: 2,
    image: blog1,
    date: "17.9.2024",
    author: "EDWARD BRAUN",
    title: "The evolution of teaching tools in the 21st century",
  },
  {
    id: 3,
    image: blog2,
    date: "13.9.2024",
    author: "EDWIN WATERS",
    title: "How globalization is shaping curriculum development",
  },
  {
    id: 4,
    image: blog3,
    date: "4.10.2024",
    author: "SAMANTHA DICKI",
    title: "Master online learning with proven strategies",
  },
  {
    id: 5,
    image: blog4,
    date: "16.9.2024",
    author: "JESSE JOHNSON",
    title: "The role of parental involvement in academic achievement",
  },
  {
    id: 6,
    image: blog5,
    date: "12.9.2024",
    author: "GERALD NIENOW",
    title: "How personalized learning is changing education",
  },
  {
    id: 7,
    image: blog6,
    date: "3.10.2024",
    author: "EDWIN WATERS",
    title: "How to enhance your learning experience today",
  },
  {
    id: 8,
    image: blog7,
    date: "14.9.2024",
    author: "SAMANTHA DICKI",
    title: "The role of technology in modern classrooms",
  },
  {
    id: 9,
    image: blog8,
    date: "11.9.2024",
    author: "NINA LEFFLER",
    title: "Empowering teachers with continuous professional development",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#f7f7f7] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="mb-8 break-inside-avoid bg-white shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src={blog.image}
                  alt=""
                  className="w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-gray-500">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span className="font-semibold text-gray-700">
                    {blog.author}
                  </span>
                </div>

                <h2 className="text-3xl mt-5 font-semibold leading-snug text-gray-900">
                  {blog.title}
                </h2>

                <p className="text-gray-500 leading-8 mt-5">
                  Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat
                  elementum sit ut. Cras mattis aliquam arcu mauris sagittis
                  fames eu diam vulputate.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
