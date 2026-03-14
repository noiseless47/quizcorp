import { motion } from "framer-motion";
import { FaShieldHalved, FaUserShield, FaShareNodes, FaLock, FaCookieBite, FaUserGear, FaRotate, FaAt } from "react-icons/fa6";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0B1121] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4c8693]/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f36d21]/5 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <span className="text-[#4c8693] font-bold tracking-[0.3em] uppercase text-sm mb-4 block gabarito-bold">Trust & Transparency</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gabarito-bold tracking-tight">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4c8693] to-[#88d5e5]">Policy</span>
          </h1>
          <p className="text-xl text-gray-400 gabarito-regular max-w-2xl leading-relaxed">
            Your data is your legacy. We're committed to protecting it with the highest standards of security and transparency.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-10">
          {[
            {
              title: "1. Information We Collect",
              icon: <FaUserShield />,
              content: "We collect information that you provide directly to us, including: name, contact information, email address, phone number, institution details, and payment information required for event registrations."
            },
            {
              title: "2. How We Use It",
              icon: <FaShieldHalved />,
              content: "We use your information exclusively to process registrations, send event updates, communicate regarding inquiries, improve our digital infrastructure, and comply with institutional legal obligations."
            },
            {
              title: "3. Information Sharing",
              icon: <FaShareNodes />,
              content: "We do not sell or rent your personal data. Sharing only occurs with authorized service providers assisting operations, event partners (strictly with your consent), or law enforcement if legally mandated."
            },
            {
              title: "4. Data Security",
              icon: <FaLock />,
              content: "We implement enterprise-grade security measures to safeguard your personal information against unauthorized access, alteration, disclosure, or destruction."
            },
            {
              title: "5. Cookies & Tracking",
              icon: <FaCookieBite />,
              content: "We use essential cookies to maintain session persistence, analyze traffic patterns for performance optimization, and remember your interface preferences."
            },
            {
              title: "6. Your Rights",
              icon: <FaUserGear />,
              content: "You maintain full rights to access, correct, or request deletion of your information. You may opt-out of communications or withdraw consent at any any time via our contact channels."
            },
            {
              title: "7. Policy Updates",
              icon: <FaRotate />,
              content: "We may periodically update this policy. All changes will be reflected here, with the effective date updated accordingly to maintain transparency."
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
                <div className="w-14 h-14 rounded-2xl bg-[#4c8693]/10 flex items-center justify-center text-2xl text-[#4c8693] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-2xl font-bold mb-6 gabarito-bold">Questions?</h2>
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
