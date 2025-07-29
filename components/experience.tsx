"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building, Users, Briefcase, Zap, Target } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export function Experience() {
  const experiences = [
    {
      title: "ERP Developer Intern",
      company: "Praktan Technologies",
      location: "Nashik, Maharashtra",
      period: "Oct 2024 - Present",
      type: "On-site",
      description:
        "Contributing to the development of scalable ERP modules, including User Management and Purchase Handling systems. Implementing reactive UI components using Avalonia and gRPC services.",
      technologies: ["C#", "Avalonia UI", "gRPC", "MVVM", "ERP Systems"],
      icon: <Building className="h-5 w-5" />,
      current: true,
      color: "#3b82f6",
    },
    {
      title: "Creative Director",
      company: "Matoshri Technical Event Cell",
      location: "Nashik, Maharashtra",
      period: "Feb 2025 - Present",
      type: "On-site",
      description:
        "Spearheading visual content strategy for major college events, overseeing branding, video editing, and design. Leading a five-member creative team.",
      technologies: ["Adobe Premiere Pro", "CapCut", "Canva", "Team Leadership", "Event Management"],
      icon: <Users className="h-5 w-5" />,
      current: true,
      color: "#8b5cf6",
    },
    {
      title: "UI/UX Specialist",
      company: "Neon Genesis",
      location: "Remote/Hybrid",
      period: "Oct 2024 - Present",
      type: "Hybrid",
      description:
        "Developing responsive UIs and scalable backend logic for innovative hackathon projects. Key projects include BrainBuddy and Neon Genesis Portfolio Website.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "UI/UX Design"],
      icon: <Zap className="h-5 w-5" />,
      current: true,
      color: "#06b6d4",
    },
    {
      title: "E-Cell Member",
      company: "Matoshri E-Cell",
      location: "Nashik, Maharashtra",
      period: "Nov 2024 - Present",
      type: "On-site",
      description:
        "Promoting innovation and startup culture on campus by coordinating workshops and events. Represented the institution at the E-Cell Summit 2025, IIT Bombay.",
      technologies: ["Event Coordination", "Startup Ecosystem", "Innovation", "Public Speaking"],
      icon: <Target className="h-5 w-5" />,
      current: true,
      color: "#10b981",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-purple-400 mb-4">Experience</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional journey building digital experiences and leading creative initiatives
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Horizontal Cards Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={cardVariants} className="group">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                        style={{ backgroundColor: exp.color }}
                      >
                        {exp.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                          {exp.current && (
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-base font-semibold mb-1" style={{ color: exp.color }}>
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {exp.type}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700 hover:border-purple-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
