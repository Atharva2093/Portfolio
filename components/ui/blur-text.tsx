"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface BlurTextProps {
  text: string
  delay?: number
  animateBy?: "word" | "character"
  direction?: "top" | "bottom" | "left" | "right"
  className?: string
  onAnimationComplete?: () => void
}

const BlurText = ({
  text,
  delay = 0,
  animateBy = "word",
  direction = "top",
  className = "",
  onAnimationComplete,
}: BlurTextProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const getDirection = () => {
    switch (direction) {
      case "top":
        return { y: -20 }
      case "bottom":
        return { y: 20 }
      case "left":
        return { x: -20 }
      case "right":
        return { x: 20 }
      default:
        return { y: -20 }
    }
  }

  const textArray = animateBy === "word" ? text.split(" ") : text.split("")

  return (
    <div className={className}>
      {textArray.map((item, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            ...getDirection(),
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  x: 0,
                }
              : {}
          }
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          onAnimationComplete={index === textArray.length - 1 ? onAnimationComplete : undefined}
          className="inline-block"
        >
          {item}
          {animateBy === "word" && index < textArray.length - 1 && " "}
        </motion.span>
      ))}
    </div>
  )
}

export default BlurText
