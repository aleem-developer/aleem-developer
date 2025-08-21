import React from "react";
import { Award, Users, Zap, Globe } from "lucide-react";

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Recognition",
      description: "Expert in AI & Prompt Engineering",
      color: "text-yellow-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "5,000+ Clients",
      description: "Successful projects worldwide",
      color: "text-blue-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Innovation",
      description: "Cutting-edge solutions",
      color: "text-purple-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving 20+ countries",
      color: "text-emerald-500",
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "AI Workflow Architect",
      description:
        "Building futuristic AI workflow systems and multi-LLM orchestration tools like A.Prompt Aura",
    },
    {
      year: "2024",
      title: "PromptOps Engineer",
      description:
        "Engineered complex prompt chains across GPT-4, Claude, Grok & open LLMs for automation",
    },
    {
      year: "2023",
      title: "Open-Source AI Innovator",
      description:
        "Launched A.Translator and other tools, optimizing multi-language PDF & document workflows",
    },
    {
      year: "2022",
      title: "AI & Python Developer",
      description:
        "Built AI-powered apps with clean UI/UX, including PDF agents and resume builders for Pakistan’s market",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aleem.Developer
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming AI into intelligent, collaborative workflows —
            designing multi-agent systems, advanced prompt engineering, and
            next-generation tools that empower businesses and creators worldwide.
          </p>
        </div>

        {/* Image + Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Banner Image */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/Images/prompt.png"
              alt="Aleem.Developer - AI Expert and Prompt Engineer"
                className="w-full max-h-[600px] rounded-3xl transition-transform duration-500 hover:scale-105"

            />
            <div className="absolute inset-0 rounded-3xl ring-2 ring-blue-500/40"></div>
          </div>

          {/* About Text */}
          <div>
            <h3 className="text-2xl text-center sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Redefining Intelligence Through Seamless AI Integration
            </h3>
            <div className="space-y-5 text-center text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                With an unwavering passion for artificial intelligence and a deep mastery of large language models,
                I’ve dedicated my journey to transforming cutting-edge AI into practical, high-impact business solutions. 
              </p>
              <p> 
                From advanced prompt engineering that pushes LLMs to their peak potential,
                to architecting sophisticated multi-agent systems that redefine workflow automation, 
                my work bridges innovation with real-world results. 
              </p>
              <p>
                Trusted by over 5,000 clients worldwide, I bring a rare combination of technical expertise, creative problem-solving,
                and business insight—delivering AI solutions that are not just functional, but transformative. 
              </p>
            </div>

            {/* Skills Progress */}
            <div className="mt-8 space-y-6">
              {[
                { skill: "Prompt Engineering", percentage: 98 },
                { skill: "Multi-Agent Systems", percentage: 85 },
                { skill: "AI Workflow Design", percentage: 90 },
                { skill: "LLM Optimization", percentage: 90 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.skill}
                    </span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div
                className={`${achievement.color} mb-4 flex justify-center text-3xl`}
              >
                {achievement.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Journey in AI Excellence
          </h3>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex text-center flex-col sm:flex-row items-center ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                } mb-12`}
              >
                <div
                  className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg max-w-md w-full ${
                    index % 2 === 0 ? "sm:mr-10" : "sm:ml-10"
                  }`}
                >
                  <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">
                    {item.year}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
