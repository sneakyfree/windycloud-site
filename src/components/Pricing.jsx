import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// The console owns checkout — it holds the signed-in session, and it proxies to
// the account-server, which owns the ONE Stripe integration. This page never
// touches Stripe. `plan` + `cycle` let the console send someone straight there
// instead of making them find the same button a second time.
const CONSOLE_URL = 'https://cloud.windycloud.com';

function checkoutHref(plan, billing) {
  if (plan.tier === 'hurricane') return 'mailto:support@windycloud.com?subject=Windy%20Hurricane%20enquiry';
  if (plan.tier === 'free') return `${CONSOLE_URL}/login`;
  return `${CONSOLE_URL}/billing?plan=${plan.tier}&cycle=${billing}`;
}

// ─── The ONE ecosystem ladder ──────────────────────────────────────────────
//
// Source of truth: windy-pro/docs/PRICING-TIERS.md (locked 2026-08-06,
// amended 2026-08-07). Do not edit prices or storage here without changing
// that file — this page is a mirror, not an authority.
//
// Amended 2026-08-07 by Grant:
//  · "Lifetime / Own Forever" is GONE, ecosystem-wide. Storage is a permanent
//    recurring cost; a one-time payment for it is a permanent liability. The
//    old lifetime SKUs went underwater against R2 cost between 9.8 months
//    (Tornado, 10 TB for $1,499) and 8.3 years, after which every customer
//    cost money each month forever with no way to stop. The old "Pays for
//    itself in N months" badge divided the lifetime price by our OWN monthly
//    price, so it measured the discount, not whether the plan was viable.
//  · Breeze and Gale are retired as tier names. "Windy Breeze" sat ABOVE
//    "Windy Max" while sounding smaller — and cost less ($9 vs $14.99) for 3x
//    the storage. Customers would systematically have bought the wrong plan.
//    Their capacity was folded into a larger Ultra and Max.
//  · Tornado is 2 TB, not 10 TB. 10 TB costs $153.60/mo in R2 against $99 of
//    revenue — it lost money on every customer, every month, even monthly.
//
// ⚠️ Claims removed deliberately, do not restore without building them first:
// team seats, white-label, on-prem deployment, 99.9% uptime SLA, SOC 2 and
// HIPAA compliance, dedicated infrastructure, 24/7 phone support. None of
// those exist. Advertising compliance we do not hold is a legal problem, not
// a marketing flourish.

