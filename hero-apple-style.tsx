"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Phone, MapPin, Star } from "lucide-react"
import Image from "next/image"

export default function HeroAppleStyle() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50" />

      {/* Motifs décoratifs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400 rounded-full blur-2xl" />
      </div>

      {/* Abeilles décoratives flottantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 text-4xl opacity-20 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        >
          🐝
        </div>
        <div
          className="absolute bottom-1/3 left-1/5 text-3xl opacity-15 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        >
          🐝
        </div>
        <div
          className="absolute top-2/3 right-1/5 text-2xl opacity-10 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        >
          🐝
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Médecine naturelle & thérapies au miel 🍯
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Dr Martin
              <span className="block text-amber-600">Mukisi</span>
            </h1>

            <p className="text-lg text-gray-600 mb-2">Soins Miel & Médecine Générale</p>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Médecin généraliste spécialisé dans les thérapies naturelles au miel. Une approche holistique pour votre
              bien-être et votre santé. 🌿
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">15+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">2000+</div>
                <div className="text-sm text-gray-600">Patients soignés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Prendre rendez-vous
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 border-amber-200 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                Nous contacter
              </Button>
            </div>

            {/* Localisation */}
            <div className="flex items-center justify-center lg:justify-start mt-6 text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">Kinshasa, République Démocratique du Congo</span>
            </div>
          </div>

          {/* Image du docteur */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Cercle décoratif */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl opacity-20 scale-110" />

              {/* Image */}
              <div className="relative bg-white rounded-full p-4 shadow-2xl">
                <div className="relative w-80 h-80 rounded-full overflow-hidden">
                  <Image
                    src="/images/dr-mukisi-photo.jpg"
                    alt="Dr Martin Mukisi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Badges flottants */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍯</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
              </div>

              {/* Abeille qui vole autour */}
              <div className="absolute top-1/4 -right-8 text-3xl animate-pulse opacity-30">🐝</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
