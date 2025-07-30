"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Calendar, Phone } from "lucide-react"
import BlurText from "./ui/blur-text"

// --- Personal Information ---
const personalInfo = {
  profileImage: "/placeholder.svg?height=400&width=320&text=Atharva+Jondhale",
  name: "Atharva Jondhale",
  role: "UI/UX & Frontend Developer",
  subRole: "ERP Developer Intern • Creative Director",
  location: "Nashik, Maharashtra",
  experience: "2+ Years",
  techStack: ["React", "C#", "TypeScript", "Avalonia UI", "Firebase", "Google Cloud"],
  socialLinks: {
    github: "https://github.com/atharvajondhale",
    linkedin: "https://www.linkedin.com/in/atharvajondhale7",
    twitter: "https://x.com/atharva_j2093",
    instagram: "https://www.instagram.com/atharva_j2093",
    email: "mailto:atharvajondhale7@gmail.com",
  },
}

// --- Professional Theme Colors ---
const themeColors = {
  background: "#121212",
  accentBlue: "#3b82f6",
  accentPurple: "#8b5cf6",
  accentCyan: "#06b6d4",
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  cardBg: "rgba(26, 26, 26, 0.8)",
  borderSubtle: "rgba(148, 163, 184, 0.2)",
}

// Animation variants for the hero content
const heroContentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
    },
  },
}

// Animation variants for individual items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

// Enhanced TypeAnimation component
const TypeAnimation = ({
  sequence,
  wrapper: Wrapper = "span",
  speed = 50,
  repeat = Number.POSITIVE_INFINITY,
  className = "",
}) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  React.useEffect(() => {
    const texts = sequence.filter((_, index) => index % 2 === 0)
    const delays = sequence.filter((_, index) => index % 2 === 1)

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, delays[currentIndex] || 2000)

    return () => clearInterval(interval)
  }, [sequence, currentIndex])

  React.useEffect(() => {
    const text = sequence[currentIndex * 2] || ""
    let index = 0
    setCurrentText("")

    const typeInterval = setInterval(() => {
      setCurrentText(text.slice(0, index + 1))
      index++
      if (index >= text.length) {
        clearInterval(typeInterval)
      }
    }, 1000 / speed)

    return () => clearInterval(typeInterval)
  }, [currentIndex, sequence, speed])

  return <Wrapper className={className}>{currentText}</Wrapper>
}

