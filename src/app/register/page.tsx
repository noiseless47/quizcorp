"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaUsers } from 'react-icons/fa6';
import { FaUniversity } from 'react-icons/fa';

interface TeamMember {
  name: string;
  email: string;
  phone: string;
}

interface FormData {
  teamName: string;
  college: string;
  branch: string;
  quizType: string;
  experience: string;
  member1: TeamMember;
  member2?: TeamMember;
  member3?: TeamMember;
}

interface FormErrors {
  teamName?: string;
  college?: string;
  branch?: string;
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

const QUIZ_TYPES = [
  { id: 'general', name: 'General Quiz' },
  { id: 'technical', name: 'Technical Quiz' },
  { id: 'sports', name: 'Sports Quiz' },
  { id: 'entertainment', name: 'Entertainment Quiz' },
  { id: 'business', name: 'Business Quiz' },
  { id: 'science', name: 'Science Quiz' }
];

const emptyMember = { name: '', email: '', phone: '' };

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    college: "",
    branch: "",
    quizType: "",
    experience: "",
    member1: { ...emptyMember },
    member2: undefined,
    member3: undefined
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [memberCount, setMemberCount] = useState(1);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.teamName.trim()) {
      newErrors.teamName = "Team name is required";
    }

    if (!formData.college.trim()) {
      newErrors.college = "College name is required";
    }

    if (!formData.branch.trim()) {
      newErrors.branch = "Branch is required";
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
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        teamName: "",
        college: "",
        branch: "",
        quizType: "",
        experience: "",
        member1: { ...emptyMember },
        member2: undefined,
        member3: undefined
      });
      setMemberCount(1);

      // Show success message
      alert("Registration successful! We'll contact you soon.");
    } catch (error) {
      alert("Something went wrong. Please try again later.");
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
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Register for UTPT
        </h1>
        
        <p className="text-gray-600 text-center mb-8">
          Join Asia's Largest Student-Run Quiz Fest. Fill out the form below to register.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="teamName" className="block text-gray-700 text-lg mb-2">
                <FaUsers className="inline-block mr-2" /> Team Name
              </label>
              <input 
                type="text" 
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-black text-base border ${errors.teamName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693]`}
                placeholder="Enter your team name"
              />
              {errors.teamName && <p className="text-red-500 text-sm mt-1">{errors.teamName}</p>}
            </div>

            <div>
              <label htmlFor="quizType" className="block text-gray-700 text-lg mb-2">
                Quiz Type
              </label>
              <select
                id="quizType"
                name="quizType"
                value={formData.quizType}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-black text-base border ${errors.quizType ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693] bg-white`}
              >
                <option value="">Select a quiz type</option>
                {QUIZ_TYPES.map(quiz => (
                  <option key={quiz.id} value={quiz.id}>
                    {quiz.name}
                  </option>
                ))}
              </select>
              {errors.quizType && <p className="text-red-500 text-sm mt-1">{errors.quizType}</p>}
            </div>

            <div>
              <label htmlFor="college" className="block text-gray-700 text-lg mb-2">
                <FaUniversity className="inline-block mr-2" /> College Name
              </label>
              <input 
                type="text" 
                id="college"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-black text-base border ${errors.college ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693]`}
                placeholder="Enter your college name"
              />
              {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
            </div>
            
            <div>
              <label htmlFor="branch" className="block text-gray-700 text-lg mb-2">
                <FaGraduationCap className="inline-block mr-2" /> Branch
              </label>
              <input 
                type="text" 
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-black text-base border ${errors.branch ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693]`}
                placeholder="Enter your branch"
              />
              {errors.branch && <p className="text-red-500 text-sm mt-1">{errors.branch}</p>}
            </div>

            {/* Team Members Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-700">Team Members</h3>
                {memberCount < 3 && (
                  <button
                    type="button"
                    onClick={addMember}
                    className="text-[#4c8693] hover:text-[#3b697a] font-medium"
                  >
                    + Add Member
                  </button>
                )}
              </div>

              {/* Member 1 (Required) */}
              <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                <h4 className="font-medium text-gray-700">Team Leader (Required)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="member1.name" className="block text-gray-600 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="member1.name"
                      name="member1.name"
                      value={formData.member1.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-black text-base border ${errors.member1?.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693]`}
                      placeholder="Enter full name"
                    />
                    {errors.member1?.name && <p className="text-red-500 text-sm mt-1">{errors.member1.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="member1.email" className="block text-gray-600 mb-1">Email</label>
                    <input
                      type="email"
                      id="member1.email"
                      name="member1.email"
                      value={formData.member1.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-black text-base border ${errors.member1?.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693]`}
                      placeholder="Enter email address"
                    />
                    {errors.member1?.email && <p className="text-red-500 text-sm mt-1">{errors.member1.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="member1.phone" className="block text-gray-600 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="member1.phone"
                      name="member1.phone"
                      value={formData.member1.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-black text-base border ${errors.member1?.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693]`}
                      placeholder="+91"
                    />
                    {errors.member1?.phone && <p className="text-red-500 text-sm mt-1">{errors.member1.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Member 2 (Optional) */}
              {memberCount >= 2 && formData.member2 && (
                <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-700">Member 2 (Optional)</h4>
                    <button
                      type="button"
                      onClick={() => removeMember(2)}
                      className="text-red-500 hover:text-red-600 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="member2.name" className="block text-gray-600 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="member2.name"
                        name="member2.name"
                        value={formData.member2.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-black text-base border ${errors.member2?.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693]`}
                        placeholder="Enter full name"
                      />
                      {errors.member2?.name && <p className="text-red-500 text-sm mt-1">{errors.member2.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="member2.email" className="block text-gray-600 mb-1">Email</label>
                      <input
                        type="email"
                        id="member2.email"
                        name="member2.email"
                        value={formData.member2.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-black text-base border ${errors.member2?.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693]`}
                        placeholder="Enter email address"
                      />
                      {errors.member2?.email && <p className="text-red-500 text-sm mt-1">{errors.member2.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="member2.phone" className="block text-gray-600 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="member2.phone"
                        name="member2.phone"
                        value={formData.member2.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-black text-base border ${errors.member2?.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693]`}
                        placeholder="+91"
                      />
                      {errors.member2?.phone && <p className="text-red-500 text-sm mt-1">{errors.member2.phone}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Member 3 (Optional) */}
              {memberCount >= 3 && formData.member3 && (
                <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-700">Member 3 (Optional)</h4>
                    <button
                      type="button"
                      onClick={() => removeMember(3)}
                      className="text-red-500 hover:text-red-600 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="member3.name" className="block text-gray-600 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="member3.name"
                        name="member3.name"
                        value={formData.member3.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-black text-base border ${errors.member3?.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693]`}
                        placeholder="Enter full name"
                      />
                      {errors.member3?.name && <p className="text-red-500 text-sm mt-1">{errors.member3.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="member3.email" className="block text-gray-600 mb-1">Email</label>
                      <input
                        type="email"
                        id="member3.email"
                        name="member3.email"
                        value={formData.member3.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-black text-base border ${errors.member3?.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693]`}
                        placeholder="Enter email address"
                      />
                      {errors.member3?.email && <p className="text-red-500 text-sm mt-1">{errors.member3.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="member3.phone" className="block text-gray-600 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="member3.phone"
                        name="member3.phone"
                        value={formData.member3.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-black text-base border ${errors.member3?.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693]`}
                        placeholder="+91"
                      />
                      {errors.member3?.phone && <p className="text-red-500 text-sm mt-1">{errors.member3.phone}</p>}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-gray-700 text-lg mb-2">
                Prior Quiz Experience (if any)
              </label>
              <textarea 
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={4} 
                className="w-full px-4 py-3 text-black text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4c8693]"
                placeholder="Tell us about your team's previous quizzing experience (if any)"
              ></textarea>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`bg-[#f36d21] text-white px-8 py-3 text-lg rounded-lg hover:bg-[#d85d18] transition-all duration-300 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
        
        <p className="text-gray-500 text-sm text-center mt-8">
          Already submitted your application? <Link href="/" className="text-[#4c8693] hover:underline">Return to homepage</Link>
        </p>
      </div>
    </div>
  );
} 