import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: "🎤",
    title: "Voice Model Vault",
    description: "Store your WindyClone voice models, training data, and avatars. Version history ensures you never lose your digital identity."
  },
  {
    icon: "📝",
    title: "Transcription Archive",
    description: "Every WindyWord transcription automatically backed up. Search across years of conversations, meetings, and voice notes."
  },
  {
    icon: "🧬",
    title: "Soul File Storage",
    description: "Your AI personality, preferences, and learning history. The most personal data you'll ever create."
  },
  {
    icon: "👤",
    title: "Clone Data Sync",
    description: "Avatar models, personality files, and clone training data synced across all devices. Your digital twin, everywhere."
  },
  {
    icon: "🔄",
    title: "Cross-Device Sync",
    description: "One account, every Windy app. WindyWord transcriptions, WindyChat history, WindyTraveler packs — all in sync."
  },
  {
    icon: "💾",
    title: "Model Vault",
    description: "Download and own your 2,000+ specialized translation models. Instant access, no HuggingFace dependency."
  },
  {
    icon: "⚡",
    title: "Cloud Compute",
    description: "Need more power? Overflow STT/TTS processing to WindyCloud compute. Pay only for what you use."
  },
  {
    icon: "📚",
    title: "Version History",
    description: "Roll back to any previous version of your models, transcriptions, or soul files. Your data, your timeline."
  }
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-windy-dark/50 backdrop-blur-sm border border-windy-blue/20 rounded-xl p-6 hover:border-windy-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-windy-blue/10"
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold mb-2 text-windy-blue">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything Your AI Needs,
            <span className="gradient-text"> In One Place</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Purpose-built cloud storage for the Windy ecosystem. Not generic file storage — 
            intelligent infrastructure that understands your AI data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
