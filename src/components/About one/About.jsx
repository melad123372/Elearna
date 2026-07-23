import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdAutoGraph } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";

import expimg3 from "../../assets/2- About One imgs/EmployImages.webp";

export default function AboutOne() {
  const stats = [
    {
      number: "1.5K",
      title: "FINISH SEASONS",
    },
    {
      number: "7.8K",
      title: "ENROLLED",
    },
    {
      number: "100%",
      title: "JOB PLACEMENT",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO */}

      <section
        className="
bg-[#09262b]
min-h-[450px]
flex
items-center
justify-center
px-5
"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white pt-20"
        >
          <p
            className="
text-sm
tracking-widest
mb-5
"
          >
            ABOUT US
          </p>

          <h1
            className="
text-4xl
md:text-6xl
font-semibold
max-w-3xl
leading-tight
"
          >
            You’re sincerely
            <br />
            determined to grow
          </h1>
        </motion.div>
      </section>

      {/* STORY SECTION */}

      <section
        className="
max-w-7xl
mx-auto
px-5
py-20

grid
lg:grid-cols-2
gap-12
items-center

"
      >
        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
relative
"
        >
          <img
            src={expimg3}
            className="
w-full
rounded-md
shadow-xl
"
          />

          {/* TRUST CARD */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
absolute
bottom-[-50px]
right-5

bg-white
rounded-3xl
shadow-xl

px-8
py-6

text-center

"
          >
            <p className="text-gray-500">Trusted By</p>

            <h3
              className="
font-semibold
text-xl
text-[#09262b]
"
            >
              15000+ enrolled students
            </h3>

            <div className="flex justify-center mt-4">
              {[1, 2, 3, 4].map((i) => (
                <FaRegCircleUser
                  key={i}
                  className="
text-3xl
text-gray-400
"
                />
              ))}
            </div>

            <div
              className="
flex
items-center
gap-2
justify-center
mt-3
"
            >
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <span>4.94 (625)</span>
            </div>
          </motion.div>
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p
            className="
text-[#09262b]
font-semibold
mb-5
"
          >
            OUR STORY
          </p>

          <h2
            className="
text-4xl
md:text-5xl
font-bold
text-[#09262b]
leading-tight
"
          >
            Limitless learning and
            <br />
            get more possibilities
          </h2>

          <p
            className="
text-gray-500
mt-6
leading-8
"
          >
            Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in
            maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula
            eget malesuada ullamcorper nibh.
          </p>

          {/* STATS */}

          <div
            className="
grid
grid-cols-3
mt-10
divide-x

"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.2,
                }}
                className="
text-center
"
              >
                <h3
                  className="
text-4xl
md:text-5xl
font-bold
text-[#09262b]
"
                >
                  {item.number}
                </h3>

                <p
                  className="
text-xs
md:text-sm
mt-2
text-gray-500
"
                >
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}

      <section
        className="
max-w-7xl
mx-auto
px-5
pb-20
"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#09262b] rounded-md grid md:grid-cols-3 text-white py-12 px-8 gap-10"
        >
          <div className="flex gap-5 items-center py-5">
            <IoBookOutline className="text-5xl" />

            <div>
              <h3 className="text-xl font-bold">150+ online courses</h3>

              <p className="text-gray-400">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <FaRegCircleUser className="text-5xl" />

            <div>
              <h3 className="text-xl font-bold">Personalized learning</h3>

              <p className="text-gray-400">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <MdAutoGraph className="text-5xl" />

            <div>
              <h3 className="text-xl font-bold">Lifetime update</h3>

              <p className="text-gray-400">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
