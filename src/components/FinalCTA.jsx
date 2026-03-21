import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-windy-dark to-windy-darker" />
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-windy-blue rounded-full blur-[150px]"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-windy-cyan rounded-full blur-[120px]"
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Voice. Your Clone.
            <br />
            Your Languages. Your Journeys.
            <br />
            <span className="gradient-text">One Cloud. Yours.</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every day you wait is another day your AI data lives scattered across devices, 
            vulnerable and disconnected. <span className="text-white">Give it the home it deserves.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.a
              href="#pricing"
              className="px-12 py-5 bg-gradient-to-r from-windy-blue to-windy-darkblue text-white rounded-xl font-bold text-lg cta-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Claim Your Vault — Free for 14 Days
            </motion.a>
          </div>

          <p className="text-gray-600 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>

          {/* Social proof nudge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 inline-flex items-center gap-3 px-5 py-2.5 bg-windy-blue/5 border border-windy-blue/15 rounded-full"
          >
            <div className="flex -space-x-2">
              {['🌏', '🎬', '💼', '👨‍💻', '🎨'].map((emoji, i) => (
                <span key={i} className="w-7 h-7 rounded-full bg-windy-dark border border-windy-blue/20 flex items-center justify-center text-sm">{emoji}</span>
              ))}
            </div>
            <span className="text-sm text-gray-400">
              <span className="text-windy-blue font-semibold">10,000+</span> creators already building with WindyCloud
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
