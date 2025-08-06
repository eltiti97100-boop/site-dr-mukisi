"use client"

import { Badge } from "@/components/ui/badge"
import { Users, Clock, Heart, Headphones, MapPin } from "lucide-react"

const stats = [
  {
    number: "500+",
    label: "Patients traités",
    icon: Users,
  },
  {
    number: "15+",
    label: "Années d'expérience",
    icon: Clock,
  },
  {
    number: "98%",
    label: "Taux de satisfaction",
    icon: Heart,
  },
  {
    number: "24/7",
    label: "Téléconsultation",
    icon: Headphones,
  },
]

const features = [
  {
    title: "Diagnostic précis",
    subtitle: "Technologies avancées",
    icon: "🔬",
    color: "bg-yellow-500",
  },
  {
    title: "Soins sécurisés",
    subtitle: "Protocoles stricts",
    icon: "🛡️",
    color: "bg-yellow-500",
  },
  {
    title: "Intervention rapide",
    subtitle: "Urgences 24/7",
    icon: "⚡",
    color: "bg-yellow-500",
  },
  {
    title: "Approche humaine",
    subtitle: "Écoute & empathie",
    icon: "💝",
    color: "bg-yellow-500",
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-800">À propos du Dr Mukisi</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Excellence médicale & <span className="text-yellow-500">innovation</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Le Dr Martin Mukisi est un spécialiste reconnu en chirurgie orthopédique, traumatologie et soins des
              plaies complexes. Basé en Guadeloupe, il révolutionne la médecine locale grâce à des solutions de
              télémédecine de pointe qui rapprochent les soins spécialisés des patients.
            </p>
            <div className="flex items-center text-gray-600 mb-8">
              <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
              Guadeloupe, Antilles françaises
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center text-white">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                  >
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
