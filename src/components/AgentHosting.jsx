import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AgentHosting() {
  const [email, setEmail] = useState('');

  const tiers = [
    { name: 'Starter Agent', price: '+$5', period: '/mo', cpu: '1 vCPU', ram: '512 MB', features: ['Shared resources', 'Basic integrations', 'Web dashboard', 'Community support'] },
    { name: 'Pro Agent', price: '+$15', period: '/mo', cpu: '2 vCPU', ram: '2 GB', features: ['Dedicated resources', 'GPU access for STT/TTS', 'Full SSH terminal', 'All integrations', 'Priority support'], highlight: true },
    { name: 'Business Agent', price: '+$30', period: '/mo', cpu: '4 vCPU', ram: '4 GB', features: ['Priority everything', 'Dedicated GPU time', 'Team agents (10)', 'Custom integrations', 'SLA guarantee'] },
  ];

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
                { icon: '🌐', text: 'Accessible from anywhere — your-name.windycloud.com. Secured by Cloudflare.' },
                { icon: '⚡', text: 'GPU-accelerated — cloud STT, voice clone, translation, all co-located with your agent' },
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

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`bg-windy-dark/60 p-6 rounded-xl border-2 ${t.highlight ? 'border-purple-500/40 shadow-lg shadow-purple-500/10' : 'border-gray-800/40'}`}
            >
              <h3 className="text-lg font-bold text-white mb-1">{t.name}</h3>
              <div className="mb-3">
                <span className="text-3xl font-black gradient-text">{t.price}</span>
                <span className="text-gray-500 text-sm">{t.period} add-on</span>
              </div>
              <div className="flex gap-3 text-xs text-gray-500 mb-4">
                <span className="px-2 py-1 bg-gray-800/60 rounded">{t.cpu}</span>
                <span className="px-2 py-1 bg-gray-800/60 rounded">{t.ram}</span>
              </div>
              <ul className="space-y-2">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

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
