import React from "react";
import { Brain, Code2, Zap } from "lucide-react";
import myphoto from "../contexts/logo1.png"; //

const App = () => {
  const stack = [
    "Prompt Engineering",
    "Python",
    "LLM Workflows",
    "AI Tool Optimization",
    "Video Generation Prompts",
    "Mentorship",
  ];

  const orbitRadius = 150; // Orbit radius for skill chips

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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              About{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I’m{" "}
              <span className="font-semibold text-blue-500">
                @aleem.developer
              </span>{" "}
              — an <strong>AI Prompt Engineer</strong> who helps creators,
              startups, and teams get <strong>precise, business-ready AI results</strong> 
              without wasting time, credits, or money.
            </p>

            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mt-3">
              I specialize in crafting <strong>high-precision prompts</strong>{" "}
              for video generation tools, developer environments like{" "}
              <strong>Cursor</strong>, and advanced LLM workflows — turning AI
              tools into predictable, controllable, and profitable systems.
            </p>

            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mt-3">
              My approach is practical and results-driven: understand your goal,
              engineer prompt logic, optimize iterations, and deliver outputs
              that meet real-world business requirements — no guesswork.
            </p>
          </div>

          {/* Grid: Orbit + Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Orbit visual (skills ferris wheel, do not change layout) */}
            <div className="relative mx-auto w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-sky-400/25 to-blue-300/30 blur-2xl" />

              {/* Center image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-blue-500/50 shadow-xl">
                  <img
                    src={myphoto}
                    alt="Aleem.Developer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Rotating container */}
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
                      <span
                        className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs sm:text-sm
                          bg-gradient-to-r from-sky-500 via-sky-400 to-sky-300 text-white shadow-lg
                          ring-1 ring-white/30 dark:ring-white/10 backdrop-blur-sm animate-spin-reverse"
                      >
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Spin Animations */}
              <style>{`
                @keyframes spin-forward { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes spin-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }

                .animate-spin-forward { animation: spin-forward 18s linear infinite; }
                .animate-spin-reverse { animation: spin-reverse 18s linear infinite; }

                @media (prefers-reduced-motion: reduce) {
                  .animate-spin-forward, .animate-spin-reverse { animation: none !important; }
                }

                .aurora {
                  --c1: rgba(56, 189, 248, 0.18); 
                  --c2: rgba(96, 165, 250, 0.16);
                  --c3: rgba(59, 130, 246, 0.14);
                  background:
                    radial-gradient(40% 30% at 20% 10%, var(--c1), transparent 60%),
                    radial-gradient(35% 28% at 80% 20%, var(--c2), transparent 60%),
                    radial-gradient(30% 25% at 60% 80%, var(--c3), transparent 60%);
                  animation: auroraShift 14s ease-in-out infinite alternate;
                  filter: blur(30px);
                }
                @keyframes auroraShift {
                  0% { transform: translateY(-2%) translateX(-2%) scale(1); }
                  50% { transform: translateY(1.5%) translateX(1.5%) scale(1.03); }
                  100% { transform: translateY(-1%) translateX(2%) scale(1.02); }
                }
                @media (prefers-reduced-motion: reduce) { .aurora { animation: none; } }
              `}</style>
            </div>

            {/* Cards */}
            <div className="space-y-6">
              <ParallaxCard>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      AI & Prompt Engineering
                    </h3>
                    <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                      I design structured, high-accuracy prompts that produce
                      consistent, business-ready results for video, text, and LLM-based AI tools.
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
                    <h3 className="text-xl font-semibold text-white">
                      Python & Dev Tools
                    </h3>
                    <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                      I implement prompt engineering inside developer workflows and tools like Cursor to improve speed, accuracy, and output quality.
                    </p>
                  </div>
                </div>
              </ParallaxCard>

              <ParallaxCard>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Guidance & Optimization
                    </h3>
                    <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                      I help creators and businesses avoid wasted credits and poor results by optimizing prompts and AI workflows for their exact needs.
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

  /* ---------- Small Components ---------- */
  interface ParallaxCardProps {
    children: React.ReactNode;
  }

  function ParallaxCard({ children }: ParallaxCardProps) {
    return (
      <div className="group [perspective:1000px]">
        <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-gray-200/50 shadow-lg transition-all duration-300 p-6
                        hover:shadow-2xl hover:-translate-y-1
                        group-hover:[transform:rotateX(6deg)_rotateY(-6deg)]">
          {children}
        </div>
      </div>
    );
  }

  return <About />;
};

export default App;
