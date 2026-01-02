import React, { useState } from 'react';
import { Filter, Brain, Code, Zap, Lightbulb, Users, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: <Filter className="w-4 h-4 mr-2" /> },
    { id: 'prompt', name: 'Prompt Engineering', icon: <Brain className="w-4 h-4 mr-2" /> },
    { id: 'translator', name: 'A.Translator', icon: <Code className="w-4 h-4 mr-2" /> },
    { id: 'simulation', name: 'AI Experiments', icon: <Zap className="w-4 h-4 mr-2" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "Prompt Engineering Experiments",
      category: "prompt",
      technologies: ["GPT", "Claude", "Grok", "LLMs"],
      description: "Advanced prompts designed to produce precise, predictable results across AI models. Businesses and creators improved output quality and reduced wasted credits.",
      results: [
        { label: "Impact", value: "Improved AI Accuracy", icon: <Trophy className="w-5 h-5 text-emerald-400" /> },
        { label: "Scope", value: "50+ High-Precision Prompts", icon: <Brain className="w-5 h-5 text-blue-400" /> },
      ],
      link: "#",
    },
    {
      id: 2,
      title: "A.Translator",
      category: "translator",
      technologies: ["Python", "LLMs", "PDF Parsing", "Docx Conversion"],
      description: "Python tool that converts PDFs to DOCX in multiple languages with high accuracy and speed — helping clients save 60% time in document processing.",
      results: [
        { label: "Accuracy", value: "99%+", icon: <Trophy className="w-5 h-5 text-emerald-400" /> },
        { label: "Efficiency", value: "60% Faster Output", icon: <Zap className="w-5 h-5 text-purple-400" /> },
      ],
      link: "#",
    },
    {
      id: 3,
      title: "Python AI Smart City Simulation",
      category: "simulation",
      technologies: ["Python", "Simulation", "AI Logic"],
      description: "A personal AI simulation project demonstrating smart city operations. Showcased advanced Python and AI capabilities applicable to real-world problem solving.",
      results: [
        { label: "Learning", value: "Advanced AI Insights", icon: <Lightbulb className="w-5 h-5 text-fuchsia-400" /> },
        { label: "Experiment", value: "Smart City Simulation", icon: <Users className="w-5 h-5 text-blue-400" /> },
      ],
      link: "#",
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 font-inter bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            My <span className="bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">AI Projects & Experiments</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my AI experiments, tools, and prompt engineering work — all **truthful, client-ready, and impactful**.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="p-8 z-10">
                  <h3 className="text-2xl font-bold mb-4 text-sky-400">{project.title}</h3>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {project.results.map((res, i) => (
                      <div key={i} className="flex items-center gap-2 text-white font-medium">
                        {res.icon}
                        <span className="text-sm">{res.label}: <span className="text-sky-400 font-semibold">{res.value}</span></span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      View Project & Hire Me
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slide-up { 
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.8s ease forwards; }
      `}</style>
    </section>
  );
};

export default Portfolio;
