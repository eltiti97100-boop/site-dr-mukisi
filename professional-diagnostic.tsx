"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, Upload, Loader2, AlertTriangle, User, FileText, Microscope, Shield, Clock } from "lucide-react"

interface DiagnosticResult {
  condition: string
  icd10: string
  severity: "low" | "moderate" | "high"
  confidence: number
  description: string
  differentialDx: string[]
  treatment: string
  followUp: string
  references: string[]
}

export default function ProfessionalDiagnostic() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<DiagnosticResult | null>(null)
  const [patientInfo, setPatientInfo] = useState({
    age: "",
    gender: "",
    history: "",
    symptoms: "",
    duration: "",
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Simulation de diagnostic professionnel
  const simulateProfessionalDiagnosis = (): DiagnosticResult => {
    const conditions = [
      {
        condition: "Mélanome malin",
        icd10: "C43.9",
        severity: "high" as const,
        confidence: 94,
        description:
          "Lésion pigmentée présentant des critères ABCDE positifs avec asymétrie marquée et bordures irrégulières",
        differentialDx: ["Naevus atypique", "Carcinome basocellulaire pigmenté", "Kératose séborrhéique"],
        treatment: "Exérèse chirurgicale urgente avec marges de sécurité. Biopsie extemporanée recommandée.",
        followUp: "Contrôle post-opératoire à 15 jours. Surveillance dermatoscopique tous les 3 mois.",
        references: ["Dermatology Online Journal 2023", "NEJM Dermatology Guidelines"],
      },
      {
        condition: "Dermatite atopique",
        icd10: "L20.9",
        severity: "moderate" as const,
        confidence: 87,
        description: "Eczéma chronique avec xérose cutanée et lésions de grattage typiques des plis de flexion",
        differentialDx: ["Dermatite de contact", "Psoriasis", "Dermatite séborrhéique"],
        treatment: "Dermocorticoïdes classe II pendant 7 jours puis émollients. Éviction des allergènes.",
        followUp: "Réévaluation à 2 semaines. Éducation thérapeutique du patient.",
        references: ["European Academy of Dermatology Guidelines", "Cochrane Reviews 2023"],
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

  const analyzeImage = async () => {
    if (!selectedImage) return

    setIsAnalyzing(true)
    await new Promise((resolve) => setTimeout(resolve, 4000)) // Simulation plus longue pour analyse pro

    const diagnosis = simulateProfessionalDiagnosis()
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
        return "bg-slate-100 text-slate-800"
    }
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100 mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Outil professionnel certifié
            </Badge>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Diagnostic <span className="text-slate-700">Assisté par IA</span>
            </h1>
            <p className="text-xl text-slate-600">Interface dédiée aux professionnels de santé</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Informations patient */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-700 flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Informations patient</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Âge</Label>
                    <Input
                      id="age"
                      value={patientInfo.age}
                      onChange={(e) => setPatientInfo((prev) => ({ ...prev, age: e.target.value }))}
                      placeholder="Ex: 45"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Sexe</Label>
                    <Select onValueChange={(value) => setPatientInfo((prev) => ({ ...prev, gender: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="M">Masculin</SelectItem>
                        <SelectItem value="F">Féminin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Durée d'évolution</Label>
                  <Select onValueChange={(value) => setPatientInfo((prev) => ({ ...prev, duration: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lessThan1Week">&lt; 1 semaine</SelectItem>
                      <SelectItem value="1To4Weeks">1-4 semaines</SelectItem>
                      <SelectItem value="1To6Months">1-6 mois</SelectItem>
                      <SelectItem value="greaterThan6Months">&gt; 6 mois</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="symptoms">Symptômes</Label>
                  <Textarea
                    id="symptoms"
                    value={patientInfo.symptoms}
                    onChange={(e) => setPatientInfo((prev) => ({ ...prev, symptoms: e.target.value }))}
                    placeholder="Démangeaisons, douleur, saignement..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="history">Antécédents</Label>
                  <Textarea
                    id="history"
                    value={patientInfo.history}
                    onChange={(e) => setPatientInfo((prev) => ({ ...prev, history: e.target.value }))}
                    placeholder="Antécédents dermatologiques, allergies..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Zone d'analyse */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-700 flex items-center space-x-2">
                  <Camera className="h-5 w-5" />
                  <span>Analyse d'image</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!selectedImage ? (
                  <div className="py-12 text-center">
                    <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Microscope className="h-12 w-12 text-slate-600" />
                    </div>
                    <p className="text-slate-600 mb-6">Importez une image dermatoscopique ou clinique</p>
                    <div className="flex flex-col gap-4">
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-slate-800 hover:bg-slate-900 flex items-center space-x-2"
                      >
                        <Upload className="h-5 w-5" />
                        <span>Importer une image</span>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        className="border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center space-x-2 bg-transparent"
                      >
                        <Camera className="h-5 w-5" />
                        <span>Prendre une photo</span>
                      </Button>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
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
                        className="bg-slate-800 hover:bg-slate-900 flex items-center space-x-2"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Analyse en cours...</span>
                          </>
                        ) : (
                          <>
                            <Microscope className="h-5 w-5" />
                            <span>Analyser</span>
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedImage(null)
                          setResult(null)
                        }}
                        className="border-slate-300 bg-transparent"
                      >
                        Nouvelle image
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Résultats */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-700 flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Rapport diagnostique</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!result && !isAnalyzing && (
                  <div className="text-center py-12 text-slate-500">
                    <Clock className="h-16 w-16 mx-auto mb-4 text-slate-300" />
                    <p>En attente d'analyse</p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="text-center py-12">
                    <Loader2 className="h-16 w-16 mx-auto mb-4 text-slate-600 animate-spin" />
                    <p className="text-slate-700 font-medium">Analyse IA en cours...</p>
                    <p className="text-sm text-slate-500 mt-2">Traitement des données cliniques</p>
                  </div>
                )}

                {result && (
                  <div className="space-y-6">
                    {/* Diagnostic principal */}
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-slate-900">{result.condition}</h3>
                        <Badge className={getSeverityColor(result.severity)}>
                          {result.severity === "low" ? "Bénin" : result.severity === "moderate" ? "Modéré" : "Urgent"}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">CIM-10: {result.icd10}</p>
                      <p className="text-slate-800 text-sm mb-2">{result.description}</p>
                      <p className="text-xs text-slate-500">Confiance: {result.confidence}%</p>
                    </div>

                    {/* Diagnostics différentiels */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">🔍 Diagnostics différentiels</h4>
                      <ul className="space-y-1">
                        {result.differentialDx.map((dx, index) => (
                          <li key={index} className="text-sm text-slate-600 flex items-center space-x-2">
                            <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                            <span>{dx}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Traitement */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">💊 Traitement recommandé</h4>
                      <p className="text-slate-600 text-sm bg-slate-50 p-3 rounded-lg border border-slate-200">
                        {result.treatment}
                      </p>
                    </div>

                    {/* Suivi */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">📅 Suivi</h4>
                      <p className="text-slate-600 text-sm bg-slate-50 p-3 rounded-lg border border-slate-200">
                        {result.followUp}
                      </p>
                    </div>

                    {/* Références */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">📚 Références</h4>
                      <ul className="space-y-1">
                        {result.references.map((ref, index) => (
                          <li key={index} className="text-xs text-slate-500">
                            • {ref}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-slate-800 hover:bg-slate-900">
                        <FileText className="h-4 w-4 mr-2" />
                        Exporter PDF
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-300 bg-transparent">
                        <User className="h-4 w-4 mr-2" />
                        Ajouter au dossier
                      </Button>
                    </div>

                    {result.severity === "high" && (
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <div className="flex items-center space-x-2 text-red-800">
                          <AlertTriangle className="h-5 w-5" />
                          <span className="font-semibold">Attention - Prise en charge urgente</span>
                        </div>
                        <p className="text-red-700 text-sm mt-1">
                          Ce diagnostic nécessite une prise en charge spécialisée immédiate.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
