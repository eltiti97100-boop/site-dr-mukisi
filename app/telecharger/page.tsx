"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Download, QrCode, Shield, Camera, Send } from "lucide-react"

export default function TelechargerPage() {
  const [showQR, setShowQR] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">Application Légère Patient</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">DermatoApp Patient</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturez et envoyez vos photos dermatologiques directement à votre médecin
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Fonctionnalités */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-blue-600" />
                Fonctionnalités
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Camera className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Capture optimisée</h3>
                  <p className="text-sm text-gray-600">Photos haute qualité pour diagnostic médical</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Send className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Envoi sécurisé</h3>
                  <p className="text-sm text-gray-600">Transmission chiffrée vers votre médecin</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Données protégées</h3>
                  <p className="text-sm text-gray-600">Conformité RGPD et secret médical</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Téléchargement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-green-600" />
                Télécharger l'application
              </CardTitle>
              <CardDescription>Disponible sur iOS et Android</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button className="h-12 bg-black hover:bg-gray-800">
                  <div className="text-left">
                    <div className="text-xs">Télécharger sur</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Button>
                <Button className="h-12 bg-green-600 hover:bg-green-700">
                  <div className="text-left">
                    <div className="text-xs">Disponible sur</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Ou scannez le QR code</p>
                <Button variant="outline" onClick={() => setShowQR(!showQR)} className="w-full">
                  <QrCode className="h-4 w-4 mr-2" />
                  {showQR ? "Masquer" : "Afficher"} le QR Code
                </Button>

                {showQR && (
                  <div className="mt-4 p-4 bg-white rounded-lg border">
                    <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                      <QrCode className="h-16 w-16 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">QR Code de téléchargement</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Processus */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Comment ça marche ?</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">1. Téléchargez</h3>
              <p className="text-sm text-gray-600">Installez l'application sur votre smartphone</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">2. Inscrivez-vous</h3>
              <p className="text-sm text-gray-600">Renseignez vos informations personnelles</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">3. Photographiez</h3>
              <p className="text-sm text-gray-600">Capturez la zone à examiner</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">4. Envoyez</h3>
              <p className="text-sm text-gray-600">Transmettez à votre médecin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
