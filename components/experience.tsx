"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Calendar, MapPin, Building, Users, Briefcase, Zap, Target, ArrowRight, Award, TrendingUp } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
}

export function Experience() {
  const [selectedExp, setSelectedExp] = useState(0)
  const [viewMode, setViewMode] = useState("grid") // "grid" or "timeline"

  const experiences = [
    {
      title: "ERP Developer Intern",
      company: "Praktan Technologies",
      location: "Nashik, Maharashtra",
      period: "Oct 2024 - 2025",
      type: "On-site",
      description:
        "Developed ERP modules including User Management and Purchase System. Built reactive UI using Avalonia and implemented real-time sync with gRPC services. Improved system performance significantly.",
      technologies: ["C#", "Avalonia UI", "gRPC", "MVVM", "ERP Systems"],
      icon: <Building className="h-6 w-6" />,
      current: false,
      color: "#3b82f6",
      achievements: ["Developed ERP Modules", "Built reactive UI using Avalonia", "Implemented real-time sync with gRPC", "Improved system performance"],
      impact: "High",
      skills: ["Backend Development", "System Architecture", "Team Collaboration"],
      logo: "🏢",
    },
    {
      title: "UI/UX Specialist",
      company: "Neon Genesis",
      location: "Remote/Hybrid",
      period: "Oct 2024 - Present",
      type: "Hybrid",
      description:
        "Building responsive UIs and developing full-stack hackathon projects. Key projects include BrainBuddy AI mental health app and Neon Genesis portfolio platform.",
      technologies: ["React", "TypeScript", "Next.js", "Firebase", "Tailwind CSS"],
      icon: <Zap className="h-6 w-6" />,
      current: true,
      color: "#06b6d4",
      achievements: ["Built responsive UIs", "Developed full-stack hackathon projects", "Worked on BrainBuddy & Portfolio"],
      impact: "High",
      skills: ["Frontend Development", "UI/UX Design", "Full-stack Development"],
      logo: "⚡",
    },
    {
      title: "Google Student Ambassador (GSA)",
      company: "Google Developer Programs",
      location: "Campus Representative",
      period: "Present",
      type: "Remote",
      description:
        "Representing Google programs on campus, promoting developer communities, and organizing tech events to connect students with Google technologies.",
      technologies: ["Community Building", "Event Management", "Developer Advocacy"],
      icon: <Award className="h-6 w-6" />,
      current: true,
      color: "#4285f4",
      achievements: ["Representing Google programs on campus", "Promoting developer communities"],
      impact: "Medium",
      skills: ["Community Leadership", "Public Speaking", "Event Management"],
      logo: "🌟",
    },
    {
      title: "GDG On Campus - Co-Organizer",
      company: "Google Developer Groups",
      location: "MCOERC, Nashik",
      period: "Present",
      type: "On-site",
      description:
        "Organizing tech events, workshops, and managing the developer community at campus. Facilitating learning opportunities and connecting students with industry experts.",
      technologies: ["Event Planning", "Community Management", "Technical Workshops"],
      icon: <Users className="h-6 w-6" />,
      current: true,
      color: "#8b5cf6",
      achievements: ["Organizing tech events & workshops", "Managing developer community"],
      impact: "High",
      skills: ["Leadership", "Event Organization", "Community Building"],
      logo: "👥",
    },
    {
      title: "Member",
      company: "Matoshri Technical Event Cell",
      location: "Nashik, Maharashtra",
      period: "Present",
      type: "On-site",
      description:
        "Contributing to media production and event coverage for college technical events. Handling video editing and design support for various initiatives.",
      technologies: ["Adobe Premiere Pro", "CapCut", "Canva", "Media Production"],
      icon: <Target className="h-6 w-6" />,
      current: true,
      color: "#f59e0b",
      achievements: ["Media production & event coverage", "Video editing & design support"],
      impact: "Medium",
      skills: ["Media Production", "Video Editing", "Creative Design"],
      logo: "🎥",
    },
    {
      title: "Member",
      company: "Matoshri E-Cell",
      location: "Nashik, Maharashtra",
      period: "Present",
      type: "On-site",
      description:
        "Promoting innovation and startup culture on campus by organizing entrepreneurship workshops. Represented college at E-Cell Summit 2025, IIT Bombay.",
      technologies: ["Event Coordination", "Startup Ecosystem", "Innovation"],
      icon: <TrendingUp className="h-6 w-6" />,
      current: true,
      color: "#10b981",
      achievements: ["Organized entrepreneurship workshops", "Represented at IIT Bombay Summit"],
      impact: "Medium",
      skills: ["Innovation", "Public Speaking", "Entrepreneurship"],
      logo: "🚀",
    },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "text-green-400 bg-green-400/10 border-green-400/20"
      case "Medium":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
      default:
        return "text-blue-400 bg-blue-400/10 border-blue-400/20"
    }
  }

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-blue-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-cyan-400 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-purple-400 mb-4">Experience</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8">
            Professional journey building digital experiences and leading creative initiatives
          </p>
          
          {/* View Mode Toggle */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-sm mx-auto">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 sm:px-6 py-3 sm:py-2 rounded-full transition-all text-sm sm:text-base font-medium min-h-[48px] sm:min-h-auto flex items-center justify-center ${
                viewMode === "grid"
                  ? "bg-purple-500 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              📋 Grid View
            </button>
            <button
              onClick={() => setViewMode("timeline")}
              className={`px-4 sm:px-6 py-3 sm:py-2 rounded-full transition-all text-sm sm:text-base font-medium min-h-[48px] sm:min-h-auto flex items-center justify-center ${
                viewMode === "timeline"
                  ? "bg-purple-500 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              📅 Timeline View
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            // Enhanced Grid View
            <motion.div
              key="grid"
              className="max-w-7xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    variants={cardVariants}
                    whileHover="hover"
                    className="group cursor-pointer touch-target"
                    onClick={() => setSelectedExp(index)}
                  >
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-purple-400/50 transition-all duration-300 h-full relative overflow-hidden">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Header */}
                      <div className="mb-4 sm:mb-6 relative z-10">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3">
                          <div className="text-2xl sm:text-3xl lg:text-4xl flex-shrink-0">{exp.logo}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                              <h3 className="text-lg sm:text-xl font-bold text-white break-words">{exp.title}</h3>
                              {exp.current && (
                                <span className="bg-green-500 text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium animate-pulse self-start">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-base sm:text-lg font-semibold mb-1 break-words" style={{ color: exp.color }}>
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${getImpactColor(exp.impact)}`}>
                            {exp.impact} Impact
                          </div>
                        </div>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 relative z-10">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
                          {exp.type}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 relative z-10 text-sm sm:text-base">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4 sm:mb-6 relative z-10">
                        <h4 className="text-white font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                          <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1 sm:space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="relative z-10">
                        <h4 className="text-white font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                          <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-800 text-gray-300 text-xs px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-full border border-gray-700 hover:border-purple-400 transition-colors whitespace-nowrap"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-purple-500/20 text-purple-300 text-xs px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-full border border-purple-400/30 whitespace-nowrap"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="h-5 w-5 text-purple-400" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            // Timeline View
            <motion.div
              key="timeline"
              className="max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"></div>
                
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="relative mb-8 sm:mb-12 last:mb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 sm:left-6 top-4 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-4 border-white bg-purple-500 shadow-lg"></div>
                    
                    {/* Content Card */}
                    <div className="ml-12 sm:ml-16 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-purple-400/50 transition-all duration-300">
                      <div className="mb-3 sm:mb-4">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3">
                          <div className="text-2xl sm:text-3xl flex-shrink-0">{exp.logo}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                              <h3 className="text-lg sm:text-xl font-bold text-white break-words">{exp.title}</h3>
                              {exp.current && (
                                <span className="bg-green-500 text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium animate-pulse self-start">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-base sm:text-lg font-semibold break-words" style={{ color: exp.color }}>
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${getImpactColor(exp.impact)}`}>
                            {exp.impact} Impact
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{exp.description}</p>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-800 text-gray-300 text-xs px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-full border border-gray-700 whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                        {exp.technologies.length > 3 && (
                          <span className="bg-purple-500/20 text-purple-300 text-xs px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-full whitespace-nowrap">
                            +{exp.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">4</div>
            <div className="text-gray-400 text-xs sm:text-sm">Active Roles</div>
          </div>
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">1+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
          </div>
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">8+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Technologies</div>
          </div>
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">3+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
