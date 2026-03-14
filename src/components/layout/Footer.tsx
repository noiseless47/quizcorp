import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaXTwitter, FaLinkedin, FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "UTPT", href: "/utpt" },
    { name: "Register", href: "/register" },
    { name: "Archives", href: "/archives" },
    { name: "Gallery", href: "/gallery" },
    { name: "The Corp", href: "/team" },
    { name: "Sponsor Us", href: "/sponsorship" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "About Us", href: "/about" },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/rvquizcorp/", color: "hover:bg-[#E1306C]" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/RvQuizcorp/", color: "hover:bg-[#1877F2]" },
    { icon: <FaXTwitter />, href: "https://x.com/rvquizcorp", color: "hover:bg-black" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/rv-quizcorp/", color: "hover:bg-[#0A66C2]" },
    { icon: <FaEnvelope />, href: "mailto:utpt.rvquizcorp@gmail.com", color: "hover:bg-[#f36d21]" },
  ];

  return (
    <footer className="bg-[#0B1121] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#f36d21]/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4c8693]/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="w-16 h-16 mr-4 object-contain brightness-110" />
                <div className="font-bold text-3xl gabarito-bold">
                  <span className="text-[#f36d21]">Quiz</span>
                  <span className="text-[#4c8693]">Corp</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-lg gabarito-regular leading-relaxed">
              Fostering a culture of curiosity and knowledge-sharing at RVCE since 1997. India&apos;s premier collegiate quizzing institution.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 ${social.color} transition-all duration-300 transform hover:-translate-y-1 hover:border-transparent`}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Hub Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 gabarito-bold text-[#4c8693] uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-[#f36d21] transition-colors text-lg gabarito-regular flex items-center group">
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 h-[2px] bg-[#f36d21] mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-8 gabarito-bold text-[#f36d21] uppercase tracking-widest">Get In Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <FaLocationDot className="text-[#f36d21] mt-1 mr-4 text-xl flex-shrink-0" />
                <span className="text-gray-400 text-lg gabarito-regular">RV Vidyanikethan Post, Mysore Road, Bangalore - 560059</span>
              </li>
              <li className="flex items-center group">
                <FaEnvelope className="text-[#4c8693] mr-4 text-xl flex-shrink-0" />
                <a href="mailto:utpt.rvquizcorp@gmail.com" className="text-gray-400 hover:text-white transition-colors text-lg gabarito-regular">utpt.rvquizcorp@gmail.com</a>
              </li>
              <li className="flex items-center group">
                <FaPhone className="text-[#f36d21] mr-4 text-xl flex-shrink-0" />
                <a href="tel:+919448417237" className="text-gray-400 hover:text-white transition-colors text-lg gabarito-regular">+91 94484 17237</a>
              </li>
            </ul>
          </div>

          {/* Legal Hub */}
          <div>
            <h3 className="text-xl font-bold mb-8 gabarito-bold text-gray-500 uppercase tracking-widest">Legal</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-lg gabarito-regular">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 gabarito-regular text-center md:text-left">
            &copy; {currentYear} RV QuizCorp. Crafted with passion for the curious.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm gabarito-regular">
            <span>Powered by</span>
            <div className="flex gap-1 font-bold">
              <span className="text-[#f36d21]">Quiz</span>
              <span className="text-[#4c8693]">Corp</span>
              <span className="text-white">Tech</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
