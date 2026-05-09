import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
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
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Terms of Service</h1>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on the website for personal, non-commercial transitory viewing only.</p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Disclaimer</h2>
        <p>The materials on the website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Limitations</h2>
        <p>In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials.</p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-sm">Last updated: May 2026</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;
