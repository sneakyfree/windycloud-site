import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const securityFeatures = [
  {
    icon: "🔐",
    title: "End-to-End Encryption",
    description: "AES-256 at rest. TLS 1.3 in transit. Your soul files and voice models are unreadable to anyone but you — including us."
  },
  {
    icon: "🌐",
    title: "Global Edge Network",
    description: "Built on Cloudflare's global network — hundreds of edge locations, DDoS protection included, and no charge for getting your data back out."
  },
  {
    icon: "🕵️",
    title: "We Don't Look At Your Data",
    description: "We never sell it, mine it, or train models on it. Access is scoped to your identity, and every access is logged. We hold the encryption keys today — client-held keys are on the roadmap, and we will not claim them until they ship."
  },
  {
    icon: "🔑",
    title: "Sovereign Data Ownership",
    description: "Export everything. Delete everything. Your data. Your rules. We're the vault, not the owner. Leave anytime with every byte you stored."
  },
  {
    icon: "🛡️",
    title: "Your Rights, Built In",
    description: "GDPR and CCPA rights are implemented, not promised: export everything you have stored in one request, and delete it for good. Formal SOC 2 and HIPAA audits are not complete, and we will publish them here when they are."
  },
  {
    icon: "📊",
    title: "Full Audit Trail",
    description: "Every access logged. Every sync tracked. Every API call recorded. You see exactly who touched what, when, and from where."
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
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-windy-blue/[0.03] transition-colors duration-300"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-windy-blue/15 to-windy-darkblue/15 border border-windy-blue/10 flex items-center justify-center text-2xl">
        {feature.icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1 text-white">{feature.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="security" className="py-24 px-4 sm:px-6 lg:px-8 bg-black gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Digital Identity
            <br />
            <span className="gradient-text">Deserves a Fortress.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your voice clone. Your soul file. Your AI memories. This isn't a spreadsheet. 
            <span className="text-white"> It's the most personal data you'll ever create.</span> We protect it like it matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {securityFeatures.map((feature, index) => (
            <SecurityCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-windy-dark/40 border border-windy-blue/15 rounded-2xl p-8 md:p-10 text-center vault-inner-glow"
        >
          <h3 className="text-2xl font-bold mb-4">The Promise</h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
            "We don't train AI on your data. We don't sell your data. We don't read your transcriptions. 
            We don't peek at your soul files. We don't monetize your voice. 
            <span className="text-windy-blue font-semibold"> Your digital identity is not our product. It's our responsibility.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
