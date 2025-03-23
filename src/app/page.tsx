"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo3D from "@/components/Logo3D";
import MiniQuiz from "@/components/MiniQuiz";

// Define interface for timeLeft object
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2025-06-15') - +new Date();
    
    // Default values
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#0B1121] flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1121] via-[#142033] to-[#1B2B45] animate-gradient-slow"></div>
        
        {/* Animated dots pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>

        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#f36d21]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4c8693]/20 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 
              className="text-5xl md:text-7xl font-bold mb-4 font-merriweather motion-fade-in text-white"
              style={{
                opacity: 0,
                animation: 'fadeIn 0.8s forwards'
              }}
            >
              R V <span className="text-[#f36d21]">Quiz</span><span className="text-[#4c8693]">Corp</span>
            </h1>
            <h2
              className="text-3xl md:text-4xl font-semibold text-white mb-6 font-merriweather motion-fade-in"
              style={{
                opacity: 0,
                animation: 'fadeIn 0.8s 0.3s forwards'
              }}
            >
              The Official Quiz Club of R V College Of Engineering
            </h2>
            <p 
              className="text-xl md:text-2xl text-gray-100 mb-10 font-merriweather motion-fade-in"
              style={{
                opacity: 0,
                animation: 'fadeIn 0.8s 0.4s forwards'
              }}
            >
              One of India&apos;s <span className="font-bold">Biggest quiz clubs</span> and hosts of <span className="font-bold">Asia&apos;s Largest Quiz Fest</span>
            </p>
            <div
              className="motion-fade-in"
              style={{
                opacity: 0,
                animation: 'fadeIn 0.8s 0.6s forwards'
              }}
            >
              <Link 
                href="/register" 
                className="bg-[#f36d21] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#d85d18] transition-all duration-300 font-merriweather hover:scale-105 transform"
              >
                Register for UTPT
              </Link>
            </div>
          </div>
        </div>

        {/* Moving particles */}
        <div className="absolute inset-0 z-10">
          <div className="absolute w-4 h-4 bg-[#f36d21] rounded-full top-1/4 left-1/4 animate-float-particle-1"></div>
          <div className="absolute w-3 h-3 bg-[#4c8693] rounded-full top-3/4 right-1/3 animate-float-particle-2"></div>
          <div className="absolute w-2 h-2 bg-white/30 rounded-full top-1/2 left-2/3 animate-float-particle-3"></div>
          <div className="absolute w-5 h-5 bg-[#f36d21]/30 rounded-full bottom-1/4 right-1/4 animate-float-particle-4"></div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-16 bg-[#4c8693] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-8 font-merriweather motion-fade-in"
            style={{
              opacity: 0,
              animation: 'fadeIn 0.5s forwards'
            }}
          >
            UTPT 2025 Coming Soon
          </h2>
          
          <div 
            className="flex flex-wrap justify-center gap-6 md:gap-10 motion-slide-up"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              animation: 'slideUp 0.7s 0.2s forwards'
            }}
          >
            <div className="bg-[#3EB1C8] rounded-xl w-32 h-32 flex flex-col items-center justify-center shadow-lg">
              <span className="text-4xl font-bold font-merriweather">{timeLeft.days}</span>
              <span className="text-sm opacity-80 mt-2 font-merriweather">Days</span>
            </div>
            <div className="bg-[#3EB1C8] rounded-xl w-32 h-32 flex flex-col items-center justify-center shadow-lg">
              <span className="text-4xl font-bold font-merriweather">{timeLeft.hours}</span>
              <span className="text-sm opacity-80 mt-2 font-merriweather">Hours</span>
            </div>
            <div className="bg-[#3EB1C8] rounded-xl w-32 h-32 flex flex-col items-center justify-center shadow-lg">
              <span className="text-4xl font-bold font-merriweather">{timeLeft.minutes}</span>
              <span className="text-sm opacity-80 mt-2 font-merriweather">Minutes</span>
            </div>
            <div className="bg-[#3EB1C8] rounded-xl w-32 h-32 flex flex-col items-center justify-center shadow-lg">
              <span className="text-4xl font-bold font-merriweather">{timeLeft.seconds}</span>
              <span className="text-sm opacity-80 mt-2 font-merriweather">Seconds</span>
            </div>
          </div>
          
          <div
            className="mt-12 motion-slide-up"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              animation: 'slideUp 0.7s 0.4s forwards'
            }}
          >
            <Link 
              href="/utpt"
              className="inline-flex items-center bg-white text-[#4CC3D9] px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium font-merriweather"
            >
              Learn About UTPT
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

          {/* Sponsors */}
          <div 
            className="mt-12 flex flex-wrap justify-center items-center gap-12 md:gap-20 motion-slide-up"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              animation: 'slideUp 0.7s 0.6s forwards'
            }}
          >
            {/* Sponsor 1 */}
            <div className="relative w-48 h-32 bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
              <Image
                src="/sponsors/sponsor1.png"
                alt="Sponsor 1"
                width={180}
                height={120}
                className="object-contain"
              />
            </div>
            
            {/* Sponsor 2 */}
            <div className="relative w-48 h-32 bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
              <Image
                src="/sponsors/sponsor2.png"
                alt="Sponsor 2"
                width={180}
                height={120}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div
            className="text-center mb-16 motion-fade-in"
            style={{
              opacity: 0,
              animation: 'fadeIn 0.7s forwards'
            }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white font-merriweather">About Us</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-merriweather">
              RV QuizCorp is the official quiz club of R.V. College of Engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div
              className="motion-slide-in"
              style={{
                opacity: 0,
                transform: 'translateX(-30px)',
                animation: 'slideIn 0.6s forwards'
              }}
            >
              <Image
                src="/about/utpt24.jpg"
                alt="RV QuizCorp Team" 
                width={600} 
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div
              className="motion-slide-in"
              style={{
                opacity: 0,
                transform: 'translateX(30px)',
                animation: 'slideIn 0.6s forwards'
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white font-merriweather">Our Story</h3>
              <p className="text-gray-300 mb-6 font-merriweather text-justify">
                Founded in 1997, RV QuizCorp has grown to become one of India's premier collegiate quizzing institutions. What started as a small group of quiz enthusiasts has evolved into an organization that hosts Asia's largest student-run quiz fest - Under The Peepal Tree (UTPT).
              </p>
              <p className="text-gray-300 mb-8 font-merriweather text-justify">
                Our mission is to foster a culture of curiosity, knowledge-sharing, and intellectual stimulation through the art of quizzing. We believe that quizzing is not just a competitive activity but a tool for learning and personal growth.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <h4 className="text-xl font-bold mb-2 text-white font-merriweather">25+</h4>
                  <p className="text-gray-400 font-merriweather">Years of Legacy</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <h4 className="text-xl font-bold mb-2 text-white font-merriweather">1000+</h4>
                  <p className="text-gray-400 font-merriweather">Annual Participants</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <h4 className="text-xl font-bold mb-2 text-white font-merriweather">50+</h4>
                  <p className="text-gray-400 font-merriweather">Events Organized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 lg:px-16">
          <div
            className="text-center mb-16 motion-fade-in"
            style={{
              opacity: 0,
              animation: 'fadeIn 0.7s forwards'
            }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 font-merriweather">Sponsor UTPT</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-merriweather">
              Partner with Asia&apos;s largest student-run quiz fest
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div
              className="w-full max-w-3xl mx-auto motion-slide-in"
              style={{
                opacity: 0,
                transform: 'translateX(-30px)',
                animation: 'slideIn 0.6s forwards'
              }}
            >
              <div className="bg-white p-8 lg:p-12 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-8 text-[#4c8693] font-merriweather text-center">Why Sponsor UTPT?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start justify-center">
                    <svg className="w-6 h-6 text-[#f36d21] mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 text-lg font-merriweather">Reach 1000+ students from top institutions across India</span>
                  </li>
                  <li className="flex items-start justify-center">
                    <svg className="w-6 h-6 text-[#f36d21] mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 text-lg font-merriweather">Associate with one of India&apos;s most prestigious quiz events</span>
                  </li>
                  <li className="flex items-start justify-center">
                    <svg className="w-6 h-6 text-[#f36d21] mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 text-lg font-merriweather">Customized sponsorship packages available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <Link 
              href="/sponsorship"
              className="bg-[#f36d21] text-white px-12 py-4 rounded-full hover:bg-[#d85d18] transition-all duration-300 font-merriweather inline-block text-lg"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
