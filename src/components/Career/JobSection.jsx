import { motion } from "framer-motion";

const jobs = [
  {
    title: "Software Development Instructor",
    posts: 50,
    salary: "$23K - $35K",
    experience: "2 Years",
  },
  {
    title: "Machine Learning Educator",
    posts: 35,
    salary: "$20K - $35K",
    experience: "2 Years",
  },
  {
    title: "Blockchain Technology Instructor",
    posts: 47,
    salary: "$26K - $40K",
    experience: "3 Years",
  },
  {
    title: "Digital Design & UX Instructor",
    posts: 50,
    salary: "$23K - $35K",
    experience: "2 Years",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
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

export default function JobSection() {
  return (
    <section className="bg-[#edf5f8] py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-gray-500 text-sm">
            Job Opening
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#10252d] mt-3">
            Be a part of our faculty
          </h2>
        </div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-[#10252d]">{job.title}</h3>

              <p className="text-gray-500 uppercase text-sm mt-3">
                {job.posts} Posts Available
              </p>

              <p className="text-gray-400 text-sm mt-1">
                4367 Lula Shores, Derekton 48438
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-md">
                  {job.salary}
                </div>

                <button className="bg-[#0f2530] hover:bg-[#183744] text-white px-10 py-4 rounded-md font-medium transition">
                  Apply Now
                </button>
              </div>

              <ul className="mt-8 space-y-3 text-gray-600">
                <li>
                  • Job Description : Lorem ipsum dolor sit amet consectetur.
                </li>
                <li>• Job Type : Full-time, Permanent</li>
                <li>• Experience : {job.experience}</li>
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
