import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  FileText,
  Shield,
  Clock,
  Award,
  Database,
  Stethoscope,
  GraduationCap,
  Phone,
  BarChart3,
  Lock,
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "IA Médicale",
      subtitle: "Certifiée",
      description: "Algorithmes validés par 200+ dermatologues experts sur 100k+ cas cliniques",
      color: "from-blue-600 to-blue-700",
      badge: "CE médical",
    },
    {
      icon: FileText,
      title: "Dossiers",
      subtitle: "Patients",
      description: "Gestion complète des dossiers avec historique, photos et rapports détaillés",
      color: "from-green-600 to-green-700",
      badge: "RGPD",
    },
    {
      icon: Shield,
      title: "Sécurité",
      subtitle: "Maximale",
      description: "Hébergement HDS, chiffrement bout-en-bout et conformité réglementaire",
      color: "from-purple-600 to-purple-700",
      badge: "HDS",
    },
    {
      icon: Clock,
      title: "Diagnostic",
      subtitle: "Instantané",
      description: "Analyse en 2 secondes avec rapport détaillé et recommandations thérapeutiques",
      color: "from-orange-600 to-red-600",
      badge: "Temps réel",
    },
    {
      icon: Database,
      title: "Base de données",
      subtitle: "Médicale",
      description: "Accès à une bibliothèque de 50k+ cas dermatologiques référencés",
      color: "from-indigo-600 to-blue-600",
      badge: "50k+ cas",
    },
    {
      icon: GraduationCap,
      title: "Formation",
      subtitle: "Continue",
      description: "Modules DPC, cas cliniques interactifs et mises à jour scientifiques",
      color: "from-pink-600 to-rose-600",
      badge: "DPC",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      subtitle: "Pratique",
      description: "Statistiques de votre activité et indicateurs de performance diagnostique",
      color: "from-teal-600 to-cyan-600",
      badge: "Insights",
    },
    {
      icon: Phone,
      title: "Télémédecine",
      subtitle: "Intégrée",
      description: "Consultations à distance avec partage sécurisé des diagnostics",
      color: "from-violet-600 to-purple-600",
      badge: "Téléconsult",
    },
    {
      icon: Stethoscope,
      title: "Support",
      subtitle: "Médical",
      description: "Équipe de dermatologues disponible 24/7 pour second avis",
      color: "from-slate-600 to-slate-700",
      badge: "24/7",
    },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-20">
            <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100 mb-6">
              <Award className="h-4 w-4 mr-2" />
              Fonctionnalités professionnelles
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Tout ce dont vous avez besoin pour votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">
                pratique
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une suite complète d'outils conçus spécifiquement pour les professionnels de la dermatologie
            </p>
          </div>

          {/* Grille des fonctionnalités */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden relative"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-slate-100 text-slate-700 text-xs">{feature.badge}</Badge>
                </div>

                <CardHeader className="text-center pb-4 pt-8">
                  <div className="mx-auto mb-4">
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-105 transform transition-transform`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-900 group-hover:text-slate-800 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <p className="text-lg font-medium text-slate-600 group-hover:text-slate-700 transition-colors">
                    {feature.subtitle}
                  </p>
                </CardHeader>

                <CardContent className="text-center px-6 pb-8">
                  <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                    {feature.description}
                  </p>
                </CardContent>

                {/* Effet de brillance */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Prêt à transformer votre pratique ?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Rejoignez plus de 500 dermatologues qui utilisent déjà Dermato Pro pour améliorer leurs diagnostics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <Lock className="h-4 w-4" />
                  <span>Accès professionnel</span>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 px-8 py-3 rounded-lg font-medium transition-colors bg-transparent flex items-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Demander une démo</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
