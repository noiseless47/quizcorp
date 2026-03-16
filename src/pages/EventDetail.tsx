import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ArchiveEvent {
  year: number;
  title: string;
  description: string;
  image: string;
  winners?: string[];
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

      <div className="container mx-auto px-6 relative z-10">
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
          className="mb-20"
        >
          <div className="rounded-3xl overflow-hidden border-2 border-[#88d5e5]/40 shadow-2xl mb-12">
            <div className="relative w-full h-96 bg-gray-800">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold gabarito-bold mb-6 leading-tight">
              {event.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#88d5e5] to-[#4c8693]"> 2024</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#f36d21] to-transparent rounded-full mb-8"></div>
          </div>
        </motion.section>

        {/* Event Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-20"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-10 md:p-16">
            <p className="text-xl md:text-2xl text-gray-200 gabarito-regular leading-relaxed">
              {event.description}
            </p>
          </div>
        </motion.section>

        {/* Winning Teams */}
        {event.winners && event.winners.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-20"
          >
            <h2 className="text-4xl font-bold gabarito-bold mb-10 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f36d21] to-[#ff9a5a]">Winning</span> Teams
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.winners.map((winner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-2xl border-2 border-[#f36d21]/40 bg-gradient-to-br from-[#f36d21]/10 to-transparent p-8 backdrop-blur-sm hover:border-[#f36d21]/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#f36d21]/20 flex items-center justify-center text-[#f36d21] text-xl font-bold gabarito-bold">
                      {idx + 1}
                    </div>
                    <p className="text-lg text-white gabarito-bold">{winner}</p>
                  </div>
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
          className="rounded-3xl border-2 border-[#88d5e5]/40 bg-gradient-to-br from-[#1a3a4a]/40 to-[#0B1121] p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#88d5e5]/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold gabarito-bold mb-6">
              Want to Experience This?
            </h2>
            <p className="text-gray-300 text-lg gabarito-regular mb-10 max-w-2xl mx-auto leading-relaxed">
              Join us in our next event and be part of an incredible quizzing journey.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                to="/register"
                className="bg-[#f36d21] hover:bg-[#d85d18] text-white px-10 py-4 rounded-full font-bold gabarito-bold transition-all duration-300 shadow-lg hover:shadow-[#f36d21]/40"
              >
                Register Now
              </Link>
              <Link
                to="/archives"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-10 py-4 rounded-full font-bold gabarito-bold transition-all duration-300"
              >
                Explore More
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
