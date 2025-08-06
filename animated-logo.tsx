"use client"

import { useState, useEffect } from "react"
import { Stethoscope } from "lucide-react"

export default function AnimatedLogo() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div
        className={`w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center transition-transform duration-1000 ${
          isAnimating ? "scale-110 rotate-12" : "scale-100 rotate-0"
        }`}
      >
        <Stethoscope className="h-8 w-8 text-white" />
      </div>
      {isAnimating && (
        <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl animate-ping opacity-20"></div>
      )}
    </div>
  )
}
