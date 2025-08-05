"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Calendar, Phone } from "lucide-react"
import BlurText from "./ui/blur-text"

// --- Personal Information ---
const personalInfo = {
  profileImage: "/images/profiel.png",
  name: "Atharva Jondhale",
  role: "UI/UX & Frontend Developer",
  subRole: "ERP Developer Intern • Creative Director",
  location: "Nashik, Maharashtra",
  experience: "2+ Years",
  techStack: ["React", "C#", "TypeScript", "Avalonia UI", "Firebase", "Google Cloud"],
  socialLinks: {
    github: "https://github.com/Atharva2093",
    linkedin: "https://www.linkedin.com/in/atharvajondhale7",
    twitter: "https://x.com/atharva_j2093",
    instagram: "https://www.instagram.com/atharva_j2093",
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=atharvajondhale7@gmail.com",
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
}: {
  sequence: (string | number)[]
  wrapper?: React.ComponentType<any> | keyof JSX.IntrinsicElements
  speed?: number
  repeat?: number
  className?: string
}) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  React.useEffect(() => {
    const texts = sequence.filter((_, index: number) => index % 2 === 0) as string[]
    const delays = sequence.filter((_, index: number) => index % 2 === 1) as number[]

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, delays[currentIndex] || 2000)

    return () => clearInterval(interval)
  }, [sequence, currentIndex])

  React.useEffect(() => {
    const text = sequence[currentIndex * 2] as string || ""
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent py-8 px-4 sm:px-6 lg:px-8"
      aria-label="Hero section"
    >
      {/* Subtle Background Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
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
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[90vh]">
          {/* Profile Image Section - Top on mobile, Left on desktop */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group mb-4">
              <div
                className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 shadow-2xl transition-all duration-500 group-hover:scale-105 professional-card"
                style={{
                  borderColor: themeColors.accentBlue,
                  boxShadow: `0 10px 40px rgba(59, 130, 246, 0.2)`,
                }}
                onMouseEnter={() => setIsPhotoHovered(true)}
                onMouseLeave={() => setIsPhotoHovered(false)}
              >
                <Image
                  src={personalInfo.profileImage || "/placeholder.svg"}
                  alt={personalInfo.name}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    isPhotoHovered ? "grayscale-0 scale-110" : "grayscale"
                  }`}
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Quick Info Cards - Responsive width */}
            <motion.div
              className="w-full max-w-sm sm:max-w-md space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="professional-card p-3 sm:p-4 rounded-xl">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">{personalInfo.location}</span>
                </div>
              </div>
              <div className="professional-card p-3 sm:p-4 rounded-xl">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar size={16} className="text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">{personalInfo.experience} Experience</span>
                </div>
              </div>
              <div className="professional-card p-3 sm:p-4 rounded-xl">
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">+91 7588195521</span>
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
            {/* Main Heading - Responsive text sizes */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-8 sm:mb-12 lg:mb-28"
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

            {/* Animated Role - Responsive text */}
            <motion.div variants={itemVariants} className="mt-8 mb-8 sm:mb-12 lg:mb-48">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-mono text-cyan-400">
                <TypeAnimation
                  sequence={[
                    "ERP Developer Intern",
                    2500,
                    "UI/UX Specialist",
                    2500,
                    "Neon Genesis Core Member",
                    2500,
                    "Frontend Developer",
                    2500,
                    "Tech Enthusiast",
                    2500,
                    "Hackathon Participant",
                    2500,
                  ]}
                  wrapper="span"
                  speed={60}
                  repeat={Number.POSITIVE_INFINITY}
                  className="inline-block"
                />
              </div>
            </motion.div>

            {/* Bio - Responsive text and spacing */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto lg:mx-0 font-body text-pink-200 shadow-xl mt-8 sm:mt-12 mb-8 sm:mb-14"
              variants={itemVariants}
            >
              {bioTextContent}
            </motion.p>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="space-y-4"></motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 pt-4"></motion.div>
          </motion.div>

          {/* Social Links & Stats - Right Side / Bottom on mobile */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6 order-3 lg:order-3 lg:pt-8 lg:pl-4 items-center lg:items-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* Social Links - Responsive layout */}
            <div className="flex flex-row gap-4 sm:gap-6 justify-center lg:justify-start lg:flex-col tracking-normal lg:items-start">
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
const SocialIconLink = ({ href, icon: IconComponent, name }: { href: string; icon: React.ElementType; name: string }) => {
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
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl transition-all duration-300 backdrop-blur-sm border professional-card relative overflow-hidden touch-target"
        style={{
          borderColor: isHovered ? "#06b6d4" : "rgba(148, 163, 184, 0.2)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Visit ${name} profile`}
      >
        <IconComponent
          size={18}
          className="sm:w-5 sm:h-5"
          style={{
            color: isHovered ? "#06b6d4" : "#f8fafc",
          }}
        />

        {/* Sliding Attached Tooltip - Hidden on mobile */}
        <motion.div
          className="absolute right-full top-0 bottom-0 flex items-center pointer-events-none hidden lg:flex"
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
