"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

export default function Sponsorship() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define sponsorship tiers
  const sponsorshipTiers = [
    {
      name: "Main Sponsor",
      color: "bg-gradient-to-r from-orange-600 to-orange-500",
    },
    {
      name: "Co-sponsor",
      color: "bg-gradient-to-r from-[#4CC3D9] to-[#3EB1C8]",
    },
    {
      name: "Associate Sponsor",
      color: "bg-gradient-to-r from-amber-500 to-yellow-500",
    },
    {
      name: "Media Sponsor",
      color: "bg-gradient-to-r from-gray-400 to-gray-500",
    }
  ];

  // Sponsorship benefits
  const sponsorshipBenefits = [
    "Company to be recognized as the Official Sponsor of the event",
    "Logo on all material (Arrows, Posters, Badges, Certificates, etc.)",
    "Banners to be displayed prominently at venues",
    "Distribution of Company's advertisement materials at event",
    "Banner addon the stage",
    "Distribution of sponsor's product at venue",
    "Advertisements of Company to be on-air before and during interval",
    "Market Research",
    "All Prizes Releases to Contain Name of Sponsor",
    "Sponsors to receive report of the event",
    "Opportunity to conduct company placement on the spot",
    "Possibility of a seminar by the company on RVCE's premises"
  ];

  // Previous sponsors logos
  const previousSponsors = [
    { name: "SIUK", logo: "/sponsor/siuk.png" },
    { name: "TechCorp", logo: "/sponsor/techcorp.png" },
    { name: "GlobalBank", logo: "/sponsor/globalbank.png" }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-jockey-one">Sponsor UTPT 2025</h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto font-itim">
              Partner with Asia's premier student-run quiz fest
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          {/* About UTPT Sponsorship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 font-jockey-one text-center">Why Sponsor UTPT?</h2>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md mb-8 border-l-4 border-[#f36d21]">
              <p className="text-gray-700 mb-4 font-itim text-xl">
                Under the Peepal Tree (UTPT) is Asia's largest student-run quiz fest, organized by RV QuizCorp. With a rich history dating back to 2004, UTPT has established itself as one of the most prestigious quizzing events in India, attracting participants from top institutions across the country.
              </p>
              <p className="text-gray-700 mb-4 font-itim text-xl">
                Sponsoring UTPT offers your brand a unique opportunity to connect with a diverse, intellectual audience comprising over 1,000 students, professionals, and quiz enthusiasts. Our sponsors gain exceptional visibility and engagement with a highly engaged audience known for their intellectual curiosity and analytical thinking.
              </p>
              <p className="text-gray-700 font-itim text-xl">
                We offer flexible sponsorship packages designed to meet your marketing objectives and budget. From brand visibility to direct engagement opportunities, UTPT provides a platform to showcase your company's commitment to education, knowledge, and intellectual pursuits.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-[#f36d21]/10 p-6 rounded-lg text-center shadow-md transform hover:scale-105 transition-all duration-300">
                <h3 className="text-3xl font-bold text-[#f36d21] mb-2 font-jockey-one">1,000+</h3>
                <p className="text-gray-700 font-itim text-lg">Participants</p>
              </div>
              <div className="bg-[#4c8693]/10 p-6 rounded-lg text-center shadow-md transform hover:scale-105 transition-all duration-300">
                <h3 className="text-3xl font-bold text-[#4c8693] mb-2 font-jockey-one">50+</h3>
                <p className="text-gray-700 font-itim text-lg">Colleges</p>
              </div>
              <div className="bg-amber-100 p-6 rounded-lg text-center shadow-md transform hover:scale-105 transition-all duration-300">
                <h3 className="text-3xl font-bold text-amber-600 mb-2 font-jockey-one">3</h3>
                <p className="text-gray-700 font-itim text-lg">Day Event</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md transform hover:scale-105 transition-all duration-300">
                <h3 className="text-3xl font-bold text-gray-700 mb-2 font-jockey-one">15K+</h3>
                <p className="text-gray-700 font-itim text-lg">Social Media Reach</p>
              </div>
            </div>
          </motion.div>

          {/* Sponsorship Tiers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 font-jockey-one text-center">Sponsorship Opportunities</h2>
            
            <div className="overflow-x-auto mb-10">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                <thead>
                  <tr>
                    <th className="py-4 px-6 border-b border-r border-gray-200 bg-gray-50 text-center text-gray-700 font-jockey-one text-xl">Benefits</th>
                    {sponsorshipTiers.map((tier, index) => (
                      <th key={index} className={`py-4 px-6 border-b border-r border-gray-200 ${tier.color} text-white text-center`}>
                        <h3 className="text-xl font-bold font-jockey-one">{tier.name}</h3>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sponsorshipBenefits.map((benefit, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-6 border-b border-r border-gray-200 text-sm text-gray-700 font-itim text-lg">{benefit}</td>
                      
                      {/* Main Sponsor */}
                      <td className="py-3 px-6 border-b border-r border-gray-200 text-center">
                        {/* Show checkmark for all benefits for Main Sponsor */}
                        <div className="flex justify-center">
                          <svg className="w-6 h-6 text-[#f36d21]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </td>
                      
                      {/* Co-sponsor */}
                      <td className="py-3 px-6 border-b border-r border-gray-200 text-center">
                        {/* Only show checkmark for certain benefits */}
                        {[0, 1, 2, 4, 6, 7, 8, 9].includes(index) ? (
                          <div className="flex justify-center">
                            <svg className="w-6 h-6 text-[#4CC3D9]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                        ) : null}
                      </td>
                      
                      {/* Associate Sponsor */}
                      <td className="py-3 px-6 border-b border-r border-gray-200 text-center">
                        {/* Only show checkmark for certain benefits */}
                        {[0, 2, 3, 4, 9].includes(index) ? (
                          <div className="flex justify-center">
                            <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                        ) : null}
                      </td>
                      
                      {/* Media Sponsor */}
                      <td className="py-3 px-6 border-b border-gray-200 text-center">
                        {/* Only show checkmark for certain benefits */}
                        {[0, 1, 8].includes(index) ? (
                          <div className="flex justify-center">
                            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                  
                  {/* Additional notes for specific tiers */}
                  <tr className="bg-gray-50">
                    <td className="py-3 px-6 border-b border-r border-gray-200 text-sm text-gray-700 font-itim text-lg">Special notes</td>
                    <td className="py-3 px-6 border-b border-r border-gray-200 text-center text-gray-700 font-itim text-sm">1:30 minute duration</td>
                    <td className="py-3 px-6 border-b border-r border-gray-200 text-center text-gray-700 font-itim text-sm">30 second duration</td>
                    <td className="py-3 px-6 border-b border-r border-gray-200 text-center"></td>
                    <td className="py-3 px-6 border-b border-gray-200 text-center"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-700 font-itim text-xl">
                For detailed information about our sponsorship packages and customized opportunities, 
                please download our sponsorship brochure or contact our sponsorship team.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-[#4c8693]/10 to-[#f36d21]/10 mb-24"
          >
            <div className="p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-jockey-one text-center">Get in Touch</h2>
              <p className="text-center text-gray-700 mb-8 font-itim text-xl">
                Interested in becoming a sponsor? Contact our sponsorship team for customized packages and more information.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-10">
                <a href="mailto:utpt.rvquizcorp@gmail.com" className="flex items-center bg-white/80 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white">
                  <svg className="w-5 h-5 text-[#4CC3D9] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-gray-700 font-itim text-lg hover:text-[#4c8693]">utpt.rvquizcorp@gmail.com</span>
                </a>
                <a href="tel:+917981151147" className="flex items-center bg-white/80 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white">
                  <svg className="w-5 h-5 text-[#f36d21] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="text-gray-700 font-itim text-lg hover:text-[#4c8693]">+91 79811 51147</span>
                </a>
              </div>
              
              <div className="text-center">
                <motion.a 
                  href="/sponsor/UTPT_2025_Sponsorship_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 bg-[#f36d21] text-white rounded-full hover:bg-[#e15d11] transition-all duration-300 font-jockey-one text-lg shadow-md cursor-pointer"
                >
                  Download Sponsorship Brochure
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Previous Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 mt-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 font-jockey-one text-center">Our Previous Sponsors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {previousSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32 transform hover:scale-105"
                >
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded"></div>
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 