"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-8 lg:px-16">
        <div
          className="text-center mb-16 motion-fade-in"
          style={{
            opacity: 0,
            animation: 'fadeIn 0.6s forwards'
          }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6 font-merriweather">RV QuizCorp Blog</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-merriweather">
            Stay updated with the latest news, insights, and stories from the world of quizzing
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden motion-slide-up"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `slideUp 0.6s ${index * 0.1}s forwards`
              }}
            >
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-gray-500 mb-3 font-merriweather">{post.date} • {post.author}</div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 font-merriweather">{post.title}</h2>
                <p className="text-gray-600 mb-6 font-merriweather text-justify">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-[#4c8693] hover:text-[#3a6b75] font-medium font-merriweather inline-flex items-center text-lg"
                >
                  Read More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-20 motion-fade-in"
          style={{
            opacity: 0,
            animation: 'fadeIn 0.6s 0.3s forwards'
          }}
        >
          <p className="text-gray-600 mb-6 text-xl font-merriweather">Want to contribute to our blog?</p>
          <Link
            href="/contact"
            className="bg-[#f36d21] text-white px-12 py-4 rounded-full hover:bg-[#d85d18] transition-all duration-300 font-merriweather inline-block text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
} 