import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote: "I travel to 40+ countries a year. WindyCloud keeps all my offline language packs synced across devices. I can land in Tokyo and have my translation models ready instantly.",
    author: "Sarah Chen",
    role: "Digital Nomad & Travel Blogger",
    avatar: "🌏"
  },
  {
    quote: "My WindyClone avatar is my brand now. Knowing my voice model and training data are backed up on WindyCloud means I never worry about losing my digital identity.",
    author: "Marcus Rodriguez",
    role: "Content Creator",
    avatar: "🎬"
  },
  {
    quote: "We use WindyCloud Business for our entire team. 50 voice models, thousands of transcriptions, all synced and searchable. Game changer for our multilingual customer support.",
    author: "Priya Sharma",
    role: "Head of Customer Success, TechCorp",
    avatar: "💼"
  },
  {
    quote: "As a developer, I love that I can store my specialized translation models locally in WindyCloud. No dependency on HuggingFace uptime. My apps just work.",
    author: "Alex Kim",
    role: "AI Engineer",
    avatar: "👨‍💻"
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-windy-dark/50 backdrop-blur-sm border border-windy-blue/20 rounded-xl p-6 hover:border-windy-blue/50 transition-all duration-300"
    >
      <div className="flex items-start mb-4">
        <div className="text-4xl mr-4">{testimonial.avatar}</div>
        <div>
          <p className="font-bold">{testimonial.author}</p>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">"{testimonial.quote}"</p>
      <div className="flex text-windy-blue mt-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">AI Creators</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of users who trust WindyCloud with their most valuable AI data.
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
