"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"
import BlurText from "./ui/blur-text"

// --- Personal Information ---
const personalInfo = {
  profileImage: "/placeholder.svg?height=360&width=320",
  name: "Atharva Jondhale",
  role: "UI/UX & Frontend Developer",
  subRole: "ERP Developer Intern • Creative Director",
  techStack: ["React", "C#", "TypeScript", "Avalonia UI", "Firebase", "Google Cloud"],
  socialLinks: {
    github: "https://github.com/atharvajondhale",
    linkedin: "https://www.linkedin.com/in/atharvajondhale7",
    twitter: "https://twitter.com/atharvajondhale",
    instagram: "https://www.instagram.com/atharvajondhale",
    email: "mailto:atharvajondhale@gmail.com",
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
      staggerChildren: 0.2,
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
    "Hi, I'm Atharva — UI and DBMS Specialist at Neon Genesis and ERP Developer at Praktan Technologies. I build fast, user-focused web apps with React, TypeScript, and Tailwind, and develop scalable backends using C#, Avalonia, and gRPC. Passionate about AI-powered tools like BrainBuddy, creative tech, and crafting clean, impactful digital experiences."

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent py-20"
      aria-label="Hero section"
    >
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Profile Image Section - Left Side */}
          <motion.div
            className="lg:col-span-4 flex justify-center lg:justify-start order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={() => setIsPhotoHovered(true)}
            onMouseLeave={() => setIsPhotoHovered(false)}
          >
            <div className="relative group">
              <div
                className="relative w-80 h-96 rounded-2xl overflow-hidden border-2 shadow-2xl transition-all duration-500 group-hover:scale-105 professional-card"
                style={{
                  borderColor: themeColors.accentBlue,
                  boxShadow: `0 10px 40px rgba(59, 130, 246, 0.2)`,
                }}
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
          </motion.div>

          {/* Hero Content - Center */}
          <motion.div
            className="lg:col-span-6 text-center lg:text-left order-2 lg:order-2"
            initial="hidden"
            animate="visible"
            variants={heroContentVariants}
          >
            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6"
              variants={itemVariants}
            >
              <div className="overflow-hidden">
                <BlurText
                  text="Atharva"
                  delay={300}
                  animateBy="word"
                  direction="top"
                  className="block font-black font-heading"
                  style={{
                    color: themeColors.textPrimary,
                  }}
                />
              </div>
              <div className="overflow-hidden">
                <BlurText
                  text="Jondhale"
                  delay={600}
                  animateBy="word"
                  direction="top"
                  className="block font-black gradient-text font-heading"
                />
              </div>
            </motion.h1>

            {/* Animated Role */}
            <motion.div className="mb-8" variants={itemVariants}>
              <div
                className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono"
                style={{
                  color: themeColors.accentCyan,
                }}
              >
                <TypeAnimation
                  sequence={[
                    "ERP Developer Intern",
                    2500,
                    "UI/UX Specialist",
                    2500,
                    "Co-founder @ Neon Genesis",
                    2500,
                    "Frontend Engineer",
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
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto lg:mx-0 font-body"
              variants={itemVariants}
              style={{
                color: themeColors.textSecondary,
                lineHeight: "1.7",
              }}
            >
              {bioTextContent}
            </motion.p>
          </motion.div>

          {/* Social Links - Right Side */}
          <motion.div
            className="lg:col-span-2 flex lg:flex-col flex-row justify-center lg:justify-end gap-4 order-3 lg:order-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex lg:flex-col flex-row gap-4 lg:items-end items-center">
              <SocialIconLink href={personalInfo.socialLinks.github} icon={Github} name="GitHub" />
              <SocialIconLink href={personalInfo.socialLinks.linkedin} icon={Linkedin} name="LinkedIn" />
              <SocialIconLink href={personalInfo.socialLinks.twitter} icon={Twitter} name="Twitter" />
              <SocialIconLink href={personalInfo.socialLinks.instagram} icon={Instagram} name="Instagram" />
              <SocialIconLink href={personalInfo.socialLinks.email} icon={Mail} name="Email" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium" style={{ color: themeColors.textSecondary }}>
            Scroll Down
          </span>
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: themeColors.accentCyan }}
          >
            <div
              className="w-1 h-3 rounded-full mt-2 animate-bounce"
              style={{ backgroundColor: themeColors.accentCyan }}
            />
          </div>
        </div>
      </motion.div>
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

        {/* Sliding Attached Tooltip - Positioned to the left for right-side social icons */}
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
