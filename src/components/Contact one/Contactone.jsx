import React from "react";
import { motion } from "framer-motion";
import herobg from "../../assets/10- Contact One imgs/ContactUsOne.webp";

const ContactPage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-[260px] sm:h-[320px] md:h-[380px] w-full overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${herobg})`,
        }}
      >
        {/* Overlay - Only over the hero image */}
        <div className="absolute inset-0 bg-black/70" />
      </motion.section>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:px-8 md:px-12 lg:grid-cols-2 lg:gap-14 lg:py-20"
      >
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white">
            Contact us
          </p>

          <h1 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Are you interested in online learning? Contact us
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
            nam id purus suspendisse. Imperdiet nam lorem tempus in. Tristique
            nullam risus semper habitant urna nisl nam elit at.
          </p>

          <div className="mt-8 border-l-4 border-gray-900 pl-4">
            <p className="font-semibold text-gray-900">Brayden Beckham</p>
            <p className="mt-1 text-sm uppercase tracking-wider text-gray-500">
              Director
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.10)] sm:p-8 md:p-10"
        >
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Fill out for contact
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur libero donec.
          </p>

          <form className="mt-7 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email*"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />

            <textarea
              name="message"
              placeholder="Your message*"
              rows={5}
              required
              className="w-full resize-none rounded-md border border-gray-300 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />

            <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-gray-600">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 cursor-pointer accent-gray-900"
              />

              <span>Save information for the next time comment.</span>
            </label>

            <button
              type="submit"
              className="w-full rounded-md bg-gray-900 px-6 py-3.5 font-medium text-white transition duration-300 hover:bg-gray-700 active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default ContactPage;
