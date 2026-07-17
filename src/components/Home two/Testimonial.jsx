import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Testimonial() {
  return (
    <section className=" py-24  px-5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Quote Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <FaQuoteLeft className="text-gray-200" size={100} />
        </motion.div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="
          text-[#132c35]
          text-xl
          sm:text-1xl
          lg:text-2xl
        
          leading-relaxed
          max-w-5xl
          mx-auto
          "
        >
          “Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus
          facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis
          donec mattis. Morbi placerat eleifend malesuada sed semper quis.”
        </motion.p>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-14"
        >
          <h3
            className="
          text-2xl
          sm:text-3xl
          text-[#132c35]
          font-medium
          "
          >
            Linda Grady
          </h3>

          <p
            className="
          mt-4
          text-gray-500
          tracking-widest
          text-sm
          sm:text-base
          "
          >
            CO-ASSISTANT MANAGER
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="
          flex
          justify-center
          gap-5
          mt-12
          "
        >
          <button
            className="
          w-14
          h-14
          rounded-full
          border
          border-gray-400
          flex
          items-center
          justify-center
          text-gray-500
          hover:bg-[#132c35]
          hover:text-white
          transition-all
          duration-300
          "
          >
            <FaArrowLeft />
          </button>

          <button
            className="
          w-14
          h-14
          rounded-full
          border
          border-gray-400
          flex
          items-center
          justify-center
          text-gray-500
          hover:bg-[#132c35]
          hover:text-white
          transition-all
          duration-300
          "
          >
            <FaArrowRight />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
