import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const plans = [
  {
    name: "Starter",
    price: { monthly: "$9", annual: "$7", lifetime: "$149" },
    period: { monthly: "/mo", annual: "/mo", lifetime: "one-time" },
    description: "Your first step into the Windy universe",
    badge: null,
    storage: "50 GB",
    features: [
      "50 GB storage",
      "Sync across all devices",
      "Model vault access",
      "Version history (30 days)",
      "Email support"
    ],
    cta: "Start Free Trial",
    highlighted: false,
    anchor: null,
  },
  {
    name: "Pro",
    price: { monthly: "$19", annual: "$15", lifetime: "$299" },
    period: { monthly: "/mo", annual: "/mo", lifetime: "one-time" },
    description: "For creators serious about their AI",
    badge: "MOST POPULAR",
    storage: "250 GB",
    features: [
      "250 GB storage",
      "Everything in Starter, plus:",
      "Cloud compute credits",
      "Full API access",
      "Version history (1 year)",
      "Priority support",
      "Advanced analytics dashboard"
    ],
    cta: "Start Free Trial",
    highlighted: true,
    anchor: { competitor: "Dropbox Plus", competitorPrice: "$12/mo", competitorStorage: "2 TB of files", edge: "But Dropbox can\'t store AI models, run compute, sync soul files, or version your voice clones." },
  },
  {
    name: "Business",
    price: { monthly: "$49", annual: "$39", lifetime: "$799" },
    period: { monthly: "/mo", annual: "/mo", lifetime: "one-time" },
    description: "For teams building the future",
    badge: "BEST VALUE",
    storage: "1 TB",
    features: [
      "1 TB storage",
      "Everything in Pro, plus:",
      "Team collaboration (10 seats)",
      "White-label options",
      "99.9% uptime SLA",
      "Dedicated support",
      "Custom integrations"
    ],
    cta: "Start Free Trial",
    highlighted: false,
    anchor: { competitor: "Google One", competitorPrice: "$10/mo for 2 TB", competitorStorage: "2 TB generic", edge: "Google stores files. WindyCloud stores intelligence — models, clones, soul files, compute. Different universe." },
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", annual: "Custom", lifetime: "Custom" },
    period: { monthly: "", annual: "", lifetime: "" },
    description: "Unlimited scale. White-glove treatment.",
    badge: null,
    storage: "Unlimited",
    features: [
      "Unlimited storage",
      "Everything in Business, plus:",
      "Dedicated infrastructure",
      "On-premise deployment",
      "Custom SLA & contracts",
      "24/7 phone support",
      "SOC 2 & HIPAA compliance"
    ],
    cta: "Contact Sales",
    highlighted: false,
    anchor: null,
  }
];

const billingOptions = [
  { key: 'monthly', label: 'Monthly' },
  { key: 'annual', label: 'Annual', badge: 'Save 20%' },
  { key: 'lifetime', label: 'Lifetime', badge: 'Own Forever' },
];

