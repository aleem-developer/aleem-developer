import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Haseeb",
      position: "Student",
      company: "China University",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
      content:
        "I was struggling with AI projects until Aleem guided me. He gave me precise prompts and actionable strategies — the results were transformative. My approach changed completely.",
      rating: 5,
      project: "Prompt Clarity Guidance",
      results: "Breakthrough in AI coursework"
    },
    {
      id: 2,
      name: "Farhan Riza",
      position: "Startup Founder",
      company: "Riza Technologies",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      content:
        "My product was stuck until Aleem analyzed the problem and provided a couple of prompt strategies. Instant fixes, clear guidance, and precise outcomes. His clarity is unmatched.",
      rating: 5,
      project: "Product Prompt Debugging",
      results: "Instant issue resolution"
    },
    {
      id: 3,
      name: "Melox",
      position: "Creative Professional",
      company: "Independent Creator",
      image: "https://images.pexels.com/photos/1181742/pexels-photo-1181742.jpeg?auto=compress&cs=tinysrgb&w=300",
      content:
        "I thought my prompts were good… until Aleem rewrote them. The difference was staggering. He understands AI models at a level I’ve never seen before.",
      rating: 5,
      project: "Prompt Optimization",
      results: "Massively improved output"
    },
    {
      id: 4,
      name: "Zayden Vale",
      position: "AI Enthusiast",
      company: "Self-Learner",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300",
      content:
        "Aleem doesn’t give generic advice. He explains AI behavior and provides exact prompt formulas. One conversation improved all my outputs and consistency.",
      rating: 5,
      project: "Prompt Formula Coaching",
      results: "Better consistency across prompts"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 300);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, 300);
  };

  const prevTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setFade(true);
    }, 300);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-16 bg-gray-950 text-white font-inter relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-purple-900 to-green-900 opacity-20 blur-3xl animate-gradientBackground"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Client <span className="bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real people. Real breakthroughs. Real transformations.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <div
            className={`relative p-8 lg:p-12 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 animate-pulse-slow rounded-3xl"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <Quote className="w-12 h-12 text-white/50 mb-6" />
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 leading-relaxed text-gray-200">
                "{currentTest.content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4 mb-4">
                <img
                  src={currentTest.image}
                  alt={currentTest.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white/20 shadow-xl"
                />
                <div>
                  <div className="font-bold text-lg text-white">{currentTest.name}</div>
                  <div className="text-gray-400">{currentTest.position}</div>
                  <div className="text-gray-500 text-sm">{currentTest.company}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mt-4 space-x-1">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400 animate-pulse-slow" />
                ))}
              </div>

              {/* Project & Result */}
              <div className="mt-6 text-gray-300 text-sm">
                <div><strong>Project:</strong> {currentTest.project}</div>
                <div><strong>Outcome:</strong> {currentTest.results}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-10 space-x-6">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-sky-500 to-fuchsia-500 scale-125 shadow-lg"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Testimonials;
