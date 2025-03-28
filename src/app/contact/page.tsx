"use client";

import { useEffect } from "react";
import { FaInstagram, FaLinkedin, FaXTwitter, FaFacebook, FaYoutube } from "react-icons/fa6";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialLinks = [
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/rvquizcorp", color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/company/rvquizcorp", color: "bg-blue-600" },
    { name: "Twitter", icon: FaXTwitter, url: "https://twitter.com/rvquizcorp", color: "bg-black" },
    { name: "Facebook", icon: FaFacebook, url: "https://facebook.com/rvquizcorp", color: "bg-blue-700" },
    { name: "YouTube", icon: FaYoutube, url: "https://youtube.com/@rvquizcorp", color: "bg-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Page Title */}
        <h1 
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12 font-jockey-one motion-fade-in"
          style={{
            opacity: 0,
            animation: 'fadeIn 0.7s forwards'
          }}
        >
          Get In Touch
        </h1>
        
        {/* Find Us */}
        <div 
          className="bg-white rounded-xl overflow-hidden shadow-lg"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'slideUp 0.7s 0.3s forwards'
          }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 font-jockey-one">Find Us</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#f36d21] p-3 rounded-full text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1 font-jockey-one">Address</h3>
                    <p className="text-lg text-gray-600 font-itim text-shadow">
                      R.V. College of Engineering<br />
                      Mysore Road, R.V. Vidyanikethan Post<br />
                      Bengaluru - 560059, Karnataka, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#4c8693] p-3 rounded-full text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1 font-jockey-one">Email</h3>
                    <a href="mailto:utpt.rvquizcorp@gmail.com" className="text-lg text-[#4c8693] hover:underline font-itim text-shadow">
                      utpt.rvquizcorp@gmail.com
                    </a>
                    <p className="text-gray-600 mt-1 font-itim text-shadow">For event inquiries and collaborations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#f36d21] p-3 rounded-full text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1 font-jockey-one">Contact</h3>
                    <p className="text-lg text-gray-600 font-itim text-shadow">
                      Shashank Shenoy (QuizCorp President): +91 98765 43210<br />
                      Tanmay Umesh (QuizCorp President): +91 98765 12345
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media buttons added here */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 font-jockey-one">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${link.color} p-3 rounded-lg text-white flex items-center justify-center hover:opacity-90 transition-opacity motion-slide-up`}
                      style={{
                        opacity: 0,
                        transform: 'translateY(20px)',
                        animation: `slideUp 0.5s ${index * 0.1}s forwards`
                      }}
                      aria-label={link.name}
                    >
                      <link.icon className="text-2xl" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="h-96 lg:h-auto relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6747340499247!2d77.4986345!3d12.9237228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159cab30d%3A0x771cae2f853a3c8c!2sRV%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1696880069522!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}