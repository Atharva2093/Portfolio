"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-400" />,
      title: "Email",
      value: "atharvajondhale@gmail.com",
      link: "mailto:atharvajondhale@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-400" />,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXX",
    },
    {
      icon: <MapPin className="h-6 w-6 text-cyan-400" />,
      title: "Location",
      value: "Nashik, Maharashtra, India",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-16 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology and development.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-4">{info.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <a href={info.link} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="professional-card">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
