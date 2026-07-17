import { useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const courses = [
  {
    id: 1,
    category: "MANAGEMENT",
    title: "Crisis management and problem-solving strategies",
    image: "https://images.unsplash.com/photo-1573496773905-f5b17e717f05?w=600",
    rating: 4.88,
    reviews: 210,
    price: "Free",
  },
  {
    id: 2,
    category: "DESIGN",
    title: "Advanced photoshop techniques for designers",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    rating: 5,
    reviews: "1.2K",
    price: "Free",
  },
  {
    id: 3,
    category: "FINANCE",
    title: "Understanding corporate finance and investments",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
    rating: 4.88,
    reviews: 210,
    price: "Free",
  },
  {
    id: 4,
    category: "DEVELOPMENT",
    title: "Full Stack Web Development with MERN",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    rating: 5,
    reviews: 985,
    price: "$72",
  },
  {
    id: 5,
    category: "DEVELOPMENT",
    title: "Building SPA using Angular",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600",
    rating: 5,
    reviews: 328,
    price: "$0",
  },
  {
    id: 6,
    category: "DATABASE",
    title: "Database Integration with MongoDB",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
    rating: 4.49,
    reviews: 756,
    price: "$59",
  },
  {
    id: 7,
    category: "MANAGEMENT",
    title: "Risk Management and Business Continuity",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
    rating: 4.88,
    reviews: 210,
    price: "$49",
  },
  {
    id: 8,
    category: "FINANCE",
    title: "Complete Guide to Personal Finance",
    image: "https://images.unsplash.com/photo-1522202222206-b7500f87f4d8?w=600",
    rating: 4.88,
    reviews: 210,
    price: "$99",
  },
  {
    id: 9,
    category: "MARKETING",
    title: "Digital Marketing Masterclass",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
    rating: 4.92,
    reviews: 500,
    price: "$39",
  },
  {
    id: 10,
    category: "UI/UX",
    title: "Figma UI Design Bootcamp",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    rating: 4.95,
    reviews: 620,
    price: "$45",
  },
  {
    id: 11,
    category: "BUSINESS",
    title: "Startup Business Fundamentals",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600",
    rating: 4.98,
    reviews: 400,
    price: "$55",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Courses() {
  const [page, setPage] = useState(1);

  const perPage = 8;

  const totalPages = Math.ceil(courses.length / perPage);

  const start = (page - 1) * perPage;

  const currentCourses = courses.slice(start, start + perPage);

  return (
    <section className="bg-slate-100 py-20 ">
      <div className="max-w-7xl mx-auto px-5">
        <p className="uppercase tracking-[4px] text-gray-500 text-sm">
          ONLINE LEARNING
        </p>

        <h2 className="text-5xl font-bold mt-3 mb-14">All online courses</h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{
              opacity: 0,
              y: 30,
            }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {currentCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="bg-white rounded-[3px] overflow-hidden shadow-md hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={course.image}
                    alt={course.title}
                    className="w-full h-50 object-cover"
                  />

                  <div className="absolute top-5 right-5 h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    {course.price}
                  </div>
                </div>

                <div className="p-5">
                  <p className="uppercase text-xs tracking-widest text-gray-500">
                    {course.category}
                  </p>

                  <h3 className="text-2xl font-semibold mt-3 leading-8 min-h-[80px]">
                    {course.title}
                  </h3>

                  <div className="flex items-center mt-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}

                    <span className="ml-2 text-sm text-gray-500">
                      {course.rating} ({course.reviews})
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-14">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              whileHover={{
                scale: 1.15,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setPage(index + 1)}
              className={`w-11 h-11 rounded-full transition-all font-medium ${
                page === index + 1
                  ? "bg-yellow-400 text-black"
                  : "bg-white border border-gray-300"
              }`}
            >
              {index + 1}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
