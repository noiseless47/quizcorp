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
      name: "Title Sponsor",
      price: "₹3,00,000+",
      color: "bg-gradient-to-r from-orange-600 to-orange-500",
      features: [
        "Exclusive naming rights: 'UTPT 2025 presented by [Your Brand]'",
        "Prime logo placement on all promotional materials",
        "Dedicated stage time during opening and closing ceremonies",
        "VIP access to all events for company representatives",
        "Exhibition booth at prime location (10x10 ft)",
        "Social media promotion (20+ posts across platforms)",
        "Logo on event backdrop, banners, and participant kits",
        "Full-page ad in the event booklet",
        "Opportunity to distribute branded merchandise",
        "Exclusive email blast to all participants"
      ]
    },
    {
      name: "Platinum Sponsor",
      price: "₹1,50,000+",
      color: "bg-gradient-to-r from-[#4CC3D9] to-[#3EB1C8]",
      features: [
        "Logo prominently featured on all promotional materials",
        "Recognition during opening and closing ceremonies",
        "VIP access to select events for company representatives",
        "Exhibition booth (8x8 ft)",
        "Social media promotion (10+ posts across platforms)",
        "Logo on event backdrop and banners",
        "Half-page ad in the event booklet",
        "Opportunity to include promotional material in participant kits"
      ]
    },
    {
      name: "Gold Sponsor",
      price: "₹75,000+",
      color: "bg-gradient-to-r from-amber-500 to-yellow-500",
      features: [
        "Logo on promotional materials",
        "Recognition during events",
        "Exhibition kiosk (6x6 ft)",
        "Social media promotion (5+ posts across platforms)",
        "Logo on select event banners",
        "Quarter-page ad in the event booklet"
      ]
    },
    {
      name: "Silver Sponsor",
      price: "₹40,000+",
      color: "bg-gradient-to-r from-gray-400 to-gray-500",
      features: [
        "Logo on event website",
        "Recognition in event booklet",
        "Social media mentions (2+ posts)",
        "Logo display at registration desk",
        "Promotional material in participant kits"
      ]
    }
  ];

  // Previous sponsors logos (for demo - replace with actual sponsor images)
  const previousSponsors = [
    { name: "TechCorp", logo: "/sponsors/sponsor1.png" },
    { name: "GlobalBank", logo: "/sponsors/sponsor2.png" },
    { name: "InnovateX", logo: "/sponsors/sponsor3.png" },
    { name: "MediaGroup", logo: "/sponsors/sponsor4.png" },
    { name: "EduNetwork", logo: "/sponsors/sponsor5.png" },
    { name: "FutureTech", logo: "/sponsors/sponsor6.png" }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black-700 via-black-600 to-black-500 py-16">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <h1 className="text-5xl font-bold text-white mb-4 font-merriweather">Sponsor UTPT 2025</h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto font-merriweather">
              Partner with Asia&apos;s premier student-run quiz fest
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* About UTPT Sponsorship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '56rem', margin: '0 auto 4rem' }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 font-merriweather text-center">Why Sponsor UTPT?</h2>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-8">
              <p className="text-gray-700 mb-4 font-merriweather">
                Under the Peepal Tree (UTPT) is Asia&apos;s largest student-run quiz fest, organized by RV QuizCorp. With a rich history dating back to 2004, UTPT has established itself as one of the most prestigious quizzing events in India, attracting participants from top institutions across the country.
              </p>
              <p className="text-gray-700 mb-4 font-merriweather">
                Sponsoring UTPT offers your brand a unique opportunity to connect with a diverse, intellectual audience comprising over 1,000 students, professionals, and quiz enthusiasts. Our sponsors gain exceptional visibility and engagement with a highly engaged audience known for their intellectual curiosity and analytical thinking.
              </p>
              <p className="text-gray-700 font-merriweather">
                We offer flexible sponsorship packages designed to meet your marketing objectives and budget. From brand visibility to direct engagement opportunities, UTPT provides a platform to showcase your company&apos;s commitment to education, knowledge, and intellectual pursuits.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-[#f36d21]/10 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-[#f36d21] mb-2 font-merriweather">1,000+</h3>
                <p className="text-gray-700">Participants</p>
              </div>
              <div className="bg-[#4c8693]/10 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-[#4c8693] mb-2 font-merriweather">50+</h3>
                <p className="text-gray-700">Colleges</p>
              </div>
              <div className="bg-amber-100 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-amber-600 mb-2 font-merriweather">3</h3>
                <p className="text-gray-700">Day Event</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-gray-700 mb-2 font-merriweather">15K+</h3>
                <p className="text-gray-700">Social Media Reach</p>
              </div>
            </div>
          </motion.div>

          {/* Sponsorship Tiers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '4rem' }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 font-merriweather text-center">Sponsorship Opportunities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorshipTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ 
                    backgroundColor: 'white',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    transition: 'all 0.3s',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div className={`${tier.color} text-white p-6 text-center`}>
                    <h3 className="text-2xl font-bold mb-2 font-merriweather">{tier.name}</h3>
                    <p className="text-3xl font-bold">{tier.price}</p>
                  </div>
                  <div className="p-6 flex-grow">
                    <ul className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Previous Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '4rem' }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 font-merriweather text-center">Our Previous Sponsors</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {previousSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{
                    backgroundColor: 'white',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '6rem'
                  }}
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

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              maxWidth: '56rem',
              margin: '0 auto',
              backgroundColor: 'rgba(76, 195, 217, 0.1)',
              padding: '2rem',
              borderRadius: '0.75rem'
            }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 font-merriweather text-center">Get in Touch</h2>
            <p className="text-center text-gray-700 mb-8">
              Interested in becoming a sponsor? Contact our sponsorship team for customized packages and more information.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#4CC3D9] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-700">sponsors.utpt@rvquizcorp.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-700">+91 98765 43210</span>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: '#f36d21',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  transition: 'all 0.3s',
                  fontFamily: 'Merriweather, serif'
                }}
              >
                Download Sponsorship Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 