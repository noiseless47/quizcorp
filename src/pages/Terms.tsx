import { motion } from "framer-motion";
import { FaScaleBalanced, FaFileContract, FaRegHandshake, FaGavel, FaFingerprint, FaBan, FaCircleExclamation, FaAt } from "react-icons/fa6";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0B1121] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#f36d21]/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4c8693]/5 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <span className="text-[#f36d21] font-bold tracking-[0.3em] uppercase text-sm mb-4 block gabarito-bold">Rules of Engagement</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gabarito-bold tracking-tight">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f36d21] to-[#ff9a5a]">Conditions</span>
          </h1>
          <p className="text-xl text-gray-400 gabarito-regular max-w-2xl leading-relaxed">
            Legal clarity for a seamless festival experience. By using our platform, you agree to these professional standards.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-10">
          {[
            {
              title: "1. Acceptance of Terms",
              icon: <FaRegHandshake />,
              content: "By accessing and using the RV QuizCorp website, you accept and agree to be bound by the terms and conditions outlined in this agreement."
            },
            {
              title: "2. Intellectual Property",
              icon: <FaFingerprint />,
              content: "All content—including text, graphics, logos, and competition formats—is the exclusive property of RV QuizCorp and is protected by international copyright laws."
            },
            {
              title: "3. Event Registration",
              icon: <FaFileContract />,
              content: "Registrants must provide accurate data, comply with all competition regulations, and accept responsibility for associated fees as per our non-refundable policy."
            },
            {
              title: "4. Use License",
              icon: <FaScaleBalanced />,
              content: "Permission is granted to temporarily view materials for personal, non-commercial use only. This is a license, not a transfer of title or ownership."
            },
            {
              title: "5. Disclaimer",
              icon: <FaCircleExclamation />,
              content: "Materials are provided 'as is'. RV QuizCorp disclaims all warranties, expressed or implied, regarding accuracy, reliability, or non-infringement of rights."
            },
            {
              title: "6. Limitations of Liability",
              icon: <FaBan />,
              content: "RV QuizCorp shall not be liable for any damages (including loss of data or profit) arising from the use or inability to use the digital materials on this site."
            },
            {
              title: "7. Governing Law",
              icon: <FaGavel />,
              content: "Any claim related to RV QuizCorp's website shall be governed by the laws of the jurisdiction in which we operate without regard to conflict of law provisions."
            }
          ].map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-sm relative group hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#f36d21]/10 flex items-center justify-center text-2xl text-[#f36d21] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                   {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 gabarito-bold text-white">{section.title}</h2>
                  <p className="text-gray-400 gabarito-regular leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}

          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center pt-10"
          >
            <h2 className="text-2xl font-bold mb-6 gabarito-bold">Need Clarification?</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a href="mailto:utpt.rvquizcorp@gmail.com" className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#f36d21] hover:text-white transition-all duration-300 group">
                <FaAt className="text-[#f36d21] group-hover:text-white transition-colors" />
                <span className="gabarito-bold text-sm">utpt.rvquizcorp@gmail.com</span>
              </a>
            </div>
            <p className="text-gray-600 text-sm mt-12 gabarito-regular">
              Last updated: March 2026
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
