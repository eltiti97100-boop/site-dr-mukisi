import Header from "@/components/header"
import Footer from "@/components/footer"
import TelemedicineSection from "@/components/telemedicine-section"

export default function TelemedicinePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Télémédecine Avancée
              </span>
            </h1>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Consultations médicales de qualité à distance avec le Dr Mukisi, disponibles 24h/24 depuis la Guadeloupe
            </p>
          </div>
        </div>
      </section>

      <TelemedicineSection />
      <Footer />
    </div>
  )
}
