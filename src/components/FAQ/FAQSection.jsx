import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";

const categories = [
  "Enrollment and registration",
  "Technical requirements",
  "Assessments and grading",
  "Communication and support",
  "Certificates and degrees",
];

const faqData = {
  "Enrollment and registration": [
    {
      question: "How do I enroll in an online course?",
      answer:
        "Create an account, choose your course, and complete the registration process. Once payment is confirmed, you'll receive instant access.",
    },
    {
      question: "What are the benefits of online learning?",
      answer:
        "Study anytime, anywhere with flexible schedules, expert instructors, and lifetime access to course materials.",
    },
    {
      question: "Are there any prerequisites for enrolling in online courses?",
      answer:
        "Most beginner courses require no prior experience, while advanced courses may recommend basic knowledge.",
    },
    {
      question: "What should I do if I forget my password?",
      answer:
        "Click 'Forgot Password' on the login page and follow the instructions sent to your email.",
    },
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Yes! You can enroll in as many courses as you'd like and learn at your own pace.",
    },
  ],
};

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(
    "Enrollment and registration",
  );

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-[420px_1fr] gap-10">
          {/* Left Categories */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#edf5fa]"
          >
            {categories.map((item) => (
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                key={item}
                onClick={() => {
                  setActiveCategory(item);
                  setOpenIndex(null);
                }}
                className={`w-full flex justify-between items-center px-8 py-8 text-left border-b border-gray-200 transition

                ${
                  activeCategory === item
                    ? "bg-[#1f3841] text-white"
                    : "text-slate-500 hover:bg-gray-100"
                }
                `}
              >
                <span className="font-semibold text-xl">{item}</span>

                <ArrowRight size={22} />
              </motion.button>
            ))}
          </motion.div>

          {/* Right FAQ */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {faqData[activeCategory]?.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-8"
                >
                  <h3 className="text-xl font-semibold text-slate-900 text-left">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <Minus size={28} />
                    ) : (
                      <Plus size={28} />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-gray-500 leading-8 text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
