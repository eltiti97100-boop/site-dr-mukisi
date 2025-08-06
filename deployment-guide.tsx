"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  CheckCircle,
  Globe,
  Mail,
  Shield,
  Zap,
  DollarSign,
  Clock,
  ExternalLink,
  Copy,
  Download,
  Settings,
} from "lucide-react"

const deploymentSteps = [
  {
    id: 1,
    title: "Créer compte GitHub",
    description: "Gratuit - Pour stocker le code",
    status: "pending",
    time: "2 min",
    cost: "0€",
    url: "https://github.com/signup",
  },
  {
    id: 2,
    title: "Télécharger le code",
    description: "Récupérer tous les fichiers du site",
    status: "pending",
    time: "1 min",
    cost: "0€",
    action: "download",
  },
  {
    id: 3,
    title: "Créer compte Vercel",
    description: "Hébergement gratuit avec SSL",
    status: "pending",
    time: "2 min",
    cost: "0€",
    url: "https://vercel.com/signup",
  },
  {
    id: 4,
    title: "Déployer le site",
    description: "Mise en ligne automatique",
    status: "pending",
    time: "3 min",
    cost: "0€",
  },
  {
    id: 5,
    title: "Acheter domaine",
    description: "dr-mukisi.com ou dr-mukisi.fr",
    status: "pending",
    time: "5 min",
    cost: "10€/an",
    url: "https://www.namecheap.com",
  },
  {
    id: 6,
    title: "Configurer domaine",
    description: "Connecter le domaine au site",
    status: "pending",
    time: "5 min",
    cost: "0€",
  },
]

const domainOptions = [
  {
    name: "dr-mukisi.com",
    price: "10.98€/an",
    provider: "Namecheap",
    recommended: true,
    features: ["SSL gratuit", "Protection WHOIS", "DNS gratuit"],
  },
  {
    name: "dr-mukisi.fr",
    price: "12.50€/an",
    provider: "OVH",
    recommended: false,
    features: ["Extension française", "Support français"],
  },
  {
    name: "soins-miel-mukisi.com",
    price: "10.98€/an",
    provider: "Namecheap",
    recommended: false,
    features: ["Nom plus descriptif", "SEO optimisé"],
  },
]

const emailOptions = [
  {
    name: "Zoho Mail",
    price: "1€/mois",
    features: ["5GB stockage", "Calendrier", "Support 24/7"],
    recommended: true,
    url: "https://www.zoho.com/mail/",
  },
  {
    name: "Google Workspace",
    price: "6€/mois",
    features: ["30GB stockage", "Meet", "Drive", "Docs"],
    recommended: false,
    url: "https://workspace.google.com/",
  },
  {
    name: "Microsoft 365",
    price: "5€/mois",
    features: ["50GB stockage", "Teams", "Office"],
    recommended: false,
    url: "https://www.microsoft.com/microsoft-365",
  },
]

