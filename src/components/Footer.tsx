"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaXTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* First Column - Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <Image
                src="/logo.png"
                alt="RV QuizCorp Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-lg font-itim text-shadow mb-6">
              RV QuizCorp is the official quiz club of R.V. College of Engineering, fostering a culture of curiosity and knowledge-sharing through the art of quizzing.
            </p>
            <div className="text-gray-400 font-itim">
              <p className="mb-2">
                <a href="mailto:utpt.rvquizcorp@gmail.com" className="hover:text-[#f36d21] transition-colors">
                  utpt.rvquizcorp@gmail.com
                </a>
              </p>
              <p>+91 98765 43210</p>
            </div>
          </div>

          {/* Second Column - Social Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 font-jockey-one">Connect With Us</h3>
            <div className="flex justify-center space-x-4 mb-8">
              <a 
                href="https://www.instagram.com/rvquizcorp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E1306C] transition-colors duration-300 group"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/RvQuizcorp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1877F2] transition-colors duration-300 group"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a 
                href="https://x.com/rvquizcorp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-black transition-colors duration-300 group"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/rv-quizcorp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0A66C2] transition-colors duration-300 group"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:utpt.rvquizcorp@gmail.com" 
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f36d21] transition-colors duration-300 group"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-3 font-jockey-one">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 font-itim">
                <li>
                  <Link href="/utpt" className="hover:text-[#f36d21] transition-colors">
                    UTPT
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-[#f36d21] transition-colors">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/sponsorship" className="hover:text-[#f36d21] transition-colors">
                    Sponsor Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#f36d21] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#f36d21] transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="hover:text-[#f36d21] transition-colors">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#f36d21] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#f36d21] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Third Column - Map */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 font-jockey-one">Visit Us</h3>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6747340499247!2d77.4986345!3d12.9237228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159cab30d%3A0x771cae2f853a3c8c!2sRV%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1696880069522!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="mt-4 text-gray-400 font-itim text-lg">
              R.V. College of Engineering<br />
              RV Vidyanikethan Post<br />
              Mysore Road, Bangalore - 560059
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 font-itim text-lg">
          <p>&copy; {new Date().getFullYear()} RV QuizCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}