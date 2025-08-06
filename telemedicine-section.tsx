import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Video,
  Smartphone,
  Monitor,
  Shield,
  Clock,
  Users,
  Heart,
  Stethoscope,
  Calendar,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function TelemedicineSection() {
  const services = [
    {
      title: "Consultation Vidéo Premium",
      description: "Rendez-vous médicaux en haute définition avec diagnostic avancé",
      icon: Video,
      features: [
        "Vidéo HD sécurisée",
        "Partage d'écran médical",
        "Enregistrement consultation",
        "Prescription électronique",
      ],
      price: "80€",
      duration: "30-45 min",
      availability: "7j/7",
      color: "blue",
    },
    {
      title: "Télé-expertise Spécialisée",
      description: "Avis d'expert pour cas complexes avec analyse approfondie",
      icon: Stethoscope,
      features: [
        "Analyse de dossier complet",
        "Avis de second expert",
        "Recommandations détaillées",
        "Suivi personnalisé",
      ],
      price: "150€",
      duration: "60 min",
      availability: "Sur RDV",
      color: "purple",
    },
    {
      title: "Urgences Télémédecine",
      description: "Prise en charge immédiate des urgences médicales 24h/24",
      icon: Heart,
      features: ["Réponse sous 5 minutes", "Triage médical expert", "Orientation adaptée", "Suivi post-urgence"],
      price: "120€",
      duration: "15-30 min",
      availability: "24h/24",
      color: "red",
    },
    {
      title: "Suivi Chronique Digital",
      description: "Accompagnement continu des pathologies chroniques",
      icon: Monitor,
      features: [
        "Monitoring à distance",
        "Ajustement traitement",
        "Éducation thérapeutique",
        "Prévention personnalisée",
      ],
      price: "60€/mois",
      duration: "Continu",
      availability: "Programme",
      color: "green",
    },
  ]

  const technologies = [
    {
      name: "Plateforme Sécurisée RGPD",
      description: "Chiffrement de bout en bout et conformité totale",
      icon: Shield,
    },
    {
      name: "Multi-dispositifs",
      description: "Compatible smartphone, tablette et ordinateur",
      icon: Smartphone,
    },
    {
      name: "IA Diagnostique",
      description: "Intelligence artificielle d'aide au diagnostic",
      icon: Monitor,
    },
    {
      name: "Dossier Médical Numérique",
      description: "Centralisation et partage sécurisé des données",
      icon: Users,
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-indigo-500",
      purple: "from-purple-500 to-pink-500",
      red: "from-red-500 to-orange-500",
      green: "from-green-500 to-emerald-500",
    }
    return colors[color as keyof typeof colors]
  }

  const getBgColor = (color: string) => {
    const colors = {
      blue: "from-blue-50 to-indigo-50",
      purple: "from-purple-50 to-pink-50",
      red: "from-red-50 to-orange-50",
      green: "from-green-50 to-emerald-50",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* En-tête premium */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 mb-6 px-6 py-2 text-lg font-semibold">
            💻 Télémédecine Nouvelle Génération
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Consultations</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
              à Distance
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Révolutionnez votre accès aux soins avec notre plateforme de télémédecine de pointe, disponible 24h/24
            depuis la Guadeloupe et partout dans le monde
          </p>
        </div>

        {/* Services de télémédecine */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`border-0 shadow-2xl bg-gradient-to-br ${getBgColor(service.color)} text-slate-900 hover:scale-105 transition-all duration-500`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(service.color)} rounded-2xl flex items-center justify-center shadow-xl`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{service.price}</div>
                      <div className="text-sm text-slate-600">{service.duration}</div>
                    </div>
                  </div>

                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">Disponible {service.availability}</span>
                    </div>
                    <Badge className={`bg-gradient-to-r ${getColorClasses(service.color)} text-white`}>Premium</Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Services inclus :</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(service.color)} rounded-full`}
                          ></div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${getColorClasses(service.color)} hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Réserver maintenant
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Technologies utilisées */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Technologies de Pointe</h3>
            <p className="text-xl text-blue-200">Sécurité, performance et innovation au service de votre santé</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <Card
                  key={index}
                  className="border-0 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <Icon className="w-8 h-8 text-slate-900" />
                    </div>
                    <h4 className="text-lg font-bold mb-3">{tech.name}</h4>
                    <p className="text-blue-200 text-sm">{tech.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Processus de consultation */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Comment ça marche ?</h3>
            <p className="text-xl text-blue-200">Un processus simple et sécurisé en 4 étapes</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-slate-900">
                1
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Réservation</h4>
              <p className="text-blue-200 text-sm">Choisissez votre créneau en ligne</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-slate-900">
                2
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Préparation</h4>
              <p className="text-blue-200 text-sm">Remplissez votre questionnaire médical</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-slate-900">
                3
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Consultation</h4>
              <p className="text-blue-200 text-sm">Échangez avec le Dr Mukisi en vidéo</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-slate-900">
                4
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Suivi</h4>
              <p className="text-blue-200 text-sm">Recevez votre ordonnance et suivi</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Prêt pour votre première téléconsultation ?</h3>
            <p className="text-xl text-blue-200">Accédez aux soins d'excellence depuis chez vous</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8"
            >
              <Link href="/rendez-vous" className="flex items-center space-x-2">
                <Video className="w-5 h-5" />
                <span>Première consultation</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 bg-transparent"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Poser une question</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
