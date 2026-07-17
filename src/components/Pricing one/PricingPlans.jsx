import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      title: "Basic",
      monthly: 199,
      yearly: 179,
      dark: false,
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
      dark: false,
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
      dark: true,
      features: [
        "Access to 50+ top courses",
        "Certification prep",
        "Customizable content",
        "AI-powered coding exercises",
        "Analytics and adoption reports",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Toggle */}
        <div className="flex justify-center items-center gap-5 mb-16">
          <span
            className={`font-semibold ${
              !yearly ? "text-gray-900" : "text-gray-400"
            }`}
          >
            MONTHLY
          </span>

          <button
            onClick={() => setYearly(!yearly)}
            className={`w-20 h-10 rounded-full flex items-center p-1 transition ${
              yearly ? "bg-yellow-400 justify-end" : "bg-gray-300 justify-start"
            }`}
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-8 h-8 rounded-full bg-white shadow"
            />
          </button>

          <span
            className={`font-semibold ${
              yearly ? "text-gray-900" : "text-gray-400"
            }`}
          >
            YEARLY
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`rounded-lg shadow-xl p-10 flex flex-col ${
                plan.dark
                  ? "bg-[#10292d] text-white border-t-8 border-yellow-400"
                  : "bg-white"
              }`}
            >
              {/* Title */}
              <h2 className="text-3xl font-bold mb-6">{plan.title}</h2>

              {/* Description */}
              <p
                className={`leading-8 mb-10 ${
                  plan.dark ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur erat ipsum non.
              </p>

              {/* Price */}
              <div className="mb-10">
                <span className="text-5xl font-medium">
                  ${yearly ? plan.yearly : plan.monthly}
                </span>

                <span
                  className={`text-xl ${
                    plan.dark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  /month
                </span>
              </div>

              {/* Features */}
              <div className="space-y-5 flex-1">
                {plan.features.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle
                      size={22}
                      className="text-yellow-400 flex-shrink-0"
                    />

                    <span
                      className={plan.dark ? "text-gray-200" : "text-gray-600"}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`mt-10 w-full py-4 rounded-md font-semibold transition ${
                  plan.dark
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "bg-[#10292d] text-white hover:bg-black"
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
};

export default Pricing;
