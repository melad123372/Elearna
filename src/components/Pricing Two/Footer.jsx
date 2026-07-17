import React from "react";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const links = [
    {
      title: "Quick links",
      items: ["Home", "Events", "Career", "Instructor"],
    },

    {
      title: "Popular courses",
      items: ["Finance", "Management", "Design", "Web development"],
    },

    {
      title: "Company",
      items: [
        "About",
        "Courses",
        "Blog",
        "Contact",
        "License",
        "Pricing",
        "404",
      ],
    },

    {
      title: "CMS",
      items: ["Course details", "Instructor details", "Blog details"],
    },
  ];

  return (
    <footer
      className="
bg-[#08252b]
text-white
relative
overflow-hidden
"
    >
      {/* CTA BOX */}

      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{
          once: true,
        }}
        className="
bg-[#ffb800]
text-[#09262d]
max-w-[1625px]
mx-auto
rounded-md
py-14
px-8
md:px-20
flex
flex-col
lg:flex-row
items-center
justify-between
gap-10
relative
top-[-1px]
"
      >
        <h1
          className="
text-3xl
md:text-4xl
font-bold
max-w-xl
"
        >
          Are you ready to start
          <br />
          your journey?
        </h1>

        <div
          className="
flex
flex-col
sm:flex-row
gap-5
"
        >
          <button
            className="
bg-[#09262d]
text-white
px-10
py-3
rounded-md
font-semibold
text-lg
hover:scale-105
transition
"
          >
            Browse Courses
          </button>

          <button
            className="
border
border-[#09262d]
px-10
py-3
rounded-md
font-semibold
text-lg
hover:bg-[#09262d]
hover:text-white
transition
"
          >
            Became A Teacher
          </button>
        </div>
      </motion.div>

      {/* FOOTER CONTENT */}

      <div
        className="
max-w-[1625px]
mx-auto
px-6
py-20
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-5
gap-12
"
      >
        {/* LOGO */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h2
            className="
text-4xl
font-bold
text-white
"
          >
            <span className="text-[#ffb800]">e</span>
            learna
          </h2>

          <p
            className="
mt-8
text-gray-400
leading-9
text-lg
"
          >
            Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
            eget amet ut tristique cras.
          </p>

          <div
            className="
flex
gap-4
mt-8
"
          >
            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaTwitter />
            </div>

            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaLinkedinIn />
            </div>
          </div>
        </motion.div>

        {/* LINKS */}

        {links.map((section, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3
              className="
text-xl
font-bold
mb-8
"
            >
              {section.title}
            </h3>

            <ul
              className="
space-y-5
text-gray-400
text-lg
"
            >
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="
hover:text-[#ffb800]
cursor-pointer
transition
"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM */}

      <div
        className="
max-w-[1625px]
mx-auto
border-t
border-gray-600
py-6
px-6
flex
flex-col
md:flex-row
justify-between
gap-5
text-gray-400
"
      >
        <p>
          DESIGN BY
          <span className="text-white font-semibold">RADIANT TEMPLATES</span>
        </p>

        <p>
          POWERED BY
          <span className="text-white font-semibold">WEBFLOW</span>
        </p>
      </div>
    </footer>
  );
}
