"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Globe, Smartphone } from "lucide-react"
import { DOM_TOM_REGIONS, detectDOMTOMRegion, type DOMTOMRegion } from "@/utils/dom-tom-geolocation"

interface DOMTOMLocationSelectorProps {
  onLocationSelect: (region: DOMTOMRegion | null) => void
  selectedRegion?: DOMTOMRegion | null
}

export default function DOMTOMLocationSelector({ onLocationSelect, selectedRegion }: DOMTOMLocationSelectorProps) {
  const [detectedRegion, setDetectedRegion] = useState<DOMTOMRegion | null>(null)
  const [isDetecting, setIsDetecting] = useState(false)
  const [manualSelection, setManualSelection] = useState<string>("")

  useEffect(() => {
    detectLocation()
  }, [])

  const detectLocation = async () => {
    setIsDetecting(true)
    try {
      const region = await detectDOMTOMRegion()
      setDetectedRegion(region)
      if (region) {
        onLocationSelect(region)
      }
    } catch (error) {
      console.error("Erreur de détection:", error)
    } finally {
      setIsDetecting(false)
    }
  }

  const handleManualSelection = (regionCode: string) => {
    setManualSelection(regionCode)
    const region = DOM_TOM_REGIONS.find((r) => r.code === regionCode) || null
    onLocationSelect(region)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          Localisation DOM-TOM
        </CardTitle>
        <CardDescription>Sélectionnez votre région pour une expérience personnalisée</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Détection automatique */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Détection automatique</span>
            <Button variant="outline" size="sm" onClick={detectLocation} disabled={isDetecting}>
              {isDetecting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                  Détection...
                </>
              ) : (
                <>
                  <Smartphone className="h-4 w-4 mr-2" />
                  Détecter
                </>
              )}
            </Button>
          </div>

          {detectedRegion && (
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-800">
                  Région détectée: <strong>{detectedRegion.name}</strong>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Sélection manuelle */}
        <div className="space-y-2">
          <span className="text-sm font-medium">Sélection manuelle</span>
          <Select value={manualSelection} onValueChange={handleManualSelection}>
            <SelectTrigger>
              <SelectValue placeholder="Choisissez votre région" />
            </SelectTrigger>
            <SelectContent>
              {DOM_TOM_REGIONS.map((region) => (
                <SelectItem key={region.code} value={region.code}>
                  {region.name}
                </SelectItem>
              ))}
              <SelectItem value="metropole">France métropolitaine</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Région sélectionnée */}
        {selectedRegion && (
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-blue-800">
                  <strong>{selectedRegion.name}</strong>
                </span>
              </div>
              <Badge className="bg-blue-100 text-blue-800">Sélectionnée</Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