const personalPlans = [
  {
    name: "Free",
    tier: "free",
    price: { monthly: "$0", annual: "$0" },
    period: { monthly: "forever", annual: "forever" },
    description: "Everything local, unlimited, forever",
    badge: null,
    storage: "500 MB",
    features: [
      "500 MB cloud storage",
      "Unlimited local voice-to-text",
      "1 signed-in device",
      "All 10 bundled models",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Windy Pro",
    tier: "pro",
    price: { monthly: "$4.99", annual: "$49" },
    period: { monthly: "/mo", annual: "/yr" },
    description: "Your first step into the cloud",
    badge: null,
    storage: "5 GB",
    features: [
      "5 GB cloud storage",
      "Everything in Free, plus:",
      "Cloud transcription (Turbo-class)",
      "15 min max cloud recording",
      "Sync across 3 devices",
    ],
    cta: "Choose Pro",
    highlighted: false,
  },
  {
    name: "Windy Ultra",
    tier: "translate",
    price: { monthly: "$8.99", annual: "$79" },
    period: { monthly: "/mo", annual: "/yr" },
    description: "For people working across languages",
    badge: "MOST POPULAR",
    storage: "25 GB",
    features: [
      "25 GB cloud storage",
      "Everything in Pro, plus:",
      "Flagship cloud model",
      "Translation + speech translation",
      "30 min max cloud recording",
      "Sync across 5 devices",
    ],
    cta: "Choose Ultra",
    highlighted: true,
  },
  {
    name: "Windy Max",
    tier: "translate_pro",
    price: { monthly: "$14.99", annual: "$149" },
    period: { monthly: "/mo", annual: "/yr" },
    description: "Everything we make, at full speed",
    badge: "BEST VALUE",
    storage: "100 GB",
    features: [
      "100 GB cloud storage",
      "Everything in Ultra, plus:",
      "Priority processing queue",
      "Voice clone",
      "60 min max cloud recording",
      "Sync across 10 devices",
    ],
    cta: "Choose Max",
    highlighted: false,
  },
];

const bulkPlans = [
  {
    name: "Windy Tempest",
    tier: "tempest",
    price: { monthly: "$49", annual: "$490" },
    period: { monthly: "/mo", annual: "/yr" },
    description: "Years of video, voice and clone data",
    badge: null,
    storage: "1 TB",
    features: [
      "1 TB cloud storage",
      "Everything in Max, plus:",
      "Sync across 25 devices",
    ],
    cta: "Choose Tempest",
    highlighted: false,
  },
  {
    name: "Windy Tornado",
    tier: "tornado",
    price: { monthly: "$99", annual: "$990" },
    period: { monthly: "/mo", annual: "/yr" },
    description: "For archives that keep growing",
    badge: null,
    storage: "2 TB",
    features: [
      "2 TB cloud storage",
      "Everything in Tempest, plus:",
      "Sync across 50 devices",
    ],
    cta: "Choose Tornado",
    highlighted: false,
  },
  {
    name: "Windy Hurricane",
    tier: "hurricane",
    price: { monthly: "Custom", annual: "Custom" },
    period: { monthly: "", annual: "" },
    description: "Storage priced to your organisation",
    badge: null,
    storage: "Custom",
    features: [
      "Custom storage",
      "Everything in Tornado, plus:",
      "Priced and supported per contract",
    ],
    cta: "Talk to us",
    highlighted: false,
  },
];

const billingOptions = [
  { key: 'monthly', label: 'Monthly' },
  { key: 'annual', label: 'Annual', badge: 'Two months free' },
];

/** Annual saving vs paying monthly for a year. Both figures are totals. */
function annualSaving(plan) {
  const monthly = parseFloat(String(plan.price.monthly).replace('$', ''));
  const annual = parseFloat(String(plan.price.annual).replace('$', ''));
  if (!isFinite(monthly) || !isFinite(annual) || monthly === 0) return null;
  const saved = monthly * 12 - annual;
  return saved > 0 ? Math.round(saved) : null;
}

function WhatMakesUsDifferent() {
  const points = [
    { icon: '🧠', title: 'Not just files. Intelligence.', desc: 'Store AI models, voice clones, soul files, training data and transcriptions — not just documents. WindyCloud understands what it\'s storing.' },
    { icon: '⚡', title: 'Cloud compute built in.', desc: 'Other clouds store. We compute. Run transcription, train models, generate clones — right where your data lives. Zero egress fees.' },
    { icon: '🔒', title: 'Encrypted, and yours.', desc: 'Your AI identity is the most personal data that exists. Encrypted in transit and at rest, and you can export or delete all of it at any time.' },
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
  const saving = billing === 'annual' ? annualSaving(plan) : null;

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
          <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider whitespace-nowrap ${
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
        {saving !== null && (
          <p className="text-xs text-green-400/80 mt-2 font-semibold">
            Save ${saving}/year vs monthly
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

      <motion.a
        href={checkoutHref(plan, billing)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`block text-center w-full py-3.5 rounded-xl font-semibold transition-all duration-300 ${
          plan.highlighted
            ? 'bg-gradient-to-r from-windy-blue to-windy-darkblue text-white cta-glow'
            : 'border-2 border-windy-blue/30 text-windy-blue hover:bg-windy-blue/10 hover:border-windy-blue/50'
        }`}
      >
        {plan.cta}
      </motion.a>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [billing, setBilling] = useState('monthly');

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-black gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your AI Deserves a Home.
            <br />
            <span className="gradient-text">Pick the One That Fits.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            One plan for the whole ecosystem. Buy it here or in the app — it unlocks both.
          </p>
        </motion.div>

        {/* The bundle statement — one plan, every product. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-10 text-center bg-windy-blue/[0.07] border border-windy-blue/20 rounded-xl px-6 py-4"
        >
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-windy-cyan">Every paid plan includes Windy Word.</span>{' '}
            The voice-to-text app, its cloud transcription and its translation come with your
            storage — one price, one account, nothing extra to buy.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalPlans.map((plan, index) => (
            <PricingCard key={plan.tier} plan={plan} index={index} billing={billing} />
          ))}
        </div>

        {/* Bulk storage — a different class of plan, kept visually separate so
            nobody has to work out whether "Tempest" outranks "Max". */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Need a lot more room?</h3>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Everything in Windy Max, with storage measured in terabytes. For
              archives of video, voice and clone data.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {bulkPlans.map((plan, index) => (
              <PricingCard key={plan.tier} plan={plan} index={index} billing={billing} />
            ))}
          </div>
        </div>

        <WhatMakesUsDifferent />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            Change plan or cancel at any time. Annual plans are billed once a year.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            🔒 Zero egress fees. Your data goes in, stays yours, and comes out free.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
