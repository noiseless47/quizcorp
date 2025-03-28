import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Itim, Jockey_One } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from '../context/ThemeContext';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  variable: "--font-merriweather",
  subsets: ["latin"],
});

const itim = Itim({
  weight: ['400'],
  variable: "--font-itim",
  subsets: ["latin"],
});

const jockeyOne = Jockey_One({
  weight: ['400'],
  variable: "--font-jockey-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RV QuizCorp - RVCE's Premier Quiz Club",
  description: "The official website of RV QuizCorp, the quiz club of R.V. College of Engineering and hosts of Asia's Largest Quiz Fest - UTPT",
  verification: {
    google: "MN_2PYyv3GTBEiJzEcNvbqGD-HI_GcnUlMIxZyix8Do",
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/logo.png',
    },
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "RV QuizCorp - RVCE's Premier Quiz Club",
    description: "The official website of RV QuizCorp, the quiz club of R.V. College of Engineering and hosts of Asia's Largest Quiz Fest - UTPT",
    url: 'https://quizcorp.vercel.app',
    siteName: 'RV QuizCorp',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'RV QuizCorp Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "RV QuizCorp - RVCE's Premier Quiz Club",
    description: "The official website of RV QuizCorp, the quiz club of R.V. College of Engineering and hosts of Asia's Largest Quiz Fest - UTPT",
    images: ['/logo.png'],
    creator: '@rvquizcorp',
    site: '@rvquizcorp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://sdk.cashfree.com/js/v3/cashfree.js"></script>
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} ${itim.variable} ${jockeyOne.variable} antialiased`}
      >
        <ThemeProvider>
          <ParticleBackground />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
