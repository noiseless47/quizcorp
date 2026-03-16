import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaClockRotateLeft, FaBullseye, FaLightbulb, FaRankingStar } from "react-icons/fa6";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { title: "Excellence", desc: "Commitment to quality in every question and event we curate.", icon: <FaRankingStar /> },
    { title: "Innovation", desc: "Pushing the boundaries of traditional quizzing with modern tech.", icon: <FaLightbulb /> },
    { title: "Inquiry", desc: "Fostering a culture of deep curiosity and lifelong learning.", icon: <FaBullseye /> },
    { title: "Legacy", desc: "Honoring over 25 years of intellectual heritage at RVCE.", icon: <FaClockRotateLeft /> }
  ];

  const stats = [
    { label: "Community", value: "10K+" },
    { label: "Legacy", value: "25+ Years" },
    { label: "Events", value: "50+" }
  ];

  return (
    <div className="min-h-screen bg-[#0B1121] text-white pt-24 pb-20 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4c8693]/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#f36d21]/5 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32 pt-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gabarito-bold tracking-tight">
            The Culture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4c8693] to-[#88d5e5]">Quizzing</span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto gabarito-regular leading-relaxed">
            Since 1997, RV QuizCorp has been at the forefront of the Indian collegiate quizzing scene, fostering a community built on knowledge and curiosity.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] lg:aspect-square relative group"
          >
            <img
              src="/about/utpt24.jpg"
              alt="RV QuizCorp Legacy"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-transparent to-transparent opacity-60"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold gabarito-bold">Our <span className="text-[#f36d21]">Legacy</span></h2>
              <p className="text-xl text-gray-400 gabarito-regular leading-relaxed">
                Founded by a group of passionate quiz enthusiasts, RV QuizCorp has evolved from a small club into a premier institution. We are the proud hosts of <span className="text-white">Under The Peepal Tree (UTPT)</span>, celebrated as Asia&apos;s largest student-run quiz festival.
              </p>
              <p className="text-xl text-gray-400 gabarito-regular leading-relaxed">
                Our mission transcends competition; we aim to create a space where questions are as valued as answers, and where the thrill of discovery is shared by all.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl font-bold gabarito-bold mb-1">{stat.value}</div>
                  <div className="text-gray-500 gabarito-regular uppercase tracking-widest text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section - Premium Bento Grid */}
        <div className="mb-32">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold gabarito-bold">Core <span className="text-[#4c8693]">Axioms</span></h2>
            <div className="w-20 h-1 bg-[#f36d21] mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 flex flex-col justify-end ${
                  i === 0 ? "md:col-span-7" : 
                  i === 1 ? "md:col-span-5" : 
                  i === 2 ? "md:col-span-5" : "md:col-span-7"
                }`}
              >
                {/* Background Number */}
                <div className="absolute -top-10 -right-10 text-[180px] font-black text-white/[0.03] select-none gabarito-bold leading-none pointer-events-none group-hover:text-[#f36d21]/[0.05] transition-colors duration-500">
                  0{i + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4 text-[#f36d21] text-2xl transition-transform duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-[#f36d21]/10 flex items-center justify-center border border-[#f36d21]/20">
                      {v.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white gabarito-bold uppercase tracking-wide mb-3">{v.title}</h3>
                  <p className="text-lg text-gray-400 gabarito-regular leading-relaxed max-w-md">
                    {v.desc}
                  </p>
                </div>

                {/* Accent line on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#f36d21] to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 p-12 lg:p-20 rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#f36d21]/10 rounded-full blur-[80px]"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gabarito-bold tracking-tight">Be Part of the <span className="text-[#4c8693]">Future</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 gabarito-regular leading-relaxed">
            Whether you&apos;re an aspiring quizzer, a prospective sponsor, or a curious mind, there&apos;s a place for you at RV QuizCorp.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/register" className="bg-[#f36d21] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-[0_0_40px_rgba(243,109,33,0.3)] transition-all gabarito-bold">
              Join UTPT
            </a>
            <a href="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 transition-all gabarito-bold">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
