import { motion } from "framer-motion";
import heroImg from "../../assets/Elearna - Career/herobg.webp";
// change image path according to your project

export default function InstructorHero() {
  return (
    <section
      className="relative min-h-[650px] md:min-h-[750px]  bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full min-h-[650px] md:min-h-[750px] px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-3xl text-white"
        >
          {/* Small text */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-base font-semibold tracking-[3px] mb-6"
          >
            WE ARE HIRING
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
            }}
            className="
              text-4xl 
              sm:text-4xl 
              md:text-5xl 
              lg:text-6xl 
              font-medium 
              leading-[1.1]
            "
          >
            Begin your journey as
            <br />
            an instructor
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
