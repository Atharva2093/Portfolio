"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, GraduationCap, Award, BookOpen, Star } from "lucide-react"

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering",
      institution: "Matoshri College of Engineering & Research Centre",
      location: "Nashik, Maharashtra",
      period: "2024 - 2028",
      status: "Currently Pursuing",
      description:
        "Core coursework includes Operating Systems, Database Management Systems, Object-Oriented Programming, and Software Engineering.",
      subjects: ["Operating Systems", "DBMS", "OOP", "Software Engineering", "Data Structures", "Algorithms"],
      icon: <GraduationCap className="h-5 w-5" />,
      current: true,
      grade: "Pursuing",
      color: "#3b82f6",
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Science Stream",
      institution: "St. Lawrence College",
      location: "Nashik, Maharashtra",
      period: "2022 - 2024",
      status: "Completed",
      description: "Completed higher secondary education with focus on Mathematics, Physics, and Chemistry.",
      subjects: ["Mathematics", "Physics", "Chemistry", "English"],
      icon: <BookOpen className="h-5 w-5" />,
      current: false,
      grade: "76%",
      color: "#8b5cf6",
    },
    {
      degree: "CBSE 10th Grade",
      field: "Secondary Education",
      institution: "Golden Days Universal School",
      location: "Nashik, Maharashtra",
      period: "2012 - 2022",
      status: "Completed",
      description:
        "Completed secondary education with excellent performance in academics and extracurricular activities.",
      subjects: ["Mathematics", "Science", "English", "Social Studies"],
      icon: <Award className="h-5 w-5" />,
      current: false,
      grade: "78%",
      color: "#06b6d4",
    },
  ]

  return (
    <section id="education" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-cyan-400 mb-4">Education</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">My academic journey and learning milestones</p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400"></div>

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <motion.div key={index} variants={cardVariants} className="relative flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg"
                      style={{ backgroundColor: edu.color }}
                    >
                      {edu.icon}
                    </div>
                    {edu.current && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 min-h-[200px]">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          {edu.current && (
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-lg font-semibold mb-2" style={{ color: edu.color }}>
                          {edu.field}
                        </p>
                        <p className="text-gray-400 font-medium mb-3">{edu.institution}</p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            {edu.grade}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 mb-4 leading-relaxed">{edu.description}</p>

                      {/* Subjects */}
                      <div>
                        <h4 className="text-white font-semibold mb-2 text-sm">Key Subjects:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subject, subjectIndex) => (
                            <span
                              key={subjectIndex}
                              className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700 hover:border-cyan-400 transition-colors"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
