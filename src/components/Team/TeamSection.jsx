import { motion } from "framer-motion";

import img1 from "../../assets/8- Team imgs/TeamMember-1.webp";
import img2 from "../../assets/8- Team imgs/TeamMember-2.webp";
import img3 from "../../assets/8- Team imgs/TeamMember-3.webp";
import img4 from "../../assets/8- Team imgs/TeamMember-4.webp";
import img5 from "../../assets/8- Team imgs/TeamMember-5.webp";
import img6 from "../../assets/8- Team imgs/TeamMember-6.webp";
import img7 from "../../assets/8- Team imgs/TeamMember-7.webp";
import img8 from "../../assets/8- Team imgs/TeamMember-8.webp";

const teamMembers = [
  { id: 1, name: "Leslie Upton", role: "INSTRUCTOR", image: img1 },
  { id: 2, name: "Darnell Kuphal", role: "INSTRUCTOR", image: img2 },
  { id: 3, name: "Steven Roob", role: "INSTRUCTOR", image: img3 },
  { id: 4, name: "Wanda Abshire", role: "INSTRUCTOR", image: img4 },
  { id: 5, name: "Lee Schmitt", role: "INSTRUCTOR", image: img5 },
  { id: 6, name: "Jasmine Konopelski", role: "INSTRUCTOR", image: img6 },
  { id: 7, name: "Tonya Flatley", role: "INSTRUCTOR", image: img7 },
  { id: 8, name: "Colin Fay", role: "INSTRUCTOR", image: img8 },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[4px] text-sm text-gray-500">
            Contact Us
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Know our expert team agents,
            <br className="hidden md:block" />
            they solve your questions
          </h2>

          <p className="mt-5 text-gray-500 text-base sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
            nam id.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group text-center"
            >
              <div className="overflow-hidden rounded-[4px] bg-[#E7EBEB]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                {member.name}
              </h3>

              <p className="mt-2 text-gray-500 tracking-widest text-sm">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
