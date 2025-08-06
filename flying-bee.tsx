"use client"

import { useEffect, useState } from "react"

export default function FlyingBee() {
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const [velocity, setVelocity] = useState({ x: 2, y: 1.5 })
  const [wingFlap, setWingFlap] = useState(0)

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const newX = prev.x + velocity.x
        const newY = prev.y + velocity.y

        let newVelX = velocity.x
        let newVelY = velocity.y

        if (newX <= 0 || newX >= window.innerWidth - 60) {
          newVelX = -velocity.x
        }
        if (newY <= 0 || newY >= window.innerHeight - 60) {
          newVelY = -velocity.y
        }

        setVelocity({ x: newVelX, y: newVelY })

        return {
          x: Math.max(0, Math.min(window.innerWidth - 60, newX)),
          y: Math.max(0, Math.min(window.innerHeight - 60, newY)),
        }
      })

      setWingFlap((prev) => (prev + 1) % 8)
    }

    const interval = setInterval(animate, 80)
    return () => clearInterval(interval)
  }, [velocity])

  const isFlying = velocity.x > 0
  const wingAngle = Math.sin(wingFlap * 0.8) * 30

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `scaleX(${isFlying ? 1 : -1})`,
      }}
    >
      <svg width="50" height="40" viewBox="0 0 50 40" className="drop-shadow-lg">
        {/* Ailes arrière */}
        <ellipse
          cx="15"
          cy="12"
          rx="8"
          ry="6"
          fill="rgba(200, 230, 255, 0.8)"
          stroke="rgba(100, 150, 200, 0.6)"
          strokeWidth="0.5"
          transform={`rotate(${-20 + wingAngle})`}
          style={{ transformOrigin: "15px 18px" }}
        />
        <ellipse
          cx="35"
          cy="12"
          rx="8"
          ry="6"
          fill="rgba(200, 230, 255, 0.8)"
          stroke="rgba(100, 150, 200, 0.6)"
          strokeWidth="0.5"
          transform={`rotate(${20 - wingAngle})`}
          style={{ transformOrigin: "35px 18px" }}
        />

        {/* Ailes avant */}
        <ellipse
          cx="18"
          cy="10"
          rx="12"
          ry="8"
          fill="rgba(220, 240, 255, 0.9)"
          stroke="rgba(120, 170, 220, 0.7)"
          strokeWidth="0.5"
          transform={`rotate(${-15 + wingAngle * 1.2})`}
          style={{ transformOrigin: "18px 18px" }}
        />
        <ellipse
          cx="32"
          cy="10"
          rx="12"
          ry="8"
          fill="rgba(220, 240, 255, 0.9)"
          stroke="rgba(120, 170, 220, 0.7)"
          strokeWidth="0.5"
          transform={`rotate(${15 - wingAngle * 1.2})`}
          style={{ transformOrigin: "32px 18px" }}
        />

        {/* Nervures des ailes */}
        <g stroke="rgba(100, 150, 200, 0.4)" strokeWidth="0.3" fill="none">
          <path
            d="M18,6 Q22,10 26,14"
            transform={`rotate(${-15 + wingAngle * 1.2})`}
            style={{ transformOrigin: "18px 18px" }}
          />
          <path
            d="M20,8 Q24,12 28,16"
            transform={`rotate(${-15 + wingAngle * 1.2})`}
            style={{ transformOrigin: "18px 18px" }}
          />
          <path
            d="M32,6 Q28,10 24,14"
            transform={`rotate(${15 - wingAngle * 1.2})`}
            style={{ transformOrigin: "32px 18px" }}
          />
          <path
            d="M30,8 Q26,12 22,16"
            transform={`rotate(${15 - wingAngle * 1.2})`}
            style={{ transformOrigin: "32px 18px" }}
          />
        </g>

        {/* Corps principal - abdomen */}
        <ellipse cx="25" cy="22" rx="12" ry="8" fill="url(#bodyGradient)" />

        {/* Rayures sur l'abdomen */}
        <ellipse cx="25" cy="19" rx="10" ry="2" fill="#1a1a1a" opacity="0.8" />
        <ellipse cx="25" cy="22" rx="10" ry="2" fill="#1a1a1a" opacity="0.8" />
        <ellipse cx="25" cy="25" rx="10" ry="2" fill="#1a1a1a" opacity="0.8" />

        {/* Thorax */}
        <ellipse cx="25" cy="16" rx="8" ry="6" fill="url(#thoraxGradient)" />

        {/* Tête */}
        <circle cx="25" cy="8" r="6" fill="url(#headGradient)" />

        {/* Yeux composés */}
        <ellipse cx="22" cy="6" rx="2.5" ry="3" fill="#1a1a1a" />
        <ellipse cx="28" cy="6" rx="2.5" ry="3" fill="#1a1a1a" />
        <ellipse cx="22" cy="5.5" rx="1" ry="1.5" fill="rgba(255,255,255,0.3)" />
        <ellipse cx="28" cy="5.5" rx="1" ry="1.5" fill="rgba(255,255,255,0.3)" />

        {/* Antennes */}
        <path d="M23,3 Q20,1 18,2" stroke="#2d2d2d" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M27,3 Q30,1 32,2" stroke="#2d2d2d" strokeWidth="1" fill="none" strokeLinecap="round" />
        <circle cx="18" cy="2" r="1.5" fill="#2d2d2d" />
        <circle cx="32" cy="2" r="1.5" fill="#2d2d2d" />

        {/* Pattes */}
        <g stroke="#2d2d2d" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <path d="M18,20 L14,26 L12,28" />
          <path d="M20,22 L16,28 L14,30" />
          <path d="M22,24 L18,30 L16,32" />
          <path d="M32,20 L36,26 L38,28" />
          <path d="M30,22 L34,28 L36,30" />
          <path d="M28,24 L32,30 L34,32" />
        </g>

        {/* Dard */}
        <path d="M37,22 L40,23 L37,24 Z" fill="#8b4513" />

        {/* Reflets et brillance */}
        <ellipse cx="22" cy="20" rx="3" ry="2" fill="rgba(255,255,255,0.2)" />
        <ellipse cx="28" cy="18" rx="2" ry="1.5" fill="rgba(255,255,255,0.15)" />

        {/* Définition des gradients */}
        <defs>
          <radialGradient id="bodyGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="50%" stopColor="#ffb347" />
            <stop offset="100%" stopColor="#ff8c00" />
          </radialGradient>
          <radialGradient id="thoraxGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#ffed4e" />
            <stop offset="100%" stopColor="#d4af37" />
          </radialGradient>
          <radialGradient id="headGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#8b4513" />
            <stop offset="100%" stopColor="#654321" />
          </radialGradient>
        </defs>
      </svg>

      {/* Particules de pollen */}
      <div className="absolute -right-2 top-4">
        <div
          className="w-1 h-1 bg-yellow-300 rounded-full opacity-60"
          style={{
            animation: "float 2s ease-in-out infinite",
            animationDelay: "0s",
          }}
        />
      </div>
      <div className="absolute -right-4 top-6">
        <div
          className="w-0.5 h-0.5 bg-yellow-400 rounded-full opacity-40"
          style={{
            animation: "float 2.5s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          50% { transform: translateY(-10px) translateX(-5px); opacity: 0.2; }
        }
      `}</style>
    </div>
  )
}
