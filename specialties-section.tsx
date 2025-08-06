"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bone, Heart, LigatureIcon as Bandage, Droplets } from "lucide-react"

const specialties = [
  {
    title: "Chirurgie orthopédique",
    description: "Interventions spécialisées sur l'appareil locomoteur avec techniques mini-invasives",
    icon: Bone,
    color: "bg-blue-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Traumatologie adulte & enfant",
    description: "Prise en charge d'urgence et traitement des traumatismes complexes",
    icon: Heart,
    color: "bg-red-500",
    textColor: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Soins des plaies complexes",
    description: "Traitement avancé des plaies chroniques et infectieuses",
    icon: Bandage,
    color: "bg-green-500",
    textColor: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Médecine drépanocytaire",
    description: "Expertise spécialisée dans le traitement de la drépanocytose",
    icon: Droplets,
    color: "bg-purple-500",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export default function SpecialtiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Domaines d'expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Spécialités médicales</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise reconnue dans plusieurs domaines de la médecine moderne
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${specialty.bgColor} rounded-2xl flex items-center justify-center`}>
                      <Icon className={`h-8 w-8 ${specialty.textColor}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{specialty.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{specialty.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
