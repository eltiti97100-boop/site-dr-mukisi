import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Shield, Award, Users, Video, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-blue-50 py-24 overflow-hidden">
      {/* Éléments décoratifs de prestige */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-200/20 rounded-full blur-2xl animate-bounce"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu principal premium */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 hover:from-amber-200 hover:to-orange-200 px-4 py-2 text-sm font-semibold">
                  ✨ Excellence Médicale Certifiée
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 hover:from-blue-200 hover:to-indigo-200 px-4 py-2 text-sm font-semibold">
                  🏥 Innovations Thérapeutiques
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-700 bg-clip-text text-transparent">
                  Médecine d'
                </span>
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
                  Excellence
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-4xl lg:text-5xl">
                  & Innovation
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
                Le <strong className="text-slate-800">Dr Martin Mukisi</strong> révolutionne la médecine en Guadeloupe
                avec une approche unique combinant
                <strong className="text-amber-700"> soins au miel thérapeutique</strong>,
                <strong className="text-blue-700"> télémédecine avancée</strong> et
                <strong className="text-green-700"> formations médicales d'excellence</strong>.
              </p>
            </div>

            {/* Stats prestigieuses */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-100">
                <div className="flex text-amber-400 justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600 font-medium">Patients</div>
              </div>

              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-600 font-medium">Années</div>
              </div>

              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100">
                <GraduationCap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">200+</div>
                <div className="text-sm text-slate-600 font-medium">Formés</div>
              </div>

              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100">
                <Video className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-600 font-medium">Télémédecine</div>
              </div>
            </div>

            {/* Localisation prestigieuse */}
            <div className="flex items-center space-x-3 text-slate-600">
              <MapPin className="w-6 h-6 text-amber-600" />
              <span className="text-lg font-medium">
                Guadeloupe, Antilles françaises • Centre d'Excellence Médicale
              </span>
            </div>

            {/* Boutons d'action premium */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/rendez-vous" className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Consultation Privée</span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="/telemedecine" className="flex items-center space-x-2">
                  <Video className="w-5 h-5" />
                  <span>Téléconsultation</span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="/formations" className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Formations Pro</span>
                </Link>
              </Button>
            </div>

            {/* Garanties de prestige */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-green-100">
                <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Certifié Bio</p>
                  <p className="text-sm text-slate-600">Produits naturels premium</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100">
                <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Disponible 24/7</p>
                  <p className="text-sm text-slate-600">Urgences & télémédecine</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-purple-100">
                <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Formation Pro</p>
                  <p className="text-sm text-slate-600">Médecins & soignants</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo premium avec effets */}
          <div className="text-center lg:text-right">
            <div className="relative inline-block">
              {/* Cercles décoratifs */}
              <div className="absolute -inset-8 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-xl animate-pulse delay-500"></div>

              {/* Logo principal */}
              <div className="relative">
                <Image
                  src="/images/logo-soins-miel-complet.png"
                  alt="Dr Martin Mukisi - Excellence Médicale"
                  width={450}
                  height={450}
                  className="mx-auto hover:scale-110 transition-all duration-700 drop-shadow-2xl"
                  priority
                />

                {/* Effet de brillance animé */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-full animate-pulse"></div>

                {/* Badge de certification */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-full shadow-xl animate-bounce">
                  <Award className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Badges flottants premium */}
            <div className="mt-8 space-y-4">
              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg px-6 py-3 shadow-xl">
                🏥 Centre d'Excellence Médicale Certifié
              </Badge>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2">
                  🍯 Apithérapie Avancée
                </Badge>
                <Badge className="bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2">
                  🎓 Formation Médicale
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2">
                  💻 Télémédecine 4.0
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
