"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Stethoscope, MapPin, Info, Camera, Download } from "lucide-react"
import { detectDOMTOMRegion, type DOMTOMRegion } from "@/utils/dom-tom-geolocation"
import GuadeloupeAnnouncement from "./guadeloupe-announcement"
import DOMTOMLocationSelector from "./dom-tom-location-selector"

interface MedicalWidgetDOMTOMProps {
  doctorId?: string
  doctorName?: string
}

export default function MedicalWidgetDOMTOM({
  doctorId = "dr-mukisi",
  doctorName = "Dr. Mukisi",
}: MedicalWidgetDOMTOMProps) {
  const [currentRegion, setCurrentRegion] = useState<DOMTOMRegion | null>(null)
  const [showLocationSelector, setShowLocationSelector] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    initializeLocation()
  }, [])

  const initializeLocation = async () => {
    setIsLoading(true)
    try {
      const region = await detectDOMTOMRegion()
      setCurrentRegion(region)
    } catch (error) {
      console.error("Erreur d'initialisation:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLocationSelect = (region: DOMTOMRegion | null) => {
    setCurrentRegion(region)
    setShowLocationSelector(false)
  }

  const getRegionalAnnouncement = () => {
    if (!currentRegion) return null

    switch (currentRegion.code) {
      case "GP":
        return <GuadeloupeAnnouncement />
      case "MQ":
        return (
          <Alert className="border-orange-200 bg-orange-50">
            <Info className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-800">
              <strong>Martinique :</strong> Accès prioritaire aux consultations dermatologiques. Notre équipe connaît
              les spécificités des pathologies tropicales de votre région.
            </AlertDescription>
          </Alert>
        )
      case "GF":
        return (
          <Alert className="border-green-200 bg-green-50">
            <Info className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>Guyane :</strong> Diagnostic spécialisé pour les maladies tropicales. Prise en charge adaptée aux
              conditions climatiques amazoniennes.
            </AlertDescription>
          </Alert>
        )
      case "RE":
        return (
          <Alert className="border-purple-200 bg-purple-50">
            <Info className="h-4 w-4 text-purple-600" />
            <AlertDescription className="text-purple-800">
              <strong>La Réunion :</strong> Expertise en dermatologie tropicale et médecine créole. Consultations
              adaptées aux spécificités de l'océan Indien.
            </AlertDescription>
          </Alert>
        )
      default:
        return (
          <Alert className="border-blue-200 bg-blue-50">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <strong>{currentRegion.name} :</strong> Service médical adapté aux spécificités de votre région
              d'outre-mer.
            </AlertDescription>
          </Alert>
        )
    }
  }

  if (isLoading) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Détection de votre localisation...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Sélecteur de localisation */}
      {showLocationSelector && (
        <DOMTOMLocationSelector onLocationSelect={handleLocationSelect} selectedRegion={currentRegion} />
      )}

      {/* Annonce régionale */}
      {currentRegion && getRegionalAnnouncement()}

      {/* Widget principal */}
      <Card className="border-2 border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Consultation Dermatologique</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <span>Par {doctorName}</span>
                  {currentRegion && (
                    <>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{currentRegion.name}</span>
                      </div>
                    </>
                  )}
                </CardDescription>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={() => setShowLocationSelector(!showLocationSelector)}>
              <MapPin className="h-4 w-4 mr-2" />
              {currentRegion ? currentRegion.name : "Localiser"}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Option 1: Scanner web */}
            <Card className="border border-blue-200">
              <CardContent className="p-6 text-center">
                <Camera className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Scanner Web</h3>
                <p className="text-gray-600 mb-4">Utilisez votre caméra pour capturer et analyser immédiatement</p>
                <Button className="w-full">
                  <Camera className="mr-2 h-4 w-4" />
                  Ouvrir le scanner
                </Button>
              </CardContent>
            </Card>

            {/* Option 2: Application mobile */}
            <Card className="border border-green-200">
              <CardContent className="p-6 text-center">
                <Download className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">App Mobile</h3>
                <p className="text-gray-600 mb-4">Téléchargez l'application pour un suivi personnalisé</p>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger l'app
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Informations spécifiques à la région */}
          {currentRegion && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Spécificités {currentRegion.name}</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <strong>Pathologies courantes :</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Mycoses tropicales</li>
                    <li>Dermatoses solaires</li>
                    <li>Piqûres d'insectes</li>
                  </ul>
                </div>
                <div>
                  <strong>Conseils préventifs :</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Protection solaire renforcée</li>
                    <li>Hydratation quotidienne</li>
                    <li>Surveillance des grains de beauté</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Footer du widget */}
          <div className="text-center text-sm text-gray-500 border-t pt-4">
            <p>
              Widget médical sécurisé • Données chiffrées • Conforme RGPD
              {currentRegion && ` • Adapté aux DOM-TOM`}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
