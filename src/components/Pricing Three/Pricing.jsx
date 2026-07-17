import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const plans = [
  {
    title: "Basic",
    monthly: 199,
    yearly: 179,
    featured: false,
    features: [
      "Access to 10+ top courses",
      "Certification prep",
      "Customizable content",
      "AI-powered coding exercises",
    ],
  },
  {
    title: "Standard",
    monthly: 299,
    yearly: 269,
    featured: false,
    features: [
      "Access to 30+ top courses",
      "Certification prep",
      "Customizable content",
      "AI-powered coding exercises",
    ],
  },
  {
    title: "Premium",
    monthly: 699,
    yearly: 629,
    featured: true,
    features: [
      "Access to 50+ top courses",
      "Certification prep",
      "Customizable content",
      "AI-powered coding exercises",
      "Analytics & adoption reports",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="bg-[#0D252B] py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase text-yellow-400 tracking-widest font-medium">
          Pricing
        </p>

        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mt-4">
          Flexible pricing plan
          <br />
          for everyone
        </h2>

        {/* Toggle */}
        <div className="flex items-center gap-4 mt-10">
          <span
            className={`uppercase font-semibold ${
              !yearly ? "text-white" : "text-gray-400"
            }`}
          >
            Monthly
          </span>

          <button
            onClick={() => setYearly(!yearly)}
            className={`w-16 h-9 rounded-full p-1 flex transition-all duration-300 ${
              yearly ? "justify-end bg-yellow-400" : "justify-start bg-gray-700"
            }`}
          >
            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 500,
              }}
              className="w-7 h-7 rounded-full bg-white"
            />
          </button>

          <span
            className={`uppercase font-semibold ${
              yearly ? "text-white" : "text-gray-400"
            }`}
          >
            Yearly
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-14 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className={`rounded-2xl p-10 shadow-xl flex flex-col min-h-[620px] ${
                plan.featured
                  ? "bg-[#102B31] border border-yellow-400 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              <h3 className="text-3xl font-medium">{plan.title}</h3>

              <p
                className={`mt-5 leading-7 ${
                  plan.featured ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur erat ipsum non.
              </p>

              {/* Price */}
              <div className="mt-8">
                <span className="text-5xl font-bold">
                  ${yearly ? plan.yearly : plan.monthly}
                </span>

                <span
                  className={`ml-2 ${
                    plan.featured ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  /month
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-5 mt-10 flex-1">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FiCheckCircle className="text-yellow-400 text-xl flex-shrink-0" />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-10 w-full py-4 rounded-xl font-semibold transition ${
                  plan.featured
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "bg-[#0D252B] text-white hover:bg-[#16343c]"
                }`}
              >
                Subscribe This Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
