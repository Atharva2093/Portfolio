"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, GraduationCap, Laptop2, MousePointer2, PenTool, Code, Sparkles, Book, Globe } from "lucide-react"

const defaultProps = {
  name: "Atharva Jondhale",
  study: "MCOERC - Computer Engineering",
  company: "Praktan Technologies",
  location: "Nashik, Maharashtra, India",
  status: "ERP Developer Intern & Student",
  focus: "UI/UX & Frontend Development",
  interests: [
    { label: "Frontend Engineering", icon: <Code size={24} /> },
    { label: "UI/UX Design", icon: <PenTool size={24} /> },
    { label: "Creative Coding", icon: <Sparkles size={24} /> },
    { label: "EdTech & Open Source", icon: <Globe size={24} /> },
    { label: "Animation", icon: <MousePointer2 size={24} /> },
    { label: "Immersive Interfaces", icon: <Book size={24} /> },
  ],
  facts: [
    { icon: <MapPin size={18} />, label: "Location", value: "Nashik, Maharashtra" },
    { icon: <Laptop2 size={18} />, label: "Current Role", value: "ERP Developer Intern", highlight: "green" },
    { icon: <GraduationCap size={18} />, label: "Education", value: "B.Tech Computer Engineering" },
    { icon: <Laptop2 size={18} />, label: "Co-founder", value: "Neon Genesis", highlight: "blue" },
  ],
}

const floatIn = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.9 },
}

interface AboutProps extends Partial<typeof defaultProps> {
  useHeroBackground?: boolean
}

