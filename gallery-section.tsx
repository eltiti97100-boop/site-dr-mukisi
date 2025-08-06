"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Camera, Building, Stethoscope, GraduationCap, ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  // Cabinet Médical
  {
    id: 1,
    category: "Cabinet Médical",
    title: "Salle de consultation moderne",
    description: "Espace de consultation équipé des dernières technologies médicales pour un diagnostic précis.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Salle de consultation dermatologique moderne",
  },
  {
    id: 2,
    category: "Cabinet Médical",
    title: "Salle d'attente premium",
    description: "Espace d'accueil confortable et apaisant pour nos patients, avec vue sur jardin tropical.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Salle d'attente médicale premium",
  },
  {
    id: 3,
    category: "Cabinet Médical",
    title: "Réception et accueil",
    description: "Accueil chaleureux avec personnel qualifié pour vous accompagner dans vos démarches.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Réception médicale professionnelle",
  },
  {
    id: 4,
    category: "Cabinet Médical",
    title: "Salle de soins spécialisés",
    description: "Espace dédié aux soins dermatologiques avancés et à l'apithérapie.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Salle de soins dermatologiques",
  },
  {
    id: 5,
    category: "Cabinet Médical",
    title: "Bureau médical",
    description: "Espace de travail du Dr Mukisi pour consultations et télémédecine.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Bureau médical du Dr Mukisi",
  },
  {
    id: 6,
    category: "Cabinet Médical",
    title: "Salle de stérilisation",
    description: "Zone de stérilisation aux normes hospitalières pour la sécurité des patients.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Salle de stérilisation médicale",
  },
  {
    id: 7,
    category: "Cabinet Médical",
    title: "Pharmacie interne",
    description: "Pharmacie intégrée avec produits dermatologiques et préparations au miel.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Pharmacie médicale interne",
  },
  {
    id: 8,
    category: "Cabinet Médical",
    title: "Jardin thérapeutique",
    description: "Espace extérieur apaisant avec plantes médicinales tropicales.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Jardin thérapeutique tropical",
  },

  // Équipements
  {
    id: 9,
    category: "Équipements",
    title: "Dermatoscope numérique HD",
    description: "Dermatoscope haute définition pour diagnostic précis des lésions cutanées.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Dermatoscope numérique haute définition",
  },
  {
    id: 10,
    category: "Équipements",
    title: "Laser thérapeutique",
    description: "Laser de dernière génération pour traitements dermatologiques non-invasifs.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Laser thérapeutique dermatologique",
  },
  {
    id: 11,
    category: "Équipements",
    title: "Microscope confocal",
    description: "Microscope confocal pour analyse cellulaire en temps réel.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Microscope confocal médical",
  },
  {
    id: 12,
    category: "Équipements",
    title: "Système de télémédecine",
    description: "Équipement de pointe pour consultations à distance haute qualité.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Système de télémédecine avancé",
  },
  {
    id: 13,
    category: "Équipements",
    title: "Analyseur de peau IA",
    description: "Intelligence artificielle pour analyse automatisée des pathologies cutanées.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Analyseur de peau avec IA",
  },
  {
    id: 14,
    category: "Équipements",
    title: "Cryothérapie localisée",
    description: "Équipement de cryothérapie pour traitements ciblés et précis.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Équipement de cryothérapie",
  },

  // Formations
  {
    id: 15,
    category: "Formations",
    title: "Salle de formation interactive",
    description: "Espace de formation équipé pour sessions interactives et démonstrations.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Salle de formation médicale interactive",
  },
  {
    id: 16,
    category: "Formations",
    title: "Atelier pratique apithérapie",
    description: "Formation pratique sur l'utilisation thérapeutique du miel en dermatologie.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Atelier pratique d'apithérapie",
  },
  {
    id: 17,
    category: "Formations",
    title: "Simulation chirurgicale",
    description: "Mannequins et simulateurs pour formation en chirurgie dermatologique.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Simulation chirurgicale dermatologique",
  },
  {
    id: 18,
    category: "Formations",
    title: "Laboratoire de recherche",
    description: "Laboratoire dédié à la recherche en apithérapie et innovations dermatologiques.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Laboratoire de recherche médicale",
  },
  {
    id: 19,
    category: "Formations",
    title: "Amphithéâtre médical",
    description: "Amphithéâtre moderne pour conférences et formations de groupe.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Amphithéâtre médical moderne",
  },
  {
    id: 20,
    category: "Formations",
    title: "Studio de télé-enseignement",
    description: "Studio professionnel pour formations à distance et webinaires médicaux.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Studio de télé-enseignement médical",
  },
  {
    id: 21,
    category: "Formations",
    title: "Bibliothèque médicale",
    description: "Bibliothèque spécialisée avec ouvrages de référence en dermatologie.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Bibliothèque médicale spécialisée",
  },
  {
    id: 22,
    category: "Formations",
    title: "Salle de travaux pratiques",
    description: "Espace pour travaux pratiques et manipulations en groupe restreint.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Salle de travaux pratiques médicaux",
  },
  {
    id: 23,
    category: "Formations",
    title: "Centre de documentation",
    description: "Centre de ressources documentaires et archives médicales.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Centre de documentation médicale",
  },
  {
    id: 24,
    category: "Formations",
    title: "Espace de networking",
    description: "Zone de rencontre et d'échange entre professionnels de santé.",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Espace de networking médical",
  },
]

