import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import faq from "../../assets/Elearna - Pricing Three/faq.svg";

const faqs = [
  {
    question: "How do I enroll in an online course?",
    answer:
      "You can easily enroll by selecting your preferred course and completing the registration process.",
  },
  {
    question: "Are there any prerequisites for enrolling in online courses?",
    answer:
      "Most courses are beginner friendly, but some advanced courses may require basic knowledge.",
  },
  {
    question: "What are the technical requirements for online learning?",
    answer:
      "You need a stable internet connection, a modern browser, and a computer or mobile device.",
  },
  {
    question: "What if I encounter technical difficulties?",
    answer:
      "Our support team is available to help you solve any technical issues.",
  },
  {
    question: "Are there live classes, or can I learn at my own pace?",
    answer:
      "You can learn at your own pace, and selected courses also include live sessions.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-[#F3F8FA] py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Top Image + Text */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={faq}
              alt="faq"
              className="w-[280px] sm:w-[350px] lg:w-[220px]"
            />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="uppercase tracking-widest text-[#16343c] font-semibold">
              Contact Us
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-medium leading-tight text-[#102B31]">
              Frequently asked
              <br />
              questions
            </h2>
          </motion.div>
        </div>

        {/* FAQ Questions Below */}
        <div className="mt-16 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg md:text-xl font-semibold text-[#102B31]">
                  {faq.question}
                </span>

                <span className="text-2xl text-[#102B31]">
                  {active === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              <AnimatePresence>
                {active === index && (
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
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600 leading-7">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
