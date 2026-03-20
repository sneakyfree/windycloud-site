import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const securityFeatures = [
  {
    icon: "🔐",
    title: "End-to-End Encryption",
    description: "Your soul files, voice models, and transcriptions are encrypted at rest and in transit. AES-256 encryption standard."
  },
  {
    icon: "🌐",
    title: "Cloudflare CDN",
    description: "Global edge network with DDoS protection. Your data is fast, secure, and always available."
  },
  {
    icon: "🕵️",
    title: "Privacy-First",
    description: "We don't train AI on your data. We don't sell your data. We don't read your transcriptions. Period."
  },
  {
    icon: "🔑",
    title: "You Own Your Data",
    description: "Download your entire archive anytime. Delete your account, and everything is permanently erased."
  },
  {
    icon: "🛡️",
    title: "SOC 2 Compliant",
    description: "Enterprise-grade security audits and compliance. GDPR, CCPA, and HIPAA-ready for business customers."
  },
  {
    icon: "📊",
    title: "Transparent Logging",
    description: "Every access to your data is logged. You can see who accessed what, and when. Full audit trail."
  }
];

function SecurityCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start space-x-4"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-windy-blue to-windy-darkblue flex items-center justify-center text-2xl">
        {feature.icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
        <p className="text-gray-400 text-sm">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="security" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Data. <span className="gradient-text">Your Control.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade security for your most personal data. We protect your AI like it's our own.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <SecurityCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-windy-dark/50 border border-windy-blue/20 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Zero-Knowledge Architecture</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Your encryption keys live on your devices, not our servers. Even if someone broke into our 
            infrastructure, they couldn't read your soul files or voice models. We built WindyCloud for 
            the most sensitive data you'll ever create — your digital identity deserves nothing less.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
