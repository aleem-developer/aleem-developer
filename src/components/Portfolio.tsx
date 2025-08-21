import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Zap, Brain, Users, BarChart } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Filter className="w-4 h-4" /> },
    { id: 'prompt', name: 'Prompt Engineering', icon: <Brain className="w-4 h-4" /> },
    { id: 'workflow', name: 'AI Workflows', icon: <Zap className="w-4 h-4" /> },
    { id: 'multi-agent', name: 'Multi-Agent Systems', icon: <Users className="w-4 h-4" /> },
    { id: 'analytics', name: 'AI Analytics', icon: <BarChart className="w-4 h-4" /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Enterprise Customer Service AI",
      description: "Advanced multi-agent system handling 50,000+ customer inquiries daily with 98% satisfaction rate.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "multi-agent",
      technologies: ["GPT-4", "Multi-Agent Systems", "NLP", "Python"],
      metrics: {
        impact: "98% satisfaction rate",
        scale: "50,000+ daily inquiries",
        efficiency: "70% cost reduction"
      },
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Legal Document Analysis Platform",
      description: "Sophisticated prompt engineering solution for automated legal document analysis and contract review.",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "prompt",
      technologies: ["Claude", "Prompt Engineering", "RAG", "LangChain"],
      metrics: {
        impact: "95% accuracy",
        scale: "10,000+ documents",
        efficiency: "80% time savings"
      },
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Healthcare Diagnostic Assistant",
      description: "AI workflow system assisting medical professionals with diagnostic support and patient data analysis.",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "workflow",
      technologies: ["Medical AI", "Workflow Automation", "HIPAA Compliant", "TensorFlow"],
      metrics: {
        impact: "92% diagnostic accuracy",
        scale: "5,000+ patients",
        efficiency: "60% faster diagnosis"
      },
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Financial Trading Analytics",
      description: "Real-time AI analytics platform for market analysis, risk assessment, and trading strategy optimization.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "analytics",
      technologies: ["Machine Learning", "Real-time Analytics", "PyTorch", "Cloud Computing"],
      metrics: {
        impact: "25% ROI increase",
        scale: "1M+ data points",
        efficiency: "Real-time processing"
      },
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Educational Content Generator",
      description: "Intelligent system generating personalized educational content using advanced prompt engineering techniques.",
      image: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "prompt",
      technologies: ["GPT-4", "Educational AI", "Content Generation", "API Integration"],
      metrics: {
        impact: "40% better engagement",
        scale: "100,000+ students",
        efficiency: "90% automation rate"
      },
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      description: "Multi-agent system optimizing global supply chain operations with predictive analytics and automation.",
      image: "https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "multi-agent",
      technologies: ["Multi-Agent Systems", "Predictive Analytics", "IoT Integration", "Blockchain"],
      metrics: {
        impact: "30% cost reduction",
        scale: "Global operations",
        efficiency: "24/7 monitoring"
      },
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 mt-5 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing transformative AI solutions that have driven measurable results 
            for clients across industries worldwide.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-blue-600 transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-gray-900 transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Impact:</span>
                      <span className="font-medium text-emerald-600 dark:text-emerald-400">{project.metrics.impact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Scale:</span>
                      <span className="font-medium text-blue-600 dark:text-blue-400">{project.metrics.scale}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Efficiency:</span>
                      <span className="font-medium text-purple-600 dark:text-purple-400">{project.metrics.efficiency}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to See Your Project Here?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create innovative AI solutions that transform your business 
              and deliver exceptional results.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;