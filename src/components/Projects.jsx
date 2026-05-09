import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    title: "Luxury Jewelry Showcase Website",
    problem: "Small jewelry businesses rely heavily on Instagram and lack a professional platform to showcase products and handle customer inquiries efficiently.",
    solution: "Developed a premium, mobile-first jewelry website with elegant UI, product showcase, and direct WhatsApp ordering to improve customer engagement and build brand trust.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: project1,
    live: "https://jewelrry-website.vercel.app/",
    github: "https://github.com/PradeepaKandasamy/jewelry"
  },
  {
    title: "Legal Services Portal",

    problem:
      "Traditional legal consultation systems often rely on manual communication, delayed appointment scheduling, and inefficient case management processes, creating difficulties for both clients and legal professionals.",

    solution:
      "Developed a modern cinematic legal-tech platform that streamlines legal consultations, appointment booking, case tracking, and secure client communication through an immersive and user-friendly digital experience.",

    tech: [
      "React JS",
      "Tailwind CSS",
      "Framer Motion",
      "Firebase",
      "Calendar API"
    ],

    image: project2,

    live: "https://legal-rose-one.vercel.app/",

    github: "https://github.com/PradeepaKandasamy/legal"
  },
 {
  title: "GrowthX SaaS Marketing Agency",

  problem:
    "Modern SaaS startups often struggle with low conversion rates, weak brand identity, and ineffective digital marketing strategies that limit scalable growth.",

  solution:
    "Developed a futuristic SaaS marketing agency website with cinematic UI, immersive animations, interactive dashboard visuals, and high-converting sections designed to showcase modern growth solutions for SaaS brands.",

  tech: [
    "React JS",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "React Router"
  ],

  image: project3,

  live: "https://saas-pi-umber.vercel.app/",

  github: "https://github.com/PradeepaKandasamy/saas"
}
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Real-world projects with <span className="text-blue-600">real business impact</span>.
            </h2>
            <p className="text-lg text-slate-600">
              I don't just build websites; I build solutions that help businesses solve problems and reach their goals.
            </p>
          </div>
          <a href="https://github.com/PradeepaKandasamy" target="_blank" rel="noopener noreferrer" className="hidden md:flex px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm">
            View All Projects
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Image Preview */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider">The Problem</p>
                    <p className="text-sm text-slate-600 leading-relaxed italic">"{project.problem}"</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wider">The Solution</p>
                    <p className="text-sm text-slate-700 leading-relaxed flex gap-2">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-green-500" />
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-semibold rounded-lg border border-slate-100">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-slate-700 text-sm font-bold rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 flex justify-center md:hidden">
          <a href="https://github.com/PradeepaKandasamy" target="_blank" rel="noopener noreferrer" className="w-full text-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 shadow-sm">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
