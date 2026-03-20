import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const apps = [
  {
    name: "WindyWord.ai",
    icon: "🎤",
    tagline: "Voice-to-Text Intelligence",
    description: "Transcribe meetings, conversations, and voice notes with AI-powered accuracy. Your transcriptions automatically backup to WindyCloud.",
    link: "https://windyword.ai",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "WindyClone.ai",
    icon: "🧬",
    tagline: "Your Digital Twin",
    description: "Create your AI avatar from voice data stored in WindyCloud. Voice clone, visual avatar, and personality soul file — all synced.",
    link: "https://windyclone.ai",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "WindyChat.ai",
    icon: "💬",
    tagline: "Real-Time Translation",
    description: "Chat in any language with live AI translation. Conversation history stored on WindyCloud, accessible everywhere.",
    link: "https://windychat.ai",
    color: "from-green-500 to-teal-500"
  },
  {
    name: "WindyTraveler.com",
    icon: "✈️",
    tagline: "Your Travel Companion",
    description: "Offline translation packs, travel guides, and local deals. Download language packs to WindyCloud for instant offline access.",
    link: "https://windytraveler.com",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "WindyTranslate.com",
    icon: "🔧",
    tagline: "The Translation Engine",
    description: "2,000+ specialized translation models powering every Windy app. Store your favorite models in WindyCloud's model vault.",
    link: "https://windytranslate.com",
    color: "from-indigo-500 to-blue-500"
  }
];

function AppCard({ app, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-windy-dark/50 backdrop-blur-sm border border-windy-blue/20 rounded-xl p-6 hover:border-windy-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-windy-blue/20"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
      
      <div className="relative">
        <div className="text-5xl mb-4">{app.icon}</div>
        <h3 className="text-xl font-bold mb-1">{app.name}</h3>
        <p className="text-windy-blue text-sm mb-3">{app.tagline}</p>
        <p className="text-gray-400 text-sm mb-4">{app.description}</p>
        
        <a
          href={app.link}
          className="inline-flex items-center text-windy-blue hover:text-windy-cyan transition-colors duration-200"
        >
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Windy <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            WindyCloud is the gravity well at the center of the Windy family. Every app creates data. 
            All of it lives here.
          </p>
          <div className="inline-block bg-windy-blue/10 border border-windy-blue/30 rounded-full px-6 py-3">
            <p className="text-windy-blue font-semibold">
              ⚡ Better Together — One account, five apps, infinite possibilities
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {apps.map((app, index) => (
            <AppCard key={index} app={app} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-windy-blue/10 to-windy-darkblue/10 border border-windy-blue/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">The Flywheel Effect</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Store your <span className="text-windy-blue">WindyWord</span> transcriptions. 
            Build your <span className="text-windy-blue">WindyClone</span> avatar. 
            Chat in <span className="text-windy-blue">WindyChat</span>. 
            Travel with <span className="text-windy-blue">WindyTraveler</span>. 
            Every interaction makes your AI smarter. Every app makes the others better. 
            And it all lives on <span className="text-windy-blue font-semibold">WindyCloud</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
