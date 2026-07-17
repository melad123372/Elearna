import { motion } from "framer-motion";
import storyImageOne from "../../assets/Elearna - About Two/storyImageOne.webp";
import storyImageTwo from "../../assets/Elearna - About Two/storyImageTwo.webp";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

export default function OurStory() {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1800px] items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Images */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto min-h-[520px] w-full max-w-[760px] sm:min-h-[650px] lg:min-h-[760px]"
        >
          {/* Top image */}
          <motion.div
            variants={fadeUp}
            className="absolute left-0 top-0 w-[76%] overflow-hidden"
          >
            <motion.img
              src={storyImageOne}
              alt="Students learning together"
              className="h-[230px] w-full object-cover sm:h-[330px] lg:h-[340px]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease }}
            />
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease,
            }}
            className="absolute left-[70%] top-[2%] flex items-start text-[#09272b] sm:left-[71%] lg:left-[72%]"
          >
            {/* Vertical label */}
            <div className="relative h-[190px] w-[42px] sm:h-[225px] sm:w-[50px]">
              <motion.span
                initial={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  rotate: 90,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                  ease,
                }}
                className="absolute left-1/2 top-0 origin-top-left -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase leading-none tracking-[0.03em] sm:text-xs lg:text-sm"
              ></motion.span>
            </div>
          </motion.div>

          {/* Bottom image */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease,
            }}
            className="absolute bottom-0 right-0 w-[73%] overflow-hidden"
          >
            <motion.img
              src={storyImageTwo}
              alt="Student attending an online course"
              className="h-[390px] w-full object-cover sm:h-[500px] lg:h-[550px]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease }}
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            staggerChildren: 0.15,
          }}
          className="mx-auto max-w-[680px] lg:mx-0"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 text-sm font-semibold uppercase tracking-wide text-[#09272b] sm:text-base"
          >
            Our Story
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="max-w-[700px] text-4xl font-semibold leading-[1.13] text-[#09272b] sm:text-5xl lg:text-[50px]"
          >
            Limitless learning and
            <br className="hidden sm:block" />
            get more possibilities
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-7 space-y-6 text-base leading-8 text-neutral-500 sm:text-lg sm:leading-9"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in
              maecenas scelerisque imperdiet nec. Pellentesque mauris amet
              ligula eget malesuada ullamcorper nibh. Etiam suspendisse pretium
              est elementum elementum rhoncus.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in
              maecenas scelerisque imperdiet nec. Pellentesque mauris amet
              ligula eget malesuada ullamcorper nibh.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
