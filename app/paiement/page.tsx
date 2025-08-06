"use client"

import { useState } from "react"
import PaymentSystem from "@/components/payment-system"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Service par défaut pour la démonstration
const defaultService = {
  id: "consultation-generale",
  name: "Consultation Dermatologique",
  price: 80,
  duration: "30 minutes",
  description: "Examen complet de la peau avec diagnostic personnalisé",
}

export default function PaiementPage() {
  const [paymentCompleted, setPaymentCompleted] = useState(false)

  const handlePaymentComplete = (paymentData: any) => {
    console.log("Paiement complété:", paymentData)
    setPaymentCompleted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4 bg-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>

          <div className="text-center">
            <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 mb-4 px-6 py-2 text-lg">
              💳 Paiement Sécurisé
            </Badge>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Système de <span className="text-green-600">Paiement</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Paiement sécurisé avec plusieurs options : carte bancaire, paiement échelonné, chèque ou virement
            </p>
          </div>
        </div>

        {/* Options de paiement disponibles */}
        <Card className="mb-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-slate-900">🔒 Modes de Paiement Acceptés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">💳</span>
                </div>
                <h3 className="font-bold text-blue-800 mb-2">Carte Bancaire</h3>
                <p className="text-sm text-blue-600">Paiement immédiat sécurisé</p>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">📅</span>
                </div>
                <h3 className="font-bold text-green-800 mb-2">Paiement 4x</h3>
                <p className="text-sm text-green-600">Échelonnement sans frais</p>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">📝</span>
                </div>
                <h3 className="font-bold text-purple-800 mb-2">Chèque</h3>
                <p className="text-sm text-purple-600">Envoi par courrier</p>
              </div>

              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🏦</span>
                </div>
                <h3 className="font-bold text-orange-800 mb-2">Virement</h3>
                <p className="text-sm text-orange-600">Transfert bancaire</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                🔒 Tous les paiements sont sécurisés et conformes aux normes PCI DSS
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Système de paiement */}
        <PaymentSystem service={defaultService} onPaymentComplete={handlePaymentComplete} />

        {/* Informations de sécurité */}
        <Card className="mt-8 border-0 shadow-xl bg-gradient-to-r from-slate-50 to-blue-50">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🛡️</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Sécurité Maximale</h3>
                <p className="text-sm text-slate-600">Cryptage SSL 256 bits et conformité PCI DSS</p>
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Traitement Rapide</h3>
                <p className="text-sm text-slate-600">Confirmation immédiate et email automatique</p>
              </div>

              <div>
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">📞</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Support 24/7</h3>
                <p className="text-sm text-slate-600">Assistance disponible pour tout problème</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
