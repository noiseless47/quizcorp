import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaGlobe, FaAward, FaUsers, FaArrowRight, FaEnvelopesBulk, FaPhone } from 'react-icons/fa6';

const Indicator = ({ value, color }: { value: boolean | string; color: string }) => {
  if (typeof value === "string") return <span className={`text-base font-bold ${color}`}>{value}</span>;
  return value ? (
    <div className={`w-6 h-6 rounded-full ${color} bg-current/20 flex items-center justify-center mx-auto`}>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
    </div>
  ) : (
    <div className="w-2 h-2 rounded-full bg-white/5 mx-auto"></div>
  );
};

export default function Sponsorship() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: "Participants", value: "1,000+", icon: <FaUsers /> },
    { label: "Institutions", value: "50+", icon: <FaGlobe /> },
    { label: "Edition", value: "20th", icon: <FaAward /> },
    { label: "Social Reach", value: "15K+", icon: <FaRocket /> }
  ];

  return (
    <div className="min-h-screen bg-[#0B1121] text-white pt-24 pb-20 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f36d21]/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4c8693]/5 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32 pt-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gabarito-bold tracking-tight">
            Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f36d21] to-[#ff9a5a]">Excellence</span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto gabarito-regular leading-relaxed">
            Support Asia&apos;s largest student-run quiz fest and connect with the intellectual future of India.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl text-center hover:border-white/20 transition-all group"
            >
              <div className="text-[#f36d21] text-3xl mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2 gabarito-bold">{stat.value}</div>
              <div className="text-gray-500 gabarito-regular text-lg uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Why Support Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold gabarito-bold">Why <span className="text-[#4c8693]">UTPT?</span></h2>
            <p className="text-xl text-gray-400 gabarito-regular leading-relaxed">
              Under The Peepal Tree is not just a quiz fest; it&apos;s a legacy. For over two decades, we have been the benchmark for collegiate quizzing, offering a platform for analytical brilliance and curiosity.
            </p>
            <div className="space-y-4">
              {["Targeted Intellect Audience", "Hyper-local Engagement", "CSR & Educational Alignment"].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#f36d21]"></div>
                  <span className="text-lg text-gray-300 gabarito-regular">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video bg-gradient-to-br from-[#142033] to-[#0B1121] rounded-3xl border border-white/5 flex items-center justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <span className="text-white/10 text-6xl font-black gabarito-bold rotate-12 group-hover:scale-110 transition-transform">UTPT 2025</span>
          </motion.div>
        </div>

        {/* Sponsorship Tiers - Detailed Table */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 gabarito-bold"
          >
            Sponsorship <span className="text-[#f36d21]">Opportunities</span>
          </motion.h2>
          
          <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-8 text-xl font-bold gabarito-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">Benefits</th>
                  <th className="p-8 text-center whitespace-nowrap"><span className="px-4 py-2 rounded-lg bg-[#f36d21]/20 text-[#f36d21] gabarito-bold border border-[#f36d21]/30">Main Sponsor</span></th>
                  <th className="p-8 text-center whitespace-nowrap"><span className="px-4 py-2 rounded-lg bg-[#4c8693]/20 text-[#4c8693] gabarito-bold border border-[#4c8693]/30">Co-sponsor</span></th>
                  <th className="p-8 text-center whitespace-nowrap"><span className="px-4 py-2 rounded-lg bg-white/10 text-white gabarito-bold border border-white/20">Associate Sponsor</span></th>
                  <th className="p-8 text-center whitespace-nowrap"><span className="px-4 py-2 rounded-lg bg-gray-600/20 text-gray-400 gabarito-bold border border-gray-600/30">Media Sponsor</span></th>
                </tr>
              </thead>
              <tbody className="gabarito-regular text-lg">
                {[
                  { benefit: "Company to be recognized as the Official Sponsor of the event", main: true, co: true, assoc: true, media: true },
                  { benefit: "Logo on all material (Arrows, Posters, Badges, Certificates, etc.)", main: true, co: true, assoc: false, media: true },
                  { benefit: "Banners to be displayed prominently at venues", main: true, co: true, assoc: true, media: false },
                  { benefit: "Distribution of Company's advertisement materials at event", main: true, co: false, assoc: true, media: false },
                  { benefit: "Banner addon the stage", main: true, co: true, assoc: true, media: false },
                  { benefit: "Distribution of sponsor's product at venue", main: true, co: false, assoc: false, media: false },
                  { benefit: "Advertisements of Company to be on-air before and during interval", main: true, co: true, assoc: false, media: false },
                  { benefit: "Market Research", main: true, co: true, assoc: false, media: false },
                  { benefit: "All Prizes Releases to Contain Name of Sponsor", main: true, co: true, assoc: false, media: true },
                  { benefit: "Sponsors to receive report of the event", main: true, co: true, assoc: true, media: false },
                  { benefit: "Opportunity to conduct company placement on the spot", main: true, co: false, assoc: false, media: false },
                  { benefit: "Possibility of a seminar by the company on RVCE's premises", main: true, co: false, assoc: false, media: false },
                  { benefit: "Special notes", main: "1:30 minute duration", co: "30 second duration", assoc: false, media: false },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-white/5 hover:bg-white/5 transition-colors group ${i === 12 ? 'bg-white/5' : ''}`}>
                    <td className="p-8 text-gray-300 group-hover:text-white transition-colors">{row.benefit}</td>
                    <td className="p-8 text-center">
                      <Indicator value={row.main} color="text-[#f36d21]" />
                    </td>
                    <td className="p-8 text-center">
                      <Indicator value={row.co} color="text-[#4c8693]" />
                    </td>
                    <td className="p-8 text-center">
                      <Indicator value={row.assoc} color="text-yellow-500" />
                    </td>
                    <td className="p-8 text-center">
                      <Indicator value={row.media} color="text-gray-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-12">
          <h2 className="text-4xl font-bold gabarito-bold">Ready to <span className="text-[#f36d21]">Collaborate?</span></h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="mailto:utpt.rvquizcorp@gmail.com" className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl transition-all group">
              <FaEnvelopesBulk className="text-[#f36d21] text-xl" />
              <span className="text-lg gabarito-regular">Email Us</span>
            </a>
            <a href="tel:+919448417237" className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl transition-all group">
              <FaPhone className="text-[#4c8693] text-xl" />
              <span className="text-lg gabarito-regular">Call Now</span>
            </a>
          </div>
          <div className="pt-8">
            <a 
              href="/sponsor/UTPT_2025_Sponsorship_Brochure.pdf"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-200 transition-all shadow-xl gabarito-bold"
            >
              Download Brochure
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
