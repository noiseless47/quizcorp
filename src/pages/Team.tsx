import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  isHead: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Adithya Acharya",
    role: "Corp Head",
    image: "/team/corp_head_1.jpg",
    description: "Leading the team with vision and dedication.",
    isHead: true
  },
  {
    id: 2,
    name: "Nithyasree Subramanian",
    role: "Corp Head",
    image: "/team/corp_head_2.jpg",
    description: "Coordinating team activities and strategic planning.",
    isHead: true
  },
  {
    id: 3,
    name: "Aaditya Rao",
    role: "Treasurer",
    image: "/team/treasurer.jpg",
    description: "Managing finances and ensuring smooth operations.",
    isHead: true
  },
  {
    id: 4,
    name: "Ksheeraja Adya",
    role: "Design Head",
    image: "/team/design-head.jpg",
    description: "Crafting visual experiences and brand identity.",
    isHead: true
  },
];

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1121] text-white pt-24 pb-20 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f36d21]/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-1/2 right-0 w-[400px] h-[400px] bg-[#4c8693]/10 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 pt-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gabarito-bold tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4c8693] to-[#88d5e5]">Corp</span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto gabarito-regular leading-relaxed">
            Leading the intelligence movement. Meet the dedicated team driving <span className="text-white">RV QuizCorp</span> forward.
          </p>
        </motion.div>

        {/* Leadership Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white gabarito-bold inline-block border-b-2 border-[#f36d21] pb-2">Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl transition-all duration-500 group-hover:border-[#f36d21]/50 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <span className="text-white/10 text-xl font-bold">{member.name} Placeholder</span>
                  </div>
                  {/* Real image would be here */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#f36d21] text-xs font-bold uppercase tracking-widest mb-2 block">{member.role}</span>
                    <h3 className="text-2xl font-bold text-white gabarito-bold mb-2">{member.name}</h3>
                    <p className="text-gray-400 text-sm gabarito-regular opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#f36d21]/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#4c8693]/10 rounded-full blur-[80px]"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 gabarito-bold relative z-10">Want to join the <span className="text-[#f36d21]">Squad?</span></h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto gabarito-regular relative z-10">
            We're always looking for passionate individuals to help us scale new heights in the world of quizzing.
          </p>
          <div className="flex justify-center relative z-10">
            <a
              href="mailto:utpt.rvquizcorp@gmail.com"
              className="px-12 py-4 bg-white text-black hover:bg-[#f36d21] hover:text-white rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Join Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
