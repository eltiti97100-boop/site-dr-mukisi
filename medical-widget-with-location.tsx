"use client"

import { useState, useEffect } from "react"
import MedicalWidget from "./medical-widget"
import GuadeloupeAnnouncement from "./guadeloupe-announcement"
import LocationSelector from "./location-selector"
import { detectGuadeloupeLocation, type LocationInfo } from "@/utils/geolocation"
import { Button } from "@/components/ui/button"
import { MapPin, Settings } from "lucide-react"

interface MedicalWidgetWithLocationProps {
  doctorName: string
  institutionName: string
  contactEmail: string
  contactPhone: string
  branding?: {
    primaryColor?: string
    logo?: string
    customText?: string
  }
}

export default function MedicalWidgetWithLocation(props: MedicalWidgetWithLocationProps) {
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null)
  const [showLocationSelector, setShowLocationSelector] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    detectLocation()
  }, [])

  const detectLocation = async () => {
    setIsLoading(true)
    try {
      const info = await detectGuadeloupeLocation()
      setLocationInfo(info)

      // Si la méthode de détection n'est pas fiable, proposer la sélection manuelle
      if (info.confidence < 0.7) {
        setShowLocationSelector(true)
      }
    } catch (error) {
      console.error("Erreur de géolocalisation:", error)
      setShowLocationSelector(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLocationConfirmed = (isGuadeloupe: boolean) => {
    setLocationInfo({
      isGuadeloupe,
      method: "manual",
      confidence: 1.0,
    })
    setShowLocationSelector(false)
  }

  if (isLoading) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600">Détection de votre localisation...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Bouton de configuration de localisation */}
      <div className="flex justify-end mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowLocationSelector(true)}
          className="bg-transparent border-slate-300 text-slate-600 hover:bg-slate-50"
        >
          <Settings className="h-4 w-4 mr-2" />
          Changer la localisation
        </Button>
      </div>

      {/* Indicateur de localisation */}
      {locationInfo && (
        <div className="mb-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-600">
            <MapPin className="h-4 w-4" />
            <span>
              {locationInfo.isGuadeloupe ? "🌴 Guadeloupe" : "🌍 Autre région"}
              {locationInfo.method === "manual" && " (sélection manuelle)"}
            </span>
          </div>
        </div>
      )}

      {/* Annonce spéciale Guadeloupe */}
      {locationInfo?.isGuadeloupe && <GuadeloupeAnnouncement />}

      {/* Widget médical principal */}
      <MedicalWidget {...props} />

      {/* Sélecteur de localisation */}
      {showLocationSelector && (
        <LocationSelector
          onLocationConfirmed={handleLocationConfirmed}
          onClose={() => setShowLocationSelector(false)}
        />
      )}
    </div>
  )
}
