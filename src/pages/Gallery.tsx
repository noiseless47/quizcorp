import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  year: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/gallery/photo1.jpg",
    title: "UTPT Finals 2024",
    category: "UTPT",
    year: "2024"
  },
  {
    id: 2,
    src: "/gallery/photo2.jpg",
    title: "Quiz Night",
    category: "Club Events",
    year: "2024"
  },
  {
    id: 3,
    src: "/gallery/photo3.jpg",
    title: "National Competition",
    category: "Competitions",
    year: "2023"
  },
];

const categories = ["All", "UTPT", "Club Events", "Competitions"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = galleryItems.filter(item => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-[#0B1121] py-32 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gabarito-bold">Our <span className="text-[#f36d21]">Gallery</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto gabarito-regular">
            Capturing moments of brilliance, camaraderie, and intellectual intensity.
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <div className="mb-20 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-2 rounded-full border transition-all duration-300 gabarito-bold ${
                selectedCategory === category
                  ? 'bg-[#f36d21] border-[#f36d21] text-white shadow-xl shadow-[#f36d21]/20'
                  : 'bg-transparent border-white/20 text-gray-500 hover:border-white/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square rounded-2xl overflow-hidden group border border-white/10"
              >
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                   <span className="text-white/10 font-bold">{item.title} Placeholder</span>
                </div>
                {/* Image will be here later */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-[#f36d21] text-xs font-bold uppercase tracking-widest mb-2 block">{item.category}</span>
                  <h3 className="text-2xl font-bold text-white gabarito-bold">{item.title}</h3>
                  <p className="text-gray-400 text-sm gabarito-regular">{item.year}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500 gabarito-bold">
            No memories found in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}
