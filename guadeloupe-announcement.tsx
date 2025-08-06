"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Info } from "lucide-react"

export default function GuadeloupeAnnouncement() {
  return (
    <Card className="border-l-4 border-l-blue-500 bg-blue-50/50">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            <Badge className="bg-blue-100 text-blue-800">Guadeloupe</Badge>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-semibold mb-1">Information spéciale Guadeloupe</p>
              <p>
                Cette application de diagnostic dermatologique est spécialement adaptée aux conditions tropicales de la
                Guadeloupe. Nos algorithmes prennent en compte les pathologies cutanées spécifiques aux Antilles
                françaises.
              </p>
              <p className="mt-2">
                <strong>Spécialités couvertes :</strong> Dermatoses tropicales, mycoses cutanées, réactions aux piqûres
                d'insectes tropicaux, photosensibilisation.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
