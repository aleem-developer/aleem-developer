import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const skills = [
  { name: "Prompt Engineering", value: 98, colors: ["#3b82f6", "#60a5fa"] }, // Indigo → Light Sky Blue
  { name: "Python Development", value: 90, colors: ["#2563eb", "#93c5fd"] }, // Royal Blue → Soft Sky
  { name: "AI Mastery", value: 95, colors: ["#1d4ed8", "#93c5fd"] }, // Deep Blue → Soft Sky
  { name: "Rapid AI Tool Learning", value: 100, colors: ["#3b82f6", "#93c5fd"] }, // Medium Blue → Light Sky
];


const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950 font-inter"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-6 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-6 w-48 h-48 sm:w-72 sm:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 mt-20 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight animate-slide-up p-2">
          <span className="block text-gray-100">Muhammad Aleem Naveed</span>
          <span className="block text-gray-300 text-base sm:text-lg mt-1">
          @Aleem.Developer | AI Prompt Engineer | Video Generation & Dev Tool Prompts | Cursor, LLM Workflows | Applied AI Specialist
  </span>
          <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent mt-2 p-3">
            AI, Python & Prompt Engineering Mastery
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          Self-taught AI practitioner, precision-driven problem solver, and mentor.  
          I create <span className="text-blue-400 font-semibold">intelligent, scalable, and elegant solutions</span> with code and AI.
        </p>

        <div className="flex justify-center mt-8 animate-slide-up">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Let’s Build the Future
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Skill Graph */}
        {mounted && (
          <div className="mt-16 max-w-3xl mx-auto space-y-6 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">My Expertise</h2>
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex justify-between mb-1 text-sm sm:text-base text-gray-300 font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-4 rounded-full transition-all duration-1000"
                    style={{
                      width: `${skill.value}%`,
                      background: `linear-gradient(90deg, ${skill.colors[0]}, ${skill.colors[1]})`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-up { 
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.8s ease forwards; }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.2; } 50% { transform: scale(1.1); opacity: 0.4; } }
        .animate-pulse { animation: pulse 4s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Hero;
