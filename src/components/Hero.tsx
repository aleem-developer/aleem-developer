import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const skills = [
  { name: "AI Video Prompt Optimization", value: 90, colors: ["#3b82f6", "#60a5fa"] },
  { name: "Dev Tool Prompt Tuning (Cursor)", value: 85, colors: ["#2563eb", "#93c5fd"] },
  { name: "LLM Workflow Design & Automation", value: 88, colors: ["#1d4ed8", "#93c5fd"] },
  { name: "Rapid AI Tool Adaptation", value: 92, colors: ["#3b82f6", "#93c5fd"] },
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
      {/* Hero Content */}
      <div className="relative z-20 mt-20 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight animate-slide-up p-2">
          <span className="block text-gray-100">Muhammad Aleem Naveed</span>
          <span className="block text-gray-300 text-base sm:text-lg mt-1">
            @Aleem.Developer | AI Prompt Engineer | Video & Dev Tool Optimization
          </span>
          <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent mt-2 p-3">
            Get Predictable, Business-Ready AI Outputs in Fewer Runs
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          I help creators, startups, and businesses <span className="text-blue-400 font-semibold">get exact AI results without wasting credits or time</span>. 
          Using precise prompt engineering, I make AI tools like GPT, Claude, Grok, and video generation systems predictable and usable.
        </p>

        <div className="flex justify-center mt-8 animate-slide-up">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Hire Me for Prompt Engineering
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Skill Graph */}
        {mounted && (
          <div className="mt-16 max-w-3xl mx-auto space-y-6 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Core Focus Areas
            </h2>
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex justify-between mb-1 text-sm sm:text-base text-gray-300 font-medium">
                  <span>{skill.name}</span>
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
    </section>
  );
};

export default Hero;
