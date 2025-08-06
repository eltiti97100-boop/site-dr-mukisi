"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Camera, Upload, Loader2, CheckCircle, Mail, Phone, Shield } from "lucide-react"

interface MedicalWidgetProps {
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

export default function MedicalWidget({
  doctorName,
  institutionName,
  contactEmail,
  contactPhone,
  branding = {},
}: MedicalWidgetProps) {
  const [step, setStep] = useState(1)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [patientData, setPatientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    symptoms: "",
    urgency: "normal",
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const primaryColor = branding.primaryColor || "#0f172a"

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async () => {
    setIsAnalyzing(true)

    // Simulation d'analyse IA
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsAnalyzing(false)
    setIsSubmitted(true)
    setStep(3)
  }

  const isFormValid = patientData.firstName && patientData.lastName && patientData.email && selectedImage

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header personnalisé */}
      <div className="p-6 text-white" style={{ backgroundColor: primaryColor }}>
        <div className="flex items-center space-x-4">
          {branding.logo && (
            <img src={branding.logo || "/placeholder.svg"} alt="Logo" className="w-12 h-12 rounded-full bg-white p-1" />
          )}
          <div>
            <h2 className="text-xl font-bold">{institutionName}</h2>
            <p className="text-sm opacity-90">{doctorName}</p>
            <p className="text-xs opacity-75">{branding.customText || "Consultation dermatologique assistée par IA"}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Étape 1: Informations patient */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Consultation Dermatologique</h3>
              <p className="text-slate-600">
                Remplissez vos informations pour une pré-analyse de votre problème cutané
              </p>
            </div>

            <Alert className="border-blue-200 bg-blue-50">
              <Shield className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                <strong>Confidentialité garantie</strong> - Vos données sont protégées et ne seront utilisées que dans
                le cadre de votre consultation médicale.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom *</Label>
                <Input
                  id="firstName"
                  value={patientData.firstName}
                  onChange={(e) => setPatientData((prev) => ({ ...prev, firstName: e.target.value }))}
                  placeholder="Votre prénom"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom *</Label>
                <Input
                  id="lastName"
                  value={patientData.lastName}
                  onChange={(e) => setPatientData((prev) => ({ ...prev, lastName: e.target.value }))}
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={patientData.email}
                  onChange={(e) => setPatientData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  value={patientData.phone}
                  onChange={(e) => setPatientData((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="+243 XXX XXX XXX"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Âge</Label>
              <Input
                id="age"
                value={patientData.age}
                onChange={(e) => setPatientData((prev) => ({ ...prev, age: e.target.value }))}
                placeholder="Votre âge"
                type="number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="symptoms">Description des symptômes</Label>
              <Textarea
                id="symptoms"
                value={patientData.symptoms}
                onChange={(e) => setPatientData((prev) => ({ ...prev, symptoms: e.target.value }))}
                placeholder="Décrivez vos symptômes : démangeaisons, douleur, évolution..."
                rows={3}
              />
            </div>

            <Button
              onClick={() => setStep(2)}
              className="w-full"
              style={{ backgroundColor: primaryColor }}
              disabled={!patientData.firstName || !patientData.lastName || !patientData.email}
            >
              Continuer vers l'envoi de photo
            </Button>
          </div>
        )}

        {/* Étape 2: Upload de photo */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Photo de la zone concernée</h3>
              <p className="text-slate-600">Prenez une photo claire et nette de la zone à examiner</p>
            </div>

            {!selectedImage ? (
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-slate-600" />
                </div>
                <p className="text-slate-600 mb-4">Ajoutez une photo de la zone à examiner</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => fileInputRef.current?.click()} style={{ backgroundColor: primaryColor }}>
                    <Camera className="h-4 w-4 mr-2" />
                    Prendre une photo
                  </Button>
                  <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="bg-transparent">
                    <Upload className="h-4 w-4 mr-2" />
                    Choisir un fichier
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
                  alt="Photo à analyser"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <div className="flex gap-4 justify-center">
                  <Button onClick={handleSubmit} disabled={isAnalyzing} style={{ backgroundColor: primaryColor }}>
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Analyse en cours...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Envoyer pour analyse
                      </>
                    )}
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedImage(null)} className="bg-transparent">
                    Changer de photo
                  </Button>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1 bg-transparent">
                Retour
              </Button>
            </div>
          </div>
        )}

        {/* Étape 3: Confirmation */}
        {step === 3 && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Demande envoyée avec succès !</h3>
              <p className="text-slate-600">Votre consultation a été transmise au {doctorName}</p>
            </div>

            <Alert className="border-green-200 bg-green-50">
              <AlertDescription className="text-green-800">
                <strong>Prochaines étapes :</strong>
                <br />• Analyse de votre photo par notre IA médicale
                <br />• Examen par le {doctorName}
                <br />• Vous recevrez les résultats par email sous 24-48h
              </AlertDescription>
            </Alert>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-3">Vos informations :</h4>
              <div className="text-sm text-slate-600 space-y-1">
                <p>
                  <strong>Patient :</strong> {patientData.firstName} {patientData.lastName}
                </p>
                <p>
                  <strong>Email :</strong> {patientData.email}
                </p>
                <p>
                  <strong>Référence :</strong> #{Date.now().toString().slice(-6)}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-blue-800">Email</span>
                </div>
                <p className="text-sm text-blue-700">{contactEmail}</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-800">Téléphone</span>
                </div>
                <p className="text-sm text-green-700">{contactPhone}</p>
              </div>
            </div>

            <div className="text-xs text-slate-500">
              En cas d'urgence, contactez directement le cabinet ou consultez votre médecin traitant.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
