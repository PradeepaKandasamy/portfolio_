import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: "React JS", color: "text-blue-500", bgColor: "bg-blue-50" },
    { name: "HTML5", color: "text-orange-500", bgColor: "bg-orange-50" },
    { name: "CSS3", color: "text-blue-600", bgColor: "bg-blue-50" },
    { name: "JavaScript", color: "text-yellow-500", bgColor: "bg-yellow-50" },
    { name: "Node JS", color: "text-green-600", bgColor: "bg-green-50" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        {/* Header */}
        <div className="mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3"
          >
            Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-slate-900"
          >
            My Tech Stack
          </motion.h2>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-default"
            >
              {/* Simple Minimal Icon Placeholder / Initial */}
              <div className={`w-12 h-12 ${tech.bgColor} rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-12`}>
                <span className={`text-xl font-black ${tech.color}`}>
                  {tech.name === "JavaScript" ? "JS" : tech.name.split(' ')[0][0]}
                </span>
              </div>
              
              <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
                {tech.name}
              </span>

              {/* Hover Highlight Glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-600/0 group-hover:bg-blue-600/[0.02] transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Minimal description */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-slate-400 text-sm italic"
        >
          Building modern web experiences with industry-standard tools.
        </motion.p>
      </div>
    </section>
  );
};

export default TechStack;
