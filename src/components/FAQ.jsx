import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: "What exactly does WindyCloud store?",
    answer: "Everything that makes your AI identity real. WindyWord transcriptions and audio files. WindyClone voice models, avatar data, and soul files. WindyChat conversation history. WindyTraveler offline language packs. Your personal catalog of specialized translation models from WindyTranslate. Think of it as iCloud — if iCloud understood what a soul file was and why it matters."
  },
  {
    question: "Why not just use Dropbox or Google Drive?",
    answer: "Generic storage treats your voice model like a spreadsheet. WindyCloud understands the difference between a soul file and a sound wave. It knows how to version voice models, sync clone data across devices, burst to cloud compute when your GPU maxes out, and keep your translation models instantly accessible. It's purpose-built infrastructure, not a folder in the sky."
  },
  {
    question: "Can I store all 2,000+ translation models?",
    answer: "Every single one. Download WindyTranslate's full catalog to your personal Model Vault with one click. You'll own your copy — no HuggingFace dependency, no re-downloading, works offline. The models load 10x faster from your vault than pulling from HuggingFace, and they're CDN-cached near your location for instant access."
  },
  {
    question: "Is my data actually private?",
    answer: "We use zero-knowledge encryption. Your keys live on YOUR devices, not our servers. Even if someone breached our entire infrastructure, they'd find encrypted noise — not your voice models, not your soul files, not your transcriptions. We can't read your data. That's not a policy. It's the architecture."
  },
  {
    question: "How much storage do I really need?",
    answer: "Starter (50 GB) works for casual WindyWord users and a few voice models. Pro (250 GB) is ideal for creators with a WindyClone avatar, multiple language model packs, and growing transcription archives — this is where most users land. Business (1 TB) suits power users with full model vaults, team clone data, and years of transcription history."
  },
  {
    question: "What happens if I cancel?",
    answer: "You get 30 days to download everything. After that, it's permanently deleted. No sneaky retention. No 'anonymized' data we keep. When you say delete, we delete. Your data is yours. Always."
  },
  {
    question: "Can I use WindyCloud without other Windy apps?",
    answer: "You can, but you'd be missing the magic. WindyCloud lights up when paired with the ecosystem — automatic backups from WindyWord, seamless clone sync from WindyClone, instant language pack access for WindyTraveler. That said, developers can use the standalone API for custom integrations."
  },
  {
    question: "What about enterprise and teams?",
    answer: "Business plans include team collaboration for up to 10 seats with shared storage and centralized billing. Enterprise gets unlimited everything — dedicated infrastructure, on-premise deployment, custom SLAs, white-label options, and SOC 2 / HIPAA compliance for regulated industries."
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
      className="border border-windy-blue/10 rounded-xl overflow-hidden hover:border-windy-blue/25 transition-colors duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left bg-windy-dark/20 hover:bg-windy-dark/40 transition-colors duration-200"
      >
        <span className="font-semibold text-lg pr-4">{faq.question}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 text-windy-blue/50 flex-shrink-0"
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
        <p className="px-6 py-5 text-gray-400 leading-relaxed bg-windy-dark/10">
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
            Questions? <span className="gradient-text">Answered.</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know before you claim your vault.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a
            href="mailto:support@windycloud.com"
            className="inline-block px-6 py-3 border border-windy-blue/30 text-windy-blue rounded-xl font-semibold hover:bg-windy-blue/10 hover:border-windy-blue/50 transition-all duration-300 text-sm"
          >
            Talk to a Human
          </a>
        </motion.div>
      </div>
    </section>
  );
}
