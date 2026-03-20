import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for getting started with the Windy ecosystem",
    features: [
      "50GB storage",
      "Sync across all devices",
      "Model vault access",
      "Version history (30 days)",
      "Email support"
    ],
    highlighted: false
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Most popular for serious AI creators",
    features: [
      "250GB storage",
      "Everything in Starter, plus:",
      "Cloud compute credits",
      "API access",
      "Version history (1 year)",
      "Priority support",
      "Advanced analytics"
    ],
    highlighted: true
  },
  {
    name: "Business",
    price: "$49",
    period: "/month",
    description: "For teams and power users",
    features: [
      "1TB storage",
      "Everything in Pro, plus:",
      "Team collaboration",
      "White-label options",
      "SLA guarantee",
      "Dedicated support",
      "Custom integrations"
    ],
    highlighted: false
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Unlimited scale for organizations",
    features: [
      "Unlimited storage",
      "Everything in Business, plus:",
      "Dedicated infrastructure",
      "On-premise deployment",
      "Custom contracts",
      "24/7 phone support",
      "Compliance & security"
    ],
    highlighted: false
  }
];

function PricingCard({ plan, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-8 ${
        plan.highlighted
          ? 'bg-gradient-to-br from-windy-blue/20 to-windy-darkblue/20 border-2 border-windy-blue shadow-2xl shadow-windy-blue/20 scale-105'
          : 'bg-windy-dark/50 border border-windy-blue/20'
      } backdrop-blur-sm hover:shadow-xl hover:shadow-windy-blue/10 transition-all duration-300`}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-windy-blue to-windy-darkblue text-white px-4 py-1 rounded-full text-sm font-semibold">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold gradient-text">{plan.price}</span>
          <span className="text-gray-400 ml-2">{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <svg className="w-5 h-5 text-windy-blue mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={feature.includes('Everything in') ? 'font-semibold text-windy-blue' : 'text-gray-300'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
          plan.highlighted
            ? 'bg-gradient-to-r from-windy-blue to-windy-darkblue text-white hover:shadow-lg hover:shadow-windy-blue/50'
            : 'border-2 border-windy-blue text-windy-blue hover:bg-windy-blue/10'
        }`}
      >
        {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
      </button>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include access to the full Windy ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center text-gray-400"
        >
          <p>All plans come with a 14-day free trial. No credit card required.</p>
        </motion.div>
      </div>
    </section>
  );
}
