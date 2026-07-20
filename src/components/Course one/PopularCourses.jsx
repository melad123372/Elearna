import React, { useRef, useState } from "react";
import { FaBookOpen, FaUserGraduate, FaStar } from "react-icons/fa";

import cours1 from "../../assets/Elearna - Course One/cours1.webp";
import cours2 from "../../assets/Elearna - Course One/cours2.webp";
import cours3 from "../../assets/Elearna - Course One/cours3.webp";
import cours4 from "../../assets/Elearna - Course One/cours4.webp";
import cours5 from "../../assets/Elearna - Course One/cours5.webp";
import cours6 from "../../assets/Elearna - Course One/cours6.webp";
import cours7 from "../../assets/Elearna - Course One/cours7.webp";
import cours8 from "../../assets/Elearna - Course One/cours8.webp";
import cours9 from "../../assets/Elearna - Course One/cours9.webp";
import cours10 from "../../assets/Elearna - Course One/cours10.webp";
import cours11 from "../../assets/Elearna - Course One/cours11.webp";
import cours12 from "../../assets/Elearna - Course One/cours12.webp";
const courses = [
  {
    category: "FINANCE",
    title: "Understanding corporate finance and investments",
    rating: "4.88",
    reviews: "210",
    lessons: "10 Lessons",
    enrolled: "8k Enrolled",
    price: "Free",
    image: cours1,
  },
  {
    category: "DESIGN",
    title: "Advanced photoshop techniques for designers",
    rating: "5.00",
    reviews: "1.2K",
    lessons: "8 Lessons",
    enrolled: "25k Enrolled",
    price: "Free",
    image: cours2,
  },
  {
    category: "MANAGEMENT",
    title: "Crisis management and problem-solving strategies",
    rating: "4.88",
    reviews: "210",
    lessons: "6 Lessons",
    enrolled: "8k Enrolled",
    price: "Free",
    image: cours3,
  },
  {
    category: "DEVELOPMENT",
    title: "Building single page applications with angular",
    rating: "5.00",
    reviews: "328",
    lessons: "6 Lessons",
    enrolled: "12k Enrolled",
    price: "Free",
    image: cours4,
  },
  {
    category: "DEVELOPMENT",
    title: "Database integration with MongoDB",
    rating: "4.49",
    reviews: "756",
    lessons: "10 Lessons",
    enrolled: "7k Enrolled",
    price: "$59",
    image: cours5,
  },
  {
    category: "DEVELOPMENT",
    title: "Full-stack development with the MERN stack",
    rating: "5.00",
    reviews: "985",
    lessons: "12 Lessons",
    enrolled: "22k Enrolled",
    price: "$72",
    image: cours6,
  },
  {
    category: "BUSINESS",
    title: "Business planning and startup strategy",
    rating: "4.90",
    reviews: "540",
    lessons: "9 Lessons",
    enrolled: "10k Enrolled",
    price: "Free",
    image: cours7,
  },
  {
    category: "MARKETING",
    title: "Digital marketing and social media growth",
    rating: "4.78",
    reviews: "890",
    lessons: "11 Lessons",
    enrolled: "18k Enrolled",
    price: "$45",
    image: cours8,
  },
  {
    category: "DESIGN",
    title: "UI UX design principles for modern apps",
    rating: "5.00",
    reviews: "1.5K",
    lessons: "14 Lessons",
    enrolled: "30k Enrolled",
    price: "$65",
    image: cours9,
  },
  {
    category: "DATA",
    title: "Data analysis with practical dashboards",
    rating: "4.85",
    reviews: "620",
    lessons: "10 Lessons",
    enrolled: "14k Enrolled",
    price: "$52",
    image: cours10,
  },
  {
    category: "PHOTOGRAPHY",
    title: "Professional photography for beginners",
    rating: "4.92",
    reviews: "430",
    lessons: "7 Lessons",
    enrolled: "9k Enrolled",
    price: "Free",
    image: cours11,
  },
  {
    category: "LANGUAGE",
    title: "English speaking skills for daily life",
    rating: "4.95",
    reviews: "980",
    lessons: "15 Lessons",
    enrolled: "35k Enrolled",
    price: "$39",
    image: cours12,
  },
];

const PopularCourses = () => {
  const [activePage, setActivePage] = useState(1);
  const sectionRef = useRef(null);

  const coursesPerPage = 6;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const startIndex = (activePage - 1) * coursesPerPage;
  const visibleCourses = courses.slice(startIndex, startIndex + coursesPerPage);

  const handlePageChange = (page) => {
    setActivePage(page);

    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section ref={sectionRef} className="bg-[#eef7f8] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 lg:mb-14">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[#183136]">
            Online Learning
          </p>

          <h2 className="text-4xl font-extrabold text-[#102f35] sm:text-5xl">
            Popular courses
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((course) => (
            <div
              key={course.title}
              className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden sm:h-60">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute bottom-1 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 text-lg font-semibold text-white shadow-lg">
                  {course.price}
                </div>
              </div>

              <div className="px-7 pb-0 pt-10">
                <p className="mb-5 text-sm font-extrabold uppercase text-[#183136]">
                  {course.category}
                </p>

                <h3 className="mb-6 text-2xl font-bold leading-snug text-[#102f35]">
                  {course.title}
                </h3>

                <div className="mb-7 flex items-center gap-2">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="text-sm text-gray-500">
                    {course.rating} ({course.reviews})
                  </p>
                </div>
              </div>

              <div className="relative h-[72px] overflow-hidden">
                <div className="mx-7 border-t border-gray-200" />

                <div className="grid grid-cols-2 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                  <div className="flex items-center justify-center gap-3 py-5 text-[#183136]">
                    <FaBookOpen className="text-lg" />
                    <span className="font-semibold">{course.lessons}</span>
                  </div>

                  <div className="flex items-center justify-center gap-3 border-l border-gray-200 py-5 text-[#183136]">
                    <FaUserGraduate className="text-lg" />
                    <span className="font-semibold">{course.enrolled}</span>
                  </div>
                </div>

                <div className="absolute inset-0 flex translate-y-full items-center justify-center transition-all duration-300 group-hover:translate-y-0">
                  <button className="w-[320px] rounded-md bg-yellow-400 py-3 font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-500">
                    Course Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold transition duration-300 ${
                  activePage === page
                    ? "bg-yellow-400 text-[#102f35]"
                    : "bg-white text-gray-500 hover:bg-yellow-400 hover:text-[#102f35]"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