const About = (props: AboutProps) => {
  const { useHeroBackground, ...restProps } = props
  const data = { ...defaultProps, ...restProps }
  const [isSectionIntersecting, setIsSectionIntersecting] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isLeftPanelIntersecting, setIsLeftPanelIntersecting] = useState(false)
  const leftPanelRef = useRef<HTMLDivElement | null>(null)
  const [isDetailedView, setIsDetailedView] = useState(false)

  useEffect(() => {
    const ref = sectionRef.current
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionIntersecting(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const ref = leftPanelRef.current
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLeftPanelIntersecting(entry.isIntersecting)
        if (entry.isIntersecting) {
          setIsDetailedView(true)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [])

  const themeColors = {
    accentBlue: "#3b82f6",
    accentPurple: "#8b5cf6",
    accentCyan: "#06b6d4",
    textPrimary: "#f8fafc",
    textSecondary: "#94a3b8",
    cardBg: "rgba(26, 26, 26, 0.8)",
    borderSubtle: "rgba(148, 163, 184, 0.2)",
  }

  return (
    <section id="about" className="py-16 relative overflow-hidden bg-transparent" aria-label="About Me">
      <div
        ref={sectionRef}
        className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 md:px-8 flex flex-col gap-12 items-center"
      >
        <motion.h2
          className="relative inline-block mb-10 z-20 font-heading font-bold text-4xl md:text-5xl"
          style={{ color: themeColors.accentBlue }}
          initial="hidden"
          animate={isSectionIntersecting ? "visible" : "hidden"}
          variants={floatIn}
        >
          About Me
          <span
            className="absolute left-0 bottom-[-8px] w-full h-1 rounded-full animate-pulse"
            style={{ backgroundColor: `${themeColors.accentBlue}60` }}
          />
        </motion.h2>

        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 relative z-20">
          <motion.div
            ref={leftPanelRef}
            className="flex-1 min-w-[300px] p-6 md:p-8 rounded-2xl relative professional-card"
            initial="hidden"
            animate={isSectionIntersecting ? "visible" : "hidden"}
            variants={floatIn}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onMouseEnter={() => setIsDetailedView(true)}
            onMouseLeave={() => setIsDetailedView(false)}
          >
            <AnimatePresence mode="wait">
              {!isDetailedView ? (
                <motion.div
                  key="whoami-text"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={floatIn}
                  className="w-full h-[320px] flex flex-col items-center justify-center text-center cursor-pointer select-none"
                >
                  <h3
                    className="text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight drop-shadow-lg"
                    style={{ color: themeColors.accentPurple }}
                  >
                    Who Am I?
                  </h3>
                  <p
                    className="text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-body opacity-80"
                    style={{ color: themeColors.textPrimary }}
                  >
                    (Hover to uncover my story)
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="aboutme-text"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={floatIn}
                  className="w-full text-left"
                >
        <div className="space-y-6 text-white font-body leading-relaxed">
  <p className="text-xl font-semibold font-sans">
    Hey! I’m <span className="text-pink-500 font-semibold">Atharva Jondhale</span> — a tech enthusiast passionate about building sleek, high-performance digital experiences.
    I blend creativity with code to craft interfaces that feel <span className="text-pink-500 font-semibold">fresh</span>, intuitive, and genuinely <span className="text-pink-500 font-semibold">fun</span> to use.
    When I’m not coding, I’m exploring new tools, prototyping ideas, or leveling up my dev game.
  </p>

  <ul className="list-none space-y-3 text-white/90 text-lg font-normal mt-4">
    <li>🎓 <span className="font-semibold">Computer Engineering student</span> at MCOERC, Nashik</li>
    <li>
      🚀 Building full-stack projects at 
      <a href="https://neon-genesis.vercel.app/" target="_blank" rel="noopener noreferrer"
         className="font-semibold text-pink-500 hover:text-pink-400 transition-colors duration-300 no-underline ml-1">
        Neon Genesis
      </a>
    </li>
    <li>
      💼 ERP Developer Intern at 
      <a href="https://www.praktan.com/" target="_blank" rel="noopener noreferrer"
         className="font-semibold text-pink-500 hover:text-pink-400 transition-colors duration-300 no-underline ml-1">
        Praktan Technologies
      </a>
    </li>
    <li>🎨 Specializing in frontend development and UI/UX design</li>
    <li>🎭 Passionate about creative coding, motion, and visuals</li>
    <li>🌐 Builds immersive, responsive apps for all screens</li>
    <li>🧰 Fluent in React, Tailwind CSS, Framer Motion, gRPC, MVVM</li>
    <li>💡 Always experimenting, always solving</li>
    <li>🤝 Thrives in collaborative, agile environments</li>
    <li>📊 Experienced in building scalable, data-driven systems</li>
<li>📸 Media production & tech event coverage at MCOERC</li>

  </ul>
</div>




                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="flex-1 flex flex-col gap-10 min-w-[300px] max-w-[450px]">
            <motion.div
              className="p-6 rounded-2xl relative professional-card"
              initial="hidden"
              animate={isSectionIntersecting ? "visible" : "hidden"}
              variants={floatIn}
              custom={1}
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-xl font-heading font-bold mb-5" style={{ color: themeColors.accentCyan }}>
                Quick Facts
              </h3>
              <ul className="space-y-4">
                <motion.li className="flex items-center gap-3 text-base md:text-lg font-body" style={{ color: themeColors.textSecondary }}>
                  <span className="text-2xl">☕</span>
                  <span className="font-medium" style={{ color: themeColors.textPrimary }}>
                  Night OWL fueled by caffeine & code
                  </span>
                </motion.li>
                <motion.li className="flex items-center gap-3 text-base md:text-lg font-body" style={{ color: themeColors.textSecondary }}>
                  <span className="text-2xl">🧪</span>
                  <span className="font-medium" style={{ color: themeColors.textPrimary }}>
                    Loves testing wild tech stacks
                  </span>
                </motion.li>
                <motion.li className="flex items-center gap-3 text-base md:text-lg font-body" style={{ color: themeColors.textSecondary }}>
                  <span className="text-2xl">🏀</span>
                  <span className="font-medium" style={{ color: themeColors.textPrimary }}>
                    Switches from React to rebound in seconds
                  </span>
                </motion.li>
                <motion.li className="flex items-center gap-3 text-base md:text-lg font-body" style={{ color: themeColors.textSecondary }}>
                  <span className="text-2xl">♟️</span>
                  <span className="font-medium" style={{ color: themeColors.textPrimary }}>
                    Plays chess like solving bugs — slow, sharp, strategic
                  </span>
                </motion.li>
 
              </ul>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl relative professional-card"
              initial="hidden"
              animate={isSectionIntersecting ? "visible" : "hidden"}
              variants={floatIn}
              custom={2}
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-xl font-heading font-bold mb-5" style={{ color: themeColors.accentPurple }}>
                My Expertise
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {data.interests.map((interest) => (
                  <motion.div
                    key={interest.label}
                    className="flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-xl shadow-md cursor-pointer select-none professional-card"
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="text-2xl" style={{ color: themeColors.accentBlue }}>
                      {interest.icon}
                    </span>
                    <span
                      className="text-center text-sm font-medium font-body"
                      style={{ color: themeColors.textPrimary }}
                    >
                      {interest.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
