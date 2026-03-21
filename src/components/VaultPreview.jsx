import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const vaultItems = [
  { icon: "🎤", name: "voice-model-en-us-v3.bin", size: "2.4 GB", type: "WindyClone", age: "2 hours ago" },
  { icon: "📝", name: "board-meeting-transcript.json", size: "340 KB", type: "WindyWord", age: "4 hours ago" },
  { icon: "🧬", name: "soul-file-personality-v12.soul", size: "18 MB", type: "WindyClone", age: "1 day ago" },
  { icon: "🌐", name: "en-ja-pair-specialist.gguf", size: "890 MB", type: "WindyTranslate", age: "2 days ago" },
  { icon: "💬", name: "chat-history-march-2026.enc", size: "12 MB", type: "WindyChat", age: "3 days ago" },
  { icon: "✈️", name: "offline-pack-spanish-mx.wlp", size: "1.2 GB", type: "WindyTraveler", age: "5 days ago" },
  { icon: "👤", name: "avatar-4k-photorealistic.glb", size: "340 MB", type: "WindyClone", age: "1 week ago" },
  { icon: "🎤", name: "voice-model-es-clone.bin", size: "2.1 GB", type: "WindyClone", age: "1 week ago" },
];

function VaultRow({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="flex items-center gap-4 px-4 py-3 hover:bg-windy-blue/5 rounded-lg transition-colors group"
    >
      <span className="text-xl flex-shrink-0">{item.icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-mono text-gray-300 truncate group-hover:text-white transition-colors">{item.name}</p>
        <p className="text-xs text-gray-600">{item.type} • {item.age}</p>
      </div>
      <span className="text-xs text-gray-500 flex-shrink-0 tabular-nums">{item.size}</span>
    </motion.div>
  );
}

export default function VaultPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black gradient-mesh">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What's in <span className="gradient-text">Your Vault?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            This is what a power user's WindyCloud looks like after 30 days. 
            <span className="text-white font-medium"> Imagine yours.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Mock terminal/vault window */}
          <div className="bg-windy-dark/60 backdrop-blur-lg border border-windy-blue/20 rounded-2xl overflow-hidden vault-inner-glow">
            {/* Window chrome */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-windy-blue/10 bg-windy-darker/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-gray-500 font-mono">☁️ windycloud.com/vault</span>
              </div>
              <div className="text-xs text-gray-600">47 models • 142 GB used</div>
            </div>

            {/* Vault header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-windy-blue/10">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔐</span>
                <div>
                  <h4 className="font-bold text-white">Sarah's Vault</h4>
                  <p className="text-xs text-gray-500">Pro Plan • 142 GB / 250 GB</p>
                </div>
              </div>
              {/* Usage bar */}
              <div className="hidden sm:block w-48">
                <div className="w-full bg-windy-darker rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '57%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="bg-gradient-to-r from-windy-blue to-windy-cyan h-2 rounded-full"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 text-right">57% used</p>
              </div>
            </div>

            {/* File list */}
            <div className="divide-y divide-windy-blue/5">
              {vaultItems.map((item, index) => (
                <VaultRow key={index} item={item} index={index} />
              ))}
            </div>

            {/* Bottom fade */}
            <div className="relative px-5 py-6 bg-gradient-to-t from-windy-dark/80 to-transparent text-center">
              <p className="text-sm text-gray-500 mb-3">+ 239 more files across 5 Windy apps</p>
              <motion.a
                href="#pricing"
                className="inline-block px-6 py-2.5 bg-gradient-to-r from-windy-blue to-windy-darkblue text-white rounded-lg font-semibold text-sm cta-glow transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Building Your Vault
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
