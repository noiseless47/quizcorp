"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define archive data types
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
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Archive data - past years with events
  const archiveData: ArchiveYear[] = [
    {
      year: 2024,
      events: [
        {
          year: 2024,
          title: "UTPT 2024",
          description: "The 19th edition of Under The Peepal Tree featured over 800 participants from across India, with 6 specialized quiz categories and a total prize pool of ₹3 lakhs.",
          image: "/archives/utpt2023.jpg",
          winners: ["Team Quizzical Minds (Major Quiz)", "Team BrainStorm (Indi-Genius)", "Team Cognoscenti (Ψ-Biz-Tech)"]
        },
        {
          year: 2024,
          title: "RVPU Quiz 2024",
          description: "Annual quiz competition for the incoming batch of RVCE students, designed to introduce them to the world of competitive quizzing.",
          image: "/archives/freshers2023.jpg"
        },
        {
          year: 2024,
          title: "Freshers' Quiz 2024",
          description: "Annual quiz competition for the incoming batch of RVCE students, designed to introduce them to the world of competitive quizzing.",
          image: "/archives/freshers2023.jpg"
        }
      ],
      highlights: [
        "RV QuizCorp team ranked 2nd at the International Collegiate Quiz Championship",
        "Successfully organized the largest-ever UTPT with participation from 28 states"
      ]
    },
    {
      year: 2023,
      events: [
        {
          year: 2023,
          title: "UTPT 2023",
          description: "The 19th edition of Under The Peepal Tree featured over 800 participants from across India, with 6 specialized quiz categories and a total prize pool of ₹3 lakhs.",
          image: "/archives/utpt2023.jpg",
          winners: ["Team Quizzical Minds (Major Quiz)", "Team BrainStorm (Indi-Genius)", "Team Cognoscenti (Ψ-Biz-Tech)"]
        },
        {
          year: 2023,
          title: "Freshers' Quiz 2023",
          description: "Annual quiz competition for the incoming batch of RVCE students, designed to introduce them to the world of competitive quizzing.",
          image: "/archives/freshers2023.jpg"
        }
      ],
      highlights: [
        "RV QuizCorp team ranked 2nd at the International Collegiate Quiz Championship",
        "Successfully organized the largest-ever UTPT with participation from 28 states"
      ]
    },
    {
      year: 2022,
      events: [
        {
          year: 2022,
          title: "UTPT 2022",
          description: "The post-pandemic return of Under The Peepal Tree was a grand success with a hybrid format allowing both in-person and virtual participation.",
          image: "/archives/utpt2022.jpg",
          winners: ["Team Inquizitives (Major Quiz)", "Team Cerebral Cortex (Game Theory)", "Team Trivia Masters (Lieut-en-ent)"]
        },
        {
          year: 2022,
          title: "Inter-College Quiz League",
          description: "A semester-long quiz league featuring teams from top engineering colleges across Bangalore competing in monthly rounds.",
          image: "/archives/icql2022.jpg"
        }
      ],
      highlights: [
        "Launch of the RV QuizCorp mentorship program for school students",
        "Club membership crossed 100 active members for the first time"
      ]
    },
    {
      year: 2021,
      events: [
        {
          year: 2021,
          title: "Virtual UTPT 2021",
          description: "Due to COVID-19 restrictions, UTPT went completely virtual with special online-friendly formats and interactive elements.",
          image: "/archives/utpt2021.jpg",
          winners: ["Team Quiz Whiz (Open Quiz)", "Team Fact Finders (Specialized Quiz)"]
        },
        {
          year: 2021,
          title: "Alumni Homecoming Quiz",
          description: "A special reunion event featuring quiz competitions between current students and RVQC alumni from various batches.",
          image: "/archives/alumni2021.jpg"
        }
      ],
      highlights: [
        "Launched digital newsletter 'The Quiz Chronicle'",
        "Conducted 15+ virtual quiz events during the pandemic"
      ]
    },
    {
      year: 2020,
      events: [
        {
          year: 2020,
          title: "UTPT 2020 (Limited Edition)",
          description: "A scaled-down version of UTPT held just before COVID lockdowns, featuring intense competition among the top college teams.",
          image: "/archives/utpt2020.jpg",
          winners: ["Team Quizzotics (Major Quiz)"]
        }
      ],
      highlights: [
        "Pivoted to online quizzing platforms during the pandemic",
        "Created 'QuizFromHome' series that reached 5000+ participants"
      ]
    }
  ];

  const [selectedYear, setSelectedYear] = useState<number>(archiveData[0].year);

  // Get the currently selected year's data
  const currentYearData = archiveData.find(data => data.year === selectedYear) || archiveData[0];

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      {/* Archive Header */}
      <div className="relative bg-gradient-to-r from-[#f36d21] via-[#f36d21] to-[#4c8693] py-16">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="text-center">
            <div
              className="motion-div"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 0.6s forwards'
              }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-merriweather">RV QuizCorp Archives</h1>
              <p className="text-xl text-white/90 max-w-4xl mx-auto font-merriweather">
                A journey through our history of quizzing excellence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Year Selector */}
      <div className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex justify-center flex-wrap gap-4">
            {archiveData.map(data => (
              <button
                key={data.year}
                onClick={() => setSelectedYear(data.year)}
                className={`px-6 py-3 rounded-full font-merriweather transition-all hover:scale-105 active:scale-95 ${
                  selectedYear === data.year 
                    ? 'bg-[#4c8693] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {data.year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Archive Content */}
      <div className="container mx-auto px-8 lg:px-16 py-12">
        {/* Year Highlights */}
        {currentYearData.highlights && (
          <div
            className="mb-16 motion-fade-in"
            style={{
              opacity: 0,
              animation: 'fadeIn 0.6s forwards'
            }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 font-merriweather text-center">
              {currentYearData.year} Highlights
            </h2>
            <div className="bg-[#f36d21]/10 p-8 rounded-xl shadow-sm">
              <ul className="space-y-4">
                {currentYearData.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start motion-slide-in"
                    style={{
                      opacity: 0,
                      transform: 'translateX(-20px)',
                      animation: `slideIn 0.4s ${index * 0.1}s forwards`
                    }}
                  >
                    <svg className="w-5 h-5 text-[#f36d21] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-merriweather text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Events */}
        <div
          className="mb-16 motion-fade-in"
          style={{
            opacity: 0,
            animation: 'fadeIn 0.8s forwards'
          }}
        >
          <h2 className="text-3xl font-bold mb-12 text-gray-900 font-merriweather text-center">
            Events from {currentYearData.year}
          </h2>

          <div className="space-y-12">
            {currentYearData.events.map((event, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-8 motion-slide-up"
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  animation: `slideUp 0.6s ${index * 0.2}s forwards`
                }}
              >
                <div className="md:w-1/3 relative h-60 md:h-auto rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-[#4c8693] font-merriweather">{event.title}</h3>
                  <p className="text-gray-700 mb-6 font-merriweather text-justify">{event.description}</p>
                  
                  {event.winners && (
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold mb-4 text-[#f36d21] font-merriweather">Winners</h4>
                      <ul className="space-y-2">
                        {event.winners.map((winner, idx) => (
                          <li key={idx} className="text-gray-700 font-merriweather flex items-center">
                            <svg className="w-5 h-5 text-[#f36d21] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {winner}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-gray-700 mb-6 text-xl font-merriweather">
            Want to be part of our future archives? Join RV QuizCorp today!
          </p>
          <div className="hover:scale-105 active:scale-95 transition-transform">
            <Link 
              href="/register"
              className="bg-[#f36d21] text-white px-12 py-4 rounded-full hover:bg-[#d85d18] transition-all duration-300 font-merriweather inline-block text-lg"
            >
              Register for UTPT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}