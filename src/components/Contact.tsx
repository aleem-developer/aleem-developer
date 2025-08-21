import React from 'react';
import { Mail, UserPlus, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { FaThreads } from "react-icons/fa6"; // install react-icons if not installed

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "aleem.developer26@gmail.com",
      link: "mailto:aleem.developer26@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+92 3104909026",
      link: "tel:+923104909026"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Global Remote",
      link: null
    },
    {
      icon: < UserPlus className="w-6 h-6" />,
      label: "Collaboration",
      value: "Open to Projects & Remote Roles",
      link: null
    }
  ];

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

  return (
    <section id="contact" className="py-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Build the Future <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge AI solutions? 
            I'm here to help you unlock the full potential of artificial intelligence.
          </p>
        </div>

        {/* Contact Info Section (Only Right Side) */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl text-center font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 text-center dark:text-gray-300 text-lg leading-relaxed mb-8">
              I'm always excited to discuss new AI projects and opportunities. 
              Whether you need prompt engineering, workflow automation, or strategic AI consulting, 
              let's explore how we can work together to achieve your goals.
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      {item.label}
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-gray-900 dark:text-white font-semibold break-all">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect on Social
            </h4>
            <div className="flex space-x-4 flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className={`p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg ${social.color} transition-colors duration-200 hover:scale-105 transform`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
            <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
            <p className="text-blue-100">
              I typically respond to all inquiries within 24 hours. 
              For urgent projects, feel free to call directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
