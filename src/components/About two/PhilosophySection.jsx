// src/components/AboutTwo/PhilosophySection.jsx

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import leimg1 from "../../assets/12- About Two imgs/CategoryCardsImage-1.webp";
import leimg2 from "../../assets/12- About Two imgs/CategoryCardsImage-2.webp";
import leimg3 from "../../assets/12- About Two imgs/CategoryCardsImage-3.webp";
import leimg4 from "../../assets/12- About Two imgs/CategoryCardsImage-4.webp";

const courses = [
  {
    id: 1,
    number: "01",
    title: "Technology",
    description:
      "Explore practical technology courses designed for modern digital careers.",
    image: leimg1,
    href: "#technology",
  },
  {
    id: 2,
    number: "02",
    title: "Education",
    description:
      "Build essential teaching and learning skills with flexible online courses.",
    image: leimg2,
    href: "#education",
  },
  {
    id: 3,
    number: "03",
    title: "Management",
    description:
      "Develop leadership, organization, and strategic decision-making skills.",
    image: leimg3,
    href: "#management",
  },
  {
    id: 4,
    number: "04",
    title: "Business",
    description:
      "Learn practical business principles for growth, innovation, and success.",
    image: leimg4,
    href: "#business",
  },
];

const easing = [0.22, 1, 0.36, 1];

const sectionHeaderVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: easing,
    },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardRevealVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
};

