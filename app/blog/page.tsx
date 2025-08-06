import type { Metadata } from "next"
import BlogSection from "@/components/blog-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog Médical - Actualités & Expertise Dermatologique",
  description:
    "Découvrez les dernières avancées en dermatologie, innovations en apithérapie et conseils d'experts du Dr Martin Mukisi. Articles médicaux de référence en Guadeloupe.",
  keywords: [
    "blog dermatologie Guadeloupe",
    "actualités médicales",
    "apithérapie articles",
    "télémédecine dermatologie",
    "Dr Martin Mukisi blog",
    "conseils dermatologiques",
    "innovations médicales Antilles",
  ],
  openGraph: {
    title: "Blog Médical - Dr Martin Mukisi",
    description: "Actualités et expertise en dermatologie, apithérapie et télémédecine",
    images: ["/images/blog-og.jpg"],
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="pt-20">
          <BlogSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