function WhatMakesUsDifferent() {
  const points = [
    { icon: '🧠', title: 'Not just files. Intelligence.', desc: 'Store AI models, voice clones, soul files, training data, and transcriptions — not just documents. WindyCloud understands what it\'s storing.' },
    { icon: '⚡', title: 'Cloud compute built in.', desc: 'Other clouds store. We compute. Run transcription, train models, generate clones — right where your data lives. Zero egress fees.' },
    { icon: '🔒', title: 'Sovereign by design.', desc: 'Your AI identity is the most personal data that exists. End-to-end encryption. Zero-knowledge option. GDPR, SOC 2, HIPAA ready.' },
    { icon: '🌐', title: 'The entire Windy ecosystem.', desc: 'WindyWord transcriptions → WindyCloud storage → WindyClone voice → WindyChat conversations. One account. One data layer. Everything connected.' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-2">Why Not Just Use Dropbox?</h3>
      <p className="text-gray-500 text-center text-sm mb-8">Because Dropbox was built for documents. WindyCloud was built for intelligence.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {points.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-windy-dark/60 border border-windy-blue/10 rounded-xl p-5"
          >
            <span className="text-2xl mb-2 block">{p.icon}</span>
            <h4 className="text-sm font-bold text-white mb-1">{p.title}</h4>
            <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function PricingCard({ plan, index, billing }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 ${
        plan.highlighted
          ? 'bg-gradient-to-b from-windy-blue/[0.12] to-windy-dark/80 border-2 border-windy-blue/50 shadow-2xl shadow-windy-blue/20 scale-[1.03] popular-ring'
          : 'bg-windy-dark/40 border border-windy-blue/10 hover:border-windy-blue/30'
      } card-shimmer`}
    >
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider ${
            plan.highlighted 
              ? 'bg-gradient-to-r from-windy-blue to-windy-cyan text-white shadow-lg shadow-windy-blue/30' 
              : 'bg-windy-dark border border-windy-blue/30 text-windy-blue'
          }`}>
            {plan.badge}
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center">
          <span className={`text-5xl font-bold ${plan.highlighted ? 'gradient-text' : 'text-white'}`}>{plan.price[billing]}</span>
          {plan.period[billing] && <span className="text-gray-500 ml-2">{plan.period[billing]}</span>}
        </div>
        {billing === 'annual' && plan.price.monthly !== 'Custom' && (
          <p className="text-xs text-green-400/80 mt-2 font-semibold">
            Save ${((parseFloat(plan.price.monthly.replace('$','')) - parseFloat(plan.price.annual.replace('$',''))) * 12).toFixed(0)}/year vs monthly
          </p>
        )}
        {billing === 'lifetime' && plan.price.lifetime !== 'Custom' && (
          <p className="text-xs text-green-400/80 mt-2 font-semibold">
            Pays for itself in {Math.ceil(parseFloat(plan.price.lifetime.replace('$','')) / parseFloat(plan.price.monthly.replace('$','')))} months
          </p>
        )}
        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-windy-blue/10 rounded-full">
          <span className="text-xs text-windy-cyan font-bold">{plan.storage}</span>
          <span className="text-xs text-gray-500">storage</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <svg className={`w-5 h-5 mr-2.5 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-windy-cyan' : 'text-windy-blue/60'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={feature.includes('Everything in') ? 'font-semibold text-windy-blue text-sm' : 'text-gray-400 text-sm'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {plan.anchor && (
        <div className="mb-6 bg-black/30 border border-gray-800/40 rounded-lg p-3">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-500">{plan.anchor.competitor}:</span>
            <span className="text-gray-400">{plan.anchor.competitorPrice} for {plan.anchor.competitorStorage}</span>
          </div>
          <p className="text-[10px] text-windy-cyan/80 italic">{plan.anchor.edge}</p>
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 ${
          plan.highlighted
            ? 'bg-gradient-to-r from-windy-blue to-windy-darkblue text-white cta-glow'
            : 'border-2 border-windy-blue/30 text-windy-blue hover:bg-windy-blue/10 hover:border-windy-blue/50'
        }`}
      >
        {plan.cta}
      </motion.button>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [billing, setBilling] = useState('lifetime');

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-black gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your AI Deserves a Home.
            <br />
            <span className="gradient-text">Pick the One That Fits.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every plan includes the full Windy ecosystem integration. Start free. Scale when you're ready.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900/80 rounded-xl p-1 border border-gray-800/60">
            {billingOptions.map(t => (
              <button key={t.key} onClick={() => setBilling(t.key)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  billing === t.key ? 'bg-windy-blue text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {t.label}
                {t.badge && billing === t.key && (
                  <span className="ml-2 text-[10px] font-bold">{t.badge}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} billing={billing} />
          ))}
        </div>

        <WhatMakesUsDifferent />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            All plans include a <span className="text-windy-blue font-semibold">14-day free trial</span>. No credit card required. Cancel anytime.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            🔒 Zero egress fees. Your data goes in, stays yours, comes out free. Unlike AWS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
