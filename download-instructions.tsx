"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, FileText, Folder, Code, ImageIcon, CheckCircle, ArrowRight } from "lucide-react"

const projectFiles = [
  {
    name: "app/",
    type: "folder",
    description: "Pages du site (accueil, services, contact, etc.)",
    count: "25+ pages",
    icon: <Folder className="w-5 h-5 text-blue-600" />,
  },
  {
    name: "components/",
    type: "folder",
    description: "Composants réutilisables (header, footer, formulaires)",
    count: "50+ composants",
    icon: <Code className="w-5 h-5 text-green-600" />,
  },
  {
    name: "public/images/",
    type: "folder",
    description: "Images et logos du Dr Mukisi",
    count: "10+ images",
    icon: <ImageIcon className="w-5 h-5 text-purple-600" />,
  },
  {
    name: "styles/",
    type: "folder",
    description: "Styles CSS et Tailwind",
    count: "Design complet",
    icon: <FileText className="w-5 h-5 text-orange-600" />,
  },
]

const downloadSteps = [
  {
    step: 1,
    title: "Cliquer sur 'Download Code'",
    description: "En haut à droite de cette page",
    detail: "Le bouton bleu avec l'icône de téléchargement",
  },
  {
    step: 2,
    title: "Fichier ZIP téléchargé",
    description: "Un fichier 'site-dr-mukisi.zip' dans vos Téléchargements",
    detail: "Environ 5-10 MB avec tous les fichiers",
  },
  {
    step: 3,
    title: "Décompresser le ZIP",
    description: "Clic droit → 'Extraire tout'",
    detail: "Vous obtenez un dossier 'site-dr-mukisi'",
  },
  {
    step: 4,
    title: "Dossier prêt !",
    description: "Contient tout le site web du Dr Mukisi",
    detail: "Prêt pour le déploiement sur Vercel",
  },
]

export default function DownloadInstructions() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-lg">📦 Code du Site</Badge>
        <h1 className="text-3xl font-bold text-gray-900">Télécharger le Site du Dr Mukisi</h1>
        <p className="text-xl text-gray-600">Tous les fichiers nécessaires pour mettre le site en ligne</p>
      </div>

      {/* What's included */}
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Code className="w-6 h-6" />
            Contenu du Téléchargement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectFiles.map((file, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                {file.icon}
                <div>
                  <h3 className="font-semibold">{file.name}</h3>
                  <p className="text-sm text-gray-600">{file.description}</p>
                  <Badge variant="outline" className="text-xs mt-1">
                    {file.count}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Download Steps */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center mb-6">Comment Télécharger le Code</h2>

        {downloadSteps.map((step, index) => {
          const isCompleted = currentStep > index
          const isCurrent = currentStep === index

          return (
            <Card
              key={index}
              className={`transition-all duration-300 ${
                isCompleted
                  ? "border-green-500 bg-green-50"
                  : isCurrent
                    ? "border-blue-500 bg-blue-50 shadow-lg"
                    : "border-gray-200"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted
                          ? "bg-green-500 text-white"
                          : isCurrent
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {isCompleted ? <CheckCircle className="w-5 h-5" /> : step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                      <p className="text-sm text-gray-500 mt-1">{step.detail}</p>
                    </div>
                  </div>
                  {isCurrent && (
                    <Button onClick={() => setCurrentStep(index + 1)} className="bg-blue-600">
                      Fait !
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Download Button */}
      <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <CardContent className="p-8 text-center">
          <Download className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Prêt à Télécharger ?</h3>
          <p className="text-green-100 mb-6">Cliquez sur le bouton "Download Code" en haut à droite de cette page</p>
          <div className="flex items-center justify-center gap-2 text-green-100">
            <span>Cherchez ce bouton</span>
            <ArrowRight className="w-4 h-4" />
            <Badge className="bg-blue-600 text-white px-3 py-1">
              <Download className="w-4 h-4 mr-1" />
              Download Code
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* What happens next */}
      <Alert className="border-blue-500 bg-blue-50">
        <CheckCircle className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          <strong>Après le téléchargement :</strong> Vous aurez un dossier complet avec tous les fichiers du site du Dr
          Mukisi. Ce dossier peut être déployé directement sur Vercel pour mettre le site en ligne !
        </AlertDescription>
      </Alert>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Étapes Suivantes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <span>Télécharger le code (ce que nous faisons maintenant)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <span>Créer un compte Vercel (gratuit)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <span>Déployer le site (glisser-déposer le dossier)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <span>Acheter un domaine (dr-mukisi.com)</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
