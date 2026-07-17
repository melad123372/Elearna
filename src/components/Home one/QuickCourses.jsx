import React from "react";
import { FaPlus, FaMicrophone, FaVideo, FaPhone } from "react-icons/fa";

import quimg from "../../assets/Elearna - Home One/quimg.webp";
import devimg from "../../assets/Elearna - Home One/devimg.jpg";

export default function QuickCourses() {
  return (
    <section className="py-5 bg-white">
      <div
        className="
        max-w-[1400px]
        mx-auto
        px-5
      "
      >
        <div
          className="
          flex
          flex-col
          lg:flex-row
          gap-10
          justify-center
        "
        >
          {/* Left Card */}

          <div
            className="
            relative
            h-[300px]
            w-full
            lg:w-[600px]
            rounded-md
            overflow-hidden
            bg-[#edf5f7]
            flex
            items-center
            px-10
          "
          >
            <div className="z-10 max-w-[300px]">
              <h2
                className="
                text-[#102c31]
                text-3xl
                font-semibold
                leading-snug
              "
              >
                Quick access to the
                <br />
                popular courses
              </h2>

              <button
                className="
                mt-10
                bg-[#ffb800]
                text-[#102c31]
                px-12
                py-4
                rounded-md
                text-lg
                font-medium
                hover:bg-[#e9a700]
                transition
              "
              >
                View Courses
              </button>
            </div>

            <img
              src={quimg}
              alt="student"
              className="
                absolute
                right-0
                bottom-0
                h-full
                w-[60%]
                object-cover
              "
            />
          </div>

          {/* Right Card */}

          <div
            className="
            relative
            h-[300px]
            w-full
            lg:w-[600px]
            rounded-md
            overflow-hidden
            bg-[#f3f1e8]
            flex
            items-center
            px-10
          "
          >
            <div
              className="
              z-10
              max-w-[280px]
            "
            >
              <h2
                className="
                text-[#102c31]
                text-3xl
                font-semibold
                leading-snug
              "
              >
                Develop your
                <br />
                skills online!
              </h2>

              <button
                className="
                mt-10
                bg-[#102c31]
                text-white
                px-12
                py-4
                rounded-md
                text-lg
                font-medium
                hover:bg-[#193d42]
                transition
              "
              >
                Apply Now
              </button>
            </div>

            {/* Video Image */}

            <div
              className="
              absolute
              right-8
              top-5
              w-[300px]
              h-[250px]
              rounded-3xl
              overflow-hidden
            "
            >
              <img
                src={devimg}
                alt="teacher"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              {/* Video Controls */}

              <div
                className="
                absolute
                bottom-[9px]
                left-1/2
                -translate-x-1/2
                flex
                gap-3
              "
              >
                <div
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-green-500
                  flex
                  items-center
                  justify-center
                  text-white
                "
                >
                  <FaPlus />
                </div>

                <div
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-gray-500
                "
                >
                  <FaMicrophone />
                </div>

                <div
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-gray-500
                "
                >
                  <FaVideo />
                </div>

                <div
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-red-600
                  flex
                  items-center
                  justify-center
                  text-white
                "
                >
                  <FaPhone />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
