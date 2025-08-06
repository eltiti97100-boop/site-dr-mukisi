import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutSection from "@/components/about-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-amber-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">À propos du Dr Mukisi</h1>
            <p className="text-xl text-slate-600">Découvrez le parcours et l'expertise du Dr Martin Mukisi Mukasa</p>
          </div>
        </div>
      </section>

      <AboutSection />
      <Footer />
    </div>
  )
}
