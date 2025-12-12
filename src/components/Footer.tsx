import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ['Full-Stack AI Applications', 'Prompt & LLM Optimization', 'AI & Web Consulting'],
    Company: ['About', 'Portfolio', 'Testimonials'],
    Resources: ['Contact', 'Case Studies', 'Privacy Policy'],
  };

  return (
    <footer className="bg-gray-950 text-white py-20 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Columns */}
        <div className="flex flex-row justify-between items-start gap-12">
          
          {/* Bio / Logo */}
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Aleem.Developer
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              I transform businesses using AI & Web innovation. Expert in Prompt Engineering, Python, and Full-Stack Development. Trusted by 20+ clients worldwide.
            </p>
            <p className="text-gray-500 text-sm italic">Let's build something futuristic together.</p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([section, links], idx) => (
            <div key={idx} className="flex-1 flex flex-col justify-center space-y-3">
              <h3 className="text-gray-300 font-semibold text-lg">{section}</h3>
              <ul className="space-y-1">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Note */}
        <div className="mt-16 text-center space-y-2">
          <p className="text-gray-500 text-sm">© {currentYear} Aleem.Developer. All rights reserved.</p>
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for AI innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
