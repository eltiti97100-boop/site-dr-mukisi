"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function HeroBeeLogo() {
  const [mounted, setMounted] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    setMounted(true)
    // Animation automatique toutes les 8 secondes
    const interval = setInterval(() => {
      setIsActive(true)
      setTimeout(() => setIsActive(false), 3000)
    }, 8000)

    const rotationInterval = setInterval(() => {
      setRotation((prev) => prev + 1)
    }, 50)

    return () => {
      clearInterval(interval)
      clearInterval(rotationInterval)
    }
  }, [])

  if (!mounted) {
    return (
      <Image
        src="/images/logo-soins-miel-white.png"
        alt="Logo Soins Miel"
        width={300}
        height={300}
        className="mx-auto"
      />
    )
  }

  return (
    <div
      className="relative mb-6 cursor-pointer"
      onClick={() => {
        setIsActive(true)
        setTimeout(() => setIsActive(false), 3000)
      }}
    >
      <div
        className="text-6xl transition-transform duration-100"
        style={{
          transform: `rotate(${Math.sin(rotation / 20) * 10}deg)`,
        }}
      >
        🐝
      </div>
      <div className="absolute inset-0 border-4 border-yellow-300 rounded-full animate-spin opacity-30"></div>

      <Image
        src="/images/logo-soins-miel-white.png"
        alt="Logo Soins Miel"
        width={300}
        height={300}
        className={`mx-auto hero-bee-logo ${isActive ? "active-flight" : "gentle-flight"}`}
      />

      {/* Effet des ailes */}
      <div className={`bee-wings-overlay ${isActive ? "wings-active" : ""}`}></div>

      {/* Particules de miel */}
      <div className={`honey-particles ${isActive ? "particles-active" : ""}`}>
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

      <style jsx>{`
        .hero-bee-logo {
          filter: drop-shadow(0 10px 25px rgba(0,0,0,0.1));
          transition: all 0.3s ease;
        }

        .gentle-flight {
          animation: heroGentleFlight 4s ease-in-out infinite;
        }

        .active-flight {
          animation: heroActiveFlight 0.8s ease-in-out infinite;
        }

        .bee-wings-overlay {
          position: absolute;
          top: 12%;
          left: 50%;
          transform: translateX(-50%);
          width: 45%;
          height: 20%;
          background: radial-gradient(ellipse, rgba(135, 206, 235, 0.3) 0%, transparent 70%);
          opacity: 0;
          pointer-events: none;
        }

        .wings-active {
          animation: intensiveWingsFlutter 0.05s ease-in-out infinite;
          opacity: 1;
        }

        .honey-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #f59e0b;
          border-radius: 50%;
          opacity: 0;
        }

        .particle-1 {
          top: 30%;
          left: 45%;
        }

        .particle-2 {
          top: 35%;
          right: 40%;
        }

        .particle-3 {
          top: 25%;
          left: 55%;
        }

        .particles-active .particle {
          animation: honeySparkle 2s ease-out infinite;
        }

        .particles-active .particle-2 {
          animation-delay: 0.3s;
        }

        .particles-active .particle-3 {
          animation-delay: 0.6s;
        }

        /* Keyframes */
        @keyframes heroGentleFlight {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(1deg);
          }
          50% {
            transform: translateY(-12px) rotate(0deg);
          }
          75% {
            transform: translateY(-8px) rotate(-1deg);
          }
        }

        @keyframes heroActiveFlight {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          20% {
            transform: translateY(-15px) rotate(3deg) scale(1.02);
          }
          40% {
            transform: translateY(-25px) rotate(-2deg) scale(1.04);
          }
          60% {
            transform: translateY(-30px) rotate(2deg) scale(1.05);
          }
          80% {
            transform: translateY(-20px) rotate(-1deg) scale(1.03);
          }
        }

        @keyframes intensiveWingsFlutter {
          0%, 100% {
            transform: translateX(-50%) scaleX(1) scaleY(1) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateX(-50%) scaleX(1.3) scaleY(0.7) rotate(2deg);
            opacity: 0.7;
          }
        }

        @keyframes honeySparkle {
          0% {
            opacity: 0;
            transform: translateY(0px) scale(0);
          }
          20% {
            opacity: 1;
            transform: translateY(-10px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px) scale(0);
          }
        }

        .hero-bee-logo:hover {
          filter: drop-shadow(0 15px 30px rgba(0,0,0,0.15)) brightness(1.05);
        }
      `}</style>
    </div>
  )
}
