import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-24 px-6 max-w-4xl mx-auto"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Information We Collect</h2>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Use of Information</h2>
        <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft.</p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Data Sharing</h2>
        <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Your Rights</h2>
        <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-sm">Last updated: May 2026</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
