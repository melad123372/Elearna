import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonials } from "./Data";
export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-[#183339] text-white">
      <div className="container mx-auto px-5">
        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400 uppercase mb-4">OUR TESTIMONIALS</p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Trusted by our <br /> successful students
            </h1>
          </motion.div>
          {/* NUMBERS */}
          <div className="flex items-center mt-10 gap-10">
            {/* 70M block */}
            <div className="flex items-center gap-6 pr-10  border-gray-600">
              <h2 className="text-5xl font-bold pr-6 border-r border-gray-600">
                70M
              </h2>
              <p className="text-gray-400 uppercase leading-snug">
                Successful <br /> Students
              </p>
            </div>

            {/* 25K block */}
            <div className="flex items-center gap-6">
              <h2 className="text-5xl font-bold pr-6 border-r border-gray-600">
                25K
              </h2>
              <p className="text-gray-400 uppercase leading-snug">
                Global Job <br /> Placements
              </p>
            </div>
          </div>
        </div>

        {/* CARD */}
        <div className="grid lg:grid-cols-2 gap-10 mt-14 items-center">
          {/* IMAGE */}
          <motion.img
            key={testimonials[index].image}
            src={testimonials[index].image}
            alt="student"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[400px] object-cover rounded-xl"
          />

          {/* TEXT */}
          <motion.div
            key={testimonials[index].name}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 text-xl leading-relaxed mb-10">
              "{testimonials[index].text}"
            </p>

            <h2 className="text-2xl font-medium">{testimonials[index].name}</h2>

            <p className="text-gray-400 mt-2">{testimonials[index].role}</p>

            {/* BUTTONS (React Icons) */}
            <div className="flex gap-5 mt-12">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition"
              >
                <FaArrowLeft />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
