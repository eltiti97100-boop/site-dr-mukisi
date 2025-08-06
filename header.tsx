"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Video, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Premium */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src="/images/logo-soins-miel-complet.png"
                alt="Dr Martin Mukisi - Excellence Médicale"
                width={65}
                height={65}
                className="rounded-full ring-4 ring-amber-200 shadow-lg hover:ring-amber-300 transition-all duration-300"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-amber-700 bg-clip-text text-transparent">
                Dr Martin Mukisi
              </h1>
              <p className="text-sm text-slate-600 font-medium">Excellence Médicale • Guadeloupe</p>
            </div>
          </Link>

          {/* Navigation Desktop Premium */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-amber-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="text-slate-700 hover:text-amber-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Services
            </Link>
            <Link
              href="/formations"
              className="text-slate-700 hover:text-amber-600 font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-1"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Formations</span>
            </Link>
            <Link
              href="/telemedecine"
              className="text-slate-700 hover:text-amber-600 font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-1"
            >
              <Video className="w-4 h-4" />
              <span>Télémédecine</span>
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-amber-600 font-medium transition-all duration-300 hover:scale-105"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-amber-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info & CTA Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Phone className="w-4 h-4 text-amber-600" />
              <span className="font-medium">+590 590 XX XX XX</span>
            </div>
            <div className="flex space-x-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
              >
                <Link href="/telemedecine">Téléconsultation</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg"
              >
                <Link href="/rendez-vous">Prendre RDV</Link>
              </Button>
            </div>
          </div>

          {/* Menu Mobile */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown Premium */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-amber-100 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-slate-700 hover:text-amber-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/services"
                className="text-slate-700 hover:text-amber-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/formations"
                className="text-slate-700 hover:text-amber-600 font-medium transition-colors py-2 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Formations</span>
              </Link>
              <Link
                href="/telemedecine"
                className="text-slate-700 hover:text-amber-600 font-medium transition-colors py-2 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Video className="w-4 h-4" />
                <span>Télémédecine</span>
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-amber-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-amber-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-6 border-t border-amber-100 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span className="font-medium">+590 590 XX XX XX</span>
                </div>
                <div className="flex flex-col space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                  >
                    <Link href="/telemedecine" onClick={() => setIsMenuOpen(false)}>
                      Téléconsultation
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                  >
                    <Link href="/rendez-vous" onClick={() => setIsMenuOpen(false)}>
                      Prendre RDV
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
