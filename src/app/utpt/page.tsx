"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function UTPT() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleCategoryClick = (category: string) => {
    // TODO: Replace with actual PDF links when available
    const pdfLinks: { [key: string]: string } = {
      // Add PDF links here when available
      // Example: "Music": "/pdfs/music-quiz.pdf"
    };

    if (pdfLinks[category]) {
      window.open(pdfLinks[category], '_blank');
    } else {
      setModalMessage(`${category} quiz will be available soon! Stay tuned for exciting questions!`);
      setShowModal(true);
    }
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById('modal');
      if (modal && !modal.contains(event.target as Node)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

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

          {/* UTPT 2025 Schedule Section */}
          <div className="max-w-3xl mx-auto mt-10 mb-16 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/30" style={{background: 'linear-gradient(135deg, rgba(76,134,147,0.10) 0%, rgba(243,109,33,0.10) 100%)'}}>
            <h2 className="text-4xl font-bold text-center text-[#f36d21] mb-8 font-jockey-one drop-shadow-lg">UTPT 2025 Schedule</h2>
            <div className="space-y-10">
              {/* May 23 */}
              <div>
                <div className="font-bold text-2xl mb-4 text-[#4c8693] text-left font-jockey-one">May 23</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button type="button" onClick={() => document.getElementById('indi-genius')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="flex items-center gap-4 bg-white/10 rounded-xl p-4 shadow-md hover:bg-[#f36d21]/30 transition cursor-pointer w-full">
                    <span className="text-3xl">🧭</span>
                    <div>
                      <div className="font-bold text-xl text-white font-jockey-one">INDI-GENIUS</div>
                      <div className="text-sm text-gray-200 font-itim">9 AM</div>
                    </div>
                  </button>
                  <button type="button" onClick={() => document.getElementById('lieut-en-ent')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="flex items-center gap-4 bg-white/10 rounded-xl p-4 shadow-md hover:bg-[#f36d21]/30 transition cursor-pointer w-full">
                    <span className="text-3xl">🎭</span>
                    <div>
                      <div className="font-bold text-xl text-white font-jockey-one">LIEUT-EN-ENT</div>
                      <div className="text-sm text-gray-200 font-itim">2 PM</div>
                    </div>
                  </button>
                </div>
              </div>
              {/* May 24 */}
              <div>
                <div className="font-bold text-2xl mb-4 text-[#4c8693] text-left font-jockey-one">May 24</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button type="button" onClick={() => document.getElementById('game-theory')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="flex items-center gap-4 bg-white/10 rounded-xl p-4 shadow-md hover:bg-[#f36d21]/30 transition cursor-pointer w-full">
                    <span className="text-3xl">🎮</span>
                    <div>
                      <div className="font-bold text-xl text-white font-jockey-one">GAME THEORY</div>
                      <div className="text-sm text-gray-200 font-itim">9 AM</div>
                    </div>
                  </button>
                  <button type="button" onClick={() => document.getElementById('psi-tech')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="flex items-center gap-4 bg-white/10 rounded-xl p-4 shadow-md hover:bg-[#f36d21]/30 transition cursor-pointer w-full">
                    <span className="text-3xl">⚛️</span>
                    <div>
                      <div className="font-bold text-xl text-white font-jockey-one">Ψ-TECH</div>
                      <div className="text-sm text-gray-200 font-itim">2 PM</div>
                    </div>
                  </button>
                </div>
              </div>
              {/* May 25 */}
              <div>
                <div className="font-bold text-2xl mb-4 text-[#4c8693] text-left font-jockey-one">May 25</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button type="button" onClick={() => document.getElementById('magnum-open')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="flex items-center gap-4 bg-white/10 rounded-xl p-4 shadow-md hover:bg-[#f36d21]/30 transition cursor-pointer w-full">
                    <span className="text-3xl">🔫</span>
                    <div>
                      <div className="font-bold text-xl text-white font-jockey-one">MAGNUM OPEN</div>
                      <div className="text-sm text-gray-200 font-itim">9 AM</div>
                    </div>
                  </button>
                  <button type="button" onClick={() => document.getElementById('major-quiz')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="flex items-center gap-4 bg-white/10 rounded-xl p-4 shadow-md hover:bg-[#f36d21]/30 transition cursor-pointer w-full">
                    <span className="text-3xl">🎖️</span>
                    <div>
                      <div className="font-bold text-xl text-white font-jockey-one">MAJOR QUIZ</div>
                      <div className="text-sm text-gray-200 font-itim">2 PM</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Informals Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-8 lg:px-16">
          <div
            className="max-w-4xl mx-auto motion-slide-up"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              animation: 'slideUp 0.6s forwards'
            }}
          >
            <div className="p-8 lg:p-12 rounded-xl shadow-lg border border-white/20">
              <h2 className="text-3xl font-bold mb-2 text-center text-white font-jockey-one">Informals for UTPT 2025</h2>
              <p className="text-white/90 text-lg font-itim text-shadow text-center mb-8">
                Explore a variety of informal questions and quizzes to get a taste of UTPT!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {[
                  { name: "Music", description: "Test your knowledge of melodies, artists, and musical trivia across genres and eras!" },
                  { name: "Anime", description: "From classic series to the latest releases, prove your anime expertise!" },
                  { name: "Science-Biz-Tech", description: "Challenge yourself with questions on scientific discoveries, business trends, and tech innovations!" },
                  { name: "Movies & TV", description: "From blockbuster hits to cult classics, show off your entertainment knowledge!" },
                  { name: "India", description: "Celebrate Indian culture, history, and achievements through engaging trivia!" },
                  { name: "Sports", description: "Test your knowledge of sports history, current events, and legendary moments!" }
                ].map((category, index) => (
                  <div
                    key={category.name}
                    onClick={() => handleCategoryClick(category.name)}
                    className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105 flex flex-col h-full"
                  >
                    <h3 className={`text-2xl font-bold mb-3 ${index % 2 === 0 ? "text-[#f36d21]" : "text-[#4c8693]"} font-jockey-one`}>
                      {category.name}
                    </h3>
                    <p className="text-white/90 font-itim text-shadow mb-4">
                      {category.description}
                    </p>
                    <div className="mt-auto pt-2 text-right">
                      <span className="text-white/80 text-sm font-itim">Click to view quiz →</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-white/90 font-itim text-shadow text-lg">
                  Check back regularly for new questions and updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            id="modal"
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20 max-w-md mx-4 transform transition-all"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white font-jockey-one">Coming Soon!</h3>
              <p className="text-white/90 font-itim text-lg mb-6">
                {modalMessage}
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#f36d21] text-white px-8 py-3 rounded-full hover:bg-[#d85d18] transition-all duration-300 font-jockey-one"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

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
                  className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300 motion-slide-up scroll-mt-28"
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                    animation: `slideUp 0.6s ${index * 0.1}s forwards`
                  }}
                  id={`${quiz.title.toLowerCase().replace(/\s+/g, '-')}`}
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