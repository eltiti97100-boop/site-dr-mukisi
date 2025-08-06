import Header from "@/components/header"
import Footer from "@/components/footer"
import FormationsSection from "@/components/formations-section"

export default function FormationsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Formations Médicales
              </span>
            </h1>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Développez votre expertise avec nos programmes de formation d'excellence dispensés par le Dr Mukisi
            </p>
          </div>
        </div>
      </section>

      <FormationsSection />
      <Footer />
    </div>
  )
}
