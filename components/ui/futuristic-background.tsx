"use client"

import { useEffect, useState } from "react"

export function FuturisticBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
    }))
    setParticles(particleArray)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-radial from-green-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      {/* Floating Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="geometric-shape w-32 h-32 top-1/4 left-1/4 rotate-45" />
      <div className="geometric-shape w-24 h-24 top-3/4 right-1/4 rotate-12" />
      <div className="geometric-shape w-40 h-20 top-1/2 right-1/3 -rotate-12" />

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse"
          style={{ top: "20%" }}
        />
        <div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-pulse"
          style={{ top: "60%", animationDelay: "3s" }}
        />
        <div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-pulse"
          style={{ top: "80%", animationDelay: "6s" }}
        />
      </div>
    </div>
  )
}
