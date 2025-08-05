"use client";

import React from "react";
import { motion } from "framer-motion";

interface ArcReactorProps {
  progress: number;
}

export function ArcReactor({ progress }: ArcReactorProps) {
  return (
    <div className="relative">
      {/* Outer Glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Arc Reactor */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))" }}
        >
          {/* Outer Ring */}
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="rgba(6, 182, 212, 0.3)"
            strokeWidth="2"
            strokeDasharray="565.48"
            strokeDashoffset="565.48"
            animate={{
              strokeDashoffset: [565.48, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Middle Ring */}
          <motion.circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="rgba(6, 182, 212, 0.5)"
            strokeWidth="3"
            strokeDasharray="439.82"
            strokeDashoffset="439.82"
            animate={{
              strokeDashoffset: [439.82, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner Ring */}
          <motion.circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="rgba(6, 182, 212, 0.7)"
            strokeWidth="4"
            strokeDasharray="314.16"
            strokeDashoffset="314.16"
            animate={{
              strokeDashoffset: [314.16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Core Circle */}
          <motion.circle
            cx="100"
            cy="100"
            r="30"
            fill="rgba(6, 182, 212, 0.1)"
            stroke="rgba(6, 182, 212, 0.8)"
            strokeWidth="2"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Energy Lines */}
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1="100"
              y1="100"
              x2={100 + Math.cos((i * Math.PI * 2) / 8) * 80}
              y2={100 + Math.sin((i * Math.PI * 2) / 8) * 80}
              stroke="rgba(6, 182, 212, 0.6)"
              strokeWidth="1"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

          {/* Progress Ring */}
          <motion.circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="rgba(6, 182, 212, 0.9)"
            strokeWidth="3"
            strokeDasharray="534.07"
            strokeDashoffset={534.07 - (progress / 100) * 534.07}
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
            animate={{
              strokeDashoffset: 534.07 - (progress / 100) * 534.07,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />

          {/* Center Glow */}
          <motion.circle
            cx="100"
            cy="100"
            r="15"
            fill="rgba(6, 182, 212, 0.8)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Pulse Rings */}
          {[...Array(3)].map((_, i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx="100"
              cy="100"
              r={20 + i * 10}
              fill="none"
              stroke="rgba(6, 182, 212, 0.3)"
              strokeWidth="1"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </svg>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${50 + Math.cos((i * Math.PI * 2) / 12) * 60}%`,
              top: `${50 + Math.sin((i * Math.PI * 2) / 12) * 60}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Energy Field Effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-cyan-400/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
} 