import React from "react";
import {
  FaPencilRuler,
  FaChartLine,
  FaCode,
  FaBullhorn,
  FaLaptopCode,
  FaPenNib,
} from "react-icons/fa";

const categories = [
  {
    title: "Creative web design",
    courses: "8 Courses",
    icon: FaPencilRuler,
  },
  {
    title: "Finance accounting",
    courses: "10 Courses",
    icon: FaChartLine,
  },
  {
    title: "IT and software",
    courses: "5 Courses",
    icon: FaCode,
  },
  {
    title: "Digital marketing",
    courses: "4 Courses",
    icon: FaBullhorn,
  },
  {
    title: "Web development",
    courses: "8 Courses",
    icon: FaLaptopCode,
  },
  {
    title: "Content writing",
    courses: "3 Courses",
    icon: FaPenNib,
  },
];

export default function TopCategories() {
  return (
    <section className="py-16 md:py-20 bg-white">
      {/* Heading */}
      <div className="text-center px-4">
        <p className="text-[#102c31] text-sm md:text-base font-semibold uppercase tracking-wider">
          Top Categories
        </p>

        <h2
          className="
          mt-4
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-semibold
          text-[#102c31]
        "
        >
          Discover leading categories to
          <br className="hidden md:block" />
          boost your skills
        </h2>
      </div>

      {/* Cards */}
      <div
        className="
        max-w-[1850px]
        mx-auto
        px-5
        mt-12
      "
      >
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-5
        "
        >
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  h-[230px]
                  border
                  border-gray-200
                  rounded-md
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-lg
                "
              >
                {/* Icon */}
                <div
                  className="
                  w-15
                  h-15
                  rounded-full
                  bg-[#edf5f7]
                  flex
                  items-center
                  justify-center
                  mb-6
                "
                >
                  <Icon className="text-[#102c31]" size={42} />
                </div>

                {/* Title */}
                <h3
                  className="
                  text-xl
                  font-semibold
                  text-[#102c31]
                  leading-7
                  max-w-[170px]
                "
                >
                  {item.title}
                </h3>

                {/* Course */}
                <p
                  className="
                  mt-4
                  text-gray-400
                  text-lg
                "
                >
                  {item.courses}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
