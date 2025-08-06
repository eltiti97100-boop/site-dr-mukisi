"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface AnimatedBeeLogoProps {
  width?: number
  height?: number
  className?: string
  showText?: boolean
  intensity?: "subtle" | "normal" | "active"
}

export default function AnimatedBeeLogo({
  width = 80,
  height = 80,
  className = "",
  showText = false,
  intensity = "normal",
}: AnimatedBeeLogoProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.sin(Date.now() / 1000) * 10,
        y: Math.cos(Date.now() / 1500) * 5,
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const getAnimationClass = () => {
    if (isHovered) return "bee-flying-active"
    switch (intensity) {
      case "subtle":
        return "bee-flying-subtle"
      case "active":
        return "bee-flying-active"
      default:
        return "bee-flying-normal"
    }
  }

  return (
    <div
      className={`animated-bee-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Image
            src="/images/logo-soins-miel.png"
            alt="Soins Miel - Dr Martin Mukisi Mukasa"
            width={width}
            height={height}
            className={`animated-bee-logo ${getAnimationClass()}`}
          />
          {/* Effet de battement d'ailes avec pseudo-element */}
          <div className="bee-wings-effect"></div>
        </div>
        {showText && (
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-slate-800">SOINS MIEL</h1>
            <p className="text-sm text-slate-600">Dr Martin Mukisi Mukasa</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .animated-bee-container {
          position: relative;
        }

        .animated-bee-logo {
          transition: all 0.3s ease;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }

        .bee-wings-effect {
          position: absolute;
          top: 8%;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 25%;
          pointer-events: none;
          opacity: 0;
        }

        /* Animation subtile pour le header */
        .bee-flying-subtle {
          animation: gentleBeeFloat 4s ease-in-out infinite;
        }

        /* Animation normale */
        .bee-flying-normal {
          animation: normalBeeFloat 3s ease-in-out infinite;
        }

        /* Animation active (hover ou hero) */
        .bee-flying-active {
          animation: activeBeeFloat 1.5s ease-in-out infinite;
        }

        .bee-flying-active .bee-wings-effect {
          animation: wingsFlutter 0.1s ease-in-out infinite;
          opacity: 0.3;
          background: radial-gradient(ellipse, rgba(255, 193, 7, 0.4) 0%, transparent 70%);
        }

        /* Keyframes pour les différentes intensités */
        @keyframes gentleBeeFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(0.5deg);
          }
        }

        @keyframes normalBeeFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-6px) rotate(1deg) scale(1.01);
          }
          50% {
            transform: translateY(-10px) rotate(0deg) scale(1.02);
          }
          75% {
            transform: translateY(-6px) rotate(-1deg) scale(1.01);
          }
        }

        @keyframes activeBeeFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          15% {
            transform: translateY(-8px) rotate(2deg) scale(1.03);
          }
          30% {
            transform: translateY(-15px) rotate(-1deg) scale(1.05);
          }
          45% {
            transform: translateY(-20px) rotate(1deg) scale(1.06);
          }
          60% {
            transform: translateY(-15px) rotate(-2deg) scale(1.05);
          }
          80% {
            transform: translateY(-8px) rotate(1deg) scale(1.03);
          }
        }

        /* Animation des ailes */
        @keyframes wingsFlutter {
          0%, 100% {
            transform: translateX(-50%) scaleX(1) scaleY(1);
            opacity: 0.2;
          }
          50% {
            transform: translateX(-50%) scaleX(1.2) scaleY(0.8);
            opacity: 0.4;
          }
        }

        /* Effet au survol */
        .animated-bee-container:hover .animated-bee-logo {
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.15)) brightness(1.05);
        }

        /* Animation continue des ailes pour l'effet normal */
        .bee-flying-normal::before {
          content: '';
          position: absolute;
          top: 8%;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 25%;
          background: radial-gradient(ellipse, rgba(255, 193, 7, 0.2) 0%, transparent 70%);
          animation: gentleWingsFlutter 0.3s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes gentleWingsFlutter {
          0%, 100% {
            opacity: 0.1;
            transform: translateX(-50%) scaleX(1);
          }
          50% {
            opacity: 0.2;
            transform: translateX(-50%) scaleX(1.1);
          }
        }
      `}</style>
    </div>
  )
}
