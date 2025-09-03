import { useState } from 'react';
import { Filter, Zap, Brain, Users, BarChart, Trophy, ArrowUpCircle, Clock, CheckCircle, Code, Lightbulb } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Filter className="w-4 h-4 mr-2" /> },
    { id: 'prompt', name: 'Prompt Engineering', icon: <Brain className="w-4 h-4 mr-2" /> },
    { id: 'workflow', name: 'AI Workflows', icon: <Zap className="w-4 h-4 mr-2" /> },
    { id: 'multi-agent', name: 'Multi-Agent Systems', icon: <Users className="w-4 h-4 mr-2" /> },
    { id: 'analytics', name: 'AI Analytics', icon: <BarChart className="w-4 h-4 mr-2" /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Enterprise Customer Service AI",
      category: "multi-agent",
      technologies: ["GPT-4", "Multi-Agent Systems", "Python", "React"],
      image: "https://images.unsplash.com/photo-1516110992765-e11189417c0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D",
      challenge: "Manual customer support processes were slow, inconsistent, and costly, leading to long wait times and low customer satisfaction.",
      solution: "Developed an advanced multi-agent system where a triage agent, a knowledge base agent, and a resolution agent collaborate to handle inquiries autonomously.",
      results: {
        impact: { label: "Satisfaction Rate", value: "98%", icon: <Trophy className="w-5 h-5 text-emerald-400" /> },
        scale: { label: "Daily Inquiries", value: "50,000+", icon: <Users className="w-5 h-5 text-blue-400" /> },
        efficiency: { label: "Cost Reduction", value: "70%", icon: <ArrowUpCircle className="w-5 h-5 text-purple-400" /> }
      },
      link: "#",
    },
    {
      id: 2,
      title: "Legal Document Analysis Platform",
      category: "prompt",
      technologies: ["LLMs", "Prompt Engineering", "RAG", "Next.js"],
      image: "https://images.unsplash.com/photo-1549495146-5e58980b188c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWklMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww",
      challenge: "Reviewing thousands of legal documents and contracts manually was time-intensive and prone to human error, creating significant legal risk.",
      solution: "Engineered a sophisticated prompt-chaining system using advanced Retrieval-Augmented Generation (RAG) to automate contract review, clause extraction, and compliance checks.",
      results: {
        impact: { label: "Accuracy", value: "95%", icon: <CheckCircle className="w-5 h-5 text-emerald-400" /> },
        scale: { label: "Documents Processed", value: "10,000+", icon: <Code className="w-5 h-5 text-blue-400" /> },
        efficiency: { label: "Time Savings", value: "80%", icon: <Clock className="w-5 h-5 text-purple-400" /> }
      },
      link: "#",
    },
    {
      id: 3,
      title: "Financial Trading Analytics",
      category: "analytics",
      technologies: ["LLMs", "Data Automation", "Python", "React"],
      image: "https://images.unsplash.com/photo-1518556538356-02e74244f777?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFpX2FuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D",
      challenge: "Traders needed real-time market insights and risk assessment, but traditional analytics platforms were slow and lacked predictive capabilities.",
      solution: "Built a real-time AI analytics platform that processes millions of data points, identifies market trends, and provides predictive risk analysis using LLMs for natural language queries.",
      results: {
        impact: { label: "ROI Increase", value: "25%", icon: <Trophy className="w-5 h-5 text-emerald-400" /> },
        scale: { label: "Data Points", value: "1M+", icon: <BarChart className="w-5 h-5 text-blue-400" /> },
        efficiency: { label: "Processing Speed", value: "Real-time", icon: <Zap className="w-5 h-5 text-purple-400" /> }
      },
      link: "#",
    },
    {
      id: 4,
      title: "Automated Supply Chain Optimization",
      category: "workflow",
      technologies: ["AI Workflows", "Python", "Automation"],
      image: "https://images.unsplash.com/photo-1518556538356-02e74244f777?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1cHBseSUyMGNoYWluJTIwYW5hbHl0aWNzfGVufDB8fDB8fHww",
      challenge: "Inefficient and manual supply chain management led to bottlenecks, inventory surpluses, and delayed deliveries, impacting profitability.",
      solution: "Created an intelligent workflow automation system that uses predictive analytics to optimize inventory, forecast demand, and automate order processing across global operations.",
      results: {
        impact: { label: "Cost Reduction", value: "30%", icon: <ArrowUpCircle className="w-5 h-5 text-emerald-400" /> },
        scale: { label: "Global Operations", value: "24/7", icon: <Clock className="w-5 h-5 text-blue-400" /> },
        efficiency: { label: "Error Rate", value: "Reduced by 85%", icon: <CheckCircle className="w-5 h-5 text-purple-400" /> }
      },
      link: "#",
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-5 lg:py-5 font-inter bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Case Studies in <span className="bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">AI & Web Innovation</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of transformative solutions that delivered measurable results for forward-thinking clients.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl transition-all duration-300 hover:border-gray-600 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header with Glassmorphism and Background Image */}
              <div 
                className="relative h-60 flex items-end p-8 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>
                <h3 className="relative z-10 text-3xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent">{project.title}</span>
                </h3>
              </div>
              
              {/* Project Content */}
              <div className="p-8 z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-8">
                  {/* Challenge */}
                  <div>
                    <h4 className="flex items-center text-lg font-semibold mb-2 text-sky-400">
                      <Zap className="w-5 h-5 mr-2" />
                      The Challenge
                    </h4>
                    <p className="text-gray-300">{project.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="flex items-center text-lg font-semibold mb-2 text-fuchsia-400">
                      <Lightbulb className="w-5 h-5 mr-2" />
                      The Solution
                    </h4>
                    <p className="text-gray-300">{project.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-700 pt-6">
                  {Object.values(project.results).map((result, resultIndex) => (
                    <div key={resultIndex} className="flex flex-col items-start">
                      <div className="flex items-center text-xl font-bold text-white mb-1">
                        {result.icon}
                        <span className="ml-2">{result.value}</span>
                      </div>
                      <span className="text-gray-400 text-sm font-medium">{result.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