function CourseCard({ course }) {
  const shouldReduceMotion = useReducedMotion();

  const imagePanelVariants = {
    rest: {
      rotateY: 0,
      x: 0,
      scale: 1,
      boxShadow: "0 16px 45px rgba(16, 44, 49, 0.12)",
    },

    hover: shouldReduceMotion
      ? {
          scale: 0.985,
          boxShadow: "0 24px 60px rgba(16, 44, 49, 0.2)",
        }
      : {
          rotateY: -34,
          x: -8,
          scale: 0.985,
          boxShadow: "30px 24px 60px rgba(16, 44, 49, 0.28)",
        },
  };

  const backContentVariants = {
    rest: {
      opacity: 0,
      x: 34,
    },
    hover: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.45,
        delay: 0.16,
        ease: easing,
      },
    },
  };

  const arrowVariants = {
    rest: {
      opacity: 0,
      scale: 0.72,
      x: 20,
    },
    hover: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.42,
        delay: 0.12,
        ease: easing,
      },
    },
  };

  const imageVariants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: shouldReduceMotion ? 1.02 : 1.07,
      transition: {
        duration: 0.8,
        ease: easing,
      },
    },
  };

  return (
    <motion.article
      variants={cardRevealVariants}
      className="
        group
        relative
        h-[320px]
        w-full
        sm:h-[340px]
        lg:h-[370px]
        xl:h-[400px]
      "
    >
      <motion.a
        href={course.href}
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileFocus="hover"
        whileTap={{ scale: 0.985 }}
        aria-label={`Explore ${course.title} courses`}
        className="
          relative
          block
          h-full
          w-full
          rounded-xl
          outline-none
          focus-visible:ring-2
          focus-visible:ring-[#102c31]
          focus-visible:ring-offset-4
        "
        style={{
          perspective: "1800px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Back panel */}
        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-xl
            bg-[#d5d9d9]
            shadow-[0_20px_60px_rgba(16,44,49,0.12)]
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-white/30
              via-transparent
              to-[#102c31]/10
            "
          />

          <div
            className="
              absolute
              bottom-0
              right-0
              top-0
              w-[29%]
              border-l
              border-black/5
              bg-white/10
              backdrop-blur-[2px]
            "
          />

          <motion.div
            variants={backContentVariants}
            className="
              absolute
              right-0
              top-0
              flex
              h-full
              w-[29%]
              flex-col
              items-end
              justify-between
              py-6
              pl-2
              pr-2
              text-center
              sm:py-7
              sm:pl-3
              sm:pr-3
              lg:pr-2
            "
          >
            <span
              className="
                self-center
                text-xs
                font-semibold
                tracking-[0.18em]
                text-[#102c31]/50
              "
            >
              {course.number}
            </span>

            <h3
              className="
                self-end
                text-lg
                font-semibold
                tracking-[-0.03em]
                text-[#102c31]
                [writing-mode:vertical-rl]
                sm:text-xl
                lg:text-[22px]
              "
            >
              {course.title}
            </h3>

            <span
              className="
                self-end
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#102c31]/50
                [writing-mode:vertical-rl]
              "
            >
              Explore course
            </span>
          </motion.div>
        </div>

        {/* Main image panel */}
        <motion.div
          variants={imagePanelVariants}
          transition={{
            duration: 0.75,
            ease: easing,
          }}
          className="
            absolute
            inset-0
            z-20
            overflow-hidden
            rounded-xl
            bg-white
          "
          style={{
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            willChange: "transform",
          }}
        >
          <motion.img
            src={course.image}
            alt={`${course.title} course category`}
            loading="lazy"
            variants={imageVariants}
            className="
              pointer-events-none
              h-full
              w-full
              select-none
              object-cover
              object-center
            "
          />

          {/* Permanent image overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/5
              to-black/10
            "
          />

          {/* Hover image overlay */}
          <motion.div
            variants={{
              rest: {
                opacity: 0,
              },
              hover: {
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-r
              from-black/35
              via-black/5
              to-white/20
            "
          />

          {/* Right-center arrow button */}
          <motion.div
            variants={arrowVariants}
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              z-40
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/70
              bg-white
              text-[#102c31]
              shadow-[0_16px_40px_rgba(0,0,0,0.28)]
              sm:right-5
              sm:h-14
              sm:w-14
              lg:right-6
              lg:h-16
              lg:w-16
            "
          >
            <motion.span
              variants={{
                rest: {
                  x: 0,
                },
                hover: {
                  x: 4,
                },
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <ArrowRight
                className="
                  h-5
                  w-5
                  sm:h-6
                  sm:w-6
                  lg:h-7
                  lg:w-7
                "
                strokeWidth={1.7}
              />
            </motion.span>
          </motion.div>

          {/* Front image content */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-20
              p-5
              sm:p-6
              lg:p-7
            "
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/65
                  "
                >
                  Course category
                </span>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                    tracking-[-0.04em]
                    text-white
                    sm:text-[28px]
                    lg:text-[30px]
                  "
                >
                  {course.title}
                </h3>
              </div>

              <span className="text-sm font-medium text-white/70">
                {course.number}
              </span>
            </div>
          </div>

          {/* Page fold highlight */}
          <motion.div
            variants={{
              rest: {
                opacity: 0,
                width: 0,
              },
              hover: {
                opacity: 1,
                width: 7,
              },
            }}
            transition={{
              duration: 0.4,
              ease: easing,
            }}
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              top-0
              bg-gradient-to-r
              from-white/90
              via-white/40
              to-transparent
              shadow-[4px_0_20px_rgba(0,0,0,0.2)]
            "
          />
        </motion.div>
      </motion.a>
    </motion.article>
  );
}

export default function PhilosophySection() {
  return (
    <section
      className="
        overflow-hidden
        bg-white
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-24
        xl:px-16
        xl:py-28
      "
    >
      <div className="mx-auto w-full max-w-[1760px]">
        {/* Section heading */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.45,
          }}
          className="
            flex
            flex-col
            gap-5
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#102c31]" />

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#102c31]
                  sm:text-sm
                "
              >
                Our philosophy
              </p>
            </div>

            <h2
              className="
                mt-5
                max-w-[820px]
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-[-0.05em]
                text-[#102c31]
                sm:text-5xl
                lg:text-[56px]
                xl:text-[64px]
              "
            >
              Get instant access to courses built for your future
            </h2>
          </div>

          <p
            className="
              max-w-[440px]
              text-sm
              leading-7
              text-[#6e7b7e]
              sm:text-base
              sm:leading-8
              lg:pb-1
            "
          >
            Discover flexible learning paths across technology, education,
            management, and business.
          </p>
        </motion.div>

        {/* Courses grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            mt-12
            grid
            grid-cols-1
            gap-7
            sm:grid-cols-2
            lg:mt-16
            lg:gap-8
            xl:grid-cols-4
            xl:gap-7
            2xl:gap-10
          "
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
