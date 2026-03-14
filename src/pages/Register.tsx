import { motion } from "framer-motion";
import { FaCalendarPlus, FaArrowLeft, FaClock, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#0B1121] text-white pt-32 pb-24 relative overflow-hidden flex items-center justify-center">
      {/* Background Polish */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f36d21]/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4c8693]/5 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#f36d21] to-[#ff9a5a] flex items-center justify-center text-4xl shadow-2xl shadow-[#f36d21]/20 mx-auto mb-10"
          >
            <FaClock className="animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-[#f36d21] font-bold tracking-[0.4em] uppercase text-sm mb-6 block gabarito-bold">Coming Soon</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gabarito-bold tracking-tight">
              UTPT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f36d21] to-[#ff9a5a]">2026</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-10 md:p-14 rounded-[48px] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden group mb-12"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4c8693]/5 rounded-full blur-3xl"></div>
            
            <p className="text-2xl md:text-3xl font-bold mb-6 gabarito-bold leading-tight">
              Dates for UTPT 2026 are <span className="text-[#4c8693]">yet to be announced..</span>
            </p>
            <p className="text-gray-400 text-lg gabarito-regular mb-10">
              We're meticulously crafting the next evolution of Asia's premier quiz festival. See you soon!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link 
                to="/archives"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <FaCalendarPlus className="text-[#4c8693]" />
                <span className="gabarito-bold text-sm">View Archives</span>
              </Link>
              <Link 
                to="/"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#f36d21] text-white hover:bg-[#d85d18] transition-all duration-300 shadow-lg shadow-[#f36d21]/20"
              >
                <FaArrowLeft />
                <span className="gabarito-bold text-sm">Back to Home</span>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-8 text-gray-500"
          >
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#4c8693]/50" />
              <span className="text-xs gabarito-regular uppercase tracking-widest">utpt.rvquizcorp@gmail.com</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
