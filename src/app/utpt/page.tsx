"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function UTPT() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="relative bg-gradient-to-r from-black-700 via-black-600 to-black-500 py-16">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div
            className="text-center motion-fade-in"
            style={{
              opacity: 0,
              animation: 'fadeIn 0.6s forwards'
            }}
          >
            <h1 className="text-5xl font-bold text-white mb-4 font-jockey-one">Under The Peepal Tree</h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto font-itim text-shadow">
              Asia&apos;s Largest Student-Run Quiz Fest
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-8 lg:px-16">
          <h2 className="text-4xl font-bold mb-12 text-center font-jockey-one text-white">
            About UTPT
          </h2>
          <div
            className="max-w-4xl mx-auto motion-slide-up"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              animation: 'slideUp 0.6s forwards'
            }}
          >
            <div className="bg-white p-8 lg:p-12 rounded-xl shadow-lg">
              <p className="text-gray-700 mb-6 font-itim text-justify">
                Under the Peepal Tree (UTPT) is a quiz fest organized by RV QuizCorp, the quiz club of R.V. College of Engineering. Since its first edition in 2004, it has grown to become one of the most anticipated events in the Indian quizzing calendar.
              </p>
              <p className="text-gray-700 mb-6 font-itim text-justify">
                The name "Under the Peepal Tree" comes from the tradition of knowledge sharing that took place under the sacred Peepal trees in ancient India. Just as those trees witnessed the exchange of wisdom, UTPT provides a platform for the brightest minds to showcase their knowledge.
              </p>
              <p className="text-gray-700 font-itim text-justify">
                Every year, UTPT attracts participants from all over India, making it Asia&apos;s largest student-run quiz fest. The event showcases the brightest minds in quizzing and draws participation from across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-8 lg:px-16">
          <h2 className="text-4xl font-bold mb-12 text-center font-jockey-one text-white">
            UTPT Quiz Categories
          </h2>
          <div
            className="max-w-6xl mx-auto motion-fade-in"
            style={{
              opacity: 0,
              animation: 'fadeIn 0.8s forwards'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {[
                {
                  title: "Indi-Genius",
                  description: "If you're crazy about everything desi, this is the perfect quiz for you. From Ram-Leela to Ramayana, cricket wickets and election tickets, this quiz encompasses everything that makes us say \"It only happens in India\".",
                  color: "orange"
                },
                {
                  title: "Ψ-Biz-Tech",
                  description: "Here's where being a geek will work in your favour. If you switch on the TV only for The Discovery channel, if your magazine subscriptions include the Scientific American and if your favourite board game is Monopoly, get ready to win some serious money in this science, technology and business quiz.",
                  color: "turkish"
                },
                {
                  title: "Varun Krishnamurthy Memorial Game Theory",
                  description: "Find out if it was all worth it. Staying up late into the night for all those matches. Comparing team stats. Making your dream teams on fantasy leagues. Has all the stress of last overs in India-Pak matches, football penalties and nailbiting deciding sets in tennis taken a toll on you? Or will it be the reason you walk away with a fatter wallet?",
                  color: "orange"
                },
                {
                  title: "Lieut-en-ent",
                  description: "Do you watch an episode a week or a season per day? Have you only watched the movie or read the books too? Do you only listen to the radio or is your ipod running out of space? If all your anwers were the latter options, then your best option would not be to \"tread lightly\". Lieut-en-ent quiz should be your cup o' tea. Bonus points if you can tell us when Leo will get his Oscar.",
                  color: "turkish"
                },
                {
                  title: "Major Quiz",
                  description: "Prepare to be asked about anything and everything under the sun. Does your know(how) cover it-all? The winner of this quiz will not just be a Jack of all trades, but also a Master of them all. It's called the Major Quiz for a reason.",
                  color: "orange"
                },
                {
                  title: "Magnum Open",
                  description: "Hosted by the well known quizzer Nitish Khadiya, an RV Alumnus, this quiz is open to everyone. Age no bar. This is truly the baap of all quizzes. The phrase \"pick on someone your own size\" is redundant here.",
                  color: "turkish"
                }
              ].map((quiz, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300 motion-slide-up"
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                    animation: `slideUp 0.6s ${index * 0.1}s forwards`
                  }}
                >
                  <h3 className={`text-2xl font-bold mb-4 ${quiz.color === "orange" ? "text-[#f36d21]" : "text-[#4c8693]"} font-jockey-one`}>{quiz.title}</h3>
                  <p className="text-gray-700 font-itim">{quiz.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <div
              className="motion-fade-in"
              style={{
                opacity: 0,
                animation: 'fadeIn 0.5s forwards'
              }}
            >
              <Link 
                href="/register"
                className="bg-[#f36d21] text-white px-12 py-4 rounded-full hover:bg-[#d85d18] transition-all duration-300 font-jockey-one inline-flex items-center text-lg"
              >
                Register for UTPT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="py-20">
        <div className="container mx-auto px-8 lg:px-16">
          <div
            className="text-center mb-16 motion-fade-in"
            style={{
              opacity: 0,
              animation: 'fadeIn 0.7s forwards'
            }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white font-jockey-one">Sponsor UTPT</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-itim text-shadow">
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
              <div className="bg-white/10 backdrop-blur-sm p-8 lg:p-12 rounded-xl shadow-lg border border-white/20">
                <h3 className="text-2xl font-bold mb-8 text-[#4c8693] font-jockey-one text-center">Why Sponsor UTPT?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start justify-center">
                    <svg className="w-6 h-6 text-[#f36d21] mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-white/90 text-xl font-itim text-shadow">Reach 1000+ students from top institutions across India</span>
                  </li>
                  <li className="flex items-start justify-center">
                    <svg className="w-6 h-6 text-[#f36d21] mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-white/90 text-xl font-itim text-shadow">Associate with one of India&apos;s most prestigious quiz events</span>
                  </li>
                  <li className="flex items-start justify-center">
                    <svg className="w-6 h-6 text-[#f36d21] mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-white/90 text-xl font-itim text-shadow">Customized sponsorship packages available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/sponsorship"
              className="bg-[#f36d21] text-white px-12 py-4 rounded-full hover:bg-[#d85d18] transition-all duration-300 font-jockey-one inline-flex items-center text-lg"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 