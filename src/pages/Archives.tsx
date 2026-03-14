import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ArchiveEvent {
  year: number;
  title: string;
  description: string;
  image: string;
  winners?: string[];
}

interface ArchiveYear {
  year: number;
  events: ArchiveEvent[];
  highlights?: string[];
}

export default function Archives() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const archiveData: ArchiveYear[] = [
    {
      year: 2026,
      events: [
        {
          year: 2026,
          title: "UTPT 2026: The Future",
          description: "Preparations are underway for the 21st edition, promising an unprecedented fusion of tradition and technology.",
          image: "/archives/utpt26.jpg",
        }
      ],
      highlights: ["Strategic roadmap for global expansion", "Innovation in digital quizzing platforms"]
    },
    {
      year: 2025,
      events: [
        {
          year: 2025,
          title: "UTPT 2025: May 23-25",
          description: "Setting the stage for our 20th anniversary celebration. Expect legacy quizzes and modern challenges across three intensive days.",
          image: "/archives/utpt25.jpg",
        }
      ],
      highlights: ["Opening registrations for 1200+ teams", "Curating special celebrity guest quizzes"]
    },
    {
      year: 2024,
      events: [
        {
          year: 2024,
          title: "UTPT 2024",
          description: "The 19th edition of Under The Peepal Tree featured over 800 participants from across India, with 6 specialized quiz categories.",
          image: "/archives/utpt24.jpg",
          winners: ["Team Quizzical Minds (Major Quiz)", "Team BrainStorm (Indi-Genius)"]
        },
        {
          year: 2024,
          title: "RVPU Quiz 2024",
          description: "An intellectually stimulating quiz competition for PU students, fostering curiosity among young minds.",
          image: "/archives/rvpu24.jpg"
        }
      ],
      highlights: [
        "Record-breaking participation from 28 states",
        "Ranked among India's top 5 collegiate quiz festivals"
      ]
    },
    {
      year: 2023,
      events: [
        {
          year: 2023,
          title: "UTPT 2023",
          description: "A grand celebration of knowledge with participants from across the subcontinent.",
          image: "/archives/utpt2023.jpg"
        }
      ],
      highlights: [
        "International recognition for organizing Asia's largest student-run fest",
        "Successful mentorship programs across schools in Karnataka"
      ]
    }
  ];

  const [selectedYear, setSelectedYear] = useState<number>(archiveData[0].year);
  const currentYearData = archiveData.find(data => data.year === selectedYear) || archiveData[0];

  return (
    <div className="min-h-screen bg-[#0B1121] text-white pt-24 pb-20 overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4c8693]/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-1/2 left-0 w-[400px] h-[400px] bg-[#f36d21]/5 rounded-full blur-[100px] -z-0"></div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gabarito-bold tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4c8693] to-[#88d5e5]">Archives</span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto gabarito-regular leading-relaxed">
              A chronological legacy of curiosity, knowledge, and excellence at <span className="text-white">RV QuizCorp</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Year Selector - Refined Sticky Aesthetic */}
      <section className="sticky top-20 z-40 py-8 backdrop-blur-xl bg-[#0B1121]/40 border-b border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
        <div className="container mx-auto px-6">
          <div className="flex justify-center flex-wrap gap-4 sm:gap-8">
            {archiveData.map(data => (
              <button
                key={data.year}
                onClick={() => setSelectedYear(data.year)}
                className={`relative px-6 py-2 text-xl font-bold transition-all duration-300 gabarito-bold ${
                  selectedYear === data.year 
                    ? 'text-[#f36d21]'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {data.year}
                {selectedYear === data.year && (
                  <motion.div 
                    layoutId="activeYear"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-[#f36d21] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {currentYearData.highlights && (
                <div className="mb-20">
                  <h2 className="text-3xl font-bold mb-8 gabarito-bold border-l-4 border-[#f36d21] pl-4">Yearly Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentYearData.highlights.map((highlight, index) => (
                      <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#f36d21]/20 flex items-center justify-center mr-4 flex-shrink-0">
                           <svg className="w-6 h-6 text-[#f36d21]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <p className="text-gray-300 gabarito-regular text-lg">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <h2 className="text-3xl font-bold mb-12 gabarito-bold border-l-4 border-[#4c8693] pl-4">Major Events</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {currentYearData.events.map((event, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="aspect-video bg-gray-800 flex items-center justify-center relative overflow-hidden">
                       <span className="text-white/10 text-2xl font-bold">{event.title} Image Placeholder</span>
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                       <div className="absolute bottom-6 left-6">
                          <h3 className="text-2xl font-bold text-white gabarito-bold">{event.title}</h3>
                       </div>
                    </div>
                    <div className="p-8">
                      <p className="text-gray-300 mb-6 gabarito-regular text-lg leading-relaxed">
                        {event.description}
                      </p>
                      {event.winners && (
                        <div>
                          <h4 className="text-[#f36d21] font-bold mb-4 gabarito-bold uppercase tracking-wider text-sm">Winning Teams</h4>
                          <div className="flex flex-wrap gap-3">
                            {event.winners.map((winner, idx) => (
                              <span key={idx} className="bg-[#f36d21]/10 text-[#f36d21] px-4 py-1 rounded-full text-sm font-medium border border-[#f36d21]/20">
                                {winner}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-32 text-center">
            <h2 className="text-3xl font-bold mb-8 gabarito-bold">Be Part of the History</h2>
            <Link 
              to="/register"
              className="bg-[#f36d21] text-white px-10 py-4 rounded-full hover:bg-[#d85d18] transition-all gabarito-bold inline-block"
            >
              Contact for Collaborations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
