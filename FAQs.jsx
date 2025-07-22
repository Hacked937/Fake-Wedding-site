import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is the Concept of Fake Wedding?",
    answer: "People love the glamour, dancing, and drama of weddings, especially in cultures like India where weddings are huge social events.A fake wedding gives the party without the paperwork.",
  },
  {
    question: "What should I wear to the wedding?",
    answer: "Dress to impress! Think vibrant ethnic or Indo-western outfits. It’s a Gen-Z wedding after all 😉",
  },
  {
    question: "Can I bring a plus one?",
    answer: "Only if they bring good vibes and killer dance moves! JK, please confirm with us before bringing someone.",
  },
  {
    question: "Where is the venue?",
    answer: "The secret location will be sent to registered guests only. It’s gonna be a vibe 🌴✨",
  },
  {
    question: "Is there an entry fee?",
    answer: "Nope, your RSVP is your golden ticket 🎟️",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6">🙋 Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-lg shadow-sm bg-white">
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-4 py-2 text-gray-700 bg-pink-50">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
