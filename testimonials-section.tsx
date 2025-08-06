"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Marie-Claire Dubois",
      age: 45,
      location: "Pointe-à-Pitre",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "2024-01-10",
      service: "Soins au miel médical",
      testimonial:
        "Le Dr Mukisi a révolutionné ma prise en charge médicale. Ses soins au miel ont guéri une plaie chronique que j'avais depuis des mois. Son approche bienveillante et son expertise exceptionnelle font de lui un médecin d'exception. Je recommande vivement !",
      verified: true,
    },
    {
      id: 2,
      name: "Jean-Baptiste Martin",
      age: 52,
      location: "Basse-Terre",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "2024-01-08",
      service: "Chirurgie orthopédique",
      testimonial:
        "Opéré du genou par le Dr Mukisi avec ses techniques mini-invasives, je suis émerveillé par les résultats. Récupération rapide, douleurs minimales, et un suivi post-opératoire exemplaire. Un chirurgien de talent avec une équipe formidable.",
      verified: true,
    },
    {
      id: 3,
      name: "Dr Sophie Lemaire",
      age: 38,
      location: "Martinique",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "2024-01-05",
      service: "Formation professionnelle",
      testimonial:
        "La formation en apithérapie dispensée par le Dr Mukisi a transformé ma pratique médicale. Contenu d'excellence, approche pédagogique remarquable, et certification reconnue. Une expérience enrichissante que je recommande à tous mes confrères.",
      verified: true,
    },
    {
      id: 4,
      name: "Claudette Rosine",
      age: 67,
      location: "Le Gosier",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "2024-01-03",
      service: "Suivi drépanocytose",
      testimonial:
        "Le Dr Mukisi suit ma drépanocytose depuis 3 ans. Son expertise dans cette maladie et son approche humaine ont considérablement amélioré ma qualité de vie. Disponible, à l'écoute, et toujours de bon conseil. Un médecin exceptionnel !",
      verified: true,
    },
    {
      id: 5,
      name: "Marc Bellanger",
      age: 41,
      location: "Saint-François",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "2023-12-28",
      service: "Téléconsultation",
      testimonial:
        "Vivant à l'étranger, les téléconsultations avec le Dr Mukisi me permettent de bénéficier de son expertise à distance. Technologie de pointe, diagnostic précis, et suivi personnalisé. La médecine du futur est déjà là !",
      verified: true,
    },
    {
      id: 6,
      name: "Infirmière Patricia Louis",
      age: 35,
      location: "Sainte-Anne",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "2023-12-25",
      service: "Formation continue",
      testimonial:
        "Les formations du Dr Mukisi sont d'un niveau exceptionnel. Contenu actualisé, méthodes innovantes, et encadrement personnalisé. Ces formations ont enrichi mes compétences et amélioré la qualité des soins que je prodigue à mes patients.",
      verified: true,
    },
    {
      id: 7,
      name: "Robert Céleste",
      age: 58,
      location: "Le Moule",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "2023-12-20",
      service: "Consultation générale",
      testimonial:
        "Médecin de famille depuis 5 ans, le Dr Mukisi allie compétence technique et qualités humaines exceptionnelles. Toujours disponible, explications claires, et traitements efficaces. Un professionnel de santé remarquable !",
      verified: true,
    },
    {
      id: 8,
      name: "Amélie Fontaine",
      age: 29,
      location: "Capesterre",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "2023-12-15",
      service: "Urgence médicale",
      testimonial:
        "Prise en charge d'urgence un dimanche soir par le Dr Mukisi. Réactivité impressionnante, diagnostic rapide et précis, soins d'excellence. Sa disponibilité 24h/24 est un véritable atout pour notre territoire. Merci docteur !",
      verified: true,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
  const totalReviews = testimonials.length

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 mb-6 px-6 py-2 text-lg">
            ⭐ Témoignages Patients
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ils nous font <span className="text-green-600">Confiance</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Découvrez les témoignages authentiques de nos patients et confrères qui ont fait l'expérience de notre
            excellence médicale
          </p>

          {/* Stats globales */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-3xl font-bold text-slate-900">{averageRating.toFixed(1)}</span>
              </div>
              <p className="text-slate-600 font-medium">Note moyenne</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">{totalReviews}+</div>
              <p className="text-slate-600 font-medium">Avis vérifiés</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">98%</div>
              <p className="text-slate-600 font-medium">Recommandent</p>
            </div>
          </div>
        </div>

        {/* Témoignage principal */}
        <div className="relative mb-16">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <Image
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full ring-4 ring-green-200"
                  />
                  {testimonials[currentTestimonial].verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{testimonials[currentTestimonial].name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-600">
                        <span>{testimonials[currentTestimonial].age} ans</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{testimonials[currentTestimonial].location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(testimonials[currentTestimonial].date).toLocaleDateString("fr-FR")}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <Badge className="bg-blue-100 text-blue-800 mb-4">{testimonials[currentTestimonial].service}</Badge>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-200" />
                    <p className="text-lg text-slate-700 leading-relaxed pl-6">
                      {testimonials[currentTestimonial].testimonial}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-green-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-green-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-green-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-green-600" />
          </button>
        </div>

        {/* Grille de témoignages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                index === currentTestimonial ? "ring-2 ring-green-500 bg-green-50" : "bg-white/80 backdrop-blur-sm"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.location}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 text-sm line-clamp-3">{testimonial.testimonial}</p>
                <Badge className="mt-3 text-xs bg-slate-100 text-slate-700">{testimonial.service}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Rejoignez nos patients satisfaits</h3>
              <p className="text-green-100 mb-6">Bénéficiez vous aussi de notre expertise médicale d'excellence</p>
              <Button className="bg-white text-green-600 hover:bg-green-50 px-8">Prendre rendez-vous</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
