import React from "react";
import { FiArrowRight } from "react-icons/fi";

import img1 from "../../assets/9- Blog One imgs/BlogThumbnail-1.webp";
import img2 from "../../assets/9- Blog One imgs/BlogThumbnail-2.webp";
import img3 from "../../assets/9- Blog One imgs/BlogThumbnail-3.webp";
import img4 from "../../assets/9- Blog One imgs/BlogThumbnail-4.webp";
import img5 from "../../assets/9- Blog One imgs/BlogThumbnail-5.webp";
import img6 from "../../assets/9- Blog One imgs/BlogThumbnail-6.webp";
const blogs = [
  {
    image: img1,
    category: "CAREER",
    title: "Improve knowledge retention with visual learning",
    date: "October 4, 2024",
  },
  {
    image: img2,
    category: "DEVELOPMENT",
    title: "Master online learning with proven strategies",
    date: "October 4, 2024",
  },
  {
    image: img3,
    category: "TEACHING",
    title: "How to enhance your learning experience today",
    date: "October 3, 2024",
  },
  {
    image: img4,
    category: "CAREER",
    title: "The evolution of teaching tools in the 21st century",
    date: "September 17, 2024",
  },
  {
    image: img5,
    category: "DEVELOPMENT",
    title: "The role of parental involvement in academic achievement",
    date: "September 16, 2024",
  },
  {
    image: img6,
    category: "TEACHING",
    title: "The role of technology in modern classrooms",
    date: "September 14, 2024",
  },
];

const BlogCards = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="
            border border-gray-200 
            rounded-sm overflow-hidden
            bg-white
            hover:shadow-lg
            transition duration-300
            "
          >
            {/* Image */}
            <img
              src={blog.image}
              alt=""
              className="
              w-full 
              h-[260px]
              object-cover
              "
            />

            {/* Content */}
            <div className="p-8">
              <p
                className="
              text-[13px]
              font-semibold
              tracking-wide
              text-gray-800
              mb-4
              "
              >
                {blog.category}
              </p>

              <h2
                className="
              text-xl
              font-semibold
              leading-7
              text-[#102027]
              mb-8
              "
              >
                {blog.title}
              </h2>

              <p
                className="
              text-gray-500
              text-base
              "
              >
                {blog.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}

      <div
        className="
      flex 
      justify-center 
      items-center 
      gap-3 
      mt-8
      text-gray-900
      font-medium
      "
      >
        <span>1 / 2</span>

        <button
          className="
        flex
        items-center
        gap-2
        hover:text-gray-500
        transition
        "
        >
          Next
          <FiArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default BlogCards;
