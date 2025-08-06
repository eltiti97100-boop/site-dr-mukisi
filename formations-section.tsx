import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Clock, Award, BookOpen, Video, BadgeIcon as Certificate, Star } from "lucide-react"
import Link from "next/link"

export default function FormationsSection() {
  const formations = [
    {
      title: "Apithérapie Médicale Avancée",
      description: "Formation complète sur l'utilisation thérapeutique du miel en médecine moderne",
      duration: "3 jours intensifs",
      participants: "12 max",
      level: "Professionnel",
      price: "1 200€",
      features: [
        "Propriétés thérapeutiques du miel",
        "Protocoles de soins avancés",
        "Cas cliniques pratiques",
        "Certification officielle",
      ],
      badge: "Exclusif",
      color: "amber",
      icon: BookOpen,
    },
    {
      title: "Chirurgie Orthopédique Mini-Invasive",
      description: "Techniques chirurgicales de pointe pour les interventions orthopédiques",
      duration: "5 jours",
      participants: "8 max",
      level: "Expert",
      price: "2 500€",
      features: [
        "Techniques arthroscopiques",
        "Chirurgie assistée par ordinateur",
        "Gestion post-opératoire",
        "Ateliers pratiques",
      ],
      badge: "Premium",
      color: "blue",
      icon: Award,
    },
    {
      title: "Médecine Drépanocytaire Tropicale",
      description: "Spécialisation dans la prise en charge de la drépanocytose aux Antilles",
      duration: "2 jours",
      participants: "15 max",
      level: "Spécialisé",
      price: "800€",
      features: ["Épidémiologie antillaise", "Protocoles de crise", "Suivi personnalisé", "Approche familiale"],
      badge: "Antilles",
      color: "red",
      icon: Users,
    },
    {
      title: "Télémédecine & Innovation Digitale",
      description: "Maîtrise des outils de télémédecine et consultation à distance",
      duration: "1 jour",
      participants: "20 max",
      level: "Tous niveaux",
      price: "400€",
      features: ["Plateformes de téléconsultation", "Diagnostic à distance", "Réglementation RGPD", "Outils connectés"],
      badge: "Digital",
      color: "purple",
      icon: Video,
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      amber: "from-amber-500 to-orange-500",
      blue: "from-blue-500 to-indigo-500",
      red: "from-red-500 to-pink-500",
      purple: "from-purple-500 to-indigo-500",
    }
    return colors[color as keyof typeof colors]
  }

  const getBadgeColor = (color: string) => {
    const colors = {
      amber: "bg-amber-100 text-amber-800",
      blue: "bg-blue-100 text-blue-800",
      red: "bg-red-100 text-red-800",
      purple: "bg-purple-100 text-purple-800",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête premium */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 mb-6 px-6 py-2 text-lg">
            🎓 Centre de Formation Médicale d'Excellence
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Formations
            </span>
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
              Professionnelles
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Développez votre expertise avec nos formations médicales de pointe, dispensées par le Dr Mukisi et son
            équipe d'experts internationaux
          </p>
        </div>

        {/* Stats de formation */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center border-0 shadow-xl bg-gradient-to-br from-amber-50 to-orange-50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">200+</div>
              <p className="text-slate-600 font-medium">Professionnels formés</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Certificate className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">98%</div>
              <p className="text-slate-600 font-medium">Taux de satisfaction</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
              <p className="text-slate-600 font-medium">Certifications délivrées</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">5★</div>
              <p className="text-slate-600 font-medium">Note moyenne</p>
            </CardContent>
          </Card>
        </div>

        {/* Grille des formations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {formations.map((formation, index) => {
            const Icon = formation.icon
            return (
              <Card
                key={index}
                className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(formation.color)} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge className={`${getBadgeColor(formation.color)} font-semibold px-3 py-1`}>
                      {formation.badge}
                    </Badge>
                  </div>

                  <CardTitle className="text-2xl text-slate-900 mb-3">{formation.title}</CardTitle>
                  <p className="text-slate-600 leading-relaxed">{formation.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Détails de la formation */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{formation.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{formation.participants}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{formation.level}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-slate-900">{formation.price}</span>
                    </div>
                  </div>

                  {/* Contenu de la formation */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Programme inclus :</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {formation.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(formation.color)} rounded-full`}
                          ></div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bouton d'inscription */}
                  <Button
                    className={`w-full bg-gradient-to-r ${getColorClasses(formation.color)} hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                  >
                    S'inscrire à la formation
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Section avantages */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-slate-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi choisir nos formations ?</h3>
            <p className="text-xl text-slate-600">
              L'excellence pédagogique au service de votre développement professionnel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Expertise Reconnue</h4>
              <p className="text-slate-600">Formations dispensées par des experts reconnus internationalement</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Certificate className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Certification Officielle</h4>
              <p className="text-slate-600">Diplômes et certifications reconnus par les instances médicales</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Accompagnement Personnalisé</h4>
              <p className="text-slate-600">Suivi individuel et groupes restreints pour un apprentissage optimal</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-12 py-4 text-lg"
          >
            <Link href="/contact">Demander un programme personnalisé</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
