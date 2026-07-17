import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const plans = [
  {
    key: "basic",
    title: "Basic plan",
    price: 199,
  },
  {
    key: "starter",
    title: "Starter plan",
    price: 299,
    featured: true,
  },
  {
    key: "platinum",
    title: "Platinum plan",
    price: 399,
  },
];

const features = [
  {
    title: "Access to 30+ top courses",
    basic: true,
    starter: true,
    platinum: true,
  },
  {
    title: "Certification prep",
    basic: true,
    starter: true,
    platinum: true,
  },
  {
    title: "Customizable content",
    basic: true,
    starter: true,
    platinum: true,
  },
  {
    title: "AI-powered coding exercises",
    basic: true,
    starter: true,
    platinum: true,
  },
  {
    title: "Analytics and adoption reports",
    basic: false,
    starter: false,
    platinum: true,
  },
  {
    title: "24/7 customer support",
    basic: false,
    starter: false,
    platinum: true,
  },
  {
    title: "Instructor Q&A",
    basic: true,
    starter: true,
    platinum: true,
  },
  {
    title: "Skills assessments",
    basic: false,
    starter: true,
    platinum: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function StatusIcon({ included, featured = false }) {
  return (
    <motion.span
      whileHover={{
        scale: 1.15,
        rotate: 6,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 18,
      }}
      className={`flex h-6 w-6 items-center justify-center rounded-full ${
        featured ? "bg-amber-400 text-slate-900" : "bg-[#173840] text-white"
      }`}
      aria-label={included ? "Included" : "Not included"}
    >
      {included ? (
        <Check size={14} strokeWidth={4} />
      ) : (
        <X size={14} strokeWidth={4} />
      )}
    </motion.span>
  );
}

export default function PricingComparison() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="mx-auto max-w-[1400px]"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-14 max-w-2xl text-center lg:mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tight text-[#102c32] sm:text-5xl lg:text-6xl">
            Pricing comparison
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
            Choose the learning plan that fits your team, goals and support
            requirements.
          </p>
        </motion.div>

        {/* Desktop table */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] items-end">
            <div />

            {plans.map((plan, index) => (
              <motion.div
                key={plan.key}
                variants={itemVariants}
                whileHover={{
                  y: plan.featured ? -6 : -3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
                className={`relative flex min-h-[220px] flex-col items-center justify-center px-6 py-8 text-center ${
                  plan.featured
                    ? "z-20 min-h-[200px] rounded-t-[4px] bg-[#203f45] text-white shadow-2xl"
                    : "bg-white text-[#102c32]"
                }`}
              >
                <h3 className="text-xl font-semibold">{plan.title}</h3>

                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="relative -top-3 text-xl font-semibold">
                    $
                  </span>

                  <span className="text-5xl font-bold tracking-tight">
                    {plan.price}
                  </span>

                  <span className="text-base">/month</span>
                </div>

                <p
                  className={`mt-5 text-base ${
                    plan.featured ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  No credit card required.
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={containerVariants}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{
                  x: 3,
                }}
                className={`grid min-h-[64px] grid-cols-[1.7fr_1fr_1fr_1fr] items-stretch ${
                  index % 2 === 0 ? "bg-[#edf5f7]" : "bg-white"
                }`}
              >
                <div className="flex items-center px-5 py-4 text-base font-semibold text-[#102c32]">
                  {feature.title}
                </div>

                {plans.map((plan) => (
                  <div
                    key={plan.key}
                    className={`flex items-center justify-center px-4 py-4 ${
                      plan.featured ? "z-10 bg-[#203f45]" : ""
                    } ${
                      plan.featured && index === features.length - 1
                        ? "rounded-b-lg pb-10"
                        : ""
                    }`}
                  >
                    <StatusIcon
                      included={feature[plan.key]}
                      featured={plan.featured}
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile and tablet cards */}
        <motion.div
          variants={containerVariants}
          className="grid gap-6 md:grid-cols-2 lg:hidden"
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.key}
              variants={itemVariants}
              whileHover={{
                y: -6,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className={`relative overflow-hidden rounded-2xl border p-6 shadow-lg ${
                plan.featured
                  ? "border-[#203f45] bg-[#203f45] text-white md:col-span-2"
                  : "border-gray-200 bg-white text-[#102c32]"
              }`}
            >
              <div className="flex flex-col gap-5 border-b border-gray-200/30 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{plan.title}</h3>

                  <p
                    className={`mt-2 text-sm ${
                      plan.featured ? "text-white/65" : "text-gray-500"
                    }`}
                  >
                    No credit card required.
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="relative -top-2 text-lg font-semibold">
                    $
                  </span>

                  <span className="text-5xl font-bold">{plan.price}</span>

                  <span className="text-sm">/month</span>
                </div>
              </div>

              <div className="mt-3">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className={`flex min-h-[52px] items-center justify-between gap-4 border-b py-3 last:border-b-0 ${
                      plan.featured ? "border-white/10" : "border-gray-200"
                    }`}
                  >
                    <span className="text-sm font-medium sm:text-base">
                      {feature.title}
                    </span>

                    <StatusIcon
                      included={feature[plan.key]}
                      featured={plan.featured}
                    />
                  </div>
                ))}
              </div>

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className={`mt-6 w-full rounded-xl px-5 py-3 font-semibold transition ${
                  plan.featured
                    ? "bg-amber-400 text-slate-900 hover:bg-amber-300"
                    : "bg-[#203f45] text-white hover:bg-[#17343a]"
                }`}
              >
                Choose {plan.title}
              </motion.button>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
