import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function UTPT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quizCategories = [
    {
      title: "Indi-Genius",
      description: "Celebrating everything that makes India unique. From mythology to modern pop culture, cricket to politics.",
    },
    {
      title: "Ψ-Biz-Tech",
      description: "The ultimate challenge for the scientifically inclined and business-savvy minds. Explore the frontiers of technology.",
    },
    {
      title: "Game Theory",
      description: "For the sports fanatics. From obscure stats to legendary moments across all disciplines.",
    },
    {
      title: "Lieut-en-ent",
      description: "Entertainment, literature, and arts. A quiz for the culture vultures and movie buffs.",
    },
    {
      title: "Major Quiz",
      description: "The flagship event. A general quiz that tests the depth and breadth of your knowledge across all fields.",
    },
    {
      title: "Magnum Open",
      description: "Open to all ages. A prestigious event that brings together the best quizzing talent in the country.",
    },
  ];

  return (
    <div className="bg-[#0B1121] min-h-screen text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#142033] to-[#0B1121] opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="motion-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gabarito-bold">
              Under The <span className="text-[#f36d21]">Peepal</span> Tree
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto gabarito-regular">
              Asia&apos;s Largest Student-Run Quiz Fest. A legacy of curiosity, knowledge, and excellence since 2004.
            </p>
          </div>
        </div>
      </section>

      {/* About UTPT - Streamlined */}
      <section className="py-20 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="motion-slide-in">
              <h2 className="text-4xl font-bold mb-8 gabarito-bold">The Legacy</h2>
              <p className="text-lg text-gray-300 mb-6 gabarito-regular">
                Named after the traditional Peepal trees where wisdom was shared in ancient India, UTPT is the flagship event of RV QuizCorp. It has grown from a local competition to a national phenomenon.
              </p>
              <p className="text-lg text-gray-300 gabarito-regular">
                Every year, thousands of participants from across Asia gather to compete in what has become the most prestigious collegiate quiz festival.
              </p>
            </div>
            <div className="motion-slide-in">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-gray-800 flex items-center justify-center">
                 <span className="text-white/20">UTPT Legacy Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Categories - Modern Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gabarito-bold">Featured Quizzes</h2>
            <div className="w-24 h-1 bg-[#4c8693] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizCategories.map((quiz, index) => (
              <div 
                key={index}
                className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#f36d21]/50 transition-all duration-300 hover:bg-white/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#4c8693] group-hover:text-[#f36d21] transition-colors gabarito-bold">
                  {quiz.title}
                </h3>
                <p className="text-gray-400 gabarito-regular leading-relaxed">
                  {quiz.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#f36d21]/20 to-[#4c8693]/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 gabarito-bold">Join the Intelligence Revolution</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto gabarito-regular">
            Secure your spot in UTPT 2025. Experience the thrill of high-stakes quizzing and connect with the brightest minds.
          </p>
          <Link 
            to="/register"
            className="bg-[#f36d21] text-white px-12 py-4 rounded-full hover:bg-[#d85d18] transition-all duration-300 gabarito-bold inline-block text-xl shadow-lg hover:scale-105 transform"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}
