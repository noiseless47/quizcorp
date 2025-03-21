"use client";

import { motion, HTMLMotionProps } from 'framer-motion';

type MotionDivProps = HTMLMotionProps<"div">;
type MotionSpanProps = HTMLMotionProps<"span">;

export default function Logo3D() {
  return (
    <div className="h-[400px] w-full relative flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-lg">
      <div className="flex flex-col items-center">
        <motion.div
          {...({
            initial: { scale: 0.9, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 0.5 },
            className: "mb-4"
          } as MotionDivProps)}
        >
          <motion.div 
            {...({
              className: "w-32 h-32 bg-[#f36d21] rounded-full flex items-center justify-center shadow-lg",
              animate: { rotateY: 360 },
              transition: { 
                duration: 6, 
                repeat: Infinity, 
                ease: "linear"
              }
            } as MotionDivProps)}
          >
            <span className="text-white font-bold text-5xl">RV</span>
          </motion.div>
        </motion.div>
        
        <motion.div
          {...({
            initial: { y: 20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { delay: 0.3, duration: 0.5 },
            className: "text-4xl font-bold text-[#4c8693] font-merriweather"
          } as MotionDivProps)}
        >
          <motion.span 
            {...({
              className: "inline-block",
              whileHover: { scale: 1.1 }
            } as MotionSpanProps)}
          >
            Q
          </motion.span>
          <motion.span 
            {...({
              className: "inline-block",
              whileHover: { scale: 1.1 }
            } as MotionSpanProps)}
          >
            U
          </motion.span>
          <motion.span 
            {...({
              className: "inline-block",
              whileHover: { scale: 1.1 }
            } as MotionSpanProps)}
          >
            I
          </motion.span>
          <motion.span 
            {...({
              className: "inline-block",
              whileHover: { scale: 1.1 }
            } as MotionSpanProps)}
          >
            Z
          </motion.span>
          <motion.span 
            {...({
              className: "inline-block mx-2"
            } as MotionSpanProps)}
          >
            
          </motion.span>
          <motion.span 
            {...({
              className: "inline-block",
              whileHover: { scale: 1.1 }
            } as MotionSpanProps)}
          >
            C
          </motion.span>
          <motion.span 
            {...({
              className: "inline-block",
              whileHover: { scale: 1.1 }
            } as MotionSpanProps)}
          >
            O
          </motion.span>
          <motion.span 
            {...({
              className: "inline-block",
              whileHover: { scale: 1.1 }
            } as MotionSpanProps)}
          >
            R
          </motion.span>
          <motion.span 
            {...({
              className: "inline-block",
              whileHover: { scale: 1.1 }
            } as MotionSpanProps)}
          >
            P
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
} 