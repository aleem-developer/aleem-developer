import React from "react";
import { Brain, Code2, Zap } from "lucide-react";
import myphoto from "../contexts/logo.png";  // Import image


// Main App component to encapsulate the entire page
const App = () => {
  const stack = [
    "Python",
    "React",
    "Prompting",
    "C++",
    "AI Tools",
    "Web Development",
    "LLMs",
    "Automation",
  ];

  // The main component containing the about section content
  const About = () => {
    // The radius for the circular orbit. Adjusted to fit within the container.
    const orbitRadius = 135; // In pixels, half of the 320px container minus some padding.

    return (
      <section
        id="about"
        className="relative py-10 bg-gray-950 overflow-hidden font-sans"
      >
        {/* Subtle animated aurora overlay */}
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
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I build intelligent experiences that blend{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                AI & Prompt Engineering
              </span>{" "}
              with{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                modern Web Development
              </span>
              — from automation workflows to sleek, production-ready UIs.
            </p>
          </div>

          {/* Grid: Visual (Orbit) + Content (Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Visual: Skill Orbit around your image */}
            <div className="relative mx-auto w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/25 to-emerald-500/30 blur-2xl" />
              {/* Outer ring */}
              {/* Center core (your image) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-blue-500/50 shadow-xl">
                  {/* Replaced local image import with a publicly accessible placeholder */}
                  <img
                    src = {myphoto}
                    alt="Aleem.Developer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Rotating container for all chips */}
              <div className="absolute inset-0 animate-spin-forward will-change-transform">
                {/* Individual chips with their own animations */}
                {stack.map((skill, index) => {
                  // Calculate the position for each chip on the circle
                  const angle = (index / stack.length) * 2 * Math.PI;
                  const x = Math.cos(angle) * orbitRadius;
                  const y = Math.sin(angle) * orbitRadius;
                  
                  return (
                    <div
                      key={skill}
                      className="absolute will-change-transform"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                      }}
                    >
                      <SkillChip label={skill} />
                    </div>
                  );
                })}
              </div>

              {/* Respect reduced motion */}
              <style>{`
                @keyframes spin-forward { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes spin-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
                .animate-spin-forward { animation: spin-forward 18s linear infinite; }
                .animate-spin-reverse { animation: spin-reverse 18s linear infinite; }
              
                @media (prefers-reduced-motion: reduce) {
                  .animate-spin-forward, .animate-spin-reverse { animation: none !important; }
                }
                
                /* Soft animated aurora that blends with your existing background */
                .aurora {
                  --c1: rgba(59,130,246,0.18); 
                  --c2: rgba(168,85,247,0.16);
                  --c3: rgba(16,185,129,0.14);
                  background:
                    radial-gradient(40% 30% at 20% 10%, var(--c1), transparent 60%),
                    radial-gradient(35% 28% at 80% 20%, var(--c2), transparent 60%),
                    radial-gradient(30% 25% at 60% 80%, var(--c3), transparent 60%);
                  animation: auroraShift 14s ease-in-out infinite alternate;
                  filter: blur(30px);
                }
                @keyframes auroraShift {
                  0%   { transform: translateY(-2%) translateX(-2%) scale(1); }
                  50%  { transform: translateY(1.5%) translateX(1.5%) scale(1.03); }
                  100% { transform: translateY(-1%) translateX(2%) scale(1.02); }
                }
                @media (prefers-reduced-motion: reduce) {
                  .aurora { animation: none; }
                }
              `}</style>
            </div>

            {/* Content: Three parallax-style cards */}
            <div className="space-y-6">
              <ParallaxCard>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      AI & Prompt Engineering
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      Structured prompts, multi-agent patterns, and smart
                      automations that make LLMs deliver reliable, on-brand
                      results.
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
                      Web Development
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      Clean, responsive interfaces with React & Tailwind,
                      integrated with APIs and backend services for real business
                      outcomes.
                    </p>
                  </div>
                </div>
              </ParallaxCard>

              <ParallaxCard>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Automation & Python
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      Python-powered workflows: data handling, API orchestration,
                      and background tasks that save hours and scale smoothly.
                    </p>
                  </div>
                </div>
              </ParallaxCard>

              {/* Tech stack badges */}
              <div className="pt-2 flex flex-wrap gap-2">
                {stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm hover:scale-105 transition-transform"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  /* ---------- Small components ---------- */

  // Adding explicit types for the component props to remove the error
  interface ParallaxCardProps {
    children: React.ReactNode;
  }
  
  function ParallaxCard({ children }: ParallaxCardProps) {
    return (
      <div className="group [perspective:1000px]">
        <div className="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300 p-6
                      hover:shadow-2xl hover:-translate-y-1
                      group-hover:[transform:rotateX(6deg)_rotateY(-6deg)]
                      ">
          {children}
        </div>
      </div>
    );
  }
  
  // Adding explicit types for the component props to remove the error
  interface SkillChipProps {
    label: string;
  }
  
  function SkillChip({ label }: SkillChipProps) {
    return (
      <span
        className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs sm:text-sm
          bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white shadow-lg
          ring-1 ring-white/30 dark:ring-white/10 backdrop-blur-sm animate-spin-reverse`}
      >
        {label}
      </span>
    );
  }

  return <About />;
};

export default App;
