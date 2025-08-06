import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User, Eye, ArrowLeft, Share2, BookOpen } from "lucide-react"
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
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Introduction à l'Apithérapie Dermatologique</h2>
      <p>L'apithérapie, ou l'utilisation thérapeutique des produits de la ruche, représente une révolution dans le domaine des soins dermatologiques. Cette approche millénaire, aujourd'hui validée par la science moderne, offre des solutions innovantes pour de nombreuses pathologies cutanées.</p>
      
      <h3>Les Propriétés Thérapeutiques du Miel</h3>
      <p>Le miel thérapeutique possède des propriétés remarquables :</p>
      <ul>
        <li><strong>Antibactériennes</strong> : Action contre les infections cutanées</li>
        <li><strong>Anti-inflammatoires</strong> : Réduction de l'inflammation et des rougeurs</li>
        <li><strong>Cicatrisantes</strong> : Accélération de la régénération tissulaire</li>
        <li><strong>Hydratantes</strong> : Maintien de l'hydratation cutanée optimale</li>
      </ul>
      
      <h3>Applications Cliniques</h3>
      <p>Dans notre pratique en Guadeloupe, nous utilisons l'apithérapie pour traiter :</p>
      <ul>
        <li>Plaies chroniques et ulcères</li>
        <li>Eczéma et dermatites</li>
        <li>Psoriasis</li>
        <li>Acné et cicatrices</li>
        <li>Brûlures et coups de soleil</li>
      </ul>
      
      <blockquote>
        "L'apithérapie nous permet d'obtenir des résultats exceptionnels là où les traitements conventionnels atteignent leurs limites." - Dr Martin Mukisi
      </blockquote>
      
      <h3>Protocoles de Traitement</h3>
      <p>Nos protocoles d'apithérapie sont personnalisés selon :</p>
      <ol>
        <li>Le type de pathologie</li>
        <li>L'état général du patient</li>
        <li>La localisation des lésions</li>
        <li>La réponse aux traitements antérieurs</li>
      </ol>
      
      <h3>Résultats Cliniques</h3>
      <p>Nos études montrent des taux de guérison de 85% pour les plaies chroniques et une amélioration significative dans 92% des cas d'eczéma traités par apithérapie.</p>
      
      <h3>Formation et Recherche</h3>
      <p>Nous proposons des formations spécialisées en apithérapie dermatologique pour les professionnels de santé souhaitant intégrer cette approche dans leur pratique.</p>
    `,
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
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>La Révolution de la Télémédecine Dermatologique</h2>
      <p>La télémédecine transforme radicalement l'accès aux soins dermatologiques, particulièrement dans les territoires insulaires comme la Guadeloupe où l'accès aux spécialistes peut être limité.</p>
      
      <h3>Avantages de la Téléconsultation</h3>
      <p>La télémédecine dermatologique offre de nombreux bénéfices :</p>
      <ul>
        <li><strong>Accessibilité</strong> : Consultations depuis n'importe où dans la Caraïbe</li>
        <li><strong>Rapidité</strong> : Diagnostic et traitement sans délai</li>
        <li><strong>Efficacité</strong> : Suivi régulier facilité</li>
        <li><strong>Économies</strong> : Réduction des coûts de déplacement</li>
      </ul>
      
      <h3>Technologies Utilisées</h3>
      <p>Notre plateforme de télémédecine intègre :</p>
      <ul>
        <li>Caméras haute résolution pour l'examen cutané</li>
        <li>Dermatoscopes numériques connectés</li>
        <li>Intelligence artificielle d'aide au diagnostic</li>
        <li>Dossiers médicaux électroniques sécurisés</li>
      </ul>
      
      <h3>Pathologies Traitables à Distance</h3>
      <p>La téléconsultation dermatologique permet de traiter efficacement :</p>
      <ol>
        <li>Acné et troubles de la pigmentation</li>
        <li>Eczéma et dermatites</li>
        <li>Psoriasis et maladies inflammatoires</li>
        <li>Surveillance des grains de beauté</li>
        <li>Infections cutanées courantes</li>
      </ol>
      
      <blockquote>
        "La télémédecine nous permet d'offrir des soins dermatologiques de qualité à tous les habitants de la Caraïbe, sans contrainte géographique." - Dr Martin Mukisi
      </blockquote>
      
      <h3>Sécurité et Confidentialité</h3>
      <p>Nos consultations respectent les plus hauts standards de sécurité avec un chiffrement de bout en bout et une conformité RGPD complète.</p>
    `,
    tags: ["Téléconsultation", "Innovation", "Accessibilité"],
  },
]

interface PageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    return {
      title: "Article non trouvé",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header de l'article */}
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour au blog
              </Button>
            </Link>

            <Badge className="mb-4 bg-blue-100 text-blue-800">{post.category}</Badge>

            <h1 className="text-4xl font-bold text-slate-900 mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                {post.views} vues
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Share2 className="h-4 w-4 mr-2" />
                Partager
              </Button>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Image principale */}
          <div className="mb-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Contenu de l'article */}
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Navigation vers d'autres articles */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Autres articles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-green-100 text-green-800">{relatedPost.category}</Badge>
                      <h4 className="font-bold text-slate-900 mb-2 line-clamp-2">{relatedPost.title}</h4>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      <Link href={`/blog/${relatedPost.id}`}>
                        <Button variant="outline" size="sm">
                          Lire l'article
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
