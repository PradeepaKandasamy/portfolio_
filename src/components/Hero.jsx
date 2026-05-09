import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Smartphone, Globe, BarChart3 } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden pt-20 pb-16 px-6 md:px-12 lg:px-24">
      {/* Background subtle mesh gradient or patterns can go here */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -z-10 skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          className="flex flex-col space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Available for freelance work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight"
          >
            I build modern websites that help your <span className="text-blue-600">business grow</span> online.
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed"
          >
            Helping small businesses create clean, mobile-friendly websites that attract more customers and build trust.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects" className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-200 flex items-center justify-center">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center">
              Contact Me
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="pt-4 flex items-center gap-6 text-sm text-slate-500"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>SEO Optimized</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Fast Loading</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Responsive</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual (Professional Image) */}
        <motion.div 
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          <div className="relative z-10 w-full aspect-[4/3] rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            <img 
              src={heroImg} 
              alt="Professional Developer Workspace" 
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />
          
          {/* Floating Feature Tags */}
          <motion.div 
            className="absolute -right-4 top-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="p-2 bg-blue-50 rounded-lg">
              <Globe className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Global Reach</p>
              <p className="text-[10px] text-slate-500">SEO Optimized</p>
            </div>
          </motion.div>

          <motion.div 
            className="absolute -left-8 bottom-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="p-2 bg-green-50 rounded-lg">
              <Smartphone className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Mobile First</p>
              <p className="text-[10px] text-slate-500">Responsive Design</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
