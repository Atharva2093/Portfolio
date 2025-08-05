"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArcReactor } from "./arc-reactor";

interface LoaderProps {
  onLoadingComplete: () => void;
  skipLoader?: boolean;
}

export function Loader({ onLoadingComplete, skipLoader = false }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check if user has visited before
    const visited = localStorage.getItem("portfolio-visited");
    if (visited) {
      setHasVisited(true);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Skip loader if user has visited before or skipLoader is true
    if (hasVisited || skipLoader) {
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
      return;
    }

    // Start countdown animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 3 + 1; // Random increment between 1-4
        
        if (newProgress >= 90) {
          clearInterval(interval);
          
          // Start fade out animation
          setTimeout(() => {
            setIsVisible(false);
            
            // Complete loading after fade out
            setTimeout(() => {
              localStorage.setItem("portfolio-visited", "true");
              onLoadingComplete();
            }, 1000);
          }, 500);
          
          return 100;
        }
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete, skipLoader, hasVisited, isClient]);

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return null;
  }

  // Skip loader if user has visited before or skipLoader is true
  if (hasVisited || skipLoader) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            {/* Scan Lines */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-px bg-cyan-400/30"
                  style={{ top: `${i * 5}%` }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>

            {/* Particles */}
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Glitch Effect */}
            <motion.div
              className="absolute inset-0 bg-cyan-400/5"
              animate={{
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8 px-4">
            {/* Arc Reactor */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <ArcReactor progress={progress} />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center space-y-4"
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 tracking-wider"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(6, 182, 212, 0.5)",
                    "0 0 20px rgba(6, 182, 212, 0.8)",
                    "0 0 10px rgba(6, 182, 212, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                SYSTEM INITIALIZATION
              </motion.h2>

              {/* Progress Bar */}
              <div className="w-64 sm:w-80 md:w-96 h-2 bg-gray-800 rounded-full overflow-hidden border border-cyan-400/30">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              {/* Progress Percentage */}
              <motion.div
                className="text-cyan-400 font-mono text-lg sm:text-xl md:text-2xl"
                key={Math.floor(progress)}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {Math.floor(progress)}%
              </motion.div>

              {/* Status Text */}
              <motion.p
                className="text-gray-400 text-sm sm:text-base"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {progress < 30 && "Initializing core systems..."}
                {progress >= 30 && progress < 60 && "Loading neural networks..."}
                {progress >= 60 && progress < 90 && "Establishing connections..."}
                {progress >= 90 && "System ready..."}
              </motion.p>
            </motion.div>

            {/* Skip Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              whileHover={{ opacity: 1 }}
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  localStorage.setItem("portfolio-visited", "true");
                  onLoadingComplete();
                }, 500);
              }}
              className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 text-sm underline touch-target"
            >
              Skip Loading
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 