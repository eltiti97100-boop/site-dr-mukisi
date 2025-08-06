"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Code, Stethoscope, ArrowRight } from "lucide-react"
import IntegrationRequest from "@/components/integration-request"
import DownloadModal from "@/components/download-modal"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"

export default function DermatoAppPage() {
  const [showIntegrationRequest, setShowIntegrationRequest] = useState(false)
  const [showDownloadModal, setShowDownloadModal] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">DermatoApp Pro</h1>
                <p className="text-sm text-slate-600">Intelligence Artificielle Dermatologique</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => setShowDownloadModal(true)}>
                <Download className="h-4 w-4 mr-2" />
                Télécharger
              </Button>
              <Button onClick={() => setShowIntegrationRequest(true)}>
                <Code className="h-4 w-4 mr-2" />
                Intégrer sur mon site
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Avantages clés */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Pourquoi choisir DermatoApp ?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Advantages content will be handled by the Features component */}
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Fonctionnalités avancées</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Features content will be handled by the Features component */}
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'intégration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
              Comment intégrer DermatoApp sur votre site ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Integration steps content will be handled by the HowItWorks component */}
            </div>
            <div className="text-center mt-12">
              <Button
                size="lg"
                onClick={() => setShowIntegrationRequest(true)}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-12 py-4 text-lg"
              >
                Commencer l'intégration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Médecins partenaires</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonials content will be handled by the HowItWorks component */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Prêt à intégrer DermatoApp ?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Rejoignez les centaines de médecins qui utilisent déjà notre IA pour améliorer leurs diagnostics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setShowIntegrationRequest(true)}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-12 py-4 text-lg"
              >
                <Code className="mr-2 h-5 w-5" />
                Demander l'intégration
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-4 text-lg bg-white/80"
                onClick={() => setShowDownloadModal(true)}
              >
                <Download className="mr-2 h-5 w-5" />
                Télécharger l'app
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <IntegrationRequest isOpen={showIntegrationRequest} onClose={() => setShowIntegrationRequest(false)} />
      <DownloadModal isOpen={showDownloadModal} onClose={() => setShowDownloadModal(false)} />
    </div>
  )
}
