"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { User, Mail, Phone, MapPin, CreditCard, Camera, Send, Eye, FileText, Calendar, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface PatientPhoto {
  id: string
  patientInfo: {
    prenom: string
    nom: string
    email: string
    telephone: string
    adresse: string
    numeroSecu?: string
  }
  photo: string
  description?: string
  dateEnvoi: string
  statut: "nouveau" | "en_cours" | "analyse_envoyee"
}

export default function DoctorPhotoReceiver() {
  const [selectedPhoto, setSelectedPhoto] = useState<PatientPhoto | null>(null)
  const [analysisText, setAnalysisText] = useState("")
  const [recommendations, setRecommendations] = useState("")

  // Données simulées
  const photosRecues: PatientPhoto[] = [
    {
      id: "1",
      patientInfo: {
        prenom: "Marie",
        nom: "Dubois",
        email: "marie.dubois@email.com",
        telephone: "0690123456",
        adresse: "15 Rue des Palmiers, 97110 Pointe-à-Pitre, Guadeloupe",
        numeroSecu: "2 85 03 971 123 456 78",
      },
      photo: "/placeholder.svg?height=400&width=400&text=Grain+de+beauté+suspect",
      description: "Grain de beauté qui a changé de couleur depuis 2 mois, parfois des démangeaisons",
      dateEnvoi: "2024-01-15T10:30:00",
      statut: "nouveau",
    },
    {
      id: "2",
      patientInfo: {
        prenom: "Jean",
        nom: "Martin",
        email: "jean.martin@email.com",
        telephone: "0590987654",
        adresse: "8 Avenue de la République, 97200 Fort-de-France, Martinique",
        numeroSecu: "1 75 12 972 987 654 32",
      },
      photo: "/placeholder.svg?height=400&width=400&text=Éruption+cutanée",
      description: "Éruption apparue après exposition au soleil, sensation de brûlure",
      dateEnvoi: "2024-01-14T15:45:00",
      statut: "en_cours",
    },
  ]

  const handleSendAnalysis = () => {
    if (selectedPhoto) {
      // Simulation d'envoi de l'analyse
      alert(`Analyse envoyée à ${selectedPhoto.patientInfo.prenom} ${selectedPhoto.patientInfo.nom}`)
      setSelectedPhoto(null)
      setAnalysisText("")
      setRecommendations("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Photos reçues des patients</h1>
          <p className="text-gray-600">Analysez les photos et envoyez vos diagnostics</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Liste des photos */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Photos en attente</CardTitle>
                <CardDescription>
                  {photosRecues.filter((p) => p.statut === "nouveau").length} nouvelles photos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {photosRecues.map((photo) => (
                  <div
                    key={photo.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedPhoto?.id === photo.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">
                          {photo.patientInfo.prenom} {photo.patientInfo.nom}
                        </h3>
                        <p className="text-sm text-gray-600">{new Date(photo.dateEnvoi).toLocaleDateString("fr-FR")}</p>
                      </div>
                      <Badge
                        variant={photo.statut === "nouveau" ? "default" : "secondary"}
                        className={
                          photo.statut === "nouveau" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {photo.statut === "nouveau" ? "Nouveau" : "En cours"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Camera className="h-4 w-4" />
                      <span>Photo dermatologique</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Détails du patient et photo */}
          <div className="lg:col-span-2">
            {selectedPhoto ? (
              <div className="space-y-6">
                {/* Informations patient */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-blue-600" />
                      Informations patient
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-500" />
                          <span className="font-semibold">
                            {selectedPhoto.patientInfo.prenom} {selectedPhoto.patientInfo.nom}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span>{selectedPhoto.patientInfo.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span>{selectedPhoto.patientInfo.telephone}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                          <span className="text-sm">{selectedPhoto.patientInfo.adresse}</span>
                        </div>
                        {selectedPhoto.patientInfo.numeroSecu && (
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{selectedPhoto.patientInfo.numeroSecu}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">
                            Reçu le {new Date(selectedPhoto.dateEnvoi).toLocaleDateString("fr-FR")} à{" "}
                            {new Date(selectedPhoto.dateEnvoi).toLocaleTimeString("fr-FR")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Photo et description */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Camera className="h-5 w-5 text-green-600" />
                      Photo dermatologique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <img
                          src={selectedPhoto.photo || "/placeholder.svg"}
                          alt="Photo dermatologique"
                          className="w-full h-64 object-cover rounded-lg border"
                        />
                        <Button variant="outline" className="w-full mt-2 bg-transparent">
                          <Eye className="mr-2 h-4 w-4" />
                          Voir en grand
                        </Button>
                      </div>
                      <div>
                        <Label>Description du patient :</Label>
                        <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm">{selectedPhoto.description || "Aucune description fournie"}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Analyse médicale */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-purple-600" />
                      Analyse et diagnostic
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="analysis">Diagnostic et observations :</Label>
                      <Textarea
                        id="analysis"
                        value={analysisText}
                        onChange={(e) => setAnalysisText(e.target.value)}
                        placeholder="Décrivez votre diagnostic, les observations cliniques..."
                        rows={4}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="recommendations">Recommandations et traitement :</Label>
                      <Textarea
                        id="recommendations"
                        value={recommendations}
                        onChange={(e) => setRecommendations(e.target.value)}
                        placeholder="Prescriptions, conseils, suivi recommandé..."
                        rows={4}
                        className="mt-2"
                      />
                    </div>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        L'analyse sera envoyée par email à {selectedPhoto.patientInfo.email}
                        et par SMS au {selectedPhoto.patientInfo.telephone}
                      </AlertDescription>
                    </Alert>

                    <div className="flex gap-4">
                      <Button onClick={handleSendAnalysis} className="flex-1">
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer l'analyse au patient
                      </Button>
                      <Button variant="outline">Programmer consultation</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Camera className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Sélectionnez une photo pour voir les détails du patient</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
