"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

type MotionDivProps = HTMLMotionProps<"div">;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  // Check if we're on the homepage
  const isHomepage = pathname === "/";

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "UTPT", href: "/utpt" },
    { name: "Archives", href: "/archives" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Corp", href: "/team" },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    
    // Handle anchor links with smooth scrolling
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For regular page links, use the router
      router.push(href);
    }
  };

  // Determine if the header should be transparent or not
  // Only homepage gets transparent navbar when not scrolled
  const isTransparent = isHomepage && !isScrolled;

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isTransparent 
          ? "bg-transparent py-4" 
          : darkMode
            ? "bg-gray-900/90 backdrop-blur-md py-2 text-white border-b border-gray-700/50"
            : "bg-white/90 backdrop-blur-md py-2 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.div
              {...({
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.5 },
                className: "flex items-center",
                whileHover: { scale: 1.05 }
              } as MotionDivProps)}
            >
              <div className="relative w-12 h-12 mr-3">
                <Image
                  src="/logo.png"
                  alt="RV QuizCorp Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className={`font-bold text-xl transition-colors duration-300 font-merriweather`}>
                <span className="text-[#f36d21]">Quiz</span>
                <span className="text-[#4c8693]">Corp</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
              >
                <Link 
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`${
                    isTransparent ? 'text-white' : 'text-gray-800'
                  } hover:text-[#f36d21] transition-colors font-medium relative group font-merriweather`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f36d21] transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link 
                href="/register"
                className={`${
                  isTransparent 
                    ? 'bg-white text-[#f36d21]' 
                    : 'bg-[#f36d21] text-white'
                } px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium font-merriweather`}
              >
                Register for UTPT
              </Link>
            </motion.div>
            <motion.div
              {...({
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.9 },
                className: "ml-4 cursor-pointer",
                onClick: toggleDarkMode
              } as MotionDivProps)}
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${!isTransparent || mobileMenuOpen ? 'bg-gray-800' : 'bg-white'} ${mobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${!isTransparent || mobileMenuOpen ? 'bg-gray-800' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 transition-all ${!isTransparent || mobileMenuOpen ? 'bg-gray-800' : 'bg-white'} ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div 
        {...({
          className: `md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-0 ${mobileMenuOpen ? 'block' : 'hidden'}`,
          initial: { opacity: 0, x: "100%" },
          animate: { 
            opacity: mobileMenuOpen ? 1 : 0,
            x: mobileMenuOpen ? 0 : "100%" 
          },
          transition: { duration: 0.3, ease: "easeInOut" }
        } as MotionDivProps)}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link 
                href={link.href}
                className="text-gray-800 hover:text-[#f36d21] transition-colors text-lg relative group font-merriweather px-4 py-2"
                onClick={(e) => handleNavClick(link.href, e)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f36d21] transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Link 
              href="/register"
              className="bg-[#f36d21] text-white px-6 py-2 rounded-full hover:bg-[#f36d21] transition-all text-lg font-merriweather"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register for UTPT
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}