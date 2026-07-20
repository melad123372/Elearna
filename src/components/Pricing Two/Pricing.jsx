import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

import gift from "../../assets/Pricing-Two/gift.svg";
import king from "../../assets/Pricing-Two/king.svg";

const plans = [
  {
    title: "Starter Plan",
    icon: gift,
    oldPrice: "$199",
    price: "$149",
    features: [
      "Access to 30+ top courses",
      "Certification prep",
      "Customizable content",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
    dark: false,
  },
  {
    title: "Premium Plan",
    icon: king,
    oldPrice: "$399",
    price: "$349",
    features: [
      "Access to 50+ top courses",
      "Certification prep",
      "Customizable content",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
    dark: true,
  },
];

export default function Pricing() {
  const [activePlan, setActivePlan] = useState("monthly");

  return (
    <section className="min-h-screen bg-[#09252b] py-20 px-6 text-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="uppercase tracking-widest text-sm">Pricing</p>

        <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight">
          Flexible pricing plan for
          <br />
          every one
        </h1>

        {/* Toggle */}
        <div className="mt-10 inline-flex bg-gray-400 rounded-full p-1">
          <button
            onClick={() => setActivePlan("monthly")}
            className={`
              px-7 py-2 rounded-full text-sm transition
              ${
                activePlan === "monthly"
                  ? "bg-yellow-400 text-black"
                  : "text-[#09252b]"
              }
            `}
          >
            MONTHLY
          </button>

          <button
            onClick={() => setActivePlan("yearly")}
            className={`
              px-7 py-2 rounded-full text-sm transition
              ${
                activePlan === "yearly"
                  ? "bg-yellow-400 text-black"
                  : "text-[#09252b]"
              }
            `}
          >
            YEARLY
            <span className="ml-2 border border-gray-600 rounded-full px-2 text-xs">
              Save 20%
            </span>
          </button>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`
              w-full md:w-[370px]
              rounded-3xl p-8
              ${
                plan.dark
                  ? "bg-[#102f36] border border-yellow-400"
                  : "bg-white text-[#102f36]"
              }
            `}
          >
            {/* Icon */}
            <div className="flex justify-center">
              <img
                src={plan.icon}
                alt={plan.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            <div className="text-center">
              <h2 className="mt-6 text-2xl font-semibold">{plan.title}</h2>

              <p
                className={`
                  mt-4 leading-8
                  ${plan.dark ? "text-gray-400" : "text-gray-500"}
                `}
              >
                Lorem ipsum dolor sit amet consectetur.
                <br />
                eu vitae magna lacus ut.
              </p>

              {/* Price */}
              <div className="mt-6 flex justify-center items-center gap-3">
                <span className="line-through text-gray-400">
                  {plan.oldPrice}
                </span>

                <span className="text-4xl font-bold">{plan.price}</span>

                <span className="text-gray-400">/Monthly</span>
              </div>
            </div>

            <hr className="my-8 border-gray-400/40" />

            {/* Features */}
            <ul className="space-y-5">
              {plan.features.map((item, i) => (
                <li key={i} className="flex gap-3 items-center">
                  {i === 4 && !plan.dark ? (
                    <FiXCircle className="text-blue-600" />
                  ) : (
                    <FiCheckCircle className="text-blue-600" />
                  )}

                  <span
                    className={plan.dark ? "text-gray-400" : "text-gray-600"}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`
                mt-8 w-full py-4 rounded
                font-medium
                ${
                  plan.dark
                    ? "bg-yellow-400 text-black"
                    : "bg-[#09252b] text-white"
                }
              `}
            >
              Subscribe This Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
