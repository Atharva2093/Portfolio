"use client"

import { motion, AnimatePresence } from "framer-motion"
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
  // Programming Languages & Core
  {
    name: "TypeScript",
    icon: "🔷",
    color: "#3178C6",
    category: "Programming",
    level: 80,
    description: "Type-safe development for scalable applications",
    projects: ["Full-stack apps", "API Development"],
    proficiency: "Learner"
  },
  {
    name: "JavaScript",
    icon: "⚡",
    color: "#F7DF1E",
    category: "Programming",
    level: 70,
    description: "Core language for web development and dynamic interactions",
    projects: ["Interactive UIs", "Web Applications"],
    proficiency: "Intermediate"
  },
  {
    name: "Python",
    icon: "🐍",
    color: "#3776AB",
    category: "Programming",
    level: 80,
    description: "Backend development and automation scripting",
    projects: ["Data Processing", "Automation"],
    proficiency: "Advanced"
  },
  {
    name: "C#",
    icon: "🟦",
    color: "#239120",
    category: "Programming",
    level: 80,
    description: "Desktop application development with Avalonia UI framework",
    projects: ["ERP Systems", "Desktop Apps"],
    proficiency: "Advanced"
  },

  // Frontend
  {
    name: "React.js",
    icon: "⚛️",
    color: "#61DAFB",
    category: "Frontend",
    level: 75,
    description: "2+ years experience building responsive UIs and state management",
    projects: ["Neon Genesis", "Portfolio Website"],
    proficiency: "Advanced"
  },
  {
    name: "Tailwind CSS",
    icon: "💅",
    color: "#06B6D4",
    category: "Frontend",
    level: 80,
    description: "Utility-first CSS framework for rapid UI development",
    projects: ["Modern Websites", "Component Libraries"],
    proficiency: "Expert"
  },
  {
    name: "Responsive Design",
    icon: "📱",
    color: "#4ECDC4",
    category: "Frontend",
    level: 80,
    description: "Cross-device compatibility and mobile-first design",
    projects: ["Mobile Apps", "Web Applications"],
    proficiency: "Expert"
  },
  {
    name: "HTML5",
    icon: "🌐",
    color: "#E34F26",
    category: "Frontend",
    level: 80,
    description: "Semantic markup and modern web standards",
    projects: ["Web Applications", "Landing Pages"],
    proficiency: "Expert"
  },
  {
    name: "CSS3",
    icon: "🧵",
    color: "#1572B6",
    category: "Frontend",
    level: 80,
    description: "Advanced styling, animations, and responsive design",
    projects: ["Custom Designs", "Animations"],
    proficiency: "Advanced"
  },

  // Backend
  {
    name: "Node.js",
    icon: "🟢",
    color: "#339933",
    category: "Backend",
    level: 80,
    description: "Server-side JavaScript for scalable applications",
    projects: ["APIs", "Real-time apps"],
    proficiency: "Intermediate"
  },
  {
    name: "gRPC",
    icon: "🔗",
    color: "#244c5a",
    category: "Backend",
    level: 70,
    description: "High-performance RPC framework for microservices",
    projects: ["API Communication", "Microservices"],
    proficiency: "Intermediate"
  },
  {
    name: "Firebase",
    icon: "🔥",
    color: "#FFCA28",
    category: "Backend",
    level: 80,
    description: "Cloud services for authentication, database, and hosting",
    projects: ["Web Apps", "Mobile Backend"],
    proficiency: "Advanced"
  },

  // Database
  {
    name: "SQL",
    icon: "🗄️",
    color: "#336791",
    category: "Database",
    level: 80,
    description: "Database design and query optimization",
    projects: ["Data Management", "ERP Systems"],
    proficiency: "Advanced"
  },

  // Cloud
  {
    name: "Google Cloud",
    icon: "☁️",
    color: "#4285F4",
    category: "Cloud",
    level: 80,
    description: "Cloud infrastructure and deployment solutions",
    projects: ["App Deployment", "Cloud Services"],
    proficiency: "Intermediate"
  },

  // Desktop
  {
    name: "Avalonia UI",
    icon: "🖥️",
    color: "#663399",
    category: "Desktop",
    level: 75,
    description: "Cross-platform desktop application development",
    projects: ["Desktop Apps", "Business Software"],
    proficiency: "Intermediate"
  },

  // Architecture
  {
    name: "MVVM",
    icon: "🏗️",
    color: "#8E44AD",
    category: "Architecture",
    level: 80,
    description: "Architectural pattern for scalable applications",
    projects: ["Enterprise Apps", "Desktop Software"],
    proficiency: "Advanced"
  },

  // Tools
  {
    name: "Git",
    icon: "🔀",
    color: "#F05032",
    category: "Tools",
    level: 80,
    description: "Version control and collaborative development",
    projects: ["Team Development", "Code Management"],
    proficiency: "Advanced"
  },
  {
    name: "GitHub",
    icon: "🐙",
    color: "#181717",
    category: "Tools",
    level: 80,
    description: "Code hosting, collaboration, and project management",
    projects: ["Open Source", "Team Projects"],
    proficiency: "Expert"
  },

  // Design
  {
    name: "UI/UX Design",
    icon: "🧑‍🎨",
    color: "#FF6B6B",
    category: "Design",
    level: 80,
    description: "User experience and interface design",
    projects: ["App Interfaces", "User Research"],
    proficiency: "Advanced"
  },
  {
    name: "Figma",
    icon: "🎯",
    color: "#F24E1E",
    category: "Design",
    level: 80,
    description: "UI/UX design and prototyping",
    projects: ["App Designs", "Wireframes"],
    proficiency: "Advanced"
  },
  {
    name: "Canva",
    icon: "📐",
    color: "#00C4CC",
    category: "Design",
    level: 80,
    description: "Graphic design and visual content creation",
    projects: ["Social Media", "Marketing Materials"],
    proficiency: "Advanced"
  },
  {
    name: "Photoshop",
    icon: "🖼️",
    color: "#31A8FF",
    category: "Design",
    level: 75,
    description: "Image editing and graphic design",
    projects: ["Photo Editing", "Graphics"],
    proficiency: "Intermediate"
  },

  // Media
  {
    name: "Adobe Premiere",
    icon: "🎬",
    color: "#9999FF",
    category: "Media",
    level: 80,
    description: "Video editing and post-production",
    projects: ["Content Creation", "Video Projects"],
    proficiency: "Advanced"
  },
  {
    name: "CapCut",
    icon: "✂️",
    color: "#000000",
    category: "Media",
    level: 80,
    description: "Video editing for social media content",
    projects: ["Short Videos", "Content Creation"],
    proficiency: "Intermediate"
  }
];

