"use client"

import { useEffect, useRef } from "react"

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

  // Configuration for particles
  const particleConfig = {
    count: 180,
    minRadius: 0.5,
    maxRadius: 1.5,
    speed: 0.8,
    lineDistance: 100,
    particleColor: "rgba(0, 255, 255, 0.7)",
    lineColor: "rgba(0, 255, 255, 0.2)",
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
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
        this.radius = Math.random() * (particleConfig.maxRadius - particleConfig.minRadius) + particleConfig.minRadius
        this.vx = (Math.random() - 0.5) * particleConfig.speed
        this.vy = (Math.random() - 0.5) * particleConfig.speed
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = particleConfig.particleColor
        ctx.fill()
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -1
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -1
        }
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < particleConfig.count; i++) {
        particlesRef.current.push(new ParticleClass())
      }
    }

    // Draw lines between nearby particles
    const drawLines = () => {
      const particles = particlesRef.current
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))

          if (distance < particleConfig.lineDistance) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            const opacity = (1 - distance / particleConfig.lineDistance) * 0.2
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((p) => {
        p.update()
        p.draw()
      })

      drawLines()
      animationRef.current = requestAnimationFrame(animate)
    }

    // Handle resize
    const handleResize = () => {
      setCanvasDimensions()
      initParticles()
    }

    // Initialize
    setCanvasDimensions()
    initParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "#121212" }}
    />
  )
}
