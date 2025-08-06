import Header from "@/components/header"
import SkinAnalyzer from "@/components/skin-analyzer"
import Footer from "@/components/footer"

export default function ScannerPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <SkinAnalyzer />
      </div>
      <Footer />
    </main>
  )
}
