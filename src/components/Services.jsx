import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout,
  Rocket,
  RefreshCw,
  Layers,
  ArrowRight,
  X,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    title: "Business Website Development",
    description:
      "Professional, multi-page websites designed to establish authority and build trust with your corporate clients.",
    details:
      "Includes responsive design, SEO optimization, admin dashboard integration, contact forms, analytics setup, and fast-loading performance tailored for modern businesses.",
    icon: <Layout className="w-8 h-8" />,
    gradient: "from-blue-600 to-indigo-600",
    shadow: "hover:shadow-blue-200/50"
  },
  {
    title: "Landing Page Design",
    description:
      "High-converting single-page sites built specifically to capture leads and turn visitors into customers.",
    details:
      "Focused on conversion optimization with CTA sections, animations, lead forms, testimonials, pricing sections, and modern UI/UX strategies.",
    icon: <Rocket className="w-8 h-8" />,
    gradient: "from-indigo-600 to-violet-600",
    shadow: "hover:shadow-indigo-200/50"
  },
  {
    title: "Website Redesign",
    description:
      "Modernizing your outdated website with a fresh design and improved performance for a better user experience.",
    details:
      "Redesign includes UI modernization, mobile responsiveness, speed optimization, dark/light mode support, and improved navigation flow.",
    icon: <RefreshCw className="w-8 h-8" />,
    gradient: "from-cyan-600 to-blue-600",
    shadow: "hover:shadow-cyan-200/50"
  },
  {
    title: "Product Showcase Websites",
    description:
      "Creative layouts that put your product in the spotlight, highlighting features and benefits with visual impact.",
    details:
      "Perfect for SaaS, startups, and product launches with immersive visuals, interactive sections, feature highlights, and premium animations.",
    icon: <Layers className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    shadow: "hover:shadow-blue-200/50"
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // WhatsApp Configuration
  const phoneNumber = "917904578239";
  
  const getWhatsappLink = (context) => {
    const message = `Hi, I'm interested in learning more about your ${context} services.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-widest uppercase text-xs"
          >
            Elevate Your Digital Presence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
          >
            Premium solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">modern brands</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            I combine cutting-edge technology with world-class design to build websites that don't just look good—they drive results.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative p-8 bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Box */}
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center text-blue-600 font-bold text-sm tracking-wide transition-all duration-300 group/btn"
                >
                  <span className="relative">
                    Learn More
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600/30 transition-all duration-300 group-hover/btn:w-full" />
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative rounded-[2.5rem] overflow-hidden bg-slate-900 p-8 md:p-12 lg:p-16 border border-white/10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_50%)]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left space-y-4 max-w-2xl">
              <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Ready to transform your <span className="text-blue-400">digital presence</span>?
              </h4>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                Let's discuss how we can scale your business with a high-end web solution.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a 
                href={getWhatsappLink("Web Development")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-blue-600 text-white text-center font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Free Discovery Call
              </a>
              <a href="#projects" className="px-10 py-5 bg-white/5 text-white text-center font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Premium Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={`service-${services.indexOf(selectedService)}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all duration-300 z-20"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-12">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${selectedService.gradient} rounded-3xl flex items-center justify-center text-white shadow-xl`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      {selectedService.title}
                    </h2>
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      Premium Service
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-10">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">The Overview</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>

                  <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">What You Can Expect</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedService.details.split(', ').map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-600">
                          <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <a 
                      href={getWhatsappLink(selectedService.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-5 bg-blue-600 text-white text-center font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-200"
                    >
                      Get a Custom Quote
                    </a>
                    <a 
                      href={getWhatsappLink(`Consultation for ${selectedService.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-5 bg-white text-slate-900 text-center font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all duration-300"
                    >
                      Schedule a Consultation
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;