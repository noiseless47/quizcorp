"use client";

import { useEffect, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type MotionDivProps = HTMLMotionProps<"div">;

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  
  useEffect(() => {
    document.body.classList.add('hide-default-cursor');
    
    const mouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    const mouseDown = () => setClicked(true);
    const mouseUp = () => setClicked(false);
    
    const handleLinkHoverEvents = () => {
      const allLinks = document.querySelectorAll('a, button');
      
      allLinks.forEach(link => {
        link.addEventListener('mouseenter', () => setLinkHovered(true));
        link.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };
    
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    handleLinkHoverEvents();
    
    return () => {
      document.body.classList.remove('hide-default-cursor');
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
    };
  }, []);
  
  const cursorVariants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      height: 32,
      width: 32
    },
    link: {
      x: position.x - 32,
      y: position.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(255, 125, 26, 0.1)",
      mixBlendMode: "difference" as const
    }
  };
  
  return (
    <>
      <motion.div
        {...({
          className: "hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]",
          style: {
            backgroundColor: clicked ? "rgba(243, 109, 33, 0.5)" : "rgba(243, 109, 33, 0.3)",
            border: "2px solid #f36d21"
          },
          variants: cursorVariants,
          animate: linkHovered ? "link" : "default",
          transition: { type: "spring", stiffness: 500, damping: 28 }
        } as MotionDivProps)}
      >
        <div className="w-full h-full bg-white rounded-full"></div>
      </motion.div>
      <motion.div
        {...({
          className: "hidden md:block fixed top-0 left-0 w-2 h-2 rounded-full bg-[#f36d21] pointer-events-none z-[9999]",
          variants: cursorVariants,
          animate: linkHovered ? "link" : "default",
          transition: { type: "spring", stiffness: 500, damping: 28 }
        } as MotionDivProps)}
      />
    </>
  );
} 