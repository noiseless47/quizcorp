import { motion } from "framer-motion";
import { FaCircleXmark, FaHandshakeSlash, FaCircleInfo, FaAt } from "react-icons/fa6";

export default function Refund() {
  return (
    <div className="min-h-screen bg-[#0B1121] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4c8693]/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f36d21]/5 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <span className="text-[#f36d21] font-bold tracking-[0.3em] uppercase text-sm mb-4 block gabarito-bold">Policy Overview</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gabarito-bold tracking-tight">
            Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f36d21] to-[#ff9a5a]">Policy</span>
          </h1>
          <p className="text-xl text-gray-400 gabarito-regular max-w-2xl mx-auto leading-relaxed">
            Clarity on commitments. Please review our standard stance on payment reversals and event registrations.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 md:p-14 rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-[#f36d21]/20 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f36d21]/5 rounded-full blur-3xl"></div>
            
            <div className="w-20 h-20 rounded-3xl bg-[#f36d21]/10 flex items-center justify-center text-4xl text-[#f36d21] mb-10 group-hover:scale-110 transition-transform duration-500">
              <FaCircleXmark />
            </div>

            <h2 className="text-3xl font-bold mb-8 gabarito-bold">Strictly <span className="text-[#f36d21]">No Refunds</span></h2>
            
            <div className="space-y-6 text-gray-400 gabarito-regular text-lg leading-relaxed">
              <p>
                We regret to inform you that <span className="text-white font-bold">no refunds are allowed</span> for any reason once payment has been confirmed for event registrations or institutional purchases.
              </p>
              
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                <FaHandshakeSlash className="text-2xl text-[#f36d21] flex-shrink-0 mt-1" />
                <p className="text-sm">
                  All payments are <span className="text-[#f36d21] font-bold underline decoration-[#f36d21]/30 underline-offset-4">final and non-refundable</span>. This includes cancellations, scheduling conflicts, or personal changes in plans.
                </p>
              </div>

              <p>
                This policy is mandated by the intensive advance planning, logistics, and resource commitments required to organize Asia&apos;s largest quiz fest.
              </p>

              <div className="flex gap-4 p-6 rounded-2xl bg-[#4c8693]/5 border border-[#4c8693]/10">
                <FaCircleInfo className="text-2xl text-[#4c8693] flex-shrink-0 mt-1" />
                <p className="text-sm">
                  We strongly advise you to <a href="mailto:utpt.rvquizcorp@gmail.com" className="text-[#4c8693] font-bold hover:underline">contact us</a> with any queries before completing your transaction.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#f36d21]">
                  <FaAt />
                </div>
                <span className="text-sm text-gray-500 gabarito-bold">utpt.rvquizcorp@gmail.com</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Last Updated: March 2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
