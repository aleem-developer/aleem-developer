import React from "react";
import { Brain, Lightbulb, Layers, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Full-Stack AI-Powered Web Apps",
      description:
        "I build scalable, intelligent web applications from scratch using modern frameworks and AI integrations for high-impact results.",
      features: [
        "Custom web app development (React/Next.js)",
        "Backend API integration (Python)",
        "Database design & architecture",
        "Deployment & performance optimization",
      ],
      color: "from-sky-500 to-indigo-600",
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Prompt Engineering & LLM Optimization",
      description:
        "Crafting precise and advanced prompts to maximize LLM efficiency, accuracy, and output quality for your business or projects.",
      features: [
        "Advanced prompt design",
        "Context & state engineering",
        "Chain-of-thought prompting",
        "LLM performance tuning",
      ],
      color: "from-fuchsia-500 to-pink-600",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "AI & Web Consulting",
      description:
        "Strategic guidance to implement AI and web solutions effectively, providing clear roadmaps for businesses to innovate and scale.",
      features: [
        "AI solution strategy",
        "Technology stack consulting",
        "Project roadmap & guidance",
        "ROI-focused recommendations",
      ],
      color: "from-orange-500 to-yellow-500",
    },
  ];

  const specializations = [
    { icon: <Rocket className="w-8 h-8" />, title: "Python Web Dev", description: "Efficient and scalable backends." },
    { icon: <Brain className="w-8 h-8" />, title: "LLMs & Prompt Engineering", description: "Advanced AI-driven solutions." },
    { icon: <Lightbulb className="w-8 h-8" />, title: "AI & Web Strategy", description: "Expert consulting for digital growth." },
    { icon: <Rocket className="w-8 h-8" />, title: "Learning New AI Tools", description: "Quickly adapt and master new AI technologies." },
  ];

  return (
    <section id="services" className="bg-gray-950 text-white py-20 font-inter relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-purple-900 to-green-900 opacity-20 blur-3xl animate-gradientBackground"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Premium <span className="bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">AI & Web Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I engineer high-impact solutions combining AI, prompt engineering, and full-stack web development — so your ideas become real, functional, and scalable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-3xl p-10 border border-gray-800 shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Gradient Glow */}
              <div className={`absolute inset-0 z-0 opacity-10 blur-xl group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r ${service.color}`}></div>

              <div className="relative z-10">
                <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                      <Rocket className="w-4 h-4 text-sky-400 mr-3 animate-pulse" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="bg-gray-900 rounded-3xl p-10 lg:p-16 border border-gray-800 shadow-xl">
          <div className="text-center mb-12 animate-slide-up">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Core Technical Specializations</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leveraging a focused stack of skills and tools to deliver robust and future-proof AI & web solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl w-60"
              >
                <div className="text-white mb-4 flex justify-center items-center">{spec.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{spec.title}</h4>
                <p className="text-gray-400 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Animation */}
      <style>{`
        @keyframes gradientBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientBackground {
          background-size: 400% 400%;
          animation: gradientBackground 15s ease infinite;
        }
        @keyframes slide-up { 
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.8s ease forwards; }
      `}</style>
    </section>
  );
};

export default Services;
