import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { FaThreads } from "react-icons/fa6";

const Contact: React.FC = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" />, link: "https://linkedin.com/in/aleem-developer", color: "hover:text-blue-600" },
    { icon: <Twitter className="w-6 h-6" />, link: "https://twitter.com/aleem_developer", color: "hover:text-blue-400" },
    { icon: <Instagram className="w-6 h-6" />, link: "https://instagram.com/aleem.developer", color: "hover:text-pink-500" },
    { icon: <FaThreads className="w-6 h-6" />, link: "https://threads.net/aleem.developer", color: "hover:text-gray-500" },
    { icon: <Github className="w-6 h-6" />, link: "https://github.com/aleem-developer", color: "hover:text-gray-300" }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gray-950 text-white overflow-hidden font-inter">
      {/* Gradient Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-purple-900 to-green-900 opacity-20 blur-3xl animate-gradientBackground"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-extrabold mb-4">
            Let’s Build the <span className="bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">Future Together</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your business with advanced AI & Web solutions?  
            I craft intelligent systems and innovative strategies for measurable impact.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
          <div className="bg-gray-900 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-800">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-sky-500 mr-3" />
              <span className="font-semibold text-gray-400">Email</span>
            </div>
            <a href="mailto:aleem.developer26@gmail.com" className="text-white font-medium hover:text-sky-400 transition-colors break-all">
              aleem.developer26@gmail.com
            </a>
          </div>

          <div className="bg-gray-900 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-800">
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 text-sky-500 mr-3" />
              <span className="font-semibold text-gray-400">Phone</span>
            </div>
            <a href="tel:+923104909026" className="text-white font-medium hover:text-sky-400 transition-colors">
              +92 3104909026
            </a>
          </div>

          <div className="bg-gray-900 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-800">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-sky-500 mr-3" />
              <span className="font-semibold text-gray-400">Location</span>
            </div>
            <span className="text-white font-medium">Global Remote</span>
          </div>

          <div className="bg-gray-900 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-800">
            <span className="font-semibold text-gray-400">Collaboration</span>
            <p className="text-white mt-2 font-medium">Open to Projects & Remote Roles</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mb-12 animate-slide-up">
          <h3 className="text-3xl font-bold mb-6">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-gray-800 rounded-xl hover:scale-110 transition-transform duration-300 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-500 to-fuchsia-500 rounded-3xl p-10 text-center shadow-2xl hover:shadow-3xl transition-all duration-500">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-100 mb-6">Let’s collaborate to create AI solutions that deliver real impact and business growth.</p>
          <a href="#portfolio" className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300">
            Let’s Connect
          </a>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradientBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientBackground { background-size: 400% 400%; animation: gradientBackground 15s ease infinite; }
        @keyframes slide-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-slide-up { animation: slide-up 0.8s ease forwards; }
      `}</style>
    </section>
  );
};

export default Contact;
