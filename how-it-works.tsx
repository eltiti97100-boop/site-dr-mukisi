"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Brain, FileText, MapPin, Calendar, Shield } from "lucide-react"
import DownloadModal from "./download-modal"

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const steps = [
    {
      icon: Camera,
      title: "Photographiez",
      description: "Prenez une photo claire de la zone cutanée concernée avec votre smartphone",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Brain,
      title: "Analysez",
      description: "Notre IA médicale analyse l'image en moins de 2 secondes",
      color: "from-green-500 to-green-600",
    },
    {
      icon: FileText,
      title: "Diagnostic",
      description: "Recevez un rapport détaillé avec diagnostic et recommandations",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: MapPin,
      title: "Localisez",
      description: "Trouvez les dermatologues les plus proches de votre position",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Calendar,
      title: "Consultez",
      description: "Prenez rendez-vous directement avec le spécialiste recommandé",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Shield,
      title: "Sécurisé",
      description: "Vos données sont protégées et conformes aux normes médicales",
      color: "from-indigo-500 to-blue-500",
    },
  ]

  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* En-tête */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>🔄</span>
                <span>Processus simple</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Comment ça{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  fonctionne
                </span>{" "}
                ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                6 étapes simples pour obtenir votre diagnostic dermatologique
              </p>
            </div>

            {/* Timeline des étapes */}
            <div className="relative">
              {/* Ligne de connexion */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 transform -translate-y-1/2"></div>

              {/* Grille des étapes */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <Card
                    key={index}
                    className="group relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
                  >
                    {/* Numéro d'étape */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>

                    <CardContent className="p-8 text-center">
                      {/* Icône */}
                      <div className="mb-6">
                        <div
                          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform`}
                        >
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>

                      {/* Contenu */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {step.description}
                      </p>
                    </CardContent>

                    {/* Effet de brillance au survol */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Prêt à commencer ?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Rejoignez des milliers d'utilisateurs qui font confiance à Dermato pour leur santé cutanée
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl">
                    🔍 Commencer l'analyse
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="border-2 border-blue-300 text-blue-700 hover:border-blue-400 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-colors bg-transparent"
                  >
                    📱 Télécharger l'app
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
