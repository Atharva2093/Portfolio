"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const themeColors = {
  accentBlue: "#3b82f6",
  accentPurple: "#8b5cf6",
  accentCyan: "#06b6d4",
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  cardBg: "rgba(26, 26, 26, 0.8)",
  borderSubtle: "rgba(148, 163, 184, 0.2)",
}

const skillsData = [
  // Row 1 - Programming & Core
  {
    name: "React.js",
    icon: "⚛️",
    color: "#61DAFB",
    category: "Frontend",
    level: 95,
  },
  {
    name: "C#",
    icon: "🔷",
    color: "#239120",
    category: "Programming",
    level: 85,
  },
  {
    name: "TypeScript",
    icon: "🔷",
    color: "#3178C6",
    category: "Programming",
    level: 85,
  },
  {
    name: "JavaScript",
    icon: "⚡",
    color: "#F7DF1E",
    category: "Programming",
    level: 90,
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    color: "#06B6D4",
    category: "Frontend",
    level: 95,
  },
  {
    name: "HTML5",
    icon: "🌐",
    color: "#E34F26",
    category: "Frontend",
    level: 95,
  },
  {
    name: "CSS3",
    icon: "🎨",
    color: "#1572B6",
    category: "Frontend",
    level: 90,
  },
  {
    name: "Python",
    icon: "🐍",
    color: "#3776AB",
    category: "Programming",
    level: 80,
  },

  // Row 2 - Backend & Cloud
  {
    name: "Node.js",
    icon: "🟢",
    color: "#339933",
    category: "Backend",
    level: 80,
  },
  {
    name: "Firebase",
    icon: "🔥",
    color: "#FFCA28",
    category: "Backend",
    level: 85,
  },
  {
    name: "Google Cloud",
    icon: "☁️",
    color: "#4285F4",
    category: "Cloud",
    level: 80,
  },
  {
    name: "Avalonia UI",
    icon: "🖥️",
    color: "#663399",
    category: "Desktop",
    level: 75,
  },
  {
    name: "gRPC",
    icon: "🔗",
    color: "#244c5a",
    category: "Backend",
    level: 70,
  },
  {
    name: "SQL",
    icon: "🗄️",
    color: "#336791",
    category: "Database",
    level: 85,
  },
  {
    name: "Git",
    icon: "🔀",
    color: "#F05032",
    category: "Tools",
    level: 85,
  },
  {
    name: "GitHub",
    icon: "🐙",
    color: "#181717",
    category: "Tools",
    level: 90,
  },

  // Row 3 - Design & Media
  {
    name: "Figma",
    icon: "🎯",
    color: "#F24E1E",
    category: "Design",
    level: 90,
  },
  {
    name: "Adobe Premiere",
    icon: "🎬",
    color: "#9999FF",
    category: "Media",
    level: 85,
  },
  {
    name: "Canva",
    icon: "🎨",
    color: "#00C4CC",
    category: "Design",
    level: 90,
  },
  {
    name: "CapCut",
    icon: "✂️",
    color: "#000000",
    category: "Media",
    level: 80,
  },
  {
    name: "Photoshop",
    icon: "🖼️",
    color: "#31A8FF",
    category: "Design",
    level: 75,
  },
  {
    name: "UI/UX Design",
    icon: "🎨",
    color: "#FF6B6B",
    category: "Design",
    level: 90,
  },
  {
    name: "Responsive Design",
    icon: "📱",
    color: "#4ECDC4",
    category: "Frontend",
    level: 95,
  },
  {
    name: "MVVM",
    icon: "🏗️",
    color: "#8E44AD",
    category: "Architecture",
    level: 80,
  },
]

// Split skills into 3 rows for different animations
const row1Skills = skillsData.slice(0, 8)
const row2Skills = skillsData.slice(8, 16)
const row3Skills = skillsData.slice(16, 24)

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="flex-shrink-0 mx-4 group cursor-pointer"
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative professional-card rounded-2xl p-6 w-32 h-32 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-blue-400 subtle-glow">
        {/* Skill Icon */}
        <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">{skill.icon}</div>

        {/* Skill Name */}
        <h3 className="text-white font-semibold text-xs text-center group-hover:text-blue-400 transition-colors leading-tight">
          {skill.name}
        </h3>

        {/* Skill Level Indicator */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

const MovingSkillsRow = ({ skills, direction = "left", speed = 50 }) => {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills]

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? [0, -100 * skills.length] : [-100 * skills.length, 0],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-blue-400 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Technologies and tools I use to build scalable digital experiences
          </p>
          <div className="text-sm text-gray-400 italic">Hover over any skill to pause the animation</div>
        </motion.div>

        {/* Moving Skills Rows */}
        <div className="space-y-8">
          {/* Row 1 - Moving Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MovingSkillsRow skills={row1Skills} direction="left" speed={60} />
          </motion.div>

          {/* Row 2 - Moving Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MovingSkillsRow skills={row2Skills} direction="right" speed={70} />
          </motion.div>

          {/* Row 3 - Moving Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MovingSkillsRow skills={row3Skills} direction="left" speed={65} />
          </motion.div>
        </div>

        {/* Interactive Note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="professional-card inline-flex items-center gap-2 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm">Skills are continuously moving • Hover to pause</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
