import React from "react";
import { Brain, Code2, Zap } from "lucide-react";
import myphoto from "../contexts/logo1.png";

const App = () => {
  const stack = [
    "Prompt Engineering (PromptOps)",
    "Python & Automation",
    "LLM Workflows & Agents",
    "AI Tool Optimization",
    "System Thinking",
    "Technical Mentorship",
  ];

  const orbitRadius = 150;

  const About = () => {
    return (
      <section
        id="about"
        className="relative py-10 bg-gray-950 overflow-hidden font-sans"
      >
        {/* Aurora overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
        >
          <div className="absolute -inset-20 aurora" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* Heading */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-5">
              About{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I’m{" "}
              <span className="font-semibold text-blue-500">
                @aleem.developer
              </span>{" "}
              — an <strong>Applied AI Engineer</strong> and{" "}
              <strong>PromptOps specialist</strong> focused on building
              production-ready AI systems, not experiments.
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-3">
              I work at the intersection of <strong>Python</strong>,{" "}
              <strong>prompt engineering</strong>, and{" "}
              <strong>LLM workflows</strong> — architecting intelligent,
              cost-efficient, and scalable AI solutions that solve real
              business problems.
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-3">
              My philosophy is simple: understand the problem deeply, design
              the prompt system intelligently, optimize inference cost, and
              deliver AI that actually works in real-world environments.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Orbit visual */}
            <div className="relative mx-auto w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-sky-400/25 to-blue-300/30 blur-2xl" />

              {/* Center image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-blue-500/50 shadow-xl">
                  <img
                    src={myphoto}
                    alt="Aleem Developer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Rotating skills */}
              <div className="absolute inset-0 animate-spin-forward">
                {stack.map((skill, index) => {
                  const angle = (index / stack.length) * 2 * Math.PI;
                  const x = Math.cos(angle) * orbitRadius;
                  const y = Math.sin(angle) * orbitRadius;
                  return (
                    <div
                      key={skill}
                      className="absolute"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                      }}
                    >
                      <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs sm:text-sm
                        bg-gradient-to-r from-sky-500 via-sky-400 to-sky-300 text-white shadow-lg
                        ring-1 ring-white/30 backdrop-blur-sm animate-spin-reverse"
                      >
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-6">
              <ParallaxCard>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      AI & Prompt Engineering
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      Engineering high-precision prompt systems, multi-agent
                      workflows, and reasoning chains that maximize output
                      quality while minimizing token cost and latency.
                    </p>
                  </div>
                </div>
              </ParallaxCard>

              <ParallaxCard>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
