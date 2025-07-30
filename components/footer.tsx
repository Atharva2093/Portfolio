"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp, Twitter, Instagram, MapPin, Phone, ExternalLink, Code, Palette, Rocket, Coffee, Calendar, Clock, Globe, Download } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const quickLinks = [
    { name: "About", href: "#about", icon: <Code className="h-4 w-4" /> },
    { name: "Projects", href: "#projects", icon: <Palette className="h-4 w-4" /> },
    { name: "Skills", href: "#skills", icon: <Code className="h-4 w-4" /> },
    { name: "Experience", href: "#experience", icon: <Rocket className="h-4 w-4" /> },
    { name: "Education", href: "#education", icon: <Code className="h-4 w-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="h-4 w-4" /> },
  ]

  const additionalInfo = [
    {
      icon: <Calendar className="h-4 w-4" />,
      text: "Available for freelance",
      description: "Part-time & project-based work"
    },
    {
      icon: <Clock className="h-4 w-4" />,
      text: "Response time: 24 hours",
      description: "Quick turnaround guaranteed"
    },
    {
      icon: <Globe className="h-4 w-4" />,
      text: "Remote work preferred",
      description: "Flexible with time zones"
    },
    {
      icon: <Download className="h-4 w-4" />,
      text: "Resume available",
      href: "/resume.pdf",
      description: "Download my latest CV"
    },
  ]

  return (
    <footer className="bg-[#121212] border-t border-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-10 w-24 h-24 border border-purple-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/2 left-1/4 w-16 h-16 border border-cyan-400 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-3xl font-bold mb-4">
                  <span className="text-blue-400">Atharva</span>
                  <span className="text-purple-400">.dev</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Building scalable digital experiences, one line of code at a time. 
                  Passionate about creating innovative solutions that make a difference.
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Coffee className="h-4 w-4" />
                  <span>Powered by coffee and creativity</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                      >
                        <span className="group-hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </span>
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Newsletter */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get notified about new projects and tech insights.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    Subscribe
                  </button>
                  {isSubscribed && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-sm text-center"
                    >
                      Thanks for subscribing! 🎉
                    </motion.p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="text-blue-400 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{info.text}</p>
                    <p className="text-gray-500 text-xs mt-1">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Atharva Jondhale. Made with{" "}
              <Heart className="h-4 w-4 text-red-400 animate-pulse" /> and lots of coffee.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  )
}
