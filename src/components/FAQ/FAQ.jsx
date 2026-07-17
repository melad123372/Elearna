import { motion } from "framer-motion";
import bgimg from "../../assets/Elearna - FAQ/bgimg.webp"; // Replace with your image

export default function FaqHero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={bgimg}
        alt="FAQ"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="mt-6 text-white font-medium leading-tight
                       text-4xl
                       sm:text-5xl
                       md:text-6xl
                       lg:text-6xl"
          >
            Frequently asked questions
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            className="mt-8 max-w-3xl mx-auto
                       text-gray-200
                       text-base
                       md:text-xl
                       leading-8"
          >
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
            nam id.
          </motion.p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