export default function DeploymentGuide() {
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [selectedDomain, setSelectedDomain] = useState(domainOptions[0])
  const [selectedEmail, setSelectedEmail] = useState(emailOptions[0])

  const completeStep = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId])
    }
    if (stepId < deploymentSteps.length) {
      setCurrentStep(stepId + 1)
    }
  }

  const totalMonthlyCost = selectedEmail ? Number.parseFloat(selectedEmail.price.replace("€", "").replace(",", ".")) : 0
  const totalYearlyCost =
    Number.parseFloat(selectedDomain.price.replace("€", "").replace(",", ".")) + totalMonthlyCost * 12

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-green-100 text-green-800 px-4 py-2 text-lg">🚀 Guide de Déploiement</Badge>
          <h1 className="text-4xl font-bold text-gray-900">Mettre en ligne le site du Dr Mukisi</h1>
          <p className="text-xl text-gray-600">
            Déploiement professionnel en 20 minutes - Coût total :{" "}
            <span className="font-bold text-green-600">10€/an</span>
          </p>
        </div>

        {/* Cost Summary */}
        <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <DollarSign className="w-6 h-6" />
              Récapitulatif des Coûts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg border">
                <Globe className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-bold text-lg">Hébergement</h3>
                <p className="text-2xl font-bold text-green-600">GRATUIT</p>
                <p className="text-sm text-gray-600">Vercel - SSL inclus</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <Shield className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <h3 className="font-bold text-lg">Domaine</h3>
                <p className="text-2xl font-bold text-blue-600">{selectedDomain.price}</p>
                <p className="text-sm text-gray-600">{selectedDomain.name}</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <Mail className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                <h3 className="font-bold text-lg">Email Pro</h3>
                <p className="text-2xl font-bold text-orange-600">{selectedEmail.price}</p>
                <p className="text-sm text-gray-600">Optionnel - {selectedEmail.name}</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg text-center">
              <h3 className="text-xl font-bold">Total Annuel : {totalYearlyCost.toFixed(2)}€</h3>
              <p className="text-green-100">Soit {(totalYearlyCost / 12).toFixed(2)}€/mois</p>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="steps" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="steps">Étapes</TabsTrigger>
            <TabsTrigger value="domain">Domaine</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="advanced">Avancé</TabsTrigger>
          </TabsList>

          <TabsContent value="steps" className="space-y-4">
            <div className="space-y-4">
              {deploymentSteps.map((step, index) => {
                const isCompleted = completedSteps.includes(step.id)
                const isCurrent = currentStep === step.id
                const isPending = step.id > currentStep

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
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              isCompleted
                                ? "bg-green-500 text-white"
                                : isCurrent
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {isCompleted ? <CheckCircle className="w-5 h-5" /> : step.id}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {step.time}
                              </Badge>
                              <Badge
                                variant="outline"
                                className={`flex items-center gap-1 ${
                                  step.cost === "0€" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                <DollarSign className="w-3 h-3" />
                                {step.cost}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {step.url && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={step.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-1" />
                                Ouvrir
                              </a>
                            </Button>
                          )}
                          {step.action === "download" && (
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-1" />
                              Télécharger
                            </Button>
                          )}
                          {isCurrent && (
                            <Button onClick={() => completeStep(step.id)} className="bg-blue-600">
                              Terminé
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {completedSteps.length === deploymentSteps.length && (
              <Alert className="border-green-500 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  🎉 <strong>Félicitations !</strong> Le site du Dr Mukisi est maintenant en ligne et accessible au
                  public !
                </AlertDescription>
              </Alert>
            )}
          </TabsContent>

          <TabsContent value="domain" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {domainOptions.map((domain, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedDomain.name === domain.name ? "border-2 border-blue-500 bg-blue-50" : "hover:shadow-lg"
                  } ${domain.recommended ? "ring-2 ring-green-200" : ""}`}
                  onClick={() => setSelectedDomain(domain)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{domain.name}</CardTitle>
                      {domain.recommended && <Badge className="bg-green-500">Recommandé</Badge>}
                    </div>
                    <CardDescription className="text-xl font-bold text-blue-600">{domain.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">Chez {domain.provider}</p>
                    <ul className="space-y-1">
                      {domain.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Instructions d'achat de domaine
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">Aller sur {selectedDomain.provider}</p>
                    <p className="text-sm text-gray-600">Rechercher "{selectedDomain.name}"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Ajouter au panier</p>
                    <p className="text-sm text-gray-600">Choisir 1 an minimum</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">Finaliser l'achat</p>
                    <p className="text-sm text-gray-600">Paiement sécurisé par carte</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="email" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emailOptions.map((email, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedEmail.name === email.name ? "border-2 border-blue-500 bg-blue-50" : "hover:shadow-lg"
                  } ${email.recommended ? "ring-2 ring-green-200" : ""}`}
                  onClick={() => setSelectedEmail(email)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{email.name}</CardTitle>
                      {email.recommended && <Badge className="bg-green-500">Recommandé</Badge>}
                    </div>
                    <CardDescription className="text-xl font-bold text-orange-600">{email.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {email.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 bg-transparent" variant="outline" asChild>
                      <a href={email.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Voir l'offre
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert>
              <Mail className="h-4 w-4" />
              <AlertDescription>
                <strong>Adresses email suggérées :</strong> contact@dr-mukisi.com, rendez-vous@dr-mukisi.com,
                info@dr-mukisi.com
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Optimisations Gratuites
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>SSL Certificate</span>
                    <Badge className="bg-green-100 text-green-800">Inclus</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>CDN Mondial</span>
                    <Badge className="bg-green-100 text-green-800">Inclus</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Compression Gzip</span>
                    <Badge className="bg-green-100 text-green-800">Auto</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Cache Intelligent</span>
                    <Badge className="bg-green-100 text-green-800">Auto</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Configuration DNS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                    <div>Type: CNAME</div>
                    <div>Name: www</div>
                    <div>Value: cname.vercel-dns.com</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                    <div>Type: A</div>
                    <div>Name: @</div>
                    <div>Value: 76.76.19.61</div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Copy className="w-4 h-4 mr-1" />
                    Copier la configuration
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800">⚡ Performance Attendue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">98/100</div>
                    <div className="text-sm text-gray-600">Google PageSpeed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">1s</div>
                    <div className="text-sm text-gray-600">Temps de chargement</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">A+</div>
                    <div className="text-sm text-gray-600">SSL Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Prêt à commencer ?</h3>
                <p className="text-blue-100">Déployez le site du Dr Mukisi en 20 minutes</p>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" asChild>
                  <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer">
                    Créer compte GitHub
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="https://vercel.com/signup" target="_blank" rel="noopener noreferrer">
                    Créer compte Vercel
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
