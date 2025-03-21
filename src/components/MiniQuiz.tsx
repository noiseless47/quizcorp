"use client";

import { useState } from 'react';
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion';

type MotionButtonProps = HTMLMotionProps<"button">;
type MotionDivProps = HTMLMotionProps<"div">;

interface Question {
  text: string;
  options: string[];
  correctAnswer: number;
}

export default function MiniQuiz() {
  const questions: Question[] = [
    {
      text: "Which year was UTPT first organized?",
      options: ["2000", "2002", "2004", "2006"],
      correctAnswer: 2
    },
    {
      text: "What does UTPT stand for?",
      options: ["Universal Talent Placement Test", "Under The Peepal Tree", "Ultimate Trivia Performance Tournament", "University Team Puzzle Trial"],
      correctAnswer: 1
    },
    {
      text: "Where is RV College of Engineering located?",
      options: ["Mumbai", "Delhi", "Chennai", "Bangalore"],
      correctAnswer: 3
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    
    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setQuizCompleted(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-gray-900 font-merriweather text-center">Test Your Knowledge</h3>
      
      {!quizCompleted ? (
        <div className="relative">
          <div className="mb-6">
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#f36d21] to-[#4c8693]" 
                style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg mb-4 font-merriweather">{questions[currentQuestion].text}</p>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    {...({
                      key: index,
                      onClick: () => handleOptionSelect(index),
                      className: `w-full p-3 text-left rounded-lg transition-all ${
                        selectedOption === null
                          ? 'bg-gray-100 hover:bg-gray-200'
                          : selectedOption === index
                            ? index === questions[currentQuestion].correctAnswer
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                            : 'bg-gray-100'
                      }`,
                      disabled: selectedOption !== null,
                      whileHover: selectedOption === null ? { scale: 1.02 } : {},
                      whileTap: selectedOption === null ? { scale: 0.98 } : {}
                    } as MotionButtonProps)}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <motion.div 
          {...({
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            className: "text-center py-4"
          } as MotionDivProps)}
        >
          <h4 className="text-xl mb-2 font-merriweather">Quiz Complete!</h4>
          <p className="text-2xl font-bold mb-4 font-merriweather">
            Your Score: <span className="text-orange-600">{score}</span>/{questions.length}
          </p>
          <p className="mb-6">
            {score === questions.length 
              ? "Perfect score! You're a true quizzing champion!" 
              : score >= questions.length / 2 
                ? "Great job! You know your stuff."
                : "Keep learning! Try again to improve your score."}
          </p>
          <motion.button
            {...({
              onClick: resetQuiz,
              className: "bg-[#4CC3D9] text-white px-6 py-2 rounded-full hover:bg-[#3EB1C8] transition-all",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 }
            } as MotionButtonProps)}
          >
            Try Again
          </motion.button>
        </motion.div>
      )}
    </div>
  );
} 