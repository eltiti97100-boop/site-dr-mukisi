import type { Metadata } from "next"
import GallerySection from "@/components/gallery-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Galerie Professionnelle - Installations & Équipements",
  description:
    "Découvrez nos installations médicales de pointe, équipements dermatologiques avancés et espaces de formation d'excellence au cabinet du Dr Martin Mukisi en Guadeloupe.",
  keywords: [
    "galerie médicale Guadeloupe",
    "équipements dermatologie",
    "cabinet médical moderne",
    "installations médicales",
    "formation médicale Guadeloupe",
    "Dr Martin Mukisi installations",
  ],
  openGraph: {
    title: "Galerie Professionnelle - Dr Martin Mukisi",
    description: "Installations médicales de pointe et équipements dermatologiques avancés",
    images: ["/images/gallery-og.jpg"],
  },
}

export default function GalleriePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="pt-20">
          <GallerySection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
