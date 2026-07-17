import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import image1 from "../../assets/Elearna - Career/image1.webp";
import image2 from "../../assets/Elearna - Career/image2.webp";

export default function WhyWeAreSection() {
  const features = [
    {
      title: "Full network visibility worldwide",
      text: "Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Supported the use of fiber optic cable",
      text: "Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center min-h-[550px] w-full"
          >
            {/* Main Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src={image1}
              alt="main"
              className="
                w-[70%]
                md:w-[80%]
                h-[350px]
                md:h-[550px]
                object-cover
                rounded-md
              "
            />

            {/* Small Image */}
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              src={image2}
              alt="small"
              className="
                absolute
                right-[-20px]
                md:right-[-50px]
                bottom-[-30px]
                w-[38%]
                md:w-[40%]
                h-[220px]
                md:h-[430px]
                object-cover
                rounded-md
              "
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold tracking-[3px] text-gray-800">
              WHY WE ARE
            </p>

            <h2
              className="
                mt-5
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
                text-[#10272b]
              "
            >
              We help connectivity
              <br />
              across the world
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  className="flex gap-5"
                >
                  <CheckCircle
                    className="mt-1 text-gray-800 shrink-0"
                    size={28}
                  />

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#10272b]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-gray-500 leading-7">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
