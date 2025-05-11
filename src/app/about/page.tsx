"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 font-jockey-one text-center">About RV QuizCorp</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-64 md:h-full">
                <Image
                  src="/about/utpt24.jpg"
                  alt="RV QuizCorp Team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 font-jockey-one">Our Story</h2>
                <p className="text-gray-700 font-itim text-lg">
                  Founded in 1997, RV QuizCorp has grown to become one of India's premier collegiate quizzing institutions. What started as a small group of quiz enthusiasts has evolved into an organization that hosts Asia's largest student-run quiz fest - Under The Peepal Tree (UTPT).
                </p>
                <p className="text-gray-700 font-itim text-lg">
                  Our mission is to foster a culture of curiosity, knowledge-sharing, and intellectual stimulation through the art of quizzing. We believe that quizzing is not just a competitive activity but a tool for learning and personal growth.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">Our Vision</h2>
                <p className="text-gray-700 font-itim text-lg">
                  To be the leading force in collegiate quizzing, promoting intellectual excellence and fostering a community of lifelong learners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">Our Mission</h2>
                <p className="text-gray-700 font-itim text-lg">
                  To create an inclusive environment that encourages intellectual curiosity, promotes knowledge sharing, and develops critical thinking skills through the medium of quizzing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">Our Values</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 font-itim text-lg">
                  <li>Excellence in everything we do</li>
                  <li>Integrity and transparency</li>
                  <li>Inclusivity and diversity</li>
                  <li>Innovation and creativity</li>
                  <li>Community and collaboration</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">Our Impact</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 font-jockey-one">10000+</h3>
                    <p className="text-gray-700 font-itim">Students Reached</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 font-jockey-one">25+</h3>
                    <p className="text-gray-700 font-itim">Years of Excellence</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 font-jockey-one">50+</h3>
                    <p className="text-gray-700 font-itim">Events Organized</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 font-jockey-one">Get Involved</h2>
                <p className="text-gray-700 font-itim text-lg mb-4">
                  Join us in our journey to promote quizzing and intellectual growth. Whether you're a student, sponsor, or quiz enthusiast, there are many ways to get involved with RV QuizCorp.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/register" className="bg-[#f36d21] text-white px-6 py-3 rounded-lg hover:bg-[#d85d18] transition-colors font-jockey-one">
                    Register for Events
                  </a>
                  <a href="/sponsorship" className="bg-[#4c8693] text-white px-6 py-3 rounded-lg hover:bg-[#3a6a75] transition-colors font-jockey-one">
                    Become a Sponsor
                  </a>
                  <a href="/contact" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-jockey-one">
                    Contact Us
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 