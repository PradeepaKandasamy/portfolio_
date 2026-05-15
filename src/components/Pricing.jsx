import React from 'react';
import { Check, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const phoneNumber = "917904578239";

  const getWhatsappLink = (planName) => {
    const message = `Hi Pradeepa, I'm interested in your ${planName} plan`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const plans = [
    {
      title: "Basic",
      price: "₹1500",
      description: "Perfect for a simple online presence.",
      features: [
        "Responsive website",
        "3–5 pages",
        "WhatsApp integration",
        "Clean UI design",
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      title: "Standard",
      price: "₹5000",
      description: "The ideal balance for growing businesses.",
      features: [
        "Everything in Basic",
        "Advanced UI design",
        "Product showcase",
        "Custom sections",
        "SEO Optimization",
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      title: "Premium",
      price: "₹10000",
      description: "A high-performance custom solution.",
      features: [
        "Fully customized website",
        "Advanced features",
        "Priority delivery",
        "Ongoing support",
        "Content Management (CMS)",
      ],
      popular: false,
      cta: "Contact Me"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
          >
            Flexible Pricing for <span className="text-blue-600">Your Vision</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            I believe in value-based pricing. Let's build something that grows your business.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${plan.popular
                ? 'border-blue-600 shadow-2xl shadow-blue-100 scale-105 z-10 bg-white'
                : 'border-slate-100 shadow-sm hover:shadow-xl bg-white'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-slate-500">Starting from</span>
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                </div>
                <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className={`mt-1 rounded-full p-0.5 ${plan.popular ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsappLink(plan.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 hover:scale-[1.02]'
                  : 'bg-slate-50 text-slate-900 hover:bg-slate-100 hover:scale-[1.02]'
                  }`}
              >
                {plan.cta}
                {plan.popular && <MessageSquare size={18} />}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-slate-600 text-sm ">
              <span className="font-bold text-slate-900">Note:</span> Final pricing depends on project requirements, features, and complexity.
              <a
                href={getWhatsappLink("Custom Project")}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 font-semibold hover:underline"
              >
                Get a custom quote →
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
