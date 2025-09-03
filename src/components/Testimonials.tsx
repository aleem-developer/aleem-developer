import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria Sanchez",
      position: "VP of Product",
      company: "Innovate AI",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "Aleem didn't just build us a system; he gave us a way to breathe again. Our support team was drowning in tickets, and his multi-agent AI setup automated the chaos. The reduction in manual effort was immediate, and our team is so much happier.",
      rating: 5,
      project: "Customer Service AI",
      results: "Improved team morale"
    },
    {
      id: 2,
      name: "Marcus Jones",
      position: "Logistics Manager",
      company: "Nexus Supply Co.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "I was skeptical at first, but the results speak for themselves. The supply chain model Aleem built identified a massive bottleneck we'd missed for years. It's not just about saving money; it's about a smoother, more reliable operation.",
      rating: 4,
      project: "Supply Chain AI",
      results: "Identified a key bottleneck"
    },
    {
      id: 3,
      name: "Dr. Anya Sharma",
      position: "Lead Researcher",
      company: "BioGen Research",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "Our lab generates huge amounts of data, and making sense of it was a full-time job for several people. Aleem's analytics solution is intuitive and powerful. It has accelerated our research timeline by months.",
      rating: 5,
      project: "Scientific Analytics",
      results: "Accelerated research"
    },
    {
      id: 4,
      name: "David Chen",
      position: "Founder & CEO",
      company: "Stratagem Capital",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "The real-time market insights are a game-changer. I can ask the system a question in plain English and get an immediate, data-backed response. This isn't just a tool; it's a strategic partner that helps us make faster, smarter decisions.",
      rating: 5,
      project: "Trading Analytics",
      results: "Smarter decisions"
    },
    {
      id: 5,
      name: "Jessica White",
      position: "Director of Curriculum",
      company: "Future Learners Academy",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "Working with Aleem felt like a true collaboration. The personalized learning paths his system creates for students are incredible. It's made a huge difference in student engagement and the overall quality of our educational content.",
      rating: 5,
      project: "Educational AI",
      results: "Higher student engagement"
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
    <section id="testimonials" className="py-10 lg:py-10 font-inter bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Client <span className="bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how leading organizations have transformed their operations 
            with cutting-edge AI solutions.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 lg:p-12 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse-slow"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <Quote className="w-12 h-12 text-white/50 mb-6" />
              <blockquote className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed text-gray-200">
                "{currentTest.content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4 mb-4">
                <img
                  src={currentTest.image}
                  alt={currentTest.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white/20 shadow-xl"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold text-lg text-white">{currentTest.name}</div>
                  <div className="text-gray-400">{currentTest.position}</div>
                  <div className="text-gray-500 text-sm">{currentTest.company}</div>
                </div>
              </div>

              <div className="flex justify-center mt-4 space-x-1">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial
                    ? 'bg-sky-500'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
