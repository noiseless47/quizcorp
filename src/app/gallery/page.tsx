"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Gallery item interface
interface GalleryItem {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
  year: string;
}

// Sample gallery data - replace with your actual photos and descriptions
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/gallery/utpt2023-1.jpg",
    title: "UTPT 2023 Finals",
    description: "The nail-biting finale of UTPT 2023, where teams battled it out for the championship.",
    category: "UTPT",
    year: "2023"
  },
  {
    id: 2,
    src: "/gallery/utpt2023-2.jpg",
    title: "Opening Ceremony",
    description: "The grand opening ceremony of UTPT 2023, featuring distinguished guests and participants.",
    category: "UTPT",
    year: "2023"
  },
  // Add more gallery items here
];

// Categories for filtering
const categories = ["All", "UTPT", "Club Events", "Workshops", "Competitions"];
const years = ["All", "2024", "2023", "2022", "2021", "2020"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Filter gallery items based on selected category and year
  const filteredItems = galleryItems.filter(item => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const yearMatch = selectedYear === "All" || item.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-32">
      <div className="container mx-auto px-6 md:px-8 lg:px-16 max-w-7xl">
        {/* Page Title */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white text-center mb-8 font-jockey-one"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Gallery
        </motion.h1>
        
        {/* Filters */}
        <div className="mb-12 space-y-4">
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-2xl font-itim text-shadow ${
                  selectedCategory === category
                    ? 'bg-[#f36d21] text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Year Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-2xl font-itim text-shadow ${
                  selectedYear === year
                    ? 'bg-[#4c8693] text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {year}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative aspect-square rounded-xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.h3 
                    className="text-2xl font-bold mb-3 font-jockey-one"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: hoveredItem === item.id ? 0 : 20, opacity: hoveredItem === item.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-2xl text-gray-200 font-itim text-shadow"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: hoveredItem === item.id ? 0 : 20, opacity: hoveredItem === item.id ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div 
            className="text-center text-gray-400 py-12 font-itim text-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-3xl">No photos found for the selected filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
