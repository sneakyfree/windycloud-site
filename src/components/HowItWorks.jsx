import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your WindyCloud account. One login for every Windy app — WindyWord, WindyClone, WindyChat, WindyTraveler.",
    icon: "✨"
  },
  {
    number: "02",
    title: "Connect Your Apps",
    description: "Link your Windy apps to your WindyCloud account. Your transcriptions, models, and data automatically flow to the cloud.",
    icon: "🔗"
  },
  {
    number: "03",
    title: "Everything Syncs",
    description: "Work on your laptop, switch to your phone, access from anywhere. Your voice models, soul files, and history follow you.",
    icon: "☁️"
  }
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-windy-blue to-windy-darkblue flex items-center justify-center text-4xl shadow-lg shadow-windy-blue/30">
          {step.icon}
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="text-6xl font-bold text-windy-blue/20 mb-2">{step.number}</div>
          <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
          <p className="text-gray-400">{step.description}</p>
        </div>
      </div>
      
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-windy-blue to-transparent" />
      )}
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three steps to unified AI data across every device and app.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24 relative">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#pricing"
            className="inline-block px-8 py-4 bg-windy-blue text-white rounded-lg font-semibold text-lg hover:bg-windy-darkblue transition-all duration-300 hover:shadow-xl hover:shadow-windy-blue/30"
          >
            Start Syncing Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
