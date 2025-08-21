import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CTO",
      company: "TechFlow Solutions",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "Aleem transformed our customer service operations with a multi-agent AI system that handles complex inquiries with remarkable precision. Our customer satisfaction scores increased by 40% within the first month.",
      rating: 5,
      project: "Customer Service AI",
      results: "40% satisfaction increase"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "Head of Operations",
      company: "Global Logistics Inc",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "The supply chain optimization system Aleem developed has revolutionized our operations. We've achieved 30% cost savings and eliminated bottlenecks we didn't even know existed.",
      rating: 5,
      project: "Supply Chain AI",
      results: "30% cost reduction"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      position: "Chief Medical Officer",
      company: "MedTech Innovations",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "Aleem's healthcare diagnostic assistant has become an invaluable tool for our medical team. The AI provides insights that have improved our diagnostic accuracy by 25% while reducing analysis time significantly.",
      rating: 5,
      project: "Healthcare AI",
      results: "25% accuracy improvement"
    },
    {
      id: 4,
      name: "James Thompson",
      position: "Managing Director",
      company: "FinanceFirst Capital",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "The trading analytics platform exceeded all expectations. Aleem's expertise in AI and deep understanding of financial markets created a solution that's given us a significant competitive edge.",
      rating: 5,
      project: "Trading Analytics",
      results: "25% ROI increase"
    },
    {
      id: 5,
      name: "Linda Park",
      position: "VP of Education",
      company: "EduTech Global",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "The personalized content generation system has transformed how we deliver education. Student engagement has improved dramatically, and our content creation efficiency has increased by 80%.",
      rating: 5,
      project: "Educational AI",
      results: "80% efficiency gain"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how leading organizations have transformed their operations 
            with cutting-edge AI solutions.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full"></div>
              <div className="absolute top-1/2 right-20 w-12 h-12 border border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              {/* Testimonial Content */}
              <blockquote className="text-xl lg:text-2xl font-medium text-center mb-8 leading-relaxed">
                "{currentTest.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={currentTest.image}
                  alt={currentTest.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                  loading="lazy"
                />
                <div className="text-center">
                  <div className="font-bold text-lg">{currentTest.name}</div>
                  <div className="text-blue-100">{currentTest.position}</div>
                  <div className="text-blue-200 text-sm">{currentTest.company}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mt-4 space-x-1">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>

              {/* Project & Results */}
              <div className="flex justify-center space-x-8 mt-6 text-sm">
                <div className="text-center">
                  <div className="text-blue-100">Project</div>
                  <div className="font-semibold">{currentTest.project}</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-100">Results</div>
                  <div className="font-semibold">{currentTest.results}</div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial
                    ? 'bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5,000+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">99.8%</div>
            <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-300">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Support Available</div>
          </div>
        </div>

        {/* Client Logos */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Trusted by Industry Leaders
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;