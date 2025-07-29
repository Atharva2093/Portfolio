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
                  className="w-full text-center cursor-pointer"
                >
                  <h3
                    className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight"
                    style={{ color: themeColors.accentPurple }}
                  >
                    Who Am I?
                  </h3>
                  <p
                    className="text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-body"
                    style={{ color: themeColors.textPrimary }}
                  >
                    I'm a curious coder blending precision with creativity to build engaging digital realities.
                  </p>
                  <p className="mt-4 text-xs md:text-sm italic font-body" style={{ color: themeColors.textSecondary }}>
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
                  <p
                    className="text-lg md:text-xl font-body mb-5 leading-relaxed"
                    style={{ color: themeColors.textPrimary }}
                  >
                    Hi, I'm <span className="font-semibold gradient-text">Atharva Jondhale</span> — a Computer Science
                    and Engineering student at MCOERC, Nashik. I'm the co-founder of Neon Genesis and currently work as
                    an ERP software developer at Praktan Technologies.
                  </p>
                  <p
                    className="text-lg md:text-xl font-body mb-5 leading-relaxed"
                    style={{ color: themeColors.textPrimary }}
                  >
                    My passion lies in crafting intuitive, performance-driven web interfaces with a strong focus on
                    Frontend and UI/UX development. Driven by curiosity and creativity, I love turning ideas into
                    interactive digital experiences through thoughtful design and clean code.
                  </p>
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3 gradient-text" style={{ color: themeColors.accentCyan }}>
                      Key Skills:
                    </h4>
                    <ul className="space-y-2 text-base" style={{ color: themeColors.textSecondary }}>
                      <li>
                        <strong style={{ color: themeColors.textPrimary }}>Frontend Engineering:</strong> Building
                        responsive and maintainable UIs
                      </li>
                      <li>
                        <strong style={{ color: themeColors.textPrimary }}>UI/UX Design:</strong> Crafting smooth,
                        user-centric experiences
                      </li>
                      <li>
                        <strong style={{ color: themeColors.textPrimary }}>Creative Coding & Animation:</strong> Dynamic
                        visuals through code
                      </li>
                      <li>
                        <strong style={{ color: themeColors.textPrimary }}>EdTech & Open Source:</strong> Passionate
                        about learning tools and collaboration
                      </li>
                      <li>
                        <strong style={{ color: themeColors.textPrimary }}>Immersive Interfaces:</strong> Designing
                        seamless, engaging multi-device UIs
                      </li>
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
                {data.facts.map((fact) => (
                  <motion.li
                    key={fact.label}
                    className="flex items-center gap-3 text-base md:text-lg font-body"
                    style={{ color: themeColors.textSecondary }}
                  >
                    <span style={{ color: themeColors.accentCyan }}>{fact.icon}</span>
                    <span className="font-medium" style={{ color: themeColors.textPrimary }}>
                      {fact.label}:
                    </span>
                    <span
                      className="font-semibold"
                      style={{
                        color:
                          fact.highlight === "green"
                            ? "#10b981"
                            : fact.highlight === "blue"
                              ? themeColors.accentBlue
                              : themeColors.textPrimary,
                      }}
                    >
                      {fact.value}
                    </span>
                  </motion.li>
                ))}
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
