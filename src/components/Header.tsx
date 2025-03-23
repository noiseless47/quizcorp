"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  // Pages with dark backgrounds that can have transparent headers
  const darkBackgroundPages = ['/', '/utpt','/sponsorship','/contact','/gallery'];
  const isDarkPage = darkBackgroundPages.includes(pathname);

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
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Corp", href: "/team" },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(href);
    }
  };

  // Only be transparent if on a dark page AND not scrolled
  const isTransparent = isDarkPage && !isScrolled;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isTransparent 
          ? "bg-transparent py-4" 
          : "bg-white py-2 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <div className="relative w-12 h-12 mr-3">
                <Image
                  src="/logo.png"
                  alt="RV QuizCorp Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="font-bold text-3xl font-lilita-one">
                <span className="text-[#f36d21]">Quiz</span>
                <span className="text-[#4c8693]">Corp</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className={`${
                  isTransparent ? 'text-white' : 'text-gray-800'
                } hover:text-[#f36d21] transition-colors font-medium font-lilita-one text-lg`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/register"
              className={`${
                isTransparent 
                  ? 'bg-white text-[#f36d21]' 
                  : 'bg-[#f36d21] text-white'
              } px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium font-lilita-one`}
            >
              Register for UTPT
            </Link>
          </nav>

          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden relative z-[60] w-10 h-10 flex items-center justify-center text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <HiX className={`w-7 h-7 ${isTransparent ? 'text-gray-800' : 'text-gray-800'}`} />
            ) : (
              <HiMenu className={`w-7 h-7 ${isTransparent ? 'text-white' : 'text-gray-800'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-white z-50 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="h-full flex flex-col pt-20 pb-6 px-6">
                <nav className="flex-1 flex flex-col items-center justify-center space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full text-center"
                    >
                      <Link 
                        href={link.href}
                        className="inline-block text-gray-800 hover:text-[#f36d21] transition-colors text-lg font-cookie py-2"
                        onClick={(e) => handleNavClick(link.href, e)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="w-full text-center pt-4"
                  >
                    <Link 
                      href="/register"
                      className="inline-block bg-[#f36d21] text-white px-6 py-2 rounded-full hover:bg-[#e15d11] transition-all text-lg font-lilita-one"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Register for UTPT
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}