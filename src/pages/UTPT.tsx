import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaFlag, FaMicrochip, FaTrophy, FaFilm, FaStar, FaCrown } from "react-icons/fa6";

export default function UTPT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quizCategories = [
    {
      title: "Indi-Genius",
      icon: <FaFlag />,
      description: `If you're crazy about everything desi, this is the perfect quiz for you. From Ram-Leela to Ramayana, cricket wickets and election tickets, this quiz encompasses everything that makes us say "It only happens in India".`,
    },
    {
      title: "Ψ-Biz-Tech",
      icon: <FaMicrochip />,
      description: `Here's where being a geek will work in your favour. If you switch on the TV only for The Discovery channel, if your magazine subscriptions include the Scientific American and if your favourite board game is Monopoly, get ready to win some serious money in this science, technology and business quiz.`,
    },
    {
      title: "Varun Krishnamurthy Memorial Game Theory",
      icon: <FaTrophy />,
      description: `Find out if it was all worth it. Staying up late into the night for all those matches. Comparing team stats. Making your dream teams on fantasy leagues. Has all the stress of last overs in India-Pak matches, football penalties and nailbiting deciding sets in tennis taken a toll on you? Or will it be the reason you walk away with a fatter wallet?`,
    },
    {
      title: "Lieut-en-ent",
      icon: <FaFilm />,
      description: `Do you watch an episode a week or a season per day? Have you only watched the movie or read the books too? Do you only listen to the radio or is your ipod running out of space? If all your answers were the latter options, then your best option would not be to "tread lightly". Lieut-en-ent quiz should be your cup o' tea. Bonus points if you can tell us when Leo will get his Oscar.`,
    },
    {
      title: "Major Quiz",
      icon: <FaStar />,
      description: `Prepare to be asked about anything and everything under the sun. Does your know(how) cover it-all? The winner of this quiz will not just be a Jack of all trades, but also a Master of them all. It's called the Major Quiz for a reason.`,
    },
    {
      title: "Magnum Open",
      icon: <FaCrown />,
      description: `Hosted by the well known quizzer Nitish Khadiya, an RV Alumnus, this quiz is open to everyone. Age no bar. This is truly the baap of all quizzes. The phrase "pick on someone your own size" is redundant here.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1121] text-white pt-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4c8693]/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f36d21]/5 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32 pt-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gabarito-bold tracking-tight">
            Under The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f36d21] to-[#ff9a5a]">
              Peepal
            </span>{" "}
            Tree
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto gabarito-regular leading-relaxed">
            Asia&apos;s Largest Student-Run Quiz Fest. A legacy of curiosity, knowledge, and excellence since 2004.
          </p>
        </motion.div>

        {/* Quizzes — Premium Bento Grid */}
        <div className="mb-32">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold gabarito-bold">
              Featured <span className="text-[#4c8693]">Quizzes</span>
            </h2>
            <div className="w-20 h-1 bg-[#4c8693] mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {quizCategories.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/10 hover:border-[#4c8693]/30 transition-all duration-500 flex flex-col justify-end min-h-[300px] ${
                  i === 0
                    ? "md:col-span-7"
                    : i === 1
                    ? "md:col-span-5"
                    : i === 2
                    ? "md:col-span-5"
                    : i === 3
                    ? "md:col-span-7"
                    : i === 4
                    ? "md:col-span-7"
                    : "md:col-span-5"
                }`}
              >
                {/* Background Number */}
                <div className="absolute -top-10 -right-10 text-[180px] font-black text-white/[0.03] select-none gabarito-bold leading-none pointer-events-none group-hover:text-[#4c8693]/[0.08] transition-colors duration-500">
                  0{i + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5 text-[#4c8693] text-3xl">
                    <div className="w-16 h-16 rounded-2xl bg-[#4c8693]/10 flex items-center justify-center border border-[#4c8693]/20 text-3xl">
                      {v.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white gabarito-bold uppercase tracking-wide mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-400 gabarito-regular leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
                    {v.description}
                  </p>
                </div>

                {/* Accent line on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#4c8693] to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* CTA Section — Full Bleed */}
      <div className="relative -mx-6 mt-0">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1a0f0a] via-[#0f1520] to-[#0B1121] py-28 px-6">
          {/* Warm glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#f36d21]/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#4c8693]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gabarito-bold tracking-tight">
              Register for <span className="text-[#4c8693]">UTPT</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 gabarito-regular leading-relaxed">
              The dates for UTPT 2026 are yet to be announced. Stay tuned for official updates and get ready for the ultimate battle of wits.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                disabled
                className="bg-gray-600/50 text-white/50 px-10 py-5 rounded-2xl text-xl font-bold cursor-not-allowed gabarito-bold"
              >
                Coming Soon
              </button>
              <a
                href="/contact"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 transition-all gabarito-bold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
