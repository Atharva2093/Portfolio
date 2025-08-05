"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const [isMobile, setIsMobile] = useState(false)

  // Configuration for particles - responsive based on screen size
  const getParticleConfig = () => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920
    const height = typeof window !== 'undefined' ? window.innerHeight : 1080
    
    // Reduce particles on mobile and smaller screens
    if (width < 768) {
      return {
        count: 50,
        minRadius: 0.3,
        maxRadius: 1,
        speed: 0.5,
        lineDistance: 80,
        particleColor: "rgba(0, 255, 255, 0.5)",
        lineColor: "rgba(0, 255, 255, 0.1)",
      }
    } else if (width < 1024) {
      return {
        count: 100,
        minRadius: 0.4,
        maxRadius: 1.2,
        speed: 0.6,
        lineDistance: 90,
        particleColor: "rgba(0, 255, 255, 0.6)",
        lineColor: "rgba(0, 255, 255, 0.15)",
      }
    } else {
      return {
        count: 180,
        minRadius: 0.5,
        maxRadius: 1.5,
        speed: 0.8,
        lineDistance: 100,
        particleColor: "rgba(0, 255, 255, 0.7)",
        lineColor: "rgba(0, 255, 255, 0.2)",
      }
    }
  }

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for crisp rendering
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
    }

    // Particle class
    class ParticleClass implements Particle {
      x: number
      y: number
      radius: number
      vx: number
      vy: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        const config = getParticleConfig()
        this.radius = Math.random() * (config.maxRadius - config.minRadius) + config.minRadius
        this.vx = (Math.random() - 0.5) * config.speed
        this.vy = (Math.random() - 0.5) * config.speed
      }

      draw() {
        const config = getParticleConfig()
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = config.particleColor
        ctx.fill()
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -1
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -1
        }

        // Keep particles within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      const config = getParticleConfig()
      for (let i = 0; i < config.count; i++) {
        particlesRef.current.push(new ParticleClass())
      }
    }

    // Draw lines between nearby particles
    const drawLines = () => {
      const particles = particlesRef.current
      const config = getParticleConfig()
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))

          if (distance < config.lineDistance) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            const opacity = (1 - distance / config.lineDistance) * 0.2
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop with performance optimization
    let lastTime = 0
    const targetFPS = isMobile ? 30 : 60
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particlesRef.current.forEach((p) => {
          p.update()
          p.draw()
        })

        drawLines()
        lastTime = currentTime
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    // Handle resize with debouncing
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        setCanvasDimensions()
        initParticles()
      }, 100)
    }

    // Initialize
    setCanvasDimensions()
    initParticles()
    animate(0)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      clearTimeout(resizeTimeout)
    }
  }, [isMobile])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "#121212" }}
      aria-hidden="true"
    />
  )
}
