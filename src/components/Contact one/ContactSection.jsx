import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-16 text-center px-6 md:px-16 bg-white">
      {/* Small title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Details
      </motion.p>

      {/* Main title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl text-center font-semibold text-gray-900 mt-2"
      >
        Find our location
      </motion.h2>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-left"
      >
        {/* Location */}
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-gray-700" />
          <div>
            <h3 className="font-semibold text-lg">Area location</h3>
            <p className="text-gray-500 mt-1">
              410 Sandtown, California <br />
              94001, USA
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 text-gray-700" />
          <div>
            <h3 className="font-semibold text-lg">Contact details</h3>
            <p className="text-gray-500 mt-1">
              888-123-4567 <br />
              info@example.com
            </p>
          </div>
        </div>

        {/* Opening hours */}
        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 text-gray-700" />
          <div>
            <h3 className="font-semibold text-lg">Opening hours</h3>
            <p className="text-gray-500 mt-1">
              Monday-Friday <br />
              10:30 a.m - 7:00 p.m
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
