"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Calendar, User, Search, Filter, ArrowRight, Clock, Eye } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "L'Apithérapie : Révolution des Soins Dermatologiques",
    excerpt:
      "Découvrez comment le miel thérapeutique transforme le traitement des affections cutanées avec des résultats cliniques exceptionnels.",
    category: "Apithérapie",
    author: "Dr Martin Mukisi",
    date: "2024-01-15",
    readTime: "8 min",
    views: 1250,
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    tags: ["Miel thérapeutique", "Cicatrisation", "Innovation"],
  },
  {
    id: 2,
    title: "Télémédecine en Dermatologie : L'Avenir des Consultations",
    excerpt: "Comment la télémédecine révolutionne l'accès aux soins dermatologiques en Guadeloupe et dans la Caraïbe.",
    category: "Télémédecine",
    author: "Dr Martin Mukisi",
    date: "2024-01-10",
    readTime: "6 min",
    views: 980,
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["Téléconsultation", "Innovation", "Accessibilité"],
  },
  {
    id: 3,
    title: "Chirurgie Dermatologique Avancée : Techniques Innovantes",
    excerpt:
      "Les dernières avancées en chirurgie dermatologique pour des résultats esthétiques et fonctionnels optimaux.",
    category: "Chirurgie",
    author: "Dr Martin Mukisi",
    date: "2024-01-05",
    readTime: "10 min",
    views: 1450,
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    tags: ["Chirurgie", "Techniques", "Esthétique"],
  },
  {
    id: 4,
    title: "Intelligence Artificielle en Diagnostic Dermatologique",
    excerpt: "L'IA révolutionne le diagnostic précoce des pathologies cutanées avec une précision inégalée.",
    category: "Innovation",
    author: "Dr Martin Mukisi",
    date: "2023-12-28",
    readTime: "7 min",
    views: 2100,
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["IA", "Diagnostic", "Technologie"],
  },
  {
    id: 5,
    title: "Formations Médicales : Excellence et Innovation",
    excerpt: "Nos programmes de formation continue pour les professionnels de santé en dermatologie moderne.",
    category: "Formation",
    author: "Dr Martin Mukisi",
    date: "2023-12-20",
    readTime: "5 min",
    views: 750,
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["Formation", "Éducation", "Professionnels"],
  },
  {
    id: 6,
    title: "Dermatologie Tropicale : Spécificités Caribéennes",
    excerpt: "Comprendre et traiter les pathologies dermatologiques spécifiques au climat tropical des Antilles.",
    category: "Dermatologie",
    author: "Dr Martin Mukisi",
    date: "2023-12-15",
    readTime: "9 min",
    views: 1680,
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    tags: ["Tropical", "Caraïbe", "Spécialités"],
  },
]

const categories = [
  { name: "Tous", count: blogPosts.length, color: "bg-blue-100 text-blue-800" },
  { name: "Apithérapie", count: 1, color: "bg-amber-100 text-amber-800" },
  { name: "Télémédecine", count: 1, color: "bg-green-100 text-green-800" },
  { name: "Chirurgie", count: 1, color: "bg-red-100 text-red-800" },
  { name: "Innovation", count: 1, color: "bg-purple-100 text-purple-800" },
  { name: "Formation", count: 1, color: "bg-indigo-100 text-indigo-800" },
  { name: "Dermatologie", count: 1, color: "bg-pink-100 text-pink-800" },
]

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const recentPosts = filteredPosts.filter((post) => !post.featured).slice(0, 3)

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 mb-6 px-6 py-2 text-lg">
            📚 Blog Médical
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Actualités & <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez les dernières avancées en dermatologie, nos innovations thérapeutiques et conseils d'experts
          </p>
        </div>

        {/* Recherche et Filtres */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Barre de recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className={`${
                    selectedCategory === category.name
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  } transition-all duration-300`}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles en vedette */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
              Articles en vedette
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-slate-600">
                      <Eye className="h-4 w-4 inline mr-1" />
                      {post.views}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString("fr-FR")}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group">
                        Lire l'article
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Articles récents */}
        {recentPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <Clock className="h-6 w-6 mr-3 text-green-600" />
              Articles récents
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-green-600 text-white text-xs">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                      <span>{new Date(post.date).toLocaleDateString("fr-FR")}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.views} vues</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm" className="w-full group bg-transparent">
                        Lire la suite
                        <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">📧 Newsletter Médicale</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Recevez nos derniers articles, conseils d'experts et actualités médicales directement dans votre boîte
              mail. Plus de 1000+ professionnels de santé nous font déjà confiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="votre@email-professionnel.com"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">S'abonner</Button>
            </div>
            <p className="text-xs text-blue-200 mt-4">Pas de spam. Désabonnement possible à tout moment.</p>
          </CardContent>
        </Card>

        {/* Voir tous les articles */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button
              size="lg"
              className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Voir tous les articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
