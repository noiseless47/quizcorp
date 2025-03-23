"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaUsers } from 'react-icons/fa6';
import { FaUniversity } from 'react-icons/fa';
import Script from 'next/script';

interface TeamMember {
  name: string;
  email: string;
  phone: string;
}

interface FormData {
  teamName: string;
  college: string;
  quizType: string;
  experience: string;
  member1: TeamMember;
  member2?: TeamMember;
  member3?: TeamMember;
}

interface FormErrors {
  teamName?: string;
  college?: string;
  quizType?: string;
  member1?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  member2?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  member3?: {
    name?: string;
    email?: string;
    phone?: string;
  };
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 z-50">
      <p className="text-gray-600 mb-4">{message}</p>
      <button
        onClick={onClose}
        className="w-full bg-[#4c8693] text-white px-6 py-2 rounded-lg hover:bg-[#3b697a] transition-all duration-300"
      >
        OK
      </button>
    </div>
  );
};

const QUIZ_TYPES = [
  { id: 'indi-genius', name: 'Indi-Genius' },
  { id: 'biz-tech', name: 'Ψ-Biz-Tech' },
  { id: 'game-theory', name: 'Game Theory' },
  { id: 'lieut-en-ent', name: 'Lieut-en-ent' },
  { id: 'major-quiz', name: 'Major Quiz' },
  { id: 'magnum-open', name: 'Magnum Open' }
];

