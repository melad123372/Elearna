import { motion } from "framer-motion";
import bgimg from "../../assets/Elearna - Team/bgimg.webp";
export default function ExpertsHero() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={bgimg}
        alt="Experts"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="text-white font-bold
              text-5xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              leading-tight"
          >
            Our experts
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
