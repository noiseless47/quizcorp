"use client";

import Link from "next/link";
import { FaUsers } from 'react-icons/fa6';
import { FaUniversity } from 'react-icons/fa';

// Replace this with your actual Razorpay payment link
const RAZORPAY_LINK = "https://rzp.io/rzp/W2SbBBS";

export default function Register() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2 font-jockey-one">
          Register for UTPT
        </h1>
        
        <p className="text-gray-600 text-center mb-8 font-itim text-xl text-shadow">
          Join Asia's Largest Student-Run Quiz Fest
        </p>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-12 text-center">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#f36d21] mb-6 font-jockey-one">Registration Details</h2>
            <div className="space-y-4 text-left mb-8">
              <div className="flex items-start">
                <FaUsers className="text-[#4c8693] text-xl mt-1 mr-3" />
                <div>
                  <h3 className="font-bold text-gray-800 font-jockey-one text-xl">Team Size</h3>
                  <p className="text-gray-600 font-itim">Teams can have 1-3 members</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaUniversity className="text-[#4c8693] text-xl mt-1 mr-3" />
                <div>
                  <h3 className="font-bold text-gray-800 font-jockey-one text-xl">Eligibility</h3>
                  <p className="text-gray-600 font-itim">Open to all college students</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-[#f36d21] mb-3 font-jockey-one">Registration Fee</h2>
            <p className="text-gray-700 mb-4 font-itim text-xl text-shadow">
              The registration fee is ₹200 per team for all quizzes except Magnum Open, which is free to register.
            </p>
            <div className="bg-blue-50 p-3 rounded-lg mb-4 border-l-4 border-blue-400">
              <p className="text-blue-700 font-itim">
                <strong>Note for RVCE Students:</strong> Participation in Indi-Genius quiz gives 5 activity points.
              </p>
            </div>
            <p className="text-gray-600 mb-4 font-itim">
              Registration and payment are handled through Razorpay for paid quizzes. You'll be able to enter all your team details during the payment process.
            </p>
          </div>
          
          <a 
            href={RAZORPAY_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#f36d21] text-white px-8 py-4 text-xl rounded-lg hover:bg-[#d85d18] transition-all duration-300 font-jockey-one inline-block w-full md:w-auto"
          >
            Register Now
          </a>
        </div>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-700 mb-4 font-jockey-one">Quiz Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-itim text-gray-700">Indi-Genius</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-itim text-gray-700">Ψ-Biz-Tech</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-itim text-gray-700">Game Theory</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-itim text-gray-700">Lieut-en-ent</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-itim text-gray-700">Major Quiz</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-itim text-gray-700">Magnum Open</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-500 text-center mt-8 font-itim text-lg">
          Already registered? <Link href="/" className="text-[#4c8693] hover:underline">Return to homepage</Link>
        </p>
      </div>
    </div>
  );
} 