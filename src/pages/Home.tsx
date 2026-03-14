import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInstagramFeed } from "../hooks/useInstagramFeed";

export default function Home() {
  const { posts, loading } = useInstagramFeed();
  const announcements = [
    {
      color: "bg-[#f36d21]",
      text: "Most Recent UTPT: May 23-25, 2025.",
      linkText: "See highlights.",
      to: "/archives"
    },
    { color: "bg-[#4c8693]", text: "UTPT 2026 coming soon" },
    { color: "bg-[#f36d21]", text: "Set Dose 2026 coming soon" },
    {
      color: "bg-[#4c8693]",
      text: "Admin Batch 2026-27 has been announced.",
      linkText: "Check the Corp page for more details.",
      to: "/team"
    },
  ];

  // ... rest of the component
  // Placeholder images for carousel - user will add real photos later
  const carouselImages = [
    { id: 1, src: "/carousel/photo1.jpg", title: "UTPT Excellence" },
    { id: 2, src: "/carousel/photo2.jpg", title: "Brainstorming Sessions" },
    { id: 3, src: "/carousel/photo3.jpg", title: "Asia's Largest Fest" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <>
      {/* Hero Section - Premium Redesign */}
      <section className="relative min-h-screen bg-[#0B1121] flex items-center overflow-hidden">
        {/* HIGH PERFORMANCE BACKGROUND - Redesigned from scratch to eliminate lag */}
        <div className="absolute inset-0 z-0">
          {/* Base Layer: Deep dramatic radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_#1a2a44_0%,_#0B1121_100%)]"></div>

          {/* Static Soft Glows - Using subtle gradients instead of heavy blurs */}
          <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#f36d21]/5 to-transparent blur-[60px] pointer-events-none opacity-50"></div>
          <div className="absolute top-[10%] -right-[20%] w-[900px] h-[900px] rounded-full bg-gradient-to-bl from-[#4c8693]/5 to-transparent blur-[80px] pointer-events-none opacity-40"></div>

          {/* Subtle Geometric Pattern - Very low GPU cost */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>

          {/* Floating Subtle Circles - Fixed positions, no animation for performance */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-white/[0.01] rounded-full pointer-events-none hidden md:block"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              {/* Heritage Badge - Removed backdrop-blur for performance */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-8 px-6 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 group"
              >
                <span className="w-2 h-2 rounded-full bg-[#f36d21] animate-pulse"></span>
                <span className="text-white/60 uppercase tracking-[0.2em] text-[10px] md:text-xs gabarito-bold">India&apos;s Premier Quizzing Legacy Since 1997</span>
              </motion.div>

              {/* Main Title - Colors Corrected to match Navbar (Quiz: Orange, Corp: Teal) */}
              <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold text-white tracking-tighter gabarito-bold leading-tight mb-8">
                <span className="relative">
                  RV <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f36d21] to-[#ff9a5a]">Quiz</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4c8693] to-[#88d5e5]">Corp</span>
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto gabarito-regular leading-relaxed mb-12 px-4">
                Asia&apos;s leading student-run quiz club. Join a community where curiosity is the only currency.
              </p>

              {/* CTAs - Removed backdrop-blur from second button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                <Link
                  to="/register"
                  className="group relative w-full sm:w-auto overflow-hidden bg-[#f36d21] text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-[#f36d21]/40 hover:-translate-y-1 gabarito-bold text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Your Journey
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </Link>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl text-xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 gabarito-bold"
                >
                  Our Story
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        </div>
      </section>

      {/* Aesthetic Announcement Ticker - Updated with 2026 dates */}
      <div className="w-full bg-[#0B1121] border-y border-white/10 py-4 overflow-hidden relative z-30">
        <div className="announcement-ticker animate-marquee flex w-max items-center whitespace-nowrap">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              aria-hidden={copyIndex === 1}
              className="flex min-w-max shrink-0 items-center text-base font-medium tracking-widest text-gray-400 uppercase gabarito-regular"
            >
              {announcements.map((announcement) => (
                <span key={`${copyIndex}-${announcement.text}`} className="mx-12 flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${announcement.color}`}></span>
                  {announcement.text}
                  {announcement.to ? (
                    copyIndex === 0 ? (
                      <Link to={announcement.to} className="text-[#88d5e5] underline underline-offset-4 hover:text-white transition-colors">
                        {announcement.linkText}
                      </Link>
                    ) : (
                      <span>{announcement.linkText}</span>
                    )
                  ) : null}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Aesthetic Photo Carousel Section */}
      <section className="py-20 bg-[#0B1121] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white gabarito-bold">Glimpses of QuizCorp</h2>
            <div className="w-24 h-1 bg-[#f36d21] mx-auto mt-4"></div>
          </div>

          <div className="relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${carouselImages[currentIndex].src})`, backgroundColor: '#142033' }}
                >
                  {/* Placeholder text for missing images */}
                  <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl font-bold uppercase tracking-widest">
                    {carouselImages[currentIndex].title}
                  </div>
                </div>
                <div className="absolute bottom-10 left-10 z-20">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-3xl font-bold text-white gabarito-bold"
                  >
                    {carouselImages[currentIndex].title}
                  </motion.h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 right-10 z-30 flex space-x-3">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#f36d21] w-8" : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest on Instagram Section */}
      <section className="py-24 bg-[#0B1121] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#f36d21]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center md:justify-start gap-4 mb-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white shadow-xl shadow-orange-500/20">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </div>
                <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs gabarito-bold">Social Pulse</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold text-white gabarito-bold leading-tight mb-8">
                Latest on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f36d21] to-[#bc1888]">Instagram</span>
              </h2>
              <p className="text-xl text-gray-400 gabarito-regular max-w-xl">
                Stay updated with the most recent highlights, announcements, and behind-the-scenes action.
              </p>
            </div>
            <motion.a
              href="https://instagram.com/rvquizcorp"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group p-[2px] rounded-3xl overflow-hidden transition-all duration-300"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] animate-gradient-xy opacity-80 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative px-10 py-5 bg-[#0B1121] rounded-[22px] flex items-center gap-4 group-hover:bg-transparent transition-colors duration-300">
                <span className="text-white font-bold gabarito-bold flex items-center gap-3">
                  Follow @rv_quizcorp
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </span>
              </div>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {loading ? (
              // Loading State Shimmers
              [1, 2].map((i) => (
                <div key={i} className="aspect-square rounded-[32px] bg-white/5 animate-pulse border border-white/10"></div>
              ))
            ) : posts.length > 0 ? (
              posts.slice(0, 2).map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative aspect-square w-full rounded-[32px] overflow-hidden bg-[#131b2e] border border-white/5 shadow-2xl group"
                >
                   <a href={post.permalink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <img 
                      src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url} 
                      alt={post.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="text-white font-bold gabarito-bold px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">View Post</span>
                    </div>
                  </a>
                  <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[32px]"></div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-8 text-center">
                <p className="text-gray-500 gabarito-regular">Fresh posts will appear here soon. Follow us on Instagram for the latest updates.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 motion-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-white gabarito-bold">About Us</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto text-shadow gabarito-regular">
              RV QuizCorp is the official quiz club of R.V. College of Engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="motion-slide-in">
              <div className="rounded-xl shadow-lg w-full aspect-video bg-gray-800 flex items-center justify-center border border-white/5">
                <span className="text-white/20">About Image Placeholder</span>
              </div>
            </div>
            <div className="motion-slide-in">
              <h3 className="text-2xl font-bold mb-6 text-white gabarito-bold">Our Story</h3>
              <p className="text-gray-300 mb-6 text-lg text-justify gabarito-regular">
                Founded in 1997, RV QuizCorp has grown to become one of India's premier collegiate quizzing institutions. What started as a small group of quiz enthusiasts has evolved into an organization that hosts Asia's largest student-run quiz fest - Under The Peepal Tree (UTPT).
              </p>
              <p className="text-gray-300 mb-8 text-lg text-justify gabarito-regular">
                Our mission is to foster a culture of curiosity, knowledge-sharing, and intellectual stimulation through the art of quizzing.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="text-center md:text-left">
                  <h4 className="text-3xl font-bold mb-1 text-white gabarito-bold">25+</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest gabarito-regular">Years</p>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-3xl font-bold mb-1 text-white gabarito-bold">1000+</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest gabarito-regular">Annual Participants</p>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-3xl font-bold mb-1 text-white gabarito-bold">50+</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest gabarito-regular">Events</p>
                </div>
              </div>
              <div className="mt-6 mb-8">
                <Link to="/about" className="inline-flex items-center bg-[#f36d21] text-white px-8 py-3 rounded-full hover:bg-[#d85d18] transition-colors text-lg font-bold shadow-lg gabarito-bold">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section - Premium Redesign */}
      <section className="py-32 bg-[#0B1121] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#f36d21]/5 rounded-full blur-[120px] -z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white gabarito-bold"
            >
              Fuel the <span className="text-[#f36d21]">Curiosity</span>
            </motion.h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto gabarito-regular">
              Partner with Asia&apos;s largest student-run quiz fest and connect with tomorrow&apos;s brightest minds.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-10 md:p-16 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4c8693]/10 rounded-full blur-3xl -z-10"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#f36d21]/10 flex items-center justify-center flex-shrink-0 border border-[#f36d21]/20">
                        <svg className="w-6 h-6 text-[#f36d21]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white gabarito-bold mb-2">Massive Outreach</h3>
                        <p className="text-gray-400 gabarito-regular text-lg leading-relaxed">Reach over 1,000+ top-tier students and professionals from across India.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#4c8693]/10 flex items-center justify-center flex-shrink-0 border border-[#4c8693]/20">
                        <svg className="w-6 h-6 text-[#4c8693]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white gabarito-bold mb-2">Brand Prestige</h3>
                        <p className="text-gray-400 gabarito-regular text-lg leading-relaxed">Associate with a legacy institution and Asia&apos;s most prestigious quiz fest.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/sponsorship"
                      className="inline-flex items-center gap-3 bg-[#f36d21] text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-[#d85d18] transition-all duration-300 shadow-xl hover:shadow-[#f36d21]/20 transform hover:-translate-y-1 gabarito-bold group"
                    >
                      Partner With Us
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </Link>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#f36d21] to-[#4c8693] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-black rounded-2xl p-8 border border-white/5">
                      <div className="flex flex-col gap-6">
                        <div className="h-4 bg-white/5 rounded-full w-3/4"></div>
                        <div className="h-4 bg-white/5 rounded-full w-1/2"></div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="aspect-square bg-[#f36d21]/20 rounded-xl"></div>
                          <div className="aspect-square bg-white/5 rounded-xl"></div>
                          <div className="aspect-square bg-[#4c8693]/20 rounded-xl"></div>
                        </div>
                        <div className="h-4 bg-white/5 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
