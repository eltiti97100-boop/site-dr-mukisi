"use client"

import { useState, useEffect } from "react"
import { Stethoscope, Heart, Activity } from "lucide-react"

const icons = [Stethoscope, Heart, Activity]

export default function HeroAnimatedLogo() {
  const [currentIcon, setCurrentIcon] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = icons[currentIcon]

  return (
    <div className="relative w-20 h-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl animate-pulse opacity-20"></div>
      <div className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl flex items-center justify-center">
        <CurrentIcon className="h-10 w-10 text-white transition-all duration-500" />
      </div>
    </div>
  )
}
