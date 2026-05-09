import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Heart } from 'lucide-react';
import profileImg from '../assets/profile.png'; // I'll need to move the generated image here

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Column */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={profileImg} 
                alt="Pradeepa - Web Developer" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue-100 rounded-full -z-10" />
          </motion.div>

          {/* Text Column */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Your partner in building a <span className="text-blue-600">better online presence</span>.
              </h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              I specialize in helping small businesses bridge the gap between their services and their online customers. Instead of just "building a website," I focus on creating a digital tool that solves your business problems and helps you grow.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              I believe that great design should be simple, and technology should be invisible. My approach is straightforward: I listen to your goals, identify your target audience, and build a clean, mobile-friendly site that works for you 24/7.
            </p>

            {/* Focus Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Result Focused</h4>
                  <p className="text-sm text-slate-500">Built to convert visitors into loyal customers.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Fast & Secure</h4>
                  <p className="text-sm text-slate-500">Optimized for speed and peace of mind.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a href="#services" className="inline-block px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-slate-200">
                Learn My Process
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