// Split skills into 3 rows for different animations
const row1Skills = skillsData.slice(0, 8)
const row2Skills = skillsData.slice(8, 16)
const row3Skills = skillsData.slice(16, 24)

const SkillCard = ({ skill, index, onClick }: { skill: any, index: number, onClick: (skill: any) => void }) => {
  return (
    <motion.div
      className="flex-shrink-0 mx-1 sm:mx-2 lg:mx-4 group cursor-pointer touch-target"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => onClick(skill)}
    >
      <div className="relative professional-card rounded-2xl p-3 sm:p-4 lg:p-6 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-blue-400 subtle-glow">
        {/* Skill Icon */}
        <div className="text-lg sm:text-2xl lg:text-4xl mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-110">{skill.icon}</div>

        {/* Skill Name */}
        <h3 className="text-white font-semibold text-xs sm:text-sm text-center group-hover:text-blue-400 transition-colors leading-tight">
          {skill.name}
        </h3>

        {/* Skill Level Indicator */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 lg:w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
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

const MovingSkillsRow = ({ skills, direction = "left", speed = 50, onSkillClick }: { skills: any[], direction?: string, speed?: number, onSkillClick: (skill: any) => void }) => {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills]

  return (
    <div
      className="relative overflow-hidden py-2 sm:py-4"
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
          <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} onClick={onSkillClick} />
        ))}
      </motion.div>
    </div>
  )
}

// Skill Modal Component
const SkillModal = ({ skill, isOpen, onClose }: { skill: any, isOpen: boolean, onClose: () => void }) => {
  if (!skill || !isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <motion.div
          className="relative bg-gray-900/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-md w-full border border-gray-700 max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl">{skill.icon}</div>
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{skill.name}</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400">{skill.category}</p>
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm lg:text-base text-gray-300">{skill.description}</p>
            
            <div>
              <h4 className="font-semibold text-white mb-2 text-xs sm:text-sm lg:text-base">Proficiency Level</h4>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400">{skill.level}%</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">{skill.proficiency}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2 text-xs sm:text-sm lg:text-base">Key Projects</h4>
              <div className="flex flex-wrap gap-2">
                {skill.projects.map((project: string, index: number) => (
                  <span 
                    key={index}
                    className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-400 hover:text-white transition-colors touch-target p-2 min-h-[44px] min-w-[44px]"
            aria-label="Close modal"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)

  const handleSkillClick = (skill: any) => {
    setSelectedSkill(skill)
    setShowModal(true)
  }

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-blue-400 mb-3">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-3 sm:mb-4 lg:mb-6 px-4">
            Technologies and tools I use to build scalable digital experiences
          </p>
          <p className="text-xs sm:text-sm md:text-base text-blue-300 text-center mb-4 sm:mb-6 px-4">
            Click any skill icon to see what I use it for and how good I am with it
          </p>
        </motion.div>

        {/* Enhanced Grid View with Click Interactions */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Row 1 - Moving Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MovingSkillsRow skills={row1Skills} direction="left" speed={60} onSkillClick={handleSkillClick} />
          </motion.div>

          {/* Row 2 - Moving Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MovingSkillsRow skills={row2Skills} direction="right" speed={70} onSkillClick={handleSkillClick} />
          </motion.div>

          {/* Row 3 - Moving Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MovingSkillsRow skills={row3Skills} direction="left" speed={65} onSkillClick={handleSkillClick} />
          </motion.div>
        </div>
      </div>

      {/* Skill Modal */}
      <SkillModal 
        skill={selectedSkill} 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </section>
  )
}
