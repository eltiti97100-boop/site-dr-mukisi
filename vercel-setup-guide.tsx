"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, ExternalLink, Upload, Globe, Zap, Shield, ArrowRight } from "lucide-react"

const vercelSteps = [
  {
    id: 1,
    title: "Créer compte Vercel",
    description: "Inscription gratuite avec GitHub",
    completed: false,
    url: "https://vercel.com/signup",
  },
  {
    id: 2,
    title: "Nouveau projet",
    description: "Cliquer sur 'New Project'",
    completed: false,
  },
  {
    id: 3,
    title: "Importer le code",
    description: "Glisser-déposer le dossier site-dr-mukisi",
    completed: false,
  },
  {
    id: 4,
    title: "Déployer",
    description: "Cliquer sur 'Deploy' et attendre",
    completed: false,
  },
]

export default function VercelSetupGuide() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [deploymentUrl, setDeploymentUrl] = useState("")

  const completeStep = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId])
    }
    if (stepId === 4) {
      setDeploymentUrl("https://site-dr-mukisi-" + Math.random().toString(36).substr(2, 9) + ".vercel.app")
    }
  }

  const allStepsCompleted = completedSteps.length === vercelSteps.length

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-lg">🚀 ÉTAPE 2</Badge>
        <h1 className="text-3xl font-bold text-gray-900">Créer votre compte Vercel</h1>
        <p className="text-xl text-gray-600">
          Hébergement <span className="font-bold text-green-600">GRATUIT</span> avec SSL et CDN mondial
        </p>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center border-green-200 bg-green-50">
          <CardContent className="p-6">
            <Globe className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <h3 className="font-bold text-lg mb-2">Hébergement Gratuit</h3>
            <p className="text-sm text-gray-600">Bande passante illimitée</p>
          </CardContent>
        </Card>
        <Card className="text-center border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="font-bold text-lg mb-2">SSL Automatique</h3>
            <p className="text-sm text-gray-600">Certificat HTTPS gratuit</p>
          </CardContent>
        </Card>
        <Card className="text-center border-purple-200 bg-purple-50">
          <CardContent className="p-6">
            <Zap className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="font-bold text-lg mb-2">CDN Mondial</h3>
            <p className="text-sm text-gray-600">Site ultra-rapide partout</p>
          </CardContent>
        </Card>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {vercelSteps.map((step) => {
          const isCompleted = completedSteps.includes(step.id)
          const isCurrent = !isCompleted && (step.id === 1 || completedSteps.includes(step.id - 1))

          return (
            <Card
              key={step.id}
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
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                        isCompleted
                          ? "bg-green-500 text-white"
                          : isCurrent
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {isCompleted ? <CheckCircle className="w-6 h-6" /> : step.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {step.url && isCurrent && (
                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <a href={step.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Ouvrir Vercel
                        </a>
                      </Button>
                    )}
                    {isCurrent && !step.url && (
                      <Button onClick={() => completeStep(step.id)} className="bg-green-600 hover:bg-green-700">
                        Terminé
                      </Button>
                    )}
                    {isCompleted && <Badge className="bg-green-500 text-white px-3 py-1">✅ Fait</Badge>}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Instructions détaillées */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Upload className="w-5 h-5" />
            Instructions Détaillées
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <p className="font-semibold text-blue-900">Aller sur vercel.com/signup</p>
                <p className="text-sm text-blue-700">
                  Cliquez sur "Continue with GitHub" pour vous inscrire gratuitement
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <p className="font-semibold text-blue-900">Créer un nouveau projet</p>
                <p className="text-sm text-blue-700">Sur le dashboard Vercel, cliquez sur "New Project"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <p className="font-semibold text-blue-900">Importer votre dossier</p>
                <p className="text-sm text-blue-700">
                  Glissez-déposez le dossier "site-dr-mukisi" que vous avez téléchargé
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                4
              </div>
              <div>
                <p className="font-semibold text-blue-900">Déployer le site</p>
                <p className="text-sm text-blue-700">Cliquez sur "Deploy" et attendez 2-3 minutes</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Success Message */}
      {allStepsCompleted && (
        <Alert className="border-green-500 bg-green-50">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <AlertDescription className="text-green-800">
            <div className="space-y-2">
              <p className="font-semibold">🎉 Félicitations ! Le site du Dr Mukisi est en ligne !</p>
              <p>
                URL temporaire : <code className="bg-white px-2 py-1 rounded font-mono">{deploymentUrl}</code>
              </p>
              <p className="text-sm">Prochaine étape : Acheter le domaine dr-mukisi.com pour une URL professionnelle</p>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Next Step */}
      {allStepsCompleted && (
        <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Étape suivante : Domaine professionnel</h3>
                <p className="text-green-100">Transformez votre URL temporaire en dr-mukisi.com</p>
              </div>
              <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Acheter domaine
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Help */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
              💡
            </div>
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Besoin d'aide ?</h3>
              <p className="text-yellow-700 text-sm mb-3">
                Si vous rencontrez un problème, je peux vous guider étape par étape !
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="bg-white border-yellow-300 text-yellow-700">
                  Aide technique
                </Button>
                <Button variant="outline" size="sm" className="bg-white border-yellow-300 text-yellow-700">
                  Tutoriel vidéo
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
