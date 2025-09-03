import React from "react";
import CountUp from "react-countup";
import { ArrowRight, Sparkles, Users } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen  flex items-center justify-center overflow-hidden"
    >
      {/* Gradient blobs (still keep for depth) */}
      <div className="absolute inset-0  bg-gradient-to-br bg-gray-950">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40  right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mt-10 mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 animate-fade-in translate-y-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Python + AI Freelancer | Web Dev & Automation
          </div>

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up leading-snug sm:leading-tight lg:leading-[1.2]">
            <span className="block">Aleem.Developer</span>

            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              AI-Powered Web Development
            </span>

            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Automation & Prompt Engineering
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-300">
            Building websites, AI systems, and automations that save time and
            scale businesses.
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {" "}
              Trusted by clients worldwide
            </span>{" "}
            to deliver smart, reliable solutions.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 animate-slide-up animation-delay-600">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              <CountUp end={50} duration={3} />+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Projects Completed
            </div>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              <CountUp end={95} duration={3} />%
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Client Satisfaction
            </div>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              <CountUp end={200} duration={3} />+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              AI Learners Guided
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex mb-6 flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-900 ">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Let’s Build the Future Together
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button
            onClick={scrollToPortfolio}
            className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            View My Portfolio
            <Users className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
