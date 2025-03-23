import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from '../context/ThemeContext';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RV QuizCorp - RVCE's Premier Quiz Club",
  description: "The official website of RV QuizCorp, the quiz club of R.V. College of Engineering and hosts of Asia's Largest Quiz Fest - UTPT",
  verification: {
    google: "MN_2PYyv3GTBEiJzEcNvbqGD-HI_GcnUlMIxZyix8Do",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased`}
      >
        <ThemeProvider>
          <ParticleBackground />
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
