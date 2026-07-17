import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "How do I enroll in an online course?",
    answer:
      "You can enroll by creating an account, selecting a course, and clicking the enroll button.",
  },
  {
    question: "Are there any prerequisites for enrolling in online courses?",
    answer:
      "Most courses do not require prerequisites unless stated otherwise in the course description.",
  },
  {
    question: "What are the technical requirements for online learning?",
    answer:
      "You need a stable internet connection, a modern browser, and a device like a laptop or mobile.",
  },
  {
    question: "What if I encounter technical difficulties?",
    answer:
      "You can contact our support team anytime for assistance with technical issues.",
  },
  {
    question: "Are there live classes, or can I learn at my own pace?",
    answer:
      "We offer both live classes and self-paced learning depending on the course you choose.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Contact Us
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
          Frequently asked questions
        </h2>
      </motion.div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
            className="border-b border-gray-200 pb-4"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left py-4"
            >
              <span className="text-lg font-medium text-gray-900">
                {item.question}
              </span>

              {openIndex === index ? (
                <Minus className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 pb-4">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
