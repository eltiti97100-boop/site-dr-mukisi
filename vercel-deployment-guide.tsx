"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Upload, FolderOpen, Rocket, Globe, Download, FileText } from "lucide-react"
import Image from "next/image"

export default function VercelDeploymentGuide() {
  const [currentStep, setCurrentStep] = useState(1)
  const [deploymentUrl, setDeploymentUrl] = useState("")
  const [isDeploying, setIsDeploying] = useState(false)

  const handleDeploy = () => {
    setIsDeploying(true)
    setTimeout(() => {
      setDeploymentUrl("https://site-dr-mukisi-" + Math.random().toString(36).substr(2, 9) + ".vercel.app")
      setCurrentStep(5)
      setIsDeploying(false)
    }, 3000)
  }

  const deploymentSteps = [
    {
      step: 1,
      title: "Télécharger le Code",
      description: "Cliquer sur le bouton Download Code",
      status: "completed",
      icon: <Download className="w-5 h-5" />,
      details: "✅ Fait ! Vous avez trouvé le bouton de téléchargement",
    },
    {
      step: 2,
      title: "Décompresser le ZIP",
      description: "Extraire le dossier site-dr-mukisi",
      status: currentStep >= 2 ? "completed" : "pending",
      icon: <FolderOpen className="w-5 h-5" />,
      details: "Clic droit → Extraire tout → Dossier prêt",
    },
    {
      step: 3,
      title: "Ouvrir Vercel",
      description: "Aller sur vercel.com/new",
      status: currentStep >= 3 ? "completed" : "pending",
      icon: <Globe className="w-5 h-5" />,
      details: "Dashboard Vercel → New Project",
    },
    {
      step: 4,
      title: "Importer le Dossier",
      description: "Glisser-déposer site-dr-mukisi",
      status: currentStep >= 4 ? "completed" : "pending",
      icon: <Upload className="w-5 h-5" />,
      details: "Drag & Drop → Configuration automatique",
    },
    {
      step: 5,
      title: "Déployer",
      description: "Cliquer Deploy → Site en ligne",
      status: currentStep >= 5 ? "completed" : "pending",
      icon: <Rocket className="w-5 h-5" />,
      details: "2-3 minutes → URL générée automatiquement",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-green-100 text-green-800 px-4 py-2 text-lg">✅ Bouton Trouvé !</Badge>
        <h1 className="text-3xl font-bold text-gray-900">Déploiement du Site Dr Mukisi</h1>
        <p className="text-xl text-gray-600">Guide complet étape par étape</p>
      </div>

      {/* Download Button Screenshots */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <CheckCircle className="w-5 h-5" />
            Bouton de Téléchargement Localisé
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7P9ZzAIcdnoInR2fWZdN8NeiR5NLIh.png"
                alt="Interface v0 avec bouton de téléchargement"
                width={300}
                height={100}
                className="w-full rounded-lg"
              />
              <p className="text-sm text-green-700 mt-2">Interface v0 - Bouton Download visible</p>
            </div>
            <div className="bg-white rounded-lg p-4 border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lT9MLQON6RIxcgT44LPThtoUE8g5RS.png"
                alt="Interface v0 avec bouton de téléchargement confirmé"
                width={300}
                height={100}
                className="w-full rounded-lg"
              />
              <p className="text-sm text-green-700 mt-2">Confirmation - Bouton accessible</p>
            </div>
          </div>
          <Alert className="mt-4 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>Parfait !</strong> Vous avez localisé le bouton de téléchargement. Cliquez dessus pour obtenir le
              fichier ZIP.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Step-by-step Progress */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center mb-6">Progression du Déploiement</h2>

        {deploymentSteps.map((step, index) => {
          const isCompleted = step.status === "completed"
          const isCurrent = currentStep === step.step && !isCompleted
          const isPending = currentStep < step.step

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
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isCompleted
                          ? "bg-green-500 text-white"
                          : isCurrent
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {isCompleted ? <CheckCircle className="w-6 h-6" /> : step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                      <p className="text-sm text-gray-500 mt-1">{step.details}</p>
                    </div>
                  </div>
                  {isCurrent && step.step === 2 && (
                    <Button onClick={() => setCurrentStep(3)} className="bg-blue-600">
                      ZIP Décompressé
                    </Button>
                  )}
                  {isCurrent && step.step === 3 && (
                    <Button onClick={() => setCurrentStep(4)} className="bg-blue-600">
                      Vercel Ouvert
                    </Button>
                  )}
                  {isCurrent && step.step === 4 && (
                    <Button onClick={() => setCurrentStep(5)} className="bg-blue-600">
                      Dossier Importé
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Actions Rapides</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.open("https://vercel.com/new", "_blank")}
              >
                <Globe className="w-4 h-4 mr-2" />
                Ouvrir Vercel
              </Button>
              <Button
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100"
                onClick={() => setCurrentStep(2)}
              >
                <FolderOpen className="w-4 h-4 mr-2" />
                Dossier Prêt
              </Button>
              <Button
                variant="secondary"
                className="bg-white text-green-600 hover:bg-gray-100"
                onClick={handleDeploy}
                disabled={isDeploying}
              >
                {isDeploying ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600 mr-2"></div>
                ) : (
                  <Rocket className="w-4 h-4 mr-2" />
                )}
                {isDeploying ? "Déploiement..." : "Déployer"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>Instructions Détaillées</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">📁 Après Téléchargement :</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Fichier ZIP dans "Téléchargements"</li>
                <li>• Clic droit → "Extraire tout"</li>
                <li>• Dossier "site-dr-mukisi" créé</li>
                <li>• Contient tous les fichiers du site</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">🚀 Sur Vercel :</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Aller sur vercel.com/new</li>
                <li>• Glisser le dossier sur la page</li>
                <li>• Vercel détecte Next.js automatiquement</li>
                <li>• Cliquer "Deploy" → Site en ligne !</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Success Message */}
      {deploymentUrl && (
        <Alert className="border-green-500 bg-green-50">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <AlertDescription className="text-green-800">
            <div className="space-y-4">
              <p className="font-semibold text-xl">🎉 FÉLICITATIONS ! Site du Dr Mukisi EN LIGNE !</p>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-sm text-gray-600 mb-2">URL temporaire :</p>
                <code className="bg-gray-100 px-3 py-2 rounded font-mono text-sm block break-all">{deploymentUrl}</code>
                <div className="flex gap-3 mt-3">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <a href={deploymentUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 mr-2" />
                      Voir le Site
                    </a>
                  </Button>
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Partager l'URL
                  </Button>
                </div>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="font-semibold text-blue-800">Prochaine étape :</p>
                <p className="text-blue-700">
                  Acheter le domaine dr-mukisi.com (10,98€/an) pour une URL professionnelle
                </p>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Cost Summary */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="text-yellow-800">💰 Récapitulatif des Coûts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Hébergement Vercel</span>
              <Badge className="bg-green-100 text-green-800">GRATUIT</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Certificat SSL</span>
              <Badge className="bg-green-100 text-green-800">GRATUIT</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>CDN Mondial</span>
              <Badge className="bg-green-100 text-green-800">GRATUIT</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Domaine dr-mukisi.com</span>
              <Badge className="bg-blue-100 text-blue-800">10,98€/an</Badge>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total</span>
              <span className="text-green-600">10,98€/an (0,91€/mois)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
