"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calendar } from "lucide-react"
import Image from "next/image"

export default function HeaderAppleStyle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Accueil", href: "#accueil" },
    { name: "Services", href: "#services" },
    { name: "À propos", href: "#apropos" },
    { name: "Témoignages", href: "#témoignages" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-200" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo simple et propre */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image src="/images/logo-soins-miel.png" alt="Logo Soins Miel" fill className="object-contain" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">Dr Martin Mukisi</h1>
              <p className="text-xs text-amber-600 font-medium">Soins Miel & Médecine Générale</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-amber-600">
              <Phone className="h-4 w-4 mr-2" />
              +243 XXX XXX XXX
            </Button>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Calendar className="h-4 w-4 mr-2" />
              Rendez-vous
            </Button>
          </div>

          {/* Menu Mobile */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Phone className="h-4 w-4 mr-2" />
                  +243 XXX XXX XXX
                </Button>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
