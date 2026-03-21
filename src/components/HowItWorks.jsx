import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Claim Your Vault",
    description: "One account. That's all it takes. Sign up and every Windy app — WindyWord, WindyClone, WindyChat, WindyTraveler — is already connected. No setup wizards. No permissions dialogs. It just works.",
    icon: "🔐",
    detail: "Takes 30 seconds. Really."
  },
  {
    number: "02",
    title: "Create. Speak. Build.",
    description: "Use any Windy app and your data flows to the cloud automatically. Transcribe a meeting in WindyWord — it's in your vault. Train a voice clone — stored and versioned. Download a translation model — owned forever.",
    icon: "⚡",
    detail: "Zero manual uploads. It just happens."
  },
  {
    number: "03",
    title: "Your AI Follows You.",
    description: "Open your laptop in New York, your phone in Tokyo, your tablet on a plane. Your voice models, your clone, your transcriptions, your soul file — already there. Always in sync. Always encrypted. Always yours.",
    icon: "🌍",
    detail: "Every device. Every app. Every time."
  }
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Icon circle */}
        <motion.div
          whileInView={{ scale: [0.8, 1] }}
          viewport={{ once: true }}
          className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-windy-blue/20 to-windy-darkblue/20 border border-windy-blue/20 flex items-center justify-center text-4xl shadow-lg shadow-windy-blue/10"
        >
          {step.icon}
        </motion.div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="text-7xl font-black text-windy-blue/[0.07] mb-1 leading-none">{step.number}</div>
          <h3 className="text-2xl font-bold mb-3 -mt-6 md:-mt-8">{step.title}</h3>
          <p className="text-gray-400 leading-relaxed mb-2">{step.description}</p>
          <p className="text-windy-blue/50 text-sm italic">{step.detail}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Three Steps. <span className="gradient-text">Zero Friction.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The most powerful cloud for AI data shouldn't need a manual. It doesn't.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-20">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#pricing"
            className="inline-block px-10 py-4 bg-gradient-to-r from-windy-blue to-windy-darkblue text-white rounded-xl font-semibold text-lg cta-glow transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Claim Your Vault Free
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
