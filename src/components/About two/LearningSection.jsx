import { motion } from "framer-motion";
import heroImage from "../../assets/Elearna - About Two/heroImage.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutHero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[520px] overflow-hidden sm:min-h-[620px] lg:min-h-[795px]"
    >
      {/* Animated background */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dark overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/55"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1760px] items-center px-6 sm:min-h-[620px] sm:px-10 lg:min-h-[795px] lg:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[760px] text-white"
        >
          <motion.p
            variants={textVariants}
            className="mb-6 text-sm font-semibold uppercase tracking-wide sm:text-base lg:text-lg"
          >
            About Us
          </motion.p>

          <motion.h1
            variants={textVariants}
            className="text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl lg:text-[60px]"
          >
            You’re sincerely
            <br />
            determined to grow
          </motion.h1>
        </motion.div>
      </div>
    </motion.section>
  );
}
