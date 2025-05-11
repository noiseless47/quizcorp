"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramEmbed from "@/components/InstagramEmbed";

export default function Blog() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "UTPT 2023 - A Spectacular Success",
      excerpt: "The 2023 edition of Under The Peepal Tree saw participation from over 1000 quizzers across India...",
      date: "April 15, 2023",
      author: "RV QuizCorp Team",
      image: "/blog-1.jpg"
    },
    {
      id: 2,
      title: "How to Prepare for Competitive Quizzing",
      excerpt: "Competitive quizzing requires a unique approach to knowledge acquisition. Here are some tips from our experienced quizzers...",
      date: "February 8, 2023",
      author: "Senior Quizmaster",
      image: "/blog-2.jpg"
    },
    {
      id: 3,
      title: "The History of RV QuizCorp",
      excerpt: "From its humble beginnings in 1997 to becoming one of India's most respected quiz clubs, here's the journey of RV QuizCorp...",
      date: "December 12, 2022",
      author: "Alumni Association",
      image: "/blog-3.jpg"
    }
  ];

  // Instagram post URLs from RV QuizCorp
  const instagramPosts = [
    "https://www.instagram.com/p/DJb3toxzYA2/",
    "https://www.instagram.com/p/DJUIKL-TF0P/",
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 font-jockey-one motion-fade-in">
            Blog & Posts
          </h1>
          <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto font-itim text-shadow motion-fade-in">
            Insights, stories, and updates from the world of quizzing and RV QuizCorp
          </p>
        </div>
        
        {/* Featured Article */}
        <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-xl overflow-hidden shadow-xl mb-16 motion-slide-up">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative h-64 lg:h-auto">
              <Image 
                src="/blog/featured.jpg" 
                alt="The Art of Crafting the Perfect Quiz Question" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent"></div>
            </div>
            <div className="p-8 lg:pr-12">
              <div className="inline-block px-3 py-1 bg-[#f36d21] text-white text-sm rounded-full mb-4 font-jockey-one">
                Featured
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 font-jockey-one">
                The Art of Crafting the Perfect Quiz Question
              </h2>
              <p className="text-xl text-gray-300 mb-6 font-itim text-shadow">
                Balancing difficulty, audience engagement, and knowledge value is what makes quiz design an art form. Our quizmasters share their secrets for creating questions that challenge and inspire.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#4c8693] flex items-center justify-center text-white font-bold font-jockey-one">
                    AR
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-medium font-itim">Aditya Rao</div>
                    <div className="text-gray-400 text-sm font-itim">Head Quizmaster</div>
                  </div>
                </div>
                <span className="text-gray-400 text-sm font-itim">May 12, 2023 • 8 min read</span>
              </div>
              <div className="mt-6">
                <button className="inline-flex items-center text-white hover:text-[#f36d21] transition-colors font-itim text-lg">
                  Read Article
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Instagram Posts Section */}
        <div className="mb-16 motion-fade-in">
          <h2 className="text-3xl font-bold text-gray-700 mb-8 font-jockey-one text-center">
            Latest from Instagram
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {instagramPosts.map((url, index) => (
              <InstagramEmbed key={index} url={url} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://instagram.com/rvquizcorp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#f36d21] hover:text-[#d85d18] transition-colors font-itim text-lg"
            >
              Follow us on Instagram
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Articles Grid */}
        <h2 className="text-3xl font-bold text-white mb-8 font-jockey-one motion-fade-in">
          Latest Articles
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Article Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg motion-slide-up">
            <div className="relative h-48">
              <Image 
                src="/blog/article1.jpg" 
                alt="Quizzing In The Digital Age" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-jockey-one">
                Quizzing In The Digital Age
              </h3>
              <p className="text-lg text-gray-700 mb-4 font-itim text-shadow">
                How technology has transformed the landscape of competitive quizzing, from research methods to question formats.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#4c8693] font-itim text-lg">Tech & Trends</span>
                <span className="text-gray-500 text-sm font-itim">April 28, 2023</span>
              </div>
            </div>
          </div>
          
          {/* Article Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg motion-slide-up">
            <div className="relative h-48">
              <Image 
                src="/blog/article2.jpg" 
                alt="UTPT 2023: A Retrospective" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-jockey-one">
                UTPT 2023: A Retrospective
              </h3>
              <p className="text-lg text-gray-700 mb-4 font-itim text-shadow">
                Looking back at the highlights, challenges, and memorable moments from our flagship event last year.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#f36d21] font-itim text-lg">Event Reports</span>
                <span className="text-gray-500 text-sm font-itim">April 15, 2023</span>
              </div>
            </div>
          </div>
          
          {/* Article Card 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg motion-slide-up">
            <div className="relative h-48">
              <Image 
                src="/blog/article3.jpg" 
                alt="Quiz Preparation Strategies" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-jockey-one">
                Quiz Preparation Strategies
              </h3>
              <p className="text-lg text-gray-700 mb-4 font-itim text-shadow">
                Top quizzers share their approaches to building knowledge and preparing for competitive quizzing events.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#4c8693] font-itim text-lg">Tips & Techniques</span>
                <span className="text-gray-500 text-sm font-itim">March 30, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 