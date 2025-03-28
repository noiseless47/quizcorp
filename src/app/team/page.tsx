"use client";

import { useEffect } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  isHead: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Shashank Shenoy",
    role: "Corp Head",
    image: "/team/president.jpg",
    description: "Leading the team with vision and dedication.",
    isHead: true
  },
  {
    id: 2,
    name: "Tanmay Umesh",
    role: "Corp Head",
    image: "/team/vice-president.jpg",
    description: "Coordinating team activities and strategic planning.",
    isHead: true
  },
  {
    id: 3,
    name: "Tarun Bhupathi",
    role: "Treasurer",
    image: "/team/treasurer.jpg",
    description: "Managing finances and ensuring smooth operations.",
    isHead: true
  },
  {
    id: 4,
    name: "Manaswini Kavali",
    role: "Design Head",
    image: "/team/design-head.jpg",
    description: "Crafting visual experiences and brand identity.",
    isHead: true
  },
  // Add more team members here
];

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-8 lg:px-16">
        <div
          className="max-w-7xl mx-auto motion-fade-in"
          style={{
            opacity: 0,
            animation: 'fadeIn 0.6s forwards'
          }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-900 font-jockey-one">Our Team</h1>
          
          {/* Team Heads Section */}
          <div className="mb-16 sm:mb-20 text-center mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12 text-gray-800 font-jockey-one">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 justify-center mx-auto max-w-4xl">
              {teamMembers.filter(member => member.isHead && member.role === "Corp Head").map((member, index) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full mx-auto motion-slide-up"
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                    animation: `slideUp 0.5s ${index * 0.1}s forwards`
                  }}
                >
                  <div className="aspect-w-1 aspect-h-1 flex justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-56 sm:h-72 object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 text-center">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 font-jockey-one">{member.name}</h3>
                    <p className="text-[#4CC3D9] font-medium mb-4 text-lg font-itim">{member.role}</p>
                    <p className="text-gray-600 text-base sm:text-lg font-itim">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Treasurer and Design Head Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 justify-center mx-auto max-w-4xl mt-12">
              {teamMembers.filter(member => member.isHead && (member.role === "Treasurer" || member.role === "Design Head")).map((member, index) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full mx-auto motion-slide-up"
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                    animation: `slideUp 0.5s ${index * 0.1}s forwards`
                  }}
                >
                  <div className="aspect-w-1 aspect-h-1 flex justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-56 sm:h-72 object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 text-center">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 font-jockey-one">{member.name}</h3>
                    <p className="text-[#4CC3D9] font-medium mb-4 text-lg font-itim">{member.role}</p>
                    <p className="text-gray-600 text-base sm:text-lg font-itim">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members Section */}
          <div className="text-center mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12 text-gray-800 font-jockey-one">Team Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center mx-auto">
              {teamMembers.filter(member => !member.isHead).map((member, index) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs w-full motion-slide-up"
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                    animation: `slideUp 0.5s ${index * 0.1}s forwards`
                  }}
                >
                  <div className="aspect-w-1 aspect-h-1 flex justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 font-jockey-one">{member.name}</h3>
                    <p className="text-[#4CC3D9] text-base font-medium mb-2 sm:mb-3 font-itim">{member.role}</p>
                    <p className="text-gray-600 text-sm sm:text-base font-itim">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}