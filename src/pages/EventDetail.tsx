import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

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

export default function EventDetail() {
  const location = useLocation();
  const storedEvent = sessionStorage.getItem('currentEvent');
  const event = storedEvent ? JSON.parse(storedEvent) as ArchiveEvent : location.state?.event as ArchiveEvent | undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem('currentEvent');
    };
  }, []);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#0B1121] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold gabarito-bold mb-4">Event Not Found</h1>
          <p className="text-gray-400 mb-8">The event details couldn't be loaded.</p>
          <Link
            to="/archives"
            className="inline-block bg-[#f36d21] hover:bg-[#d85d18] text-white px-8 py-3 rounded-full font-bold gabarito-bold transition-colors"
          >
            Back to Archives
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1121] text-white pt-28 pb-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#4c8693]/10 rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-1/3 left-0 w-[800px] h-[800px] bg-[#f36d21]/10 rounded-full blur-[160px] -z-0" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            to="/archives"
            className="inline-flex items-center gap-2 text-[#88d5e5] hover:text-white transition-colors gabarito-bold text-sm uppercase tracking-wider"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Archives
          </Link>
        </motion.div>

        {/* Hero Section with Image */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="rounded-3xl overflow-hidden border-2 border-[#88d5e5]/40 shadow-2xl mb-16 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f36d21]/20 to-[#88d5e5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div className="relative w-full h-[400px] bg-gray-800">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-transparent to-transparent"></div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold gabarito-bold mb-6 leading-tight">
              {event.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#f36d21] via-[#88d5e5] to-transparent rounded-full mx-auto mb-8"></div>
            
            {event.details && (
              <div className="flex flex-wrap justify-center gap-8 my-10 text-gray-300">
                {event.details.date && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#f36d21]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="gabarito-regular">{event.details.date}</span>
                  </div>
                )}
                {event.details.location && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#88d5e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    </svg>
                    <span className="gabarito-regular">{event.details.location}</span>
                  </div>
                )}
                {event.details.participants && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4c8693]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 19H9a6 6 0 0112 0v3H3v-3a6 6 0 0112 0z"></path>
                    </svg>
                    <span className="gabarito-regular">{event.details.participants}+ Participants</span>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </motion.section>

        {/* Event Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-xl md:text-lg text-gray-200 gabarito-regular leading-relaxed mb-8">
            {event.description}
          </p>
        </motion.section>

        {/* Key Statistics */}
        {event.details?.stats && event.details.stats.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <h2 className="text-3xl font-bold gabarito-bold mb-12 inline-block relative">
              Event Highlights
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f36d21] to-transparent"></div>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {event.details.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f36d21] to-[#88d5e5] gabarito-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <p className="text-sm md:text-base text-gray-400 gabarito-regular">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Quiz Categories */}
        {event.details?.categories && event.details.categories.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <h2 className="text-3xl font-bold gabarito-bold mb-12 inline-block relative">
              Quiz Categories
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#88d5e5] to-transparent"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
              {event.details.categories.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center justify-center gap-3 py-4 text-gray-300 hover:text-[#88d5e5] transition-colors"
                >
                  <svg className="w-5 h-5 text-[#f36d21] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <p className="gabarito-regular">{category}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Key Achievements */}
        {event.details?.achievements && event.details.achievements.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold gabarito-bold mb-12 text-center relative inline-block w-full">
              Key Achievements
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#f36d21] to-transparent"></div>
            </h2>
            <div className="space-y-4 mt-12">
              {event.details.achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-start gap-4 py-4"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f36d21] to-[#88d5e5] flex-shrink-0 mt-2"></div>
                  <p className="text-lg text-gray-200 gabarito-regular leading-relaxed">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* General Highlights */}
        {event.details?.highlights && event.details.highlights.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold gabarito-bold mb-12 text-center relative inline-block w-full">
              Event Highlights
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#4c8693] to-transparent"></div>
            </h2>
            <div className="space-y-4 mt-12">
              {event.details.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-start gap-4 py-4"
                >
                  <svg className="w-5 h-5 text-[#88d5e5] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <p className="text-lg text-gray-200 gabarito-regular leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Winning Teams */}
        {event.winners && event.winners.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <h2 className="text-3xl font-bold gabarito-bold mb-12 inline-block relative">
              🏆 Champions
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f36d21] to-transparent"></div>
            </h2>
            <div className="space-y-4 mt-12 max-w-2xl mx-auto">
              {event.winners.map((winner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center justify-center gap-4 py-4"
                >
                  <div className={`text-2xl font-bold gabarito-bold ${idx === 0 ? 'text-yellow-400' : idx === 1 ? 'text-gray-300' : 'text-orange-600'}`}>
                    {idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉'}
                  </div>
                  <p className="text-lg text-gray-200 gabarito-regular">{winner}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border-2 border-[#88d5e5]/40 bg-gradient-to-br from-[#1a3a4a]/60 to-[#0B1121] p-12 md:p-16 text-center relative overflow-hidden group my-24"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#88d5e5]/10 rounded-full blur-[100px] group-hover:blur-[120px] transition-all duration-500" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f36d21]/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold gabarito-bold mb-6">
              Ready for Your Next Challenge?
            </h2>
            <p className="text-gray-300 text-lg gabarito-regular mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of quiz enthusiasts and be part of an unforgettable quizzing experience with QuizCorp.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                to="/register"
                className="bg-gradient-to-r from-[#f36d21] to-[#ff9a5a] hover:shadow-lg hover:shadow-[#f36d21]/40 text-white px-10 py-4 rounded-full font-bold gabarito-bold transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Register Now
              </Link>
              <Link
                to="/archives"
                className="bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white px-10 py-4 rounded-full font-bold gabarito-bold transition-all duration-300"
              >
                Explore More Events
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