export const Hero = () => {
  const sectionRef = useRef(null)
  const [isPhotoHovered, setIsPhotoHovered] = useState(false)

  const bioTextContent =
    "Hi, I'm Atharva — a Computer Engineering student passionate about building seamless, user-centric digital experiences. I love blending creativity with technology to design smart, modern solutions powered by AI and thoughtful design."

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent py-8"
      aria-label="Hero section"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 border border-purple-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 border border-cyan-400 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-20 h-20 border border-green-400 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[90vh]">
          {/* Profile Image Section - Left Side */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group mb-4">
              <div
                className="relative w-80 h-96 rounded-2xl overflow-hidden border-2 shadow-2xl transition-all duration-500 group-hover:scale-105 professional-card"
                style={{
                  borderColor: themeColors.accentBlue,
                  boxShadow: `0 10px 40px rgba(59, 130, 246, 0.2)`,
                }}
                onMouseEnter={() => setIsPhotoHovered(true)}
                onMouseLeave={() => setIsPhotoHovered(false)}
              >
                <img
                  src={personalInfo.profileImage || "/placeholder.svg"}
                  alt={personalInfo.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isPhotoHovered ? "grayscale-0 scale-110" : "grayscale"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Quick Info Cards - Same width as photo */}
            <motion.div
              className="w-80 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="professional-card p-4 rounded-xl">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-blue-400" />
                  <span className="text-gray-300">{personalInfo.location}</span>
                </div>
              </div>
              <div className="professional-card p-4 rounded-xl">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar size={16} className="text-purple-400" />
                  <span className="text-gray-300">{personalInfo.experience} Experience</span>
                </div>
              </div>
              <div className="professional-card p-4 rounded-xl">
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-green-400" />
                  <span className="text-gray-300">+91 XXXXX XXXXX</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Content - Center */}
          <motion.div
            className="lg:col-span-6 text-center lg:text-left order-2 lg:order-2 space-y-4 lg:pt-8"
            initial="hidden"
            animate="visible"
            variants={heroContentVariants}
          >
            {/* Main Heading - Fixed Visibility */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight"
              variants={itemVariants}
            >
              <div className="overflow-hidden">
                <BlurText
                  text="Atharva Jondhale"
                  delay={300}
                  animateBy="word"
                  direction="top"
                  className="block font-black font-heading text-white"
                />
              </div>
            </motion.h1>

            {/* Animated Role */}
            <motion.div variants={itemVariants}>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono text-cyan-400">
                <TypeAnimation
                  sequence={[
                    "ERP Developer Intern",
                    2500,
                    "UI/UX Specialist",
                    2500,
                    "Neon Genesis Co-founder",
                    2500,
                    "Frontend Engineer",
                    2500,
                    "Tech Explorer",
                    2500,
                    "Hackathon Enthusiast",
                    2500,
                  ]}
                  wrapper="span"
                  speed={60}
                  repeat={Number.POSITIVE_INFINITY}
                  className="inline-block"
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0 font-body leading-[2.75rem] text-pink-200 shadow-xl md:text-2xl"
              variants={itemVariants}
            >
              {bioTextContent}
            </motion.p>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="space-y-4"></motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 pt-4"></motion.div>
          </motion.div>

          {/* Social Links & Stats - Right Side */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6 order-3 lg:order-3 lg:pt-8 lg:pl-4 items-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* Social Links - Moved more to the right */}
            <div className="flex flex-row gap-6 justify-center lg:justify-start lg:flex-col tracking-normal lg:items-start">
              <SocialIconLink href={personalInfo.socialLinks.github} icon={Github} name="GitHub" />
              <SocialIconLink href={personalInfo.socialLinks.linkedin} icon={Linkedin} name="LinkedIn" />
              <SocialIconLink href={personalInfo.socialLinks.twitter} icon={Twitter} name="Twitter" />
              <SocialIconLink href={personalInfo.socialLinks.instagram} icon={Instagram} name="Instagram" />
              <SocialIconLink href={personalInfo.socialLinks.email} icon={Mail} name="Email" />
            </div>

            {/* Quick Stats */}
            <motion.div
              className="space-y-4 hidden lg:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Enhanced Social Icon Component with Sliding Attached Tooltip
const SocialIconLink = ({ href, icon: IconComponent, name }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 backdrop-blur-sm border professional-card relative overflow-hidden"
        style={{
          borderColor: isHovered ? "#06b6d4" : "rgba(148, 163, 184, 0.2)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <IconComponent
          size={20}
          style={{
            color: isHovered ? "#06b6d4" : "#f8fafc",
          }}
        />

        {/* Sliding Attached Tooltip */}
        <motion.div
          className="absolute right-full top-0 bottom-0 flex items-center pointer-events-none"
          initial={{ width: 0, opacity: 0 }}
          animate={isHovered ? { width: "auto", opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div
            className="h-full flex items-center px-3 text-sm font-medium whitespace-nowrap rounded-l-xl"
            style={{
              background: "rgba(26, 26, 26, 0.95)",
              color: "#f8fafc",
              border: `1px solid rgba(6, 182, 212, 0.4)`,
              borderRight: "none",
              boxShadow: "0 4px 12px rgba(6, 182, 212, 0.2)",
            }}
          >
            {name}
          </div>
        </motion.div>
      </motion.a>
    </motion.div>
  )
}

export default Hero
