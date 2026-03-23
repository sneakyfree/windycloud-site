import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const flywheelSteps = [
  {
    brand: "WindyWord.ai",
    icon: "🎤",
    verb: "You speak.",
    hook: "Voice-to-text intelligence powered by 3,500+ specialized AI models. Free to start. Your voice becomes data — beautiful, searchable, permanent data.",
    desire: "Every meeting, every thought, every midnight breakthrough — captured and transcribed with surgical precision.",
    link: "https://windyword.ai",
    color: "from-blue-500 to-cyan-500",
    ring: "ring-blue-500/30"
  },
  {
    brand: "WindyClone.ai",
    icon: "🧬",
    verb: "You become.",
    hook: "Your voice becomes your digital twin. Voice clone. Visual avatar. Personality soul file. One button — and suddenly there are two of you.",
    desire: "Your WindyClone avatar needs a home. Give it the cloud it deserves.",
    link: "https://windyclone.ai",
    color: "from-purple-500 to-pink-500",
    ring: "ring-purple-500/30"
  },
  {
    brand: "WindyChat.ai",
    icon: "💬",
    verb: "You connect.",
    hook: "Your twin speaks any language. Real-time translated chat, voice, and video — in YOUR voice. Talk to anyone on Earth as yourself.",
    desire: "Imagine speaking fluent Japanese in a business meeting. In your own voice. That's WindyChat.",
    link: "https://windychat.ai",
    color: "from-green-500 to-teal-500",
    ring: "ring-green-500/30"
  },
  {
    brand: "WindyTraveler.com",
    icon: "✈️",
    verb: "You explore.",
    hook: "You travel the world understood. Offline language packs, AI tour guides, local deals, traveler's tools — your complete travel companion.",
    desire: "Land in any country. Speak the language before your bags hit the carousel.",
    link: "https://windytraveler.com",
    color: "from-orange-500 to-red-500",
    ring: "ring-orange-500/30"
  },
  {
    brand: "WindyTranslate.com",
    icon: "🔧",
    verb: "The engine.",
    hook: "3,500+ specialized pair-translation LLMs. The invisible force powering every Windy product. Not general-purpose translators — purpose-built specialists.",
    desire: "Enterprise API. White-label SDK. The Intel Inside of language AI.",
    link: "https://windytranslate.com",
    color: "from-indigo-500 to-blue-500",
    ring: "ring-indigo-500/30"
  }
];

function FlywheelCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`group relative bg-windy-dark/40 backdrop-blur-sm border border-windy-blue/10 rounded-2xl p-8 hover:border-windy-blue/30 transition-all duration-500 card-shimmer ring-1 ${step.ring}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.06] rounded-2xl transition-opacity duration-500`} />
      
      <div className="relative flex flex-col md:flex-row gap-6">
        {/* Step number + icon */}
        <div className="flex-shrink-0 flex items-start gap-4">
          <div className="text-5xl md:text-6xl font-black text-white/[0.06] leading-none">{String(index + 1).padStart(2, '0')}</div>
          <div className="text-5xl">{step.icon}</div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-white">{step.verb}</h3>
            <span className={`text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>{step.brand}</span>
          </div>
          <p className="text-gray-300 mb-3 leading-relaxed">{step.hook}</p>
          <p className="text-gray-500 text-sm italic mb-4">"{step.desire}"</p>
          
          <a
            href={step.link}
            className="inline-flex items-center text-sm text-windy-blue/70 hover:text-windy-blue transition-colors group/link"
          >
            Explore {step.brand}
            <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Connector arrow */}
      {index < flywheelSteps.length - 1 && (
        <div className="hidden md:flex justify-center mt-6 -mb-2">
          <motion.svg
            className="w-6 h-6 text-windy-blue/30"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      )}
    </motion.div>
  );
}

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One Voice. <span className="gradient-text">Six Products. Infinite Reach.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            It starts with a single word you speak. It ends with your voice reaching every corner of the planet. 
            Here's how the Windy Empire turns your voice into a superpower — and why <span className="text-white font-medium">WindyCloud is the sun everything orbits</span>.
          </p>
        </motion.div>

        {/* Flywheel story cards */}
        <div className="space-y-6 mb-16">
          {flywheelSteps.map((step, index) => (
            <FlywheelCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* The Sun — WindyCloud */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-windy-blue/10 via-windy-dark/50 to-windy-darkblue/10 border-2 border-windy-blue/30 rounded-3xl p-10 text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-windy-blue/5 to-transparent rounded-3xl" />
          
          <div className="relative">
            <div className="text-6xl mb-4">☁️</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              And All of It Lives Here.
              <br />
              <span className="gradient-text">On WindyCloud.</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Every word you speak. Every model you train. Every clone you create. Every conversation in every language. 
              Every offline pack for every country you'll ever visit. 
              <span className="text-white font-semibold"> One vault. One account. Yours forever.</span>
            </p>
            <p className="text-windy-blue/60 text-sm italic">
              "The more you use Windy, the more valuable your vault becomes. That's not a lock-in — it's a legacy."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
