"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface DecryptTextProps {
  text: string
  className?: string
  delay?: number
}

const DecryptText: React.FC<DecryptTextProps> = ({ text, className = "", delay = 0 }) => {
  const [displayText, setDisplayText] = useState("")
  const [isDecrypting, setIsDecrypting] = useState(false)

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDecrypting(true)
      let iteration = 0

      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index]
              }
              return characters[Math.floor(Math.random() * characters.length)]
            })
            .join(""),
        )

        if (iteration >= text.length) {
          clearInterval(interval)
          setIsDecrypting(false)
        }

        iteration += 1 / 3
      }, 30)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay])

  return <span className={className}>{displayText}</span>
}

export default DecryptText
