import { motion } from "framer-motion";
import heroBg from "../../assets/5- Pricing One/PricingOneHero.webp";
const PricingHero = () => {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[85vh] lg:h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="uppercase tracking-[4px] text-white text-sm md:text-base font-semibold mb-5"
          >
            Pricing
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white font-medium leading-tight
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Flexible pricing plan <br />
            for every one
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
