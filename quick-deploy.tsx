"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, ExternalLink, Download, Globe, Zap, Shield } from "lucide-react"

const quickSteps = [
  {
    title: "1. Télécharger le code",
    description: "Récupérer tous les fichiers du site",
    action: "download",
    completed: false,
  },
  {
    title: "2. Créer compte Vercel",
    description: "Hébergement gratuit avec SSL",
    action: "link",
    url: "https://vercel.com/signup",
    completed: false,
  },
  {
    title: "3. Importer le projet",
    description: "Glisser-déposer le dossier",
    action: "manual",
    completed: false,
  },
  {
    title: "4. Site en ligne !",
    description: "Votre site est accessible",
    action: "result",
    completed: false,
  },
]

export default function QuickDeploy() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const completeStep = (index: number) => {
    if (!completedSteps.includes(index)) {
      setCompletedSteps([...completedSteps, index])
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <Badge className="bg-green-100 text-green-800 px-4 py-2 text-lg">⚡ Déploiement Express</Badge>
        <h1 className="text-3xl font-bold">Site en ligne en 5 minutes</h1>
        <p className="text-gray-600">La méthode la plus rapide pour mettre le site du Dr Mukisi en ligne</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="text-center">
          <CardContent className="p-6">
            <Globe className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="font-bold text-lg mb-2">Hébergement</h3>
            <p className="text-2xl font-bold text-green-600">GRATUIT</p>
            <p className="text-sm text-gray-600">SSL + CDN inclus</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
            <h3 className="font-bold text-lg mb-2">Performance</h3>
            <p className="text-2xl font-bold text-blue-600">&lt; 1s</p>
            <p className="text-sm text-gray-600">Temps de chargement</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <Shield className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <h3 className="font-bold text-lg mb-2">Sécurité</h3>
            <p className="text-2xl font-bold text-purple-600">A+</p>
            <p className="text-sm text-gray-600">SSL Rating</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {quickSteps.map((step, index) => {
          const isCompleted = completedSteps.includes(index)

          return (
            <Card
              key={index}
              className={`transition-all duration-300 ${
                isCompleted ? "border-green-500 bg-green-50" : "border-gray-200"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted ? "bg-green-500 text-white" : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {isCompleted ? <CheckCircle className="w-5 h-5" /> : index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {step.action === "download" && (
                      <Button onClick={() => completeStep(index)} className="bg-blue-600">
                        <Download className="w-4 h-4 mr-1" />
                        Télécharger
                      </Button>
                    )}
                    {step.action === "link" && step.url && (
                      <Button onClick={() => completeStep(index)} variant="outline" asChild>
                        <a href={step.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Ouvrir Vercel
                        </a>
                      </Button>
                    )}
                    {step.action === "manual" && (
                      <Button onClick={() => completeStep(index)} variant="outline">
                        Fait !
                      </Button>
                    )}
                    {step.action === "result" && completedSteps.length >= 3 && (
                      <Badge className="bg-green-500 text-white px-4 py-2">✅ Terminé</Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {completedSteps.length === quickSteps.length && (
        <Alert className="border-green-500 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            🎉 <strong>Félicitations !</strong> Le site du Dr Mukisi est maintenant en ligne ! Votre URL temporaire :{" "}
            <code className="bg-white px-2 py-1 rounded">https://votre-site.vercel.app</code>
          </AlertDescription>
        </Alert>
      )}

      <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Besoin d'aide ?</h3>
          <p className="text-blue-100 mb-4">Je peux vous guider étape par étape</p>
          <div className="flex justify-center gap-3">
            <Button variant="secondary">Guide détaillé</Button>
            <Button variant="secondary">Support technique</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
