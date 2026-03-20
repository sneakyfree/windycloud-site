import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: "What exactly does WindyCloud store?",
    answer: "WindyCloud stores all your AI-generated data from the Windy ecosystem: WindyWord transcriptions and audio files, WindyClone voice models and avatar data, WindyChat conversation history, WindyTraveler language packs, and your specialized translation models from the WindyTranslate catalog. Think of it as iCloud, but purpose-built for AI creators."
  },
  {
    question: "Can I store my translation models on WindyCloud?",
    answer: "Absolutely! You can download any of the 2,000+ specialized models from WindyTranslate's HuggingFace catalog directly to your WindyCloud Model Vault. This gives you instant access without re-downloading, works offline, and ensures you own your copy even if HuggingFace has downtime."
  },
  {
    question: "Is my data private?",
    answer: "Yes. We use end-to-end AES-256 encryption, and we never train AI models on your data. Your transcriptions, soul files, and voice models are yours alone. We can't read them, we don't sell them, and we don't share them. You can download everything or delete your account at any time."
  },
  {
    question: "How much storage do I really need?",
    answer: "Starter (50GB) works for casual users. Pro (250GB) is ideal if you're creating a WindyClone avatar or storing multiple language model packs. Business (1TB) suits power users with extensive transcription archives and full model vaults. Most users start with Pro."
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "You'll have 30 days to download all your data. After that, your files are permanently deleted. No sneaky retention — when you say delete, we delete. You own your data, and we respect that."
  },
  {
    question: "Can I use WindyCloud without other Windy apps?",
    answer: "Technically yes, but you'd be missing the point. WindyCloud is the gravity well of the Windy ecosystem — it's most powerful when paired with WindyWord, WindyClone, WindyChat, or WindyTraveler. That said, we do have a standalone API for developers."
  },
  {
    question: "Do you support team accounts?",
    answer: "Yes! The Business plan includes team collaboration features, shared storage, and centralized billing. Enterprise customers get custom contracts and white-label options."
  },
  {
    question: "What's your uptime SLA?",
    answer: "Business and Enterprise plans come with 99.9% uptime SLA. Starter and Pro don't have SLAs, but we're built on Cloudflare's infrastructure — we inherit their reliability."
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-windy-blue/20 rounded-lg overflow-hidden hover:border-windy-blue/40 transition-colors duration-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left bg-windy-dark/30 hover:bg-windy-dark/50 transition-colors duration-200"
      >
        <span className="font-semibold text-lg">{faq.question}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 text-windy-blue flex-shrink-0 ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 py-4 text-gray-400 bg-windy-dark/20">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about WindyCloud.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="mailto:support@windycloud.com"
            className="inline-block px-6 py-3 border-2 border-windy-blue text-windy-blue rounded-lg font-semibold hover:bg-windy-blue/10 transition-all duration-300"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
