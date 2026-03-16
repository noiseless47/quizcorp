import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ArchiveEvent {
  year: number;
  title: string;
  description: string;
  image: string;
  winners?: string[];
  details?: {
    location?: string;
    date?: string;
    participants?: number;
    categories?: string[];
    highlights?: string[];
    achievements?: string[];
    stats?: { label: string; value: string }[];
  };
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
          title: "Saarang (IIT Madras)",
          description: "QuizCorp's participation in Saarang, the prestigious festival of IIT Madras, bringing excellence to a national platform.",
          image: "/archives/saarang26.jpg",
        }
      ],
      highlights: ["National-level participation", "Showcasing QuizCorp excellence"]
    },
    {
      year: 2025,
      events: [
        {
          year: 2025,
          title: "Under The Peepal Tree",
          description: "Setting the stage for our 20th anniversary celebration. Expect legacy quizzes and modern challenges across three intensive days.",
          image: "/archives/utpt25.jpg",
        },
        {
          year: 2025,
          title: "Set Dose",
          description: "A specialized quiz event bringing fresh perspectives and competitive spirit to the quizzing calendar.",
          image: "/archives/setdose25.jpg",
        },
        {
          year: 2025,
          title: "Interrobang (NALSAR University)",
          description: "QuizCorp's presence at Interrobang Fest 2025, hosted by NALSAR University, showcasing our commitment to quizzing excellence on a national stage.",
          image: "/archives/interrobang25.jpg",
        },
        {
          year: 2025,
          title: "Freshers Quiz",
          description: "An exciting introduction to competitive quizzing for first-year students, nurturing the next generation of quiz enthusiasts.",
          image: "/archives/freshers25.jpg",
        },
        {
          year: 2025,
          title: "Saarang (IIT Madras) - India Quiz",
          description: "Achieved 3rd place in the India Quiz category at Saarang, IIT Madras 2025.",
          image: "/archives/default.jpg",
          details: {
            location: "IIT Madras, Chennai",
            date: "January 2025",
            participants: 150,
            categories: ["India Quiz", "General Knowledge", "Current Affairs"],
            stats: [
              { label: "Teams Competed", value: "50+" },
              { label: "National Teams", value: "40+" },
              { label: "3rd Place Finish", value: "🥉 Bronze" },
              { label: "Difficulty Level", value: "Expert" }
            ],
            achievements: [
              "Bronze medal achievement at prestigious IIT Madras Saarang Festival",
              "Outstanding performance against 50+ national-level teams",
              "Demonstrated strong knowledge in India Quiz category",
              "Positioned QuizCorp among top 3 teams in national competition"
            ],
            highlights: [
              "National-level teams from across India",
              "Complex questions on Indian history, geography, and politics",
              "Strong scoring in contemporary affairs round",
              "Championship-level competition and adjudication"
            ]
          }
        },
        {
          year: 2025,
          title: "Pravega (IISc) - Open General Quiz",
          description: "Secured 3rd place in the Open General Quiz category at Pravega, IISc 2025.",
          image: "/archives/default.jpg",          details: {
            location: "Indian Institute of Science, Bengaluru",
            date: "February 2025",
            participants: 200,
            categories: ["Open General Quiz", "Science & Technology", "Arts & Culture"],
            stats: [
              { label: "Teams Compete", value: "60+" },
              { label: "Institution Prestige", value: "IISc" },
              { label: "3rd Place Finish", value: "🥉 Bronze" },
              { label: "Prize Amount", value: "₹25K" }
            ],
            achievements: [
              "3rd place achievement at prestigious Pravega, IISc festival",
              "Victory over 60+ teams from across India",
              "Strong performance in Open General Quiz category",
              "Recognition at India's premier science institution festival"
            ],
            highlights: [
              "Prestigious venue at Indian Institute of Science",
              "Mix of science, technology, arts, and culture questions",
              "High-caliber competition from elite quiz teams",
              "Recognition among India's top quiz organizations"
            ]
          }        }
      ],
      highlights: ["Opening registrations for 1200+ teams", "Curating special celebrity guest quizzes", "Multiple accolades at national-level competitions"]
    },
    {
      year: 2024,
      events: [
        {
          year: 2024,
          title: "Waves (BITS Goa)",
          description: "QuizCorp achieved 1st place in the India Quiz category at the prestigious BITS Goa Waves Fest 2024, showcasing quizzing excellence on a national stage.",
          image: "/BITS24/All.jpg",
          details: {
            location: "BITS Goa, India",
            date: "November 2024",
            participants: 500,
            categories: ["India Quiz", "General Knowledge", "Pop Culture", "Science & Technology"],
            stats: [
              { label: "Teams Participated", value: "80+" },
              { label: "Quiz Categories", value: "4" },
              { label: "Total Questions", value: "150+" },
              { label: "Winning Position", value: "🥇 1st" }
            ],
            achievements: [
              "1st place triumph in India Quiz - comprehensive coverage of Indian history, geography, politics, and culture",
              "Outperformed 80+ teams from prestigious institutions across India",
              "Demonstrated exceptional knowledge in specialized quiz categories",
              "Strengthened QuizCorp's position as a leading quiz organization"
            ],
            highlights: [
              "Intense final round with 12 rounds spanning multiple categories",
              "Technical questions testing deep knowledge of Indian affairs",
              "Strategic thinking demonstrated throughout the competition",
              "Outstanding teamwork and collaboration"
            ]
          }
        },
        {
          year: 2024,
          title: "Under The Peepal Tree",
          description: "The 19th edition of Under The Peepal Tree featured over 800 participants from across India, with 6 specialized quiz categories.",
          image: "/archives/utpt24.jpg",
          winners: ["Team Quizzical Minds (Major Quiz)", "Team BrainStorm (Indi-Genius)"],
          details: {
            location: "RV College of Engineering, Bengaluru",
            date: "January 2024",
            participants: 800,
            categories: ["Major Quiz", "Indi-Genius", "Movie Mela", "Business Blitz", "Science Snap", "Sports Spectacular"],
            stats: [
              { label: "Participants", value: "800+" },
              { label: "Quiz Categories", value: "6" },
              { label: "States Represented", value: "28" },
              { label: "Prize Pool", value: "₹1L+" }
            ],
            achievements: [
              "Successfully organized asia's largest student-run quiz festival",
              "Record participation from 28 states across India",
              "6 specialized quiz categories catering to diverse interests",
              "Over ₹1 Lakh in prize pool distributed among winners"
            ],
            highlights: [
              "Three intensive days of competitive quizzing with over 2000 questions",
              "Celebrity questions and special guest appearances from quiz legends",
              "Professional adjudication ensuring fair competition throughout",
              "Diverse audience including corporates, media, and quiz enthusiasts",
              "Comprehensive coverage across multiple quiz genres"
            ]
          }
        },
        {
          year: 2024,
          title: "RVPU Quiz",
          description: "An intellectually stimulating quiz competition for PU students, fostering curiosity among young minds.",
          image: "/archives/rvpu24.jpg"
        },
        {
          year: 2024,
          title: "Freshers Quiz",
          description: "An exciting introduction to competitive quizzing for first-year students, nurturing the next generation of quiz enthusiasts.",
          image: "/archives/freshers24.jpg",
        },
        {
          year: 2024,
          title: "Encapsulate (Christ University) - The Freelancer's Fortune",
          description: "Claimed 1st place in The Freelancer's Fortune quiz at Encapsulate, Christ University 2024.",
          image: "/archives/default.jpg",
          details: {
            location: "Christ University, Bengaluru",
            date: "September 2024",
            categories: ["The Freelancer's Fortune", "Business & Economics", "Entrepreneurship"],
            stats: [
              { label: "Teams Participated", value: "45+" },
              { label: "Quiz Categories", value: "3" },
              { label: "Winning Position", value: "🥇 1st" },
              { label: "Difficulty Level", value: "Expert" }
            ],
            achievements: [
              "1st place victory in The Freelancer's Fortune competition",
              "Demonstrated exceptional understanding of freelance economy and business dynamics",
              "Outperformed 45+ teams from various institutions",
              "Showcased rapid problem-solving abilities in business scenarios"
            ],
            highlights: [
              "Complex case study analysis questions",
              "Real-world freelance business scenarios",
              "Strategic decision-making round",
              "Expert-level difficulty throughout"
            ]
          }
        },
        {
          year: 2024,
          title: "Aavahan 3.0 (Christ University) - Battle of Wits",
          description: "Achieved 2nd and 3rd place finishes in Battle of Wits at Aavahan 3.0, Christ University 2024.",
          image: "/archives/default.jpg",
          details: {
            location: "Christ University, Bengaluru",
            date: "October 2024",
            participants: 80,
            categories: ["Battle of Wits", "Logic Puzzles", "Rapid Fire"],
            stats: [
              { label: "Teams Competed", value: "35+" },
              { label: "Placements Won", value: "2" },
              { label: "2nd & 3rd Honors", value: "🥈🥉" },
              { label: "Podium Presence", value: "100%" }
            ],
            achievements: [
              "Dual podium finish with 2nd and 3rd place placements",
              "Dominant performance across Battle of Wits category",
              "Two QuizCorp teams among top 3 finalists",
              "Demonstrated depth and consistency in team strength"
            ],
            highlights: [
              "Intense battle of wit and quick thinking rounds",
              "Logic puzzle and reasoning challenges",
              "Rapid-fire rounds testing knowledge retention",
              "High-energy competitive environment"
            ]
          }
        },
        {
          year: 2024,
          title: "Pi Day (Christ University) - Math Quiz",
          description: "Achieved 3rd place in the Math Quiz category at Pi Day, Christ University 2024.",
          image: "/archives/default.jpg",
        },
        {
          year: 2024,
          title: "Nokia Bengaluru University Collaboration - Quizzathon",
          description: "Secured 1st place in the Quizzathon quiz competition organized under Nokia Bengaluru University Collaboration 2024.",
          image: "/archives/default.jpg",
          details: {
            location: "Nokia Bengaluru Offices",
            date: "July 2024",
            participants: 200,
            categories: ["Technology & Innovation", "Corporate Challenges", "General Knowledge", "Business Acumen"],
            stats: [
              { label: "Participants", value: "200+" },
              { label: "Corporate Teams", value: "40+" },
              { label: "Winning Position", value: "🥇 1st" },
              { label: "Prize Value", value: "₹50K" }
            ],
            achievements: [
              "1st place triumph in Nokia-backed Quizzathon",
              "Victory against corporate and academic teams",
              "Strong performance across technology and business domains",
              "Earned recognition from Nokia and industry leaders"
            ],
            highlights: [
              "Cutting-edge technology and innovation questions",
              "Corporate strategy and business case studies",
              "Mixed format rounds combining speed and accuracy",
              "Networking opportunity with industry professionals"
            ]
          }
        },
        {
          year: 2024,
          title: "Rotary Club Indiranagar - Quiz Championship",
          description: "Emerged as 1st place winner at the Rotary Club Indiranagar hosted quiz in 2024.",
          image: "/archives/default.jpg",
          details: {
            location: "Rotary Club Indiranagar, Bengaluru",
            date: "June 2024",
            participants: 120,
            categories: ["General Knowledge", "Current Affairs", "Community Service"],
            stats: [
              { label: "Teams Competed", value: "30+" },
              { label: "Categories", value: "3" },
              { label: "Winning Position", value: "🥇 1st" },
              { label: "Community Impact", value: "Charity Prize" }
            ],
            achievements: [
              "1st place victory at Rotary Club Championship",
              "Demonstrated commitment to community service through quiz competition",
              "Clear victory against all competing teams",
              "Prize money donated to community development"
            ],
            highlights: [
              "General knowledge across diverse domains",
              "Current affairs and recent global events",
              "Community service and social responsibility focus",
              "Friendly yet competitive environment"
            ]
          }
        },
        {
          year: 2024,
          title: "Bengaluru NavaNirmana Party (IAT) - Bengaluru Quiz",
          description: "Achieved 2nd place in the Bengaluru Quiz at Bengaluru NavaNirmana Party (IAT) 2024.",
          image: "/archives/default.jpg",
        },
        {
          year: 2024,
          title: "BMS Utsav (BMSCE) 2024",
          description: "Strong performance across multiple categories at BMSCE's premier festival with 2nd place finishes in India Quiz, Melas Quiz, and F1 Quiz.",
          image: "/archives/default.jpg",
          details: {
            location: "BMS College of Engineering, Bengaluru",
            date: "October 2024",
            participants: 350,
            categories: ["India Quiz", "Melas Quiz", "F1 Quiz", "General Knowledge"],
            stats: [
              { label: "Teams Participated", value: "100+" },
              { label: "Categories Entered", value: "3" },
              { label: "2nd Place Finishes", value: "3" },
              { label: "Medals Won", value: "3" }
            ],
            achievements: [
              "2nd place finish in India Quiz - demonstrating deep knowledge of Indian affairs",
              "2nd place in Melas Quiz - showcasing expertise in Indian art and culture",
              "2nd place in F1 Quiz - proving mastery in motorsports and Formula 1",
              "Consistent high-quality performances across diverse quiz genres"
            ],
            highlights: [
              "Strong India-focused questions on contemporary affairs",
              "Comprehensive coverage of Indian cultural festivals and traditions",
              "Formula 1 season history, drivers, and technical knowledge",
              "Competitive environment with teams from top engineering colleges"
            ]
          }
        },
        {
          year: 2024,
          title: "Chemotivation (DSCE) - Deus ex Machina",
          description: "Claimed 1st place in the Deus ex Machina quiz at Chemotivation, DSCE 2024.",
          image: "/archives/default.jpg",
          details: {
            location: "DSCE, Bengaluru",
            date: "August 2024",
            categories: ["Chemistry Quiz", "Physics Quiz", "Biology Quiz", "Interdisciplinary Science"],
            stats: [
              { label: "Teams Competed", value: "60+" },
              { label: "Science Domains", value: "4" },
              { label: "Winning Position", value: "🥇 1st" },
              { label: "Success Rate", value: "85%" }
            ],
            achievements: [
              "1st place victory in Deus ex Machina - an advanced science-focused competition",
              "Outstanding performance in interdisciplinary science questions",
              "Successfully answered complex chemistry, physics, and biology problems",
              "Demonstrated mastery in connecting concepts across multiple scientific domains"
            ],
            highlights: [
              "Challenging molecular structure and reaction mechanism questions",
              "Physics applications in real-world scenarios",
              "Interdisciplinary science connections tested throughout",
              "Rapid-fire science facts and historical developments"
            ]
          }
        },
        {
          year: 2024,
          title: "Guesstalts (SJU) - Quiz Competition",
          description: "Secured 2nd and 3rd place finishes at Guesstalts hosted by St. Joseph's University 2024.",
          image: "/archives/default.jpg",
        },
        {
          year: 2024,
          title: "VTU Fest 2024 - Quiz",
          description: "Achieved 3rd place in the Quiz competition at VTU Fest 2024.",
          image: "/archives/default.jpg",
        },
        {
          year: 2024,
          title: "News Quiz (SJU) 2024",
          description: "Achieved 1st and 3rd place finishes in the News Quiz at St. Joseph's University 2024.",
          image: "/archives/default.jpg",
        },
        {
          year: 2024,
          title: "Pravega (IISc) - SBT Quiz",
          description: "Achieved 1st and 3rd place finishes in the SBT Quiz category at Pravega, IISc 2024.",
          image: "/archives/default.jpg",
          details: {
            location: "Indian Institute of Science, Bengaluru",
            date: "March 2024",
            participants: 120,
            categories: ["SBT Quiz", "Specialized Knowledge", "Technical Domains"],
            stats: [
              { label: "Teams Competed", value: "45+" },
              { label: "Placements Achieved", value: "2" },
              { label: "1st & 3rd Place", value: "🥇🥉" },
              { label: "Prize Pool", value: "₹40K" }
            ],
            achievements: [
              "1st place victory in SBT Quiz specialty category",
              "3rd place finish demonstrating consistent team strength",
              "Dual podium presence at prestigious IISc Pravega",
              "Mastery in specialized technical knowledge domain"
            ],
            highlights: [
              "Specialized Subject-Based Technical quiz format",
              "Deep subject matter expertise required",
              "Technical terms and advanced concepts",
              "Expert-level adjudication and scoring\""
            ]
          }
        },
      ],
      highlights: [
        "Record-breaking participation from 28 states",
        "Ranked among India's top 5 collegiate quiz festivals",
        "Numerous accolades from leading national competitions"
      ]
    },
    {
      year: 2023,
      events: [
        {
          year: 2023,
          title: "Under The Peepal Tree",
          description: "The 18th edition of Under The Peepal Tree featured over 800 participants from across India, with 6 specialized quiz categories.",
          image: "/archives/utpt2023.jpg"
        },
        {
          year: 2023,
          title: "Freshers Quiz",
          description: "An exciting introduction to competitive quizzing for first-year students, nurturing the next generation of quiz enthusiasts.",
          image: "/archives/freshers23.jpg",
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
                    className="group relative rounded-2xl overflow-hidden transition-all duration-500"
                  >
                    {/* Gradient Border Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#88d5e5]/30 via-[#4c8693]/20 to-[#88d5e5]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10 group-hover:blur-lg" />
                    
                    {/* Main Card */}
                    <div className="relative bg-white/5 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-[#88d5e5]/60 transition-all duration-500 shadow-xl group-hover:shadow-[0_0_30px_rgba(136,213,229,0.15)]">
                      <div className="aspect-video bg-gray-800 flex items-center justify-center relative overflow-hidden">
                      {event.image ? (
                        <img
                          src={event.image}
                          alt={event.title}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          style={{ objectPosition: 'center' }}
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-white/10 text-2xl font-bold">{event.title} Image Placeholder</span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
                        <h3 className="text-2xl font-bold text-white gabarito-bold">{event.title}</h3>
                        <Link 
                          to={`/event/${encodeURIComponent(event.title)}`}
                          onClick={() => sessionStorage.setItem('currentEvent', JSON.stringify(event))}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#88d5e5]/20 hover:bg-[#88d5e5]/40 backdrop-blur-sm text-[#88d5e5] px-4 py-2 rounded-full text-sm font-bold gabarito-bold border border-[#88d5e5]/40 whitespace-nowrap"
                        >
                          Know More
                        </Link>
                      </div>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#88d5e5] to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
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
