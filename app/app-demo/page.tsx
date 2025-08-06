"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Camera, Send, User, Mail, MapPin, CreditCard, ArrowLeft, Check } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AppDemo() {
  const [step, setStep] = useState("inscription") // inscription, camera, envoi, confirmation
  const [patientData, setPatientData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    adresse: "",
    numeroSecu: "",
    medecin: "Dr. Mukisi",
  })
  const [photo, setPhoto] = useState<string | null>(null)
  const [description, setDescription] = useState("")

  const handleInscription = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("camera")
  }

  const handlePhotoCapture = () => {
    // Simulation de capture photo
    setPhoto("/placeholder.svg?height=300&width=300&text=Photo+Dermatologique")
    setStep("envoi")
  }

  const handleEnvoi = () => {
    setStep("confirmation")
  }

  if (step === "inscription") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <Badge className="mb-2 bg-blue-100 text-blue-800">DermatoApp Patient</Badge>
            <h1 className="text-2xl font-bold text-gray-900">Inscription</h1>
            <p className="text-gray-600">Renseignez vos informations pour recevoir vos résultats</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Informations personnelles
              </CardTitle>
              <CardDescription>
                Ces informations sont nécessaires pour vous envoyer les résultats d'analyse
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleInscription} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input
                      id="prenom"
                      value={patientData.prenom}
                      onChange={(e) => setPatientData({ ...patientData, prenom: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="nom">Nom *</Label>
                    <Input
                      id="nom"
                      value={patientData.nom}
                      onChange={(e) => setPatientData({ ...patientData, nom: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={patientData.email}
                    onChange={(e) => setPatientData({ ...patientData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="telephone">Téléphone *</Label>
                  <Input
                    id="telephone"
                    type="tel"
                    value={patientData.telephone}
                    onChange={(e) => setPatientData({ ...patientData, telephone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="adresse">Adresse complète *</Label>
                  <Textarea
                    id="adresse"
                    value={patientData.adresse}
                    onChange={(e) => setPatientData({ ...patientData, adresse: e.target.value })}
                    placeholder="Numéro, rue, ville, code postal"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="numeroSecu">Numéro de Sécurité Sociale (optionnel)</Label>
                  <Input
                    id="numeroSecu"
                    value={patientData.numeroSecu}
                    onChange={(e) => setPatientData({ ...patientData, numeroSecu: e.target.value })}
                    placeholder="1 23 45 67 890 123 45"
                  />
                  <p className="text-xs text-gray-500 mt-1">Facilite le remboursement et le suivi médical</p>
                </div>

                <Alert>
                  <CreditCard className="h-4 w-4" />
                  <AlertDescription>
                    Vos données sont protégées et utilisées uniquement pour votre suivi médical. Médecin référent:{" "}
                    <strong>{patientData.medecin}</strong>
                  </AlertDescription>
                </Alert>

                <Button type="submit" className="w-full">
                  Continuer vers la capture photo
                  <Camera className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (step === "camera") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" onClick={() => setStep("inscription")}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="ml-4">
              <Badge className="mb-1 bg-green-100 text-green-800">Étape 2/3</Badge>
              <h1 className="text-xl font-bold">Capture photo</h1>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-green-600" />
                Photographier la zone
              </CardTitle>
              <CardDescription>Prenez une photo claire de la zone à examiner</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                {photo ? (
                  <img
                    src={photo || "/placeholder.svg"}
                    alt="Photo capturée"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Appuyez pour capturer</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button onClick={handlePhotoCapture} className="w-full">
                  <Camera className="mr-2 h-4 w-4" />
                  Capturer
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <MapPin className="mr-2 h-4 w-4" />
                  Galerie
                </Button>
              </div>

              {photo && (
                <Button onClick={() => setStep("envoi")} className="w-full">
                  Continuer vers l'envoi
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardContent>
          </Card>

          <div className="mt-4 p-4 bg-white rounded-lg border">
            <h3 className="font-semibold mb-2">Conseils pour une bonne photo :</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Éclairage naturel de préférence</li>
              <li>• Tenir le téléphone stable</li>
              <li>• Cadrer uniquement la zone concernée</li>
              <li>• Éviter les reflets et ombres</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  if (step === "envoi") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" onClick={() => setStep("camera")}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="ml-4">
              <Badge className="mb-1 bg-orange-100 text-orange-800">Étape 3/3</Badge>
              <h1 className="text-xl font-bold">Envoi au médecin</h1>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-orange-600" />
                Finaliser l'envoi
              </CardTitle>
              <CardDescription>Ajoutez une description et envoyez à votre médecin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Récapitulatif :</h3>
                <p className="text-sm">
                  <strong>Patient :</strong> {patientData.prenom} {patientData.nom}
                </p>
                <p className="text-sm">
                  <strong>Email :</strong> {patientData.email}
                </p>
                <p className="text-sm">
                  <strong>Médecin :</strong> {patientData.medecin}
                </p>
              </div>

              {photo && (
                <div>
                  <Label>Photo capturée :</Label>
                  <img
                    src={photo || "/placeholder.svg"}
                    alt="Photo à envoyer"
                    className="w-full h-32 object-cover rounded-lg mt-2"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="description">Description (optionnel)</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Décrivez vos symptômes, depuis quand, évolution..."
                  rows={4}
                />
              </div>

              <Alert>
                <Mail className="h-4 w-4" />
                <AlertDescription>
                  Vous recevrez les résultats d'analyse par email et/ou SMS dans les 24-48h.
                </AlertDescription>
              </Alert>

              <Button onClick={handleEnvoi} className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Envoyer au Dr. {patientData.medecin}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (step === "confirmation") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">Envoi réussi !</h1>

          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Votre photo a été envoyée avec succès au <strong>Dr. {patientData.medecin}</strong>.
              </p>

              <div className="space-y-2 text-sm text-left bg-gray-50 p-4 rounded-lg">
                <p>
                  <strong>Prochaines étapes :</strong>
                </p>
                <p>• Analyse par le médecin sous 24-48h</p>
                <p>• Résultats envoyés par email : {patientData.email}</p>
                <p>• SMS de notification : {patientData.telephone}</p>
                <p>• Possibilité de consultation si nécessaire</p>
              </div>

              <Button
                onClick={() => {
                  setStep("inscription")
                  setPhoto(null)
                  setDescription("")
                }}
                className="w-full mt-4"
                variant="outline"
              >
                Nouvelle consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return null
}
