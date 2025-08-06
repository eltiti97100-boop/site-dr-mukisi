import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Droplets, Heart, Bone, LigatureIcon as Bandage, Clock, Users, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: Droplets,
      title: "Soins au Miel Médical",
      description:
        "Traitement des plaies, cicatrisation accélérée et soins dermatologiques avec du miel thérapeutique certifié.",
      features: ["Plaies chroniques", "Brûlures", "Eczéma", "Cicatrisation"],
      color: "amber",
      badge: "Spécialité",
    },
    {
      icon: Bone,
      title: "Chirurgie Orthopédique",
      description: "Interventions spécialisées sur l'appareil locomoteur avec techniques mini-invasives.",
      features: ["Chirurgie du genou", "Prothèses", "Arthroscopie", "Traumatologie"],
      color: "blue",
      badge: "Expertise",
    },
    {
      icon: Heart,
      title: "Médecine Drépanocytaire",
      description: "Prise en charge spécialisée de la drépanocytose, maladie fréquente aux Antilles.",
      features: ["Suivi personnalisé", "Gestion des crises", "Prévention", "Éducation"],
      color: "red",
      badge: "Spécialité Antilles",
    },
    {
      icon: Bandage,
      title: "Traumatologie",
      description: "Urgences traumatologiques adultes et pédiatriques avec prise en charge immédiate.",
      features: ["Fractures", "Urgences", "Traumatismes sportifs", "Pédiatrie"],
      color: "green",
      badge: "24/7",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      amber: "border-amber-200 bg-amber-50 text-amber-600",
      blue: "border-blue-200 bg-blue-50 text-blue-600",
      red: "border-red-200 bg-red-50 text-red-600",
      green: "border-green-200 bg-green-50 text-green-600",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4">Nos Spécialités</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Une Expertise <span className="text-amber-600">Reconnue</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez nos domaines d'expertise alliant médecine traditionnelle et innovations thérapeutiques
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`${getColorClasses(service.color)} hover:shadow-lg transition-all duration-300`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-lg ${
                          service.color === "amber"
                            ? "bg-amber-500"
                            : service.color === "blue"
                              ? "bg-blue-500"
                              : service.color === "red"
                                ? "bg-red-500"
                                : "bg-green-500"
                        }`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {service.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{service.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-current rounded-full opacity-60"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Statistiques */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center border-amber-200 bg-amber-50">
            <CardContent className="p-8">
              <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Disponibilité</h3>
              <p className="text-slate-600">Urgences prises en charge à tout moment</p>
            </CardContent>
          </Card>

          <Card className="text-center border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Patients</h3>
              <p className="text-slate-600">Patients satisfaits et suivis</p>
            </CardContent>
          </Card>

          <Card className="text-center border-green-200 bg-green-50">
            <CardContent className="p-8">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Années</h3>
              <p className="text-slate-600">D'expérience médicale</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
            <Link href="/rendez-vous" className="inline-flex items-center space-x-2">
              <span>Prendre rendez-vous</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
