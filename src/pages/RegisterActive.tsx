import { motion } from "framer-motion";
import { FaUsers, FaArrowRight, FaClock, FaTrophy, FaLightbulb, FaBriefcase, FaGamepad, FaAward } from 'react-icons/fa6';
import { FaUniversity } from 'react-icons/fa';

const RAZORPAY_LINK = "https://rzp.io/rzp/W2SbBBS";

const quizCategories = [
  { name: "Indi-Genius", icon: <FaLightbulb />, description: "Explore the vast heritage and culture of India." },
  { name: "Ψ-Biz-Tech", icon: <FaBriefcase />, description: "The ultimate intersection of business and technology." },
  { name: "Game Theory", icon: <FaGamepad />, description: "Level up your knowledge in the world of gaming." },
  { name: "Lieut-en-ent", icon: <FaAward />, description: "Test your mettle in this high-stakes general quiz." },
  { name: "Major Quiz", icon: <FaTrophy />, description: "The flagship event for the most seasoned quizzers." },
  { name: "Magnum Open", icon: <FaUsers />, description: "A free-for-all open quiz for everyone.", isFree: true }
];

export default function Register() {
  return (
    <div className="min-h-screen bg-[#0B1121] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#f36d21]/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4c8693]/5 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#f36d21] font-bold tracking-[0.3em] uppercase text-sm mb-4 block gabarito-bold">Join the Legacy</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gabarito-bold tracking-tight">
            Register for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4c8693] to-[#88d5e5]">UTPT 2026</span>
          </h1>
          <p className="text-xl text-gray-400 gabarito-regular">
            Secure your spot in Asia's largest student-run quiz fest. Excellence awaits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          {/* Top Cards Section */}
          <div className="lg:col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Team Size Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-[32px] group hover:border-[#f36d21]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f36d21]/10 flex items-center justify-center text-2xl text-[#f36d21] mb-6 group-hover:scale-105 transition-transform duration-300">
                  <FaUsers />
                </div>
                <h3 className="text-xl font-bold mb-2 gabarito-bold">Team Dynamics</h3>
                <p className="text-gray-400 text-sm gabarito-regular leading-relaxed">Form your squad of 1-3 members and prepare for battle.</p>
              </motion.div>

              {/* Eligibility Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-[32px] group hover:border-[#4c8693]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#4c8693]/10 flex items-center justify-center text-2xl text-[#4c8693] mb-6 group-hover:scale-105 transition-transform duration-300">
                  <FaUniversity />
                </div>
                <h3 className="text-xl font-bold mb-2 gabarito-bold">Global Eligibility</h3>
                <p className="text-gray-400 text-sm gabarito-regular leading-relaxed">Open to all college students across the globe.</p>
              </motion.div>

              {/* Price Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-[#f36d21] to-[#d85d18] p-8 rounded-[32px] shadow-xl shadow-[#f36d21]/10 relative overflow-hidden group hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <span className="text-white/80 uppercase tracking-[0.2em] text-[10px] font-bold mb-2 block gabarito-bold">Standard Entry</span>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold gabarito-bold">₹200</span>
                    <span className="text-white/70 text-sm">/ team</span>
                  </div>
                  <p className="text-white/80 text-[11px] mb-6 gabarito-regular italic">Free entry for Magnum Open</p>
                  <a 
                    href={RAZORPAY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-[#f36d21] py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#0B1121] hover:text-white transition-all duration-300"
                  >
                    Register Now <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Special Notice for RVCE */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#4c8693]/5 border border-[#4c8693]/20 p-5 rounded-2xl mb-16 flex items-center gap-5 max-w-2xl mx-auto"
            >
              <div className="w-10 h-10 rounded-lg bg-[#4c8693]/10 flex items-center justify-center text-lg text-[#4c8693] flex-shrink-0">
                <FaClock />
              </div>
              <p className="text-sm text-gray-300 gabarito-regular">
                <strong className="text-[#4c8693] gabarito-bold">Pro Tip:</strong> RVCE students gain <span className="text-white font-bold">5 AICTE activity points</span> for participating in <span className="text-[#f36d21] font-bold underline decoration-[#f36d21]/30 underline-offset-4">Indi-Genius</span>.
              </p>
            </motion.div>

            {/* Quiz Spectrum Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-10 gabarito-bold text-center tracking-tight">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f36d21] to-[#ff9a5a]">Quiz Spectrum</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {quizCategories.map((quiz, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-8 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 relative group"
                  >
                    <div className="text-2xl text-[#4c8693] mb-6 group-hover:text-[#f36d21] transition-colors duration-300">{quiz.icon}</div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold gabarito-bold tracking-tight">{quiz.name}</h3>
                      {quiz.isFree && <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-[9px] uppercase tracking-widest font-bold rounded-md border border-green-500/20">Free</span>}
                    </div>
                    <p className="text-gray-500 text-xs gabarito-regular leading-relaxed">{quiz.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center pt-8 border-t border-white/5">
              <p className="text-gray-600 text-[13px] gabarito-regular mb-1">
                Registration and payment are securely handled via Razorpay.
              </p>
              <p className="text-gray-600 text-[13px] gabarito-regular">
                Team details will be collected during the payment process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
