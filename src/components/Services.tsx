import React from 'react';
import { Brain, Workflow, Users, Lightbulb, Zap, Settings, Code, BarChart } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Advanced Prompt Engineering",
      description: "Optimize LLM performance with sophisticated prompt design, chain-of-thought reasoning, and context engineering for maximum output quality.",
      features: ["Custom prompt optimization", "Multi-turn conversations", "Context engineering", "Performance analytics"],
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <Workflow className="w-12 h-12" />,
      title: "AI Workflow Architecture",
      description: "Design and implement intelligent automation systems that streamline complex business processes using cutting-edge AI technologies.",
      features: ["Process automation", "Workflow optimization", "Integration planning", "Performance monitoring"],
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Multi-Agent Systems",
      description: "Create sophisticated AI ecosystems where multiple intelligent agents collaborate to solve complex problems and automate workflows.",
      features: ["Agent coordination", "Task distribution", "System orchestration", "Scalability planning"],
      color: "from-emerald-600 to-emerald-800"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "AI Strategy Consulting",
      description: "Comprehensive AI transformation guidance, from initial assessment to implementation strategy and team training.",
      features: ["AI readiness assessment", "Implementation roadmap", "Team training", "ROI optimization"],
      color: "from-orange-600 to-orange-800"
    }
  ];

  const specializations = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "LLM Optimization",
      description: "Fine-tune large language models for specific use cases"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom AI Solutions",
      description: "Tailor-made AI systems for unique business requirements"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Integration",
      description: "Seamless integration of AI tools into existing workflows"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Comprehensive monitoring and optimization of AI systems"
    }
  ];

  return (
    <section id="services" className=" bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Expert <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations, 
            enhance productivity, and unlock the full potential of artificial intelligence.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Technical Specializations
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Deep expertise across the AI technology stack, ensuring comprehensive solutions for any challenge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <div className="text-white mb-4 flex justify-center">
                  {spec.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{spec.title}</h4>
                <p className="text-blue-100 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your AI needs and create a custom solution that drives real results for your organization.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your AI Journey
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