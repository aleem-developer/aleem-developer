import React from 'react';
import {  Mail, Phone, MapPin, Linkedin, Twitter, Heart , Instagram } from 'lucide-react';
import { FaThreads } from "react-icons/fa6"; // install react-icons if not installed


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Prompt Engineering', href: '#services' },
      { name: 'AI Workflows', href: '#services' },
      { name: 'Multi-Agent Systems', href: '#services' },
      { name: 'AI Consulting', href: '#services' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Blog', href: '#blog' }
    ],
    resources: [
      { name: 'AI Insights', href: '#blog' },
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Newsletter', href: '#blog' },
      { name: 'Contact', href: '#contact' }
    ]
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/aleem-developer",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      link: "https://twitter.com/aleem_developer",
      color: "hover:text-blue-400"
    },
    
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      link: "https://instagram.com/aleem.developer",
      color: "hover:text-pink-500"
    },
    {
      icon: <FaThreads className="w-5 h-5" />,
      label: "Threads",
      link: "https://threads.net/aleem.developer",
      color: "hover:text-gray-500"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Company Info */} 
            <div className="lg:pr-8  text-center">
              <div className="flex justify-center mb-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Aleem.Developer
                </span>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Transforming businesses with cutting-edge AI solutions. Expert in prompt engineering, 
                multi-agent systems, and intelligent workflow automation serving 5,000+ clients globally.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 ">
                <div className="flex justify-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="mailto:aleem.developer26@gmail.com" className="hover:text-blue-400 transition-colors">
                    aleem.developer26@gmail.com
                  </a>
                </div>
                <div className="flex justify-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                   <a 
                    href="tel:+923104909026" 
                    className="hover:text-blue-400 transition-colors"
                   >
                    +92 3104909026
                  </a>
                </div>
                <div className="flex justify-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Global Remote</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex  justify-center space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="p-3 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 text-center sm:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-lg mb-4">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-lg mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div >
                <h3 className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-lg mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Aleem.Developer. All rights reserved.</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" /> for AI innovation
              </span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Aleem.Developer",
            "url": "https://aleem.developer",
            "logo": "https://aleem.developer/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "Customer Service",
              "email": "hello@aleem.developer"
            },
            "sameAs": [
              "https://linkedin.com/in/aleem-developer",
              "https://twitter.com/aleem_developer",
              "https://github.com/aleem-developer"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Global",
              "addressRegion": "Remote"
            }
          })
        }}
      />
    </footer>
  );
};

export default Footer;