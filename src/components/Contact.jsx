import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  // Configuration
  const phoneNumber = "917904578239"; // Replace with your actual WhatsApp number
  const message = "Hi, I saw your portfolio and I want to work with you";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Available for freelance work</span>
        </motion.div>

        {/* Heading & Subtext */}
        <div className="space-y-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
          >
            Let’s Work <span className="text-blue-600">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Have a project in mind? Feel free to reach out.
          </motion.p>
        </div>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#2563EB] text-white font-bold text-lg rounded-2xl shadow-2xl shadow-blue-200 hover:bg-[#1D4ED8] hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Whatsapp
          </a>
        </motion.div>

        {/* Email as a subtle alternative */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-slate-400 text-sm font-medium"
        >
          Or email at <a href="mailto:pradeepakandasamy02@gmail.com" className="text-slate-900 hover:text-blue-600 transition-colors font-bold">pradeepakandasamy02@gmail.com</a>
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
