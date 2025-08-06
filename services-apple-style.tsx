"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Stethoscope, Leaf, Shield, Users, Clock } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Consultation Générale",
    description: "Examens médicaux complets et suivi personnalisé pour votre santé globale.",
    features: ["Bilan de santé", "Diagnostic médical", "Suivi personnalisé"],
  },
  {
    icon: Leaf,
    title: "Thérapies au Miel",
    description: "Traitements naturels utilisant les propriétés thérapeutiques du miel.",
    features: ["Cicatrisation", "Anti-inflammatoire", "Renforcement immunitaire"],
  },
  {
    icon: Stethoscope,
    title: "Médecine Préventive",
    description: "Prévention et dépistage précoce des maladies pour une meilleure santé.",
    features: ["Vaccinations", "Dépistages", "Conseils préventifs"],
  },
  {
    icon: Shield,
    title: "Soins d'Urgence",
    description: "Prise en charge rapide des urgences médicales et premiers secours.",
    features: ["Urgences 24h/7j", "Premiers secours", "Stabilisation"],
  },
  {
    icon: Users,
    title: "Médecine Familiale",
    description: "Soins médicaux pour toute la famille, de la pédiatrie à la gériatrie.",
    features: ["Pédiatrie", "Adultes", "Personnes âgées"],
  },
  {
    icon: Clock,
    title: "Consultations à Domicile",
    description: "Visites médicales à domicile pour les patients à mobilité réduite.",
    features: ["Visites programmées", "Urgences domicile", "Suivi post-hospitalier"],
  },
]

export default function ServicesAppleStyle() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-4">
            <Stethoscope className="h-4 w-4 mr-2" />
            Nos Services Médicaux
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Une Approche Complète de la Santé</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des soins médicaux de qualité alliant médecine moderne et thérapies naturelles pour votre bien-être optimal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-6 group-hover:bg-amber-200 transition-colors">
                  <service.icon className="h-8 w-8 text-amber-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Besoin d'une consultation ou d'informations sur nos services ?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors">
              Prendre rendez-vous
            </button>
            <button className="px-8 py-3 border border-amber-200 text-amber-700 hover:bg-amber-50 rounded-lg font-medium transition-colors">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
