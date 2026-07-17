import { motion } from "framer-motion";
import eventHero from "../../assets/Elearna - Events/eventHero.webp"; // Change to your image

const EventHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={eventHero}
        alt="Event"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Small Heading */}
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="uppercase tracking-widest text-white text-sm sm:text-base md:text-lg font-semibold"
            >
              Enjoy With
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 text-white font-medium leading-tight
              text-4xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Great upcoming events
              <br />
              for our institute
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