const emptyMember = { name: '', email: '', phone: '' };

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    college: "",
    quizType: "",
    experience: "",
    member1: { ...emptyMember },
    member2: undefined,
    member3: undefined
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [memberCount, setMemberCount] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.teamName.trim()) {
      newErrors.teamName = "Team name is required";
    }

    if (!formData.college.trim()) {
      newErrors.college = "College name is required";
    }

    if (!formData.quizType) {
      newErrors.quizType = "Please select a quiz type";
    }

    // Validate member 1 (required)
    if (!formData.member1.name.trim()) {
      newErrors.member1 = { ...newErrors.member1, name: "Name is required" };
    }
    if (!formData.member1.email.trim()) {
      newErrors.member1 = { ...newErrors.member1, email: "Email is required" };
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.member1.email)) {
      newErrors.member1 = { ...newErrors.member1, email: "Invalid email format" };
    }
    if (!formData.member1.phone.trim()) {
      newErrors.member1 = { ...newErrors.member1, phone: "Phone number is required" };
    } else if (!/^[0-9]{10}$/.test(formData.member1.phone)) {
      newErrors.member1 = { ...newErrors.member1, phone: "Invalid phone number" };
    }

    // Only validate member 2 if added
    if (memberCount >= 2 && formData.member2) {
      if (formData.member2.name.trim() && (!formData.member2.email.trim() || !formData.member2.phone.trim())) {
        if (!formData.member2.email.trim()) {
          newErrors.member2 = { ...newErrors.member2, email: "Email is required if name is provided" };
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.member2.email)) {
          newErrors.member2 = { ...newErrors.member2, email: "Invalid email format" };
        }
        if (!formData.member2.phone.trim()) {
          newErrors.member2 = { ...newErrors.member2, phone: "Phone number is required if name is provided" };
        } else if (!/^[0-9]{10}$/.test(formData.member2.phone)) {
          newErrors.member2 = { ...newErrors.member2, phone: "Invalid phone number" };
        }
      }
    }

    // Only validate member 3 if added
    if (memberCount >= 3 && formData.member3) {
      if (formData.member3.name.trim() && (!formData.member3.email.trim() || !formData.member3.phone.trim())) {
        if (!formData.member3.email.trim()) {
          newErrors.member3 = { ...newErrors.member3, email: "Email is required if name is provided" };
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.member3.email)) {
          newErrors.member3 = { ...newErrors.member3, email: "Invalid email format" };
        }
        if (!formData.member3.phone.trim()) {
          newErrors.member3 = { ...newErrors.member3, phone: "Phone number is required if name is provided" };
        } else if (!/^[0-9]{10}$/.test(formData.member3.phone)) {
          newErrors.member3 = { ...newErrors.member3, phone: "Invalid phone number" };
        }
      }
    }

    setErrors(newErrors);
    
    // If there are errors, scroll to the first error
    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => {
        // Find the first error field
        let firstErrorField: HTMLElement | null = null;
        
        if (newErrors.teamName) {
          firstErrorField = document.getElementById('teamName');
        } else if (newErrors.quizType) {
          firstErrorField = document.getElementById('quizType');
        } else if (newErrors.college) {
          firstErrorField = document.getElementById('college');
        } else if (newErrors.member1?.name) {
          firstErrorField = document.getElementById('member1.name');
        } else if (newErrors.member1?.email) {
          firstErrorField = document.getElementById('member1.email');
        } else if (newErrors.member1?.phone) {
          firstErrorField = document.getElementById('member1.phone');
        } else if (newErrors.member2?.name) {
          firstErrorField = document.getElementById('member2.name');
        } else if (newErrors.member2?.email) {
          firstErrorField = document.getElementById('member2.email');
        } else if (newErrors.member2?.phone) {
          firstErrorField = document.getElementById('member2.phone');
        } else if (newErrors.member3?.name) {
          firstErrorField = document.getElementById('member3.name');
        } else if (newErrors.member3?.email) {
          firstErrorField = document.getElementById('member3.email');
        } else if (newErrors.member3?.phone) {
          firstErrorField = document.getElementById('member3.phone');
        }
        
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstErrorField.focus();
        }
      }, 100);
    }
    
    return Object.keys(newErrors).length === 0;
  };

  const initializePayment = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ teamName: formData.teamName }),
      });

      if (!orderResponse.ok) {
        const error = await orderResponse.json();
        throw new Error(error.error || 'Failed to create order');
      }

      const orderData = await orderResponse.json();

      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "QuizCorp UTPT",
        description: "Registration Fee",
        order_id: orderData.orderId,
        handler: async function (response: RazorpayResponse) {
          try {
            const verifyResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(response),
            });

            if (!verifyResponse.ok) {
              const error = await verifyResponse.json();
              throw new Error(error.error || 'Payment verification failed');
            }

            await handleRegistration();
          } catch (error) {
            console.error('Payment verification error:', error);
            alert('Payment verification failed. Please try again.');
          }
        },
        prefill: {
          name: formData.member1.name,
          email: formData.member1.email,
          contact: formData.member1.phone,
        },
        theme: {
          color: "#4c8693",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment initialization error:', error);
      alert('Failed to initialize payment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegistration = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit registration');
      }
      
      // Reset form
      setFormData({
        teamName: "",
        college: "",
        quizType: "",
        experience: "",
        member1: { ...emptyMember },
        member2: undefined,
        member3: undefined
      });
      setMemberCount(1);

      // Show success modal
      setShowModal(true);
    } catch (error) {
      alert("Registration failed. Please try again later.");
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Handle nested member fields
    if (name.includes('.')) {
      const [member, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [member]: {
          ...(prev[member as keyof FormData] as TeamMember),
          [field]: value
        }
      }));
      
      // Type-safe error handling
      const memberErrors = errors[member as keyof FormErrors];
      if (memberErrors && typeof memberErrors === 'object' && field in memberErrors) {
        setErrors(prev => ({
          ...prev,
          [member]: {
            ...(prev[member as keyof FormErrors] as { [K in keyof TeamMember]?: string }),
            [field]: undefined
          }
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors(prev => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const addMember = () => {
    if (memberCount < 3) {
      setMemberCount(prev => prev + 1);
      if (memberCount === 1) {
        setFormData(prev => ({ ...prev, member2: { ...emptyMember } }));
      } else if (memberCount === 2) {
        setFormData(prev => ({ ...prev, member3: { ...emptyMember } }));
      }
    }
  };

  const removeMember = (memberNum: number) => {
    if (memberNum === 2) {
      setFormData(prev => ({ ...prev, member2: undefined }));
      if (memberCount === 3) {
        setFormData(prev => ({ ...prev, member2: prev.member3, member3: undefined }));
      }
    } else if (memberNum === 3) {
      setFormData(prev => ({ ...prev, member3: undefined }));
    }
    setMemberCount(prev => prev - 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message="Registration successful! We'll contact you soon."
      />
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2 font-lilita-one">
          Register for UTPT
        </h1>
        
        <p className="text-gray-600 text-center mb-8 font-cookie text-xl text-shadow">
          Join Asia's Largest Student-Run Quiz Fest. Fill out the form below to register.
        </p>
        
        <form onSubmit={(e) => { e.preventDefault(); initializePayment(); }} className="space-y-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="teamName" className="block text-gray-700 text-lg mb-2 font-cookie text-xl text-shadow">
                <FaUsers className="inline-block mr-2" /> Team Name
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-black text-base border ${errors.teamName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] font-cookie`}
                placeholder="Enter your team name"
              />
              {errors.teamName && <p className="text-red-500 text-sm mt-1 font-cookie">{errors.teamName}</p>}
            </div>
            
            <div>
              <label htmlFor="quizType" className="block text-gray-700 text-lg mb-2 font-cookie text-xl text-shadow">
                Quiz Type
              </label>
              <div className="relative">
                <select
                  id="quizType"
                  name="quizType"
                  value={formData.quizType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-black text-base border ${errors.quizType ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] bg-white font-cookie appearance-none`}
                >
                  <option value="">Select a quiz type</option>
                  {QUIZ_TYPES.map(quiz => (
                    <option key={quiz.id} value={quiz.id}>
                      {quiz.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-[#f36d21]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              {errors.quizType && <p className="text-red-500 text-sm mt-1 font-cookie">{errors.quizType}</p>}
            </div>
            
            <div>
              <label htmlFor="college" className="block text-gray-700 text-lg mb-2 font-cookie text-xl text-shadow">
                <FaUniversity className="inline-block mr-2" /> College Name
              </label>
              <input
                type="text"
                id="college"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-black text-base border ${errors.college ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] font-cookie`}
                placeholder="Enter your college name"
              />
              {errors.college && <p className="text-red-500 text-sm mt-1 font-cookie">{errors.college}</p>}
            </div>

            {/* Team Members Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-700 font-lilita-one">Team Members</h3>
                {memberCount < 3 && (
                  <button
                    type="button"
                    onClick={addMember}
                    className="text-[#4c8693] hover:text-[#3b697a] font-medium font-cookie text-lg"
                  >
                    + Add Member
                  </button>
                )}
              </div>
              
              {/* Member 1 (Required) */}
              <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                <h4 className="font-medium text-gray-700 font-lilita-one">Team Leader (Required)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="member1.name" className="block text-gray-600 mb-1 font-cookie text-lg text-shadow">Full Name</label>
                    <input
                      type="text"
                      id="member1.name"
                      name="member1.name"
                      value={formData.member1.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-black text-base border ${errors.member1?.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] font-cookie`}
                      placeholder="Enter full name"
                    />
                    {errors.member1?.name && <p className="text-red-500 text-sm mt-1 font-cookie">{errors.member1.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="member1.email" className="block text-gray-600 mb-1 font-cookie text-lg text-shadow">Email</label>
                    <input
                      type="email"
                      id="member1.email"
                      name="member1.email"
                      value={formData.member1.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-black text-base border ${errors.member1?.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] font-cookie`}
                      placeholder="Enter email address"
                    />
                    {errors.member1?.email && <p className="text-red-500 text-sm mt-1 font-cookie">{errors.member1.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="member1.phone" className="block text-gray-600 mb-1 font-cookie text-lg text-shadow">Phone Number</label>
                    <input
                      type="tel"
                      id="member1.phone"
                      name="member1.phone"
                      value={formData.member1.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-black text-base border ${errors.member1?.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] font-cookie`}
                      placeholder="+91"
                    />
                    {errors.member1?.phone && <p className="text-red-500 text-sm mt-1 font-cookie">{errors.member1.phone}</p>}
                  </div>
                </div>
              </div>
              
              {/* Member 2 (Optional) */}
              {memberCount >= 2 && formData.member2 && (
                <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-700 font-lilita-one">Member 2 (Optional)</h4>
                    <button
                      type="button"
                      onClick={() => removeMember(2)}
                      className="text-red-500 hover:text-red-600 font-medium font-cookie text-lg"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="member2.name" className="block text-gray-600 mb-1 font-cookie text-lg text-shadow">Full Name</label>
                      <input
                        type="text"
                        id="member2.name"
                        name="member2.name"
                        value={formData.member2.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-black text-base border ${errors.member2?.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] font-cookie`}
                        placeholder="Enter full name"
                      />
                      {errors.member2?.name && <p className="text-red-500 text-sm mt-1 font-cookie">{errors.member2.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="member2.email" className="block text-gray-600 mb-1 font-cookie text-lg text-shadow">Email</label>
                      <input
                        type="email"
                        id="member2.email"
                        name="member2.email"
                        value={formData.member2.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-black text-base border ${errors.member2?.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] font-cookie`}
                        placeholder="Enter email address"
                      />
                      {errors.member2?.email && <p className="text-red-500 text-sm mt-1 font-cookie">{errors.member2.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="member2.phone" className="block text-gray-600 mb-1 font-cookie text-lg text-shadow">Phone Number</label>
                      <input
                        type="tel"
                        id="member2.phone"
                        name="member2.phone"
                        value={formData.member2.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-black text-base border ${errors.member2?.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] font-cookie`}
                        placeholder="+91"
                      />
                      {errors.member2?.phone && <p className="text-red-500 text-sm mt-1 font-cookie">{errors.member2.phone}</p>}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Member 3 (Optional) */}
              {memberCount >= 3 && formData.member3 && (
                <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-700 font-lilita-one">Member 3 (Optional)</h4>
                    <button
                      type="button"
                      onClick={() => removeMember(3)}
                      className="text-red-500 hover:text-red-600 font-medium font-cookie text-lg"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="member3.name" className="block text-gray-600 mb-1 font-cookie text-lg text-shadow">Full Name</label>
                      <input
                        type="text"
                        id="member3.name"
                        name="member3.name"
                        value={formData.member3.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-black text-base border ${errors.member3?.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] font-cookie`}
                        placeholder="Enter full name"
                      />
                      {errors.member3?.name && <p className="text-red-500 text-sm mt-1 font-cookie">{errors.member3.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="member3.email" className="block text-gray-600 mb-1 font-cookie text-lg text-shadow">Email</label>
                      <input
                        type="email"
                        id="member3.email"
                        name="member3.email"
                        value={formData.member3.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-black text-base border ${errors.member3?.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] font-cookie`}
                        placeholder="Enter email address"
                      />
                      {errors.member3?.email && <p className="text-red-500 text-sm mt-1 font-cookie">{errors.member3.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="member3.phone" className="block text-gray-600 mb-1 font-cookie text-lg text-shadow">Phone Number</label>
                      <input
                        type="tel"
                        id="member3.phone"
                        name="member3.phone"
                        value={formData.member3.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-black text-base border ${errors.member3?.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] font-cookie`}
                        placeholder="+91"
                      />
                      {errors.member3?.phone && <p className="text-red-500 text-sm mt-1 font-cookie">{errors.member3.phone}</p>}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-gray-700 text-lg mb-2 font-cookie text-xl text-shadow">
                Prior Quiz Experience (if any)
              </label>
              <textarea 
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={4} 
                className="w-full px-4 py-3 text-black text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] font-cookie"
                placeholder="Tell us about your team's previous quizzing experience (if any)"
              ></textarea>
            </div>
          </div>
          
          {/* Payment Notice Section */}
          <div className="bg-[#f8f9fa] p-6 rounded-xl border-2 border-[#f36d21]">
            <h2 className="text-2xl font-bold text-[#f36d21] mb-3 font-lilita-one">Registration Fee</h2>
            <p className="text-gray-700 mb-4 font-cookie text-xl text-shadow">
              The registration fee for UTPT 2025 is ₹150 per team. Payment will be processed securely through Razorpay.
            </p>
            <div className="bg-[#f36d21]/10 p-4 rounded-lg mb-4">
              <p className="text-gray-800 font-cookie text-lg text-shadow">
                <span className="font-bold">Note:</span> You will be redirected to complete payment after submitting this form. Registration is only complete after successful payment.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#f36d21] text-white px-8 py-3 text-lg rounded-lg hover:bg-[#d85d18] transition-all duration-300 font-lilita-one ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Processing...' : 'Pay & Register'}
            </button>
          </div>
        </form>
        
        <p className="text-gray-500 text-center mt-8 font-cookie text-lg">
          Already submitted your application? <Link href="/" className="text-[#4c8693] hover:underline">Return to homepage</Link>
        </p>
      </div>
    </div>
  );
} 