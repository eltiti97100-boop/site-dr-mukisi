"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, X } from "lucide-react"
import { checkGuadeloupePostalCode } from "@/utils/geolocation"

interface LocationSelectorProps {
  onLocationConfirmed: (isGuadeloupe: boolean) => void
  onClose: () => void
}

export default function LocationSelector({ onLocationConfirmed, onClose }: LocationSelectorProps) {
  const [postalCode, setPostalCode] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")

  const handlePostalCodeCheck = () => {
    const isGuadeloupe = checkGuadeloupePostalCode(postalCode)
    localStorage.setItem("user-location-guadeloupe", isGuadeloupe.toString())
    localStorage.setItem("user-postal-code", postalCode)
    onLocationConfirmed(isGuadeloupe)
  }

  const handleRegionSelect = (region: string) => {
    const isGuadeloupe = region === "guadeloupe"
    localStorage.setItem("user-location-guadeloupe", isGuadeloupe.toString())
    localStorage.setItem("user-region", region)
    onLocationConfirmed(isGuadeloupe)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-md bg-white shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-slate-900">Votre localisation</h3>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded">
              <X className="h-4 w-4 text-slate-500" />
            </button>
          </div>

          <p className="text-slate-600 mb-6 text-sm">
            Pour vous proposer les services les plus adaptés, indiquez votre région :
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="postal">Code postal</Label>
              <div className="flex space-x-2">
                <Input
                  id="postal"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="Ex: 97110"
                  maxLength={5}
                />
                <Button
                  onClick={handlePostalCodeCheck}
                  disabled={postalCode.length !== 5}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Valider
                </Button>
              </div>
            </div>

            <div className="text-center text-slate-500 text-sm">ou</div>

            <div className="space-y-2">
              <Label>Sélectionnez votre région</Label>
              <div className="grid grid-cols-1 gap-2">
                <Button
                  variant="outline"
                  onClick={() => handleRegionSelect("guadeloupe")}
                  className="justify-start bg-transparent hover:bg-teal-50 hover:border-teal-300"
                >
                  🌴 Guadeloupe
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleRegionSelect("martinique")}
                  className="justify-start bg-transparent hover:bg-slate-50"
                >
                  🏝️ Martinique
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleRegionSelect("guyane")}
                  className="justify-start bg-transparent hover:bg-slate-50"
                >
                  🌿 Guyane
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleRegionSelect("metropole")}
                  className="justify-start bg-transparent hover:bg-slate-50"
                >
                  🇫🇷 France métropolitaine
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleRegionSelect("autre")}
                  className="justify-start bg-transparent hover:bg-slate-50"
                >
                  🌍 Autre région
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
