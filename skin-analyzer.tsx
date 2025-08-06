"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Upload, Loader2, CheckCircle, AlertTriangle, MapPin, Calendar } from "lucide-react"

interface DiagnosticResult {
  condition: string
  severity: "low" | "moderate" | "high"
  confidence: number
  description: string
  treatment: string
  localCare: string[]
  specialist: string
  urgency: boolean
}

export default function SkinAnalyzer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<DiagnosticResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Simulation de diagnostic (remplacer par vraie IA plus tard)
  const simulateDiagnosis = (): DiagnosticResult => {
    const conditions = [
      {
        condition: "Dermatite de contact",
        severity: "moderate" as const,
        confidence: 87,
        description: "Inflammation de la peau causée par le contact avec un allergène ou irritant",
        treatment: "Corticostéroïdes topiques et éviction de l'allergène",
        localCare: ["Compresses froides", "Crème hydratante", "Éviter le grattage"],
        specialist: "Dr. Marie Dubois - Dermatologue",
        urgency: false,
      },
      {
        condition: "Grain de beauté atypique",
        severity: "high" as const,
        confidence: 92,
        description: "Naevus présentant des caractéristiques asymétriques nécessitant surveillance",
        treatment: "Consultation dermatologique urgente recommandée",
        localCare: ["Protection solaire", "Surveillance quotidienne", "Éviter traumatismes"],
        specialist: "Dr. Jean Martin - Dermatologue",
        urgency: true,
      },
      {
        condition: "Eczéma atopique",
        severity: "low" as const,
        confidence: 78,
        description: "Dermatite chronique avec sécheresse et démangeaisons",
        treatment: "Émollients et corticostéroïdes légers si nécessaire",
        localCare: ["Hydratation quotidienne", "Savons doux", "Vêtements en coton"],
        specialist: "Dr. Sophie Laurent - Dermatologue",
        urgency: false,
      },
    ]

    return conditions[Math.floor(Math.random() * conditions.length)]
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        setResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCameraCapture = () => {
    // Simuler la capture caméra (à implémenter avec getUserMedia)
    fileInputRef.current?.click()
  }

  const analyzeImage = async () => {
    if (!selectedImage) return

    setIsAnalyzing(true)

    // Simulation d'analyse (remplacer par vraie IA)
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const diagnosis = simulateDiagnosis()
    setResult(diagnosis)
    setIsAnalyzing(false)
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "bg-green-100 text-green-800"
      case "moderate":
        return "bg-yellow-100 text-yellow-800"
      case "high":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "low":
        return "✅"
      case "moderate":
        return "⚠️"
      case "high":
        return "🔴"
      default:
        return "ℹ️"
    }
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Scanner <span className="text-blue-600">Dermatologique</span>
            </h1>
            <p className="text-xl text-gray-600">Analysez votre peau en quelques secondes avec notre IA médicale</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Zone d'upload */}
            <Card className="border-2 border-dashed border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-center text-blue-700">📸 Capture d'image</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {!selectedImage ? (
                  <div className="py-12">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Camera className="h-12 w-12 text-blue-600" />
                    </div>
                    <p className="text-gray-600 mb-6">Prenez une photo claire de la zone à analyser</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={handleCameraCapture}
                        className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-2"
                      >
                        <Camera className="h-5 w-5" />
                        <span>Prendre une photo</span>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        className="border-blue-300 text-blue-700 hover:bg-blue-50 flex items-center space-x-2"
                      >
                        <Upload className="h-5 w-5" />
                        <span>Importer une image</span>
                      </Button>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      capture="environment"
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Image à analyser"
                      className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                    />
                    <div className="flex gap-4 justify-center">
                      <Button
                        onClick={analyzeImage}
                        disabled={isAnalyzing}
                        className="bg-green-600 hover:bg-green-700 flex items-center space-x-2"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Analyse en cours...</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle className="h-5 w-5" />
                            <span>Analyser l'image</span>
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedImage(null)
                          setResult(null)
                        }}
                        className="border-gray-300"
                      >
                        Nouvelle image
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Résultats */}
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-center text-blue-700">🔍 Résultats d'analyse</CardTitle>
              </CardHeader>
              <CardContent>
                {!result && !isAnalyzing && (
                  <div className="text-center py-12 text-gray-500">
                    <AlertTriangle className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                    <p>Importez une image pour commencer l'analyse</p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="text-center py-12">
                    <Loader2 className="h-16 w-16 mx-auto mb-4 text-blue-600 animate-spin" />
                    <p className="text-blue-700 font-medium">Analyse en cours...</p>
                    <p className="text-sm text-gray-500 mt-2">Notre IA examine votre image</p>
                  </div>
                )}

                {result && (
                  <div className="space-y-6">
                    {/* Diagnostic principal */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-blue-900">{result.condition}</h3>
                        <Badge className={getSeverityColor(result.severity)}>
                          {getSeverityIcon(result.severity)}{" "}
                          {result.severity === "low" ? "Faible" : result.severity === "moderate" ? "Modérée" : "Élevée"}
                        </Badge>
                      </div>
                      <p className="text-blue-800 text-sm mb-2">{result.description}</p>
                      <p className="text-xs text-blue-600">Confiance: {result.confidence}%</p>
                    </div>

                    {/* Traitement */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">💊 Traitement recommandé</h4>
                      <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded-lg">{result.treatment}</p>
                    </div>

                    {/* Soins locaux */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">🏠 Soins à domicile</h4>
                      <ul className="space-y-1">
                        {result.localCare.map((care, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>{care}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Spécialiste */}
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">👨‍⚕️ Spécialiste recommandé</h4>
                      <p className="text-green-700 font-medium">{result.specialist}</p>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Prendre RDV</span>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-green-300 text-green-700 hover:bg-green-50 flex items-center space-x-1 bg-transparent"
                        >
                          <MapPin className="h-4 w-4" />
                          <span>Localiser</span>
                        </Button>
                      </div>
                    </div>

                    {result.urgency && (
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <div className="flex items-center space-x-2 text-red-800">
                          <AlertTriangle className="h-5 w-5" />
                          <span className="font-semibold">Consultation urgente recommandée</span>
                        </div>
                        <p className="text-red-700 text-sm mt-1">
                          Prenez rendez-vous avec un dermatologue dans les plus brefs délais.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ Avertissement médical :</strong> Cette analyse est fournie à titre informatif uniquement et ne
              remplace pas un diagnostic médical professionnel. Consultez toujours un dermatologue pour un diagnostic
              définitif.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