const categories = [
  {
    name: "Tous",
    count: galleryImages.length,
    icon: Camera,
    color: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  },
  {
    name: "Cabinet Médical",
    count: galleryImages.filter((img) => img.category === "Cabinet Médical").length,
    icon: Building,
    color: "bg-purple-100 text-purple-800 hover:bg-purple-200",
  },
  {
    name: "Équipements",
    count: galleryImages.filter((img) => img.category === "Équipements").length,
    icon: Stethoscope,
    color: "bg-green-100 text-green-800 hover:bg-green-200",
  },
  {
    name: "Formations",
    count: galleryImages.filter((img) => img.category === "Formations").length,
    icon: GraduationCap,
    color: "bg-orange-100 text-orange-800 hover:bg-orange-200",
  },
]

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "Tous" || image.category === selectedCategory,
  )

  const openModal = (image: (typeof galleryImages)[0]) => {
    setSelectedImage(image)
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id))
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
        : (currentImageIndex + 1) % filteredImages.length

    setCurrentImageIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 mb-6 px-6 py-2 text-lg">
            📸 Galerie Professionnelle
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Nos <span className="text-purple-600">Installations</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez nos installations de pointe, équipements médicaux avancés et espaces de formation d'excellence
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className={`${
                  selectedCategory === category.name
                    ? "bg-purple-600 text-white shadow-lg"
                    : `${category.color} border-0`
                } transition-all duration-300 hover:scale-105`}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {category.name}
                <Badge variant="secondary" className="ml-2 bg-white/20">
                  {category.count}
                </Badge>
              </Button>
            )
          })}
        </div>

        {/* Grille d'images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.image || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute top-3 left-3">
                  <Badge
                    className={
                      image.category === "Cabinet Médical"
                        ? "bg-purple-600 text-white"
                        : image.category === "Équipements"
                          ? "bg-green-600 text-white"
                          : "bg-orange-600 text-white"
                    }
                  >
                    {image.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4 bg-white">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {image.title}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal de visualisation */}
        <Dialog open={!!selectedImage} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
            {selectedImage && (
              <>
                <DialogHeader className="p-6 pb-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <DialogTitle className="text-2xl font-bold text-slate-900">{selectedImage.title}</DialogTitle>
                      <Badge className="mt-2 bg-purple-100 text-purple-800">{selectedImage.category}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-500">
                        {currentImageIndex + 1} / {filteredImages.length}
                      </span>
                      <Button variant="ghost" size="sm" onClick={closeModal} className="h-8 w-8 p-0">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </DialogHeader>

                <div className="relative">
                  <img
                    src={selectedImage.image || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    className="w-full h-96 object-cover"
                  />

                  {/* Navigation */}
                  {filteredImages.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigateImage("prev")}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-10 w-10 p-0 rounded-full"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigateImage("next")}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-10 w-10 p-0 rounded-full"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </>
                  )}
                </div>

                <div className="p-6">
                  <p className="text-slate-700 leading-relaxed">{selectedImage.description}</p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
