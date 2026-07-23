import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/15- Blog Two Imgs/Footer-logo.svg";
import footerImg from "../../assets/15- Blog Two Imgs/footer-bg.webp";
export default function Footer() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <footer className="bg-[#06252b] text-white overflow-hidden">
      {/* Top Banner */}
      <div
        className="
        relative
        h-[430px]
        bg-cover
        bg-center
        flex
        items-center
        "
        style={{
          backgroundImage: `url(${footerImg})`,
        }}
      >
        {/* Overlay */}
        <div
          className="
        absolute
        inset-0
        bg-black/50
        "
        ></div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
        relative
        z-10
        w-full
        max-w-7xl
        mx-auto
        px-5
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-10
        "
        >
          <h2
            className="
          text-4xl
          md:text-5xl
          font-bold
          max-w-xl
          leading-tight
          "
          >
            Are you ready to start
            <br />
            your journey?
          </h2>

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
            px-12
            py-5
            border
            border-white/60
            rounded-md
            text-lg
            hover:bg-white
            hover:text-black
            transition
            duration-300
            "
            >
              Browse Courses
            </button>

            <button
              className="
            px-12
            py-5
            bg-yellow-400
            text-black
            rounded-md
            text-lg
            hover:bg-yellow-300
            transition
            duration-300
            "
            >
              Become An Instructor
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer Content */}

      <div
        className="
      max-w-7xl
      mx-auto
      px-5
      py-20
      "
      >
        <div
          className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-5
        gap-12
        "
        >
          {/* Logo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img src={logo} className="w-32 mb-8" />

            <p
              className="
            text-gray-400
            leading-8
            "
            >
              Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
              eget amet ut tristique cras.
            </p>
          </motion.div>

          {/* Columns */}

          {[
            {
              title: "Popular courses",
              links: ["Finance", "Management", "Design", "Web development"],
            },

            {
              title: "Company",
              links: [
                "About",
                "Courses",
                "Blog",
                "Contact",
                "License",
                "Pricing",
              ],
            },

            {
              title: "CMS",
              links: ["Course details", "Instructor details", "Blog details"],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3
                className="
              text-xl
              font-semibold
              mb-8
              "
              >
                {item.title}
              </h3>

              <ul className="space-y-5">
                {item.links.map((link, i) => (
                  <li
                    key={i}
                    className="
                text-gray-400
                hover:text-white
                cursor-pointer
                transition
                "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3
              className="
            text-xl
            font-semibold
            mb-8
            "
            >
              Need help?
            </h3>

            <p className="text-gray-400 mb-3">Call us</p>

            <h4 className="text-xl font-bold mb-8">(888) 123 4567</h4>

            <p className="text-gray-400 mb-3">Need support?</p>

            <h4 className="text-xl font-bold">info@example.com</h4>
          </motion.div>
        </div>

        {/* Bottom */}

        <div
          className="
        border-t
        border-gray-500/50
        mt-16
        pt-8
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
            <span className="text-white ml-2">RADIANT TEMPLATES</span>
          </p>

          <p>
            POWERED BY
            <span className="text-white ml-2">WEBFLOW</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
