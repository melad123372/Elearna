import React from "react";
import { FaCheck } from "react-icons/fa";

import giralImg from "../../assets/1- Home One imgs/WomanImageHolding.webp";
import boyImg from "../../assets/1- Home One imgs/ManImageHoldingGraph.webp";

export default function PersonalizedLearning() {
  return (
    <section className="py-16s md:py-24">
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-4
          grid
          lg:grid-cols-2
          gap-10
          lg:gap-20
          items-center
        "
      >
        {/* LEFT IMAGES */}
        <div
          className="
            relative
            w-full
            max-w-[600px]
            mx-auto
            h-[420px]
            sm:h-[500px]
            md:h-[600px]
          "
        >
          {/* Girl Image */}
          <img
            src={giralImg}
            alt="student girl"
            className="
              absolute
              top-0
              left-60
              w-[65%]
              h-[78%]
              sm:h-[82%]
              object-cover
              rounded-md
              shadow-xl
              z-10
            "
          />

          {/* Boy Image */}
          <img
            src={boyImg}
            alt="student boy"
            className="
              absolute
              bottom-0
              right-63
              w-[60%]
              h-[65%]
              sm:h-[72%]
              object-cover
              rounded-md
              shadow-xl
              z-20
            "
          />

          {/* Floating Card */}
          <div
            className="
              absolute
              top-8
              left-3
              sm:top-14
              sm:left-8
              bg-[#102b31]
              text-white
              px-4
              sm:px-7
              py-3
              sm:py-5
              rounded-md
              flex
              items-center
              gap-3
              sm:gap-5
              shadow-lg
              z-30
            "
          >
            <span
              className="
                text-3xl
                sm:text-5xl
                font-bold
                text-yellow-400
              "
            >
              50+
            </span>

            <span
              className="
                text-sm
                sm:text-xl
                font-semibold
                leading-tight
              "
            >
              Free courses
              <br />
              listed online
            </span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p
            className="
              text-sm
              font-bold
              tracking-wider
              text-[#102b31]
            "
          >
            WHAT WE OFFER
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-4xl
              font-bold
              text-[#102b31]
              leading-tight
              mt-5
            "
          >
            Personalized learning for
            <br className="hidden sm:block" />
            your ambitions
          </h2>

          <p
            className="
              text-gray-500
              text-base
              sm:text-lg
              leading-8
              mt-6
            "
          >
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>

          {/* FEATURES */}
          <div
            className="
              grid
              sm:grid-cols-2
              gap-y-5
              mt-8
            "
          >
            <div className="flex items-center gap-3">
              <FaCheck className="text-[#102b31]" />
              <span className="font-semibold text-base sm:text-lg text-[#102b31]">
                Skill-based instruction
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheck className="text-[#102b31]" />
              <span className="font-semibold text-base sm:text-lg text-[#102b31]">
                Analytics and insights
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheck className="text-[#102b31]" />
              <span className="font-semibold text-base sm:text-lg text-[#102b31]">
                Global certification
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheck className="text-[#102b31]" />
              <span className="font-semibold text-base sm:text-lg text-[#102b31]">
                Customizable courses
              </span>
            </div>
          </div>

          {/* CTA BOX */}
          <div
            className="
              bg-[#eef7fa]
              mt-10
              p-5
              sm:p-8
              rounded-md
              flex
              flex-col
              md:flex-row
              justify-between
              items-start
              md:items-center
              gap-6
            "
          >
            <div>
              <h3
                className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-[#102b31]
                "
              >
                Still have questions?
              </h3>

              <p
                className="
                  text-gray-500
                  mt-4
                  text-base
                  sm:text-lg
                "
              >
                Lorem ipsum dolor sit amet conse
                <br className="hidden sm:block" />
                ipsum blandit etiam aliquam.
              </p>
            </div>

            <button
              className="
                bg-[#102b31]
                text-white
                px-8
                py-4
                rounded-md
                font-semibold
                text-lg
                w-full
                md:w-auto
              "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
