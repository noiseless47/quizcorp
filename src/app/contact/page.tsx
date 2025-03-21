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
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-8 lg:px-16">
        <div
          className="max-w-4xl mx-auto motion-fade-in"
          style={{
            opacity: 0,
            animation: 'fadeIn 0.6s forwards'
          }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 font-merriweather">Contact Us</h1>
          
          <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 font-merriweather">Our Location</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              RV College of Engineering, <br />
              RV Vidyanikethan Post, <br />
              Mysore Road, <br />
              Bangalore - 560 059
            </p>
            <p className="text-base sm:text-lg text-gray-700 mt-6">
              <span className="font-semibold">Email:</span> utpt.rvquizcorp@gmail.com
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-gray-800 font-merriweather">Connect With Us</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} p-6 rounded-lg text-white flex flex-col items-center justify-center hover:opacity-90 transition-opacity motion-slide-up`}
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                    animation: `slideUp 0.5s ${index * 0.1}s forwards`
                  }}
                >
                  <link.icon className="text-3xl sm:text-4xl mb-3" />
                  <span className="text-sm sm:text-base font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-gray-800 font-merriweather">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CC3D9] focus:border-transparent text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CC3D9] focus:border-transparent text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CC3D9] focus:border-transparent text-base"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#f36d21] text-white py-4 rounded-lg hover:bg-[#d85d18] transition-colors duration-300 font-merriweather text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}