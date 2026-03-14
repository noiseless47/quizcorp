import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaXTwitter, FaFacebook, FaYoutube, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      details: "utpt.rvquizcorp@gmail.com",
      link: "mailto:utpt.rvquizcorp@gmail.com",
      accent: "#f36d21"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      details: "+91 96323 61789 / +91 86602 51694",
      link: "tel:+919632361789",
      accent: "#4c8693"
    },
    {
      icon: <FaLocationDot className="text-2xl" />,
      title: "Location",
      details: "R.V. College of Engineering, Mysore Road, Bengaluru - 560059",
      link: "https://maps.app.goo.gl/uP4V2C2X5mP8C3C8C",
      accent: "#f36d21"
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/rvquizcorp" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/company/rv-quizcorp" },
    { name: "Twitter", icon: FaXTwitter, url: "https://x.com/rvquizcorp" },
    { name: "Facebook", icon: FaFacebook, url: "https://facebook.com/rvquizcorp" },
    { name: "YouTube", icon: FaYoutube, url: "https://youtube.com/@rvquizcorp" }
  ];

  return (
    <div className="min-h-screen bg-[#0B1121] text-white pt-24 pb-20 relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4c8693]/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f36d21]/5 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24 pt-32"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gabarito-bold tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f36d21] to-[#ff9a5a]">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 gabarito-regular leading-relaxed max-w-2xl">
            Have questions about UTPT or want to collaborate with Asia&apos;s largest student-run quiz fest? We&apos;re here for it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact Methods & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="grid grid-cols-1 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 h-full min-h-[110px]"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 flex-shrink-0"
                    style={{ backgroundColor: `${method.accent}20`, color: method.accent }}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-500 mb-1 block gabarito-bold">{method.title}</span>
                    <span className="text-lg font-medium text-white gabarito-regular leading-tight block">{method.details}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-10 rounded-[40px] bg-gradient-to-br from-[#1a2a44] to-[#0B1121] border border-white/10 relative overflow-hidden flex-grow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4c8693]/10 rounded-full blur-3xl"></div>
              <h2 className="text-2xl font-bold mb-6 gabarito-bold">Join the Community</h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-[#f36d21] hover:text-white hover:border-[#f36d21] transition-all duration-300 group"
                    title={link.name}
                  >
                    <link.icon className="group-hover:rotate-12 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Map (Replaces Form) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-[#0B1121] border border-white/10 rounded-[40px] shadow-2xl relative overflow-hidden h-full min-h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6747340499247!2d77.4986345!3d12.9237228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159cab30d%3A0x771cae2f853a3c8c!2sRV%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1696880069522!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            ></iframe >
            {/* Subtle Gradient Overlay to help blend with the page */}
            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[40px] bg-gradient-to-t from-[#0B1121]/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
