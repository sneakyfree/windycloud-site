import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote: "I store 47 custom voice models across 3 devices. WindyCloud syncs them in seconds. I switched from Dropbox and never looked back — it actually understands what a .soul file IS.",
    author: "Sarah Chen",
    role: "Digital Nomad • 40+ countries/year",
    avatar: "🌏",
    metric: "47 voice models synced"
  },
  {
    quote: "My WindyClone avatar IS my brand. 2.1 million followers see my AI twin every day. If I lost that voice model, I'd lose everything. WindyCloud is my insurance policy — encrypted, versioned, mine.",
    author: "Marcus Rodriguez",
    role: "Content Creator • 2.1M followers",
    avatar: "🎬",
    metric: "340 GB of clone data"
  },
  {
    quote: "We deployed 50 WindyClone avatars for multilingual customer support. All voice models, all training data, all stored on WindyCloud Business. Our customer satisfaction jumped 34% in one quarter.",
    author: "Priya Sharma",
    role: "Head of CX, GlobalTech • 200 employees",
    avatar: "💼",
    metric: "34% CSAT improvement"
  },
  {
    quote: "I downloaded all 2,000 WindyTranslate models to my vault. No more HuggingFace dependency. My translation API serves 12,000 requests per hour from models I OWN, stored on infrastructure I trust.",
    author: "Alex Kim",
    role: "AI Engineer • Translation API startup",
    avatar: "👨‍💻",
    metric: "12K requests/hour"
  }
];

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="bg-windy-dark/40 backdrop-blur-sm border border-windy-blue/10 rounded-2xl p-7 hover:border-windy-blue/30 transition-all duration-500 card-shimmer vault-inner-glow"
    >
      {/* Metric badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-windy-blue/10 border border-windy-blue/20 rounded-full mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-windy-cyan"></span>
        <span className="text-xs font-semibold text-windy-blue">{testimonial.metric}</span>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6 text-[15px]">"{testimonial.quote}"</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{testimonial.avatar}</div>
          <div>
            <p className="font-bold text-white text-sm">{testimonial.author}</p>
            <p className="text-xs text-gray-500">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex text-windy-blue/60">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            They Built Their AI Empires Here.
            <br />
            <span className="gradient-text">You're Next.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Creators, engineers, and enterprises trust WindyCloud with the data that defines them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
