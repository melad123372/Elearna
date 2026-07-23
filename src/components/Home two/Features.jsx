import React from "react";
import { motion } from "framer-motion";

import leimg from "../../assets/11- Home Two Imgs/WomanImage.webp";
import Timg7 from "../../assets/11- Home Two Imgs/Videoposter.jpg";

const stats = [
  { value: "1.5K", label: "FINISH SESSIONS" },
  { value: "7.8K", label: "ENROLLED" },
  { value: "100%", label: "JOB PLACEMENT" },
];

const WhyWeAreSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[4px] text-gray-500">
            Why we are
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            World-class learning from anywhere
          </h2>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-end justify-center gap-5"
          >
            {/* SMALL IMAGE */}
            <motion.img
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src={Timg7}
              alt="Learning"
              className="
                w-32 h-44
                md:w-48 md:h-64
                mb-20
                object-cover rounded-2xl
              "
            />

            {/* BIG IMAGE */}
            <motion.img
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              src={leimg}
              alt="Learning"
              className="
                w-56 h-72
                md:w-80 md:h-[450px]
                object-cover rounded-2xl
              "
            />
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-7">
            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-gray-500 leading-relaxed text-base md:text-lg"
            >
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. Vitae diam dolor lacus amet integer ut.
            </motion.p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className="text-center"
                >
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
                    {item.value}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-500 mt-2">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA BOX */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                bg-blue-50 
                p-6 md:p-8
                rounded-xl
                flex flex-col md:flex-row
                items-start md:items-center
                justify-between
                gap-5
              "
            >
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">
                  Still have questions?
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              <button
                className="
                  px-6 py-3
                  bg-gray-900
                  text-white
                  rounded-lg
                  hover:bg-gray-800
                  transition
                "
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreSection;
