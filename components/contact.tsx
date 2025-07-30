"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter, Instagram, MessageSquare, Zap, Globe } from "lucide-react"
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [activeField, setActiveField] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_atharva_portfolio"
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_contact_form"
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key"

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/atharvajondhale",
      color: "#333",
      hoverColor: "#6e7681",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/atharvajondhale7",
      color: "#0077b5",
      hoverColor: "#0ea5e9",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/atharva_j2093",
      color: "#1da1f2",
      hoverColor: "#38bdf8",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/atharva_j2093",
      color: "#e4405f",
      hoverColor: "#fb7185",
    },
  ]

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "atharvajondhale7@gmail.com",
      link: "mailto:atharvajondhale7@gmail.com",
      color: "#3b82f6",
      description: "Send me an email anytime",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 7588195521",
      link: "tel:+917588195521",
      color: "#8b5cf6",
      description: "Call me for urgent matters",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Nashik, Maharashtra, India",
      link: "https://maps.google.com/?q=Nashik,Maharashtra,India",
      color: "#06b6d4",
      description: "Based in beautiful Nashik",
    },
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    } else if (formData.message.trim().length > 500) {
      newErrors.message = "Message must be less than 500 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Atharva Jondhale",
        reply_to: formData.email,
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      if (result.status === 200) {
        setSubmitStatus("success")
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ name: "", email: "", subject: "", message: "" })
          setSubmitStatus("idle")
        }, 3000)
      } else {
        throw new Error("Email sending failed")
      }
      
    } catch (error) {
      console.error("Submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleFieldFocus = (fieldName: string) => {
    setActiveField(fieldName)
  }

  const handleFieldBlur = () => {
    setActiveField(null)
  }

  return (
    <section id="contact" className="py-20 bg-transparent relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-cyan-400 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-green-400 rounded-full animate-pulse" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-blue-400 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-blue-400" />
              Let's Connect
            </h3>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              I'm always excited to discuss new opportunities, innovative projects, or just chat about technology and development. 
              Whether you have a project in mind or want to collaborate, I'd love to hear from you!
            </p>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: info.color }}
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-lg mb-1">{info.title}</h4>
                        <a 
                          href={info.link} 
                          className="text-gray-400 hover:text-blue-400 transition-colors text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                        <p className="text-gray-500 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-auto">
              <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-400" />
                Connect Online
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 border border-gray-700 hover:border-gray-600"
                    style={{ backgroundColor: social.color }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <Card className="professional-card border-gray-800 bg-gray-900/50 backdrop-blur-sm relative overflow-hidden h-full rounded-3xl">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-[1px] opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="bg-gray-900/95 backdrop-blur-sm rounded-3xl h-full w-full"></div>
              </div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-white text-2xl flex items-center gap-2">
                  <Zap className="h-6 w-6 text-blue-400 animate-pulse" />
                  Send a Message
                </CardTitle>
                <p className="text-gray-400 text-sm mt-2">
                  Fill out the form below and I'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="relative z-10 flex-1 flex flex-col">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFieldFocus("name")}
                        onBlur={handleFieldBlur}
                        className={`bg-gray-800/80 border-gray-600 text-white placeholder:text-gray-400 transition-all duration-300 h-12 rounded-xl ${
                          activeField === "name" ? "border-blue-400 ring-2 ring-blue-400/20 shadow-lg shadow-blue-400/20" : ""
                        } ${errors.name ? "border-red-500 ring-2 ring-red-500/20" : ""}`}
                        required
                      />
                      {activeField === "name" && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-2 left-3 bg-gray-900 px-2 text-xs text-blue-400 rounded-md"
                        >
                          Name
                        </motion.div>
                      )}
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="h-3 w-3" />
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                    <div className="relative">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFieldFocus("email")}
                        onBlur={handleFieldBlur}
                        className={`bg-gray-800/80 border-gray-600 text-white placeholder:text-gray-400 transition-all duration-300 h-12 rounded-xl ${
                          activeField === "email" ? "border-blue-400 ring-2 ring-blue-400/20 shadow-lg shadow-blue-400/20" : ""
                        } ${errors.email ? "border-red-500 ring-2 ring-red-500/20" : ""}`}
                        required
                      />
                      {activeField === "email" && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-2 left-3 bg-gray-900 px-2 text-xs text-blue-400 rounded-md"
                        >
                          Email
                        </motion.div>
                      )}
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFieldFocus("subject")}
                      onBlur={handleFieldBlur}
                      className={`bg-gray-800/80 border-gray-600 text-white placeholder:text-gray-400 transition-all duration-300 h-12 rounded-xl ${
                        activeField === "subject" ? "border-blue-400 ring-2 ring-blue-400/20 shadow-lg shadow-blue-400/20" : ""
                      } ${errors.subject ? "border-red-500 ring-2 ring-red-500/20" : ""}`}
                      required
                    />
                    {activeField === "subject" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-2 left-3 bg-gray-900 px-2 text-xs text-blue-400 rounded-md"
                      >
                        Subject
                      </motion.div>
                    )}
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="h-3 w-3" />
                        {errors.subject}
                      </motion.p>
                    )}
                  </div>
                  
                  <div className="relative flex-1">
                    <Textarea
                      name="message"
                      placeholder="Your Message (minimum 10 characters)"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFieldFocus("message")}
                      onBlur={handleFieldBlur}
                      rows={6}
                      className={`bg-gray-800/80 border-gray-600 text-white placeholder:text-gray-400 transition-all duration-300 resize-none h-full min-h-[150px] rounded-xl ${
                        activeField === "message" ? "border-blue-400 ring-2 ring-blue-400/20 shadow-lg shadow-blue-400/20" : ""
                      } ${errors.message ? "border-red-500 ring-2 ring-red-500/20" : ""}`}
                      required
                    />
                    {activeField === "message" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-2 left-3 bg-gray-900 px-2 text-xs text-blue-400 rounded-md"
                      >
                        Message
                      </motion.div>
                    )}
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-2">
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm flex items-center gap-1"
                          >
                            <AlertCircle className="h-3 w-3" />
                            {errors.message}
                          </motion.p>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">
                        {formData.message.length}/500
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto space-y-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-cyan-500 hover:via-purple-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 h-12 text-lg font-semibold relative overflow-hidden group rounded-xl"
                    >
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2 relative z-10"
                          >
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending Message...
                          </motion.div>
                        ) : (
                          <motion.div
                            key="send"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2 relative z-10"
                          >
                            <Send className="h-5 w-5 group-hover:animate-bounce" />
                            Send Message
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>

                    {/* Status Messages */}
                    <AnimatePresence mode="wait">
                      {submitStatus === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          className="flex items-center gap-3 text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl p-4 backdrop-blur-sm"
                        >
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <div>
                            <div className="font-semibold">Message sent successfully!</div>
                            <div className="text-sm text-green-300">I'll get back to you within 24 hours.</div>
                          </div>
                        </motion.div>
                      )}
                      {submitStatus === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          className="flex items-center gap-3 text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl p-4 backdrop-blur-sm"
                        >
                          <AlertCircle className="h-5 w-5 text-red-400" />
                          <div>
                            <div className="font-semibold">Something went wrong</div>
                            <div className="text-sm text-red-300">Please try again or email me directly at atharvajondhale7@gmail.com</div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Enhanced Form Tips */}
                    <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                      <div className="text-xs text-gray-400 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400">💡</span>
                          <span>Be specific about your project requirements</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-purple-400">⏰</span>
                          <span>I typically respond within 24 hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-cyan-400">🚀</span>
                          <span>Include your timeline and budget if applicable</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-400">📧</span>
                          <span>Feel free to attach files or links</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Response Info */}
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-800/20 rounded-lg py-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Usually responds in 2-4 hours during business hours</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
