import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: "🎤",
    title: "Voice Model Vault",
    description: "47 custom voice models. 12 language variants. One vault. Your WindyClone voice lives here — versioned, encrypted, and ready the instant you need it.",
    accent: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: "📝",
    title: "Transcription Memory",
    description: "Every word you've ever spoken to WindyWord — searchable, timestamped, permanent. Three years of meetings? Find any sentence in under a second.",
    accent: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: "🧬",
    title: "Soul File Sanctuary",
    description: "Your AI personality. Your preferences. Your learning history. The most intimate data you'll ever create deserves a fortress. This is it.",
    accent: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: "👤",
    title: "Clone Data Sync",
    description: "Your digital twin follows you everywhere. Open your laptop in Tokyo, your phone in Paris — your avatar is already there. Always ready. Always yours.",
    accent: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: "🌐",
    title: "3,500+ Translation Models",
    description: "WindyTranslate's entire catalog — one click to download them all to your vault. Own your models. Don't rent access to them.",
    accent: "from-indigo-500/20 to-blue-500/20"
  },
  {
    icon: "⚡",
    title: "Overflow Compute",
    description: "Your local GPU maxed out? WindyCloud catches the overflow. Speech-to-text, text-to-speech, clone training — seamless cloud burst when you need the power.",
    accent: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: "🔄",
    title: "Universal Sync",
    description: "One account. Five apps. Every device. WindyWord transcriptions, WindyChat history, WindyTraveler packs — they move with you like a second heartbeat.",
    accent: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: "⏳",
    title: "Time Travel",
    description: "Every version of every file. That voice model from six months ago that sounded perfect? Roll back in one click. Your data has a timeline. Use it.",
    accent: "from-pink-500/20 to-purple-500/20"
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
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-windy-dark/50 backdrop-blur-sm border border-windy-blue/10 rounded-xl p-6 hover:border-windy-blue/40 transition-all duration-500 card-shimmer vault-inner-glow"
    >
      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500`} />
      
      <div className="relative">
        <div className="text-4xl mb-4">{feature.icon}</div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-windy-blue transition-colors duration-300">{feature.title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-black gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Not Another Dropbox.
            <br />
            <span className="gradient-text">The Cloud That Understands AI.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Generic storage treats your voice models like spreadsheets.
            WindyCloud knows a soul file from a sound wave — and protects both like they matter. <span className="text-white">Because they do.</span>
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
