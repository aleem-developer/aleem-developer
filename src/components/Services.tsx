import { Brain, Lightbulb, Zap, Settings, Code, Layers, Dna, Rocket } from 'lucide-react';

const Services = () => {
  // Main services, reframed for client-focused benefits
  const services = [
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Full-Stack AI-Powered Applications",
      description: "Build robust, scalable, and intelligent web applications from the ground up. Combining cutting-edge AI models with modern full-stack frameworks to create powerful, user-centric solutions.",
      features: ["Custom web app development (React/Next.js)", "Backend API integration (Python)", "Database architecture", "DevOps & deployment"],
      color: "from-sky-500 to-indigo-600"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Strategic Prompt & LLM Optimization",
      description: "Don't just use AI—master it. I'll fine-tune your prompts and integrate advanced techniques to ensure your large language models deliver predictable, high-quality, and cost-effective outputs.",
      features: ["Sophisticated prompt design", "Context & state engineering", "Chain-of-thought prompting", "Performance tuning"],
      color: "from-fuchsia-500 to-pink-600"
    },
    {
      icon: <Dna className="w-12 h-12" />,
      title: "AI & Business Automation",
      description: "Automate complex, repetitive tasks and streamline your workflows. From simple scripts to multi-agent AI systems, I create intelligent back-end solutions that save time, reduce errors, and increase efficiency.",
      features: ["Custom automation scripts", "Multi-agent orchestration", "API integrations", "Workflow mapping"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "AI & Web Transformation Consulting",
      description: "Get a clear roadmap for your digital future. I provide strategic guidance to help you identify high-impact opportunities for AI and web technologies, ensuring a seamless and profitable transition.",
      features: ["AI readiness assessment", "Technology stack selection", "Implementation strategy", "ROI analysis"],
      color: "from-orange-500 to-yellow-600"
    }
  ];

  // Technical specializations, highlighting your specific skills
  const specializations = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Python Web Dev",
      description: "Powerful and scalable back-ends."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "React & Next.js",
      description: "Fast and dynamic front-ends."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "TailwindCSS",
      description: "Modern, rapid UI development."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "LLMs & Automation",
      description: "Intelligent, autonomous systems."
    }
  ];

  return (
    <section id="services" className="bg-gray-950 text-white py-10 lg:py-10 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Comprehensive <span className="bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">AI & Web Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I build more than just websites and prompts; I engineer strategic solutions that drive tangible business growth and unlock new levels of efficiency.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-sky-500 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden shadow-xl"
            >
              {/* Subtle background gradient for effect */}
              <div className={`absolute inset-0 z-0 opacity-10 blur-xl group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-3xl font-bold mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <Rocket className="w-4 h-4 text-sky-400 mr-3 animate-pulse" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Specializations & Tech Stack */}
        <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-800">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Core Technical Specializations
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I leverage a focused stack of industry-leading technologies to deliver robust and future-proof solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors duration-300 transform hover:-translate-y-1"
              >
                <div className="text-white mb-4 flex justify-center">
                  {spec.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{spec.title}</h4>
                <p className="text-gray-400 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Build the Future?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need to automate a process or build a full-scale AI application, let's collaborate on a solution that provides a genuine competitive edge.
            </p>
            <button
              onClick={() => { /* Placeholder for contact form scroll or modal open */ }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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

export default Services;
