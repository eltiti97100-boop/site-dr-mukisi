import Header from "@/components/header"
import ProfessionalDiagnostic from "@/components/professional-diagnostic"
import Footer from "@/components/footer"

export default function DiagnosticPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-20">
        <ProfessionalDiagnostic />
      </div>
      <Footer />
    </main>
  )
}
