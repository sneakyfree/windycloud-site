import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AgentHosting() {
  const [email, setEmail] = useState('');

  const tiers = [];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span></span>
            COMING SOON
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Your AI Agent.<br />
            <span className="gradient-text">Living on WindyCloud.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A personal AI agent that runs 24/7 on your WindyCloud — with your soul file, your memories, 
            your voice clone, your translation models. Not rented from Big Tech. <span className="text-white font-medium">Owned by you.</span>
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto mb-12">
          <div className="bg-windy-dark/60 border border-gray-800/40 rounded-xl p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {[
                { icon: '🧠', text: 'Your own Kit Zero — personal AI that knows you, remembers everything, acts on your behalf' },
                { icon: '🔒', text: 'Sovereign — your data, your agent, your rules. Not OpenAI\'s. Not Google\'s. Yours.' },
                { icon: '💻', text: 'Full terminal access for power users. Beautiful dashboard for everyone else.' },
                { icon: '🌐', text: 'Accessible from anywhere — your-name.windycloud.com. Enterprise-grade security.' },
                { icon: '⚡', text: 'GPU-accelerated — cloud transcription, voice clone, translation, all co-located with your agent' },
                { icon: '🔗', text: 'Connected to everything — Telegram, Discord, Slack, email, calendar, smart home' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-gray-400 text-xs leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-windy-dark/60 border-2 border-purple-500/30 rounded-xl p-8 mb-12 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-2">🤖 Agent Hosting</h3>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span></span>
            COMING SOON
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Host your own AI agent on WindyCloud — with your soul file, your memories, your voice clone, and your translation models. 
            Pricing details will be announced when agent hosting launches.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-lg mx-auto text-center">
          <p className="text-sm text-gray-400 mb-4">Join the waitlist. Be first to give your AI a home.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl text-sm hover:scale-105 transition-transform">
              Join Waitlist
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-3">No spam. Just a ping when agent hosting launches.</p>
        </motion.div>
      </div>
    </section>
  );
}
