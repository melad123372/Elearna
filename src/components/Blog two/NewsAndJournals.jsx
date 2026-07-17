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
    image: blog1,
    date: "4.10.2024",
    author: "SAMANTHA DICKI",
    title: "Master online learning with proven strategies",
  },
  {
    id: 2,
    image: blog2,
    date: "14.9.2024",
    author: "SAMANTHA DICKI",
    title: "The role of technology in modern classrooms",
  },
  {
    id: 3,
    image: blog3,
    date: "3.10.2024",
    author: "EDWIN WATERS",
    title: "How to enhance your learning experience today",
  },
  {
    id: 4,
    image: blog4,
    date: "13.9.2024",
    author: "EDWIN WATERS",
    title: "How globalization is shaping curriculum development",
  },
  {
    id: 5,
    image: blog5,
    date: "17.9.2024",
    author: "EDWARD BRAUN",
    title: "The evolution of teaching tools in the 21st century",
  },
  {
    id: 6,
    image: blog6,
    date: "12.9.2024",
    author: "GERALD NIENOW",
    title: "How personalized learning is changing education",
  },
  {
    id: 7,
    image: blog7,
    date: "16.9.2024",
    author: "JESSE JOHNSON",
    title: "The role of parental involvement in academic achievement",
  },
  {
    id: 8,
    image: blog8,
    date: "11.9.2024",
    author: "NINA LEFFLER",
    title: "Empowering teachers with continuous professional development",
  },
];

export default function NewsAndJournals() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10">
          {/* LEFT STICKY CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-10 self-start"
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src={Bigimg}
                alt=""
                className="w-full h-[600px] object-cover"
              />

              <div className="p-8">
                <p className="text-sm text-gray-500 tracking-wide">
                  10.4.2024
                  <span className="mx-3">•</span>
                  NINA LEFFLER
                </p>

                <h2 className="text-2xl font-medium mt-5 leading-tight">
                  Improve knowledge retention with visual learning
                </h2>

                <p className="mt-5 text-gray-500 leading-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  fugiat asperiores inventore cumque, sit repellendus ducimus
                  illum molestiae ipsum.
                </p>
              </div>
            </div>
          </motion.div>
          {/* RIGHT GRID */}
          <div className="grid sm:grid-cols-2 gap-7">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt=""
                    className="w-full h-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {blog.date}
                    <span className="mx-2">•</span>
                    {blog.author}
                  </p>

                  <h3 className="mt-4 text-xl font-semibold leading-8 hover:text-yellow-500 duration-300">
                    {blog.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
