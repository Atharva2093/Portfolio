"use client"

import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    name: "BrainBuddy",
    category: "AI + Web Game",
    image: "/images/buddy.png",
    description:
      "A mental health-focused AI companion featuring gamified adventures that encourage emotional growth and mental wellness.",
    techStack: ["Typescript", "Nextjs", "Tailwind CSS", "Supabase", "Gemini API"], 
    liveDemo: "https://brainbuddy-kohl.vercel.app/",
    github:
      "https://github.com/Atharva2093/brain-buddy/tree/main/brainy-buddy-adventures-main",
  },
  {
    id: 2,
    name: "Neon Genesis",
    category: "3D Portfolio Experience",
    image: "/images/neon.png",
    description:
      "A next-gen portfolio template with futuristic UI, interactive animations, and 3D elements built using modern front-end tools.",
    techStack: [ "React", "Vite", "Tailwind CSS", "Framer Motion", "Zapier Automation"],
    liveDemo: "https://neon-genesis.vercel.app/",
    github: "https://github.com/ankushkhakale/Neon-Genesis",
  },
  {
    id: 3,
    name: "Atharva's Portfolio",
    category: "Developer Portfolio",
    image: "/images/portfolio.png",
    description:
      "My personal portfolio website featuring my journey, skills, and interactive UI with animations and responsive design.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Emailjs"],
    liveDemo: "https://v0-atharva-jondhale-portfolio.vercel.app/",
    github: "https://github.com/Atharva2093/Portfolio",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
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

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
      aria-label="Projects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-blue-400 mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Showcasing my latest work in web development, AI integration, and
            creative design
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="space-y-12 sm:space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`flex flex-col lg:flex-row gap-6 sm:gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors touch-target"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors touch-target"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-white mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base lg:text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">
                      Built with:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-800 text-gray-300 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border border-gray-700 hover:border-blue-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 touch-target text-sm sm:text-base"
                    >
                      <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-gray-600 hover:border-blue-400 text-gray-400 hover:text-blue-400 px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 touch-target text-sm sm:text-base"
                    >
                      <Github size={16} className="sm:w-5 sm:h-5" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://github.com/Atharva2093"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-purple-400 transition-colors text-base sm:text-lg font-medium group touch-target"
          >
            <Github size={18} className="sm:w-5 sm:h-5" />
            <span>Explore more projects on GitHub</span>
            <ExternalLink
              size={14}
              className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
