"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Settings, Globe, Users, CheckCircle, Clock, XCircle, Eye, Code, BarChart3 } from "lucide-react"

export default function AdminIntegrationDashboard() {
  const [activeTab, setActiveTab] = useState("requests")

  const pendingRequests = [
    {
      id: "REQ001",
      doctorName: "Dr Martin Mukisi",
      institution: "Cabinet Soins Miel",
      website: "https://cabinet-mukisi.cd",
      type: "test",
      date: "2024-01-15",
      email: "contact@soinsmiel.cd",
      features: ["Dépôt d'images", "Diagnostic IA", "Communication résultats"],
      status: "pending",
    },
    {
      id: "REQ002",
      doctorName: "Dr Sophie Laurent",
      institution: "Clinique Dermatologique Paris",
      website: "https://dermato-paris.fr",
      type: "permanent",
      date: "2024-01-14",
      email: "contact@dermato-paris.fr",
      features: ["Toutes fonctionnalités", "Branding personnalisé"],
      status: "pending",
    },
  ]

  const activeIntegrations = [
    {
      id: "INT001",
      doctorName: "Dr Jean Dubois",
      institution: "Cabinet Médical Lyon",
      website: "https://cabinet-dubois.fr",
      type: "practice",
      activeSince: "2023-12-01",
      patients: 45,
      consultations: 78,
      status: "active",
      expiresAt: "2024-06-01",
    },
  ]

  const handleApprove = (requestId: string) => {
    console.log("Approving request:", requestId)
    // Logique d'approbation
  }

  const handleReject = (requestId: string) => {
    console.log("Rejecting request:", requestId)
    // Logique de rejet
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">En attente</Badge>
      case "active":
        return <Badge className="bg-green-100 text-green-800">Actif</Badge>
      case "expired":
        return <Badge className="bg-red-100 text-red-800">Expiré</Badge>
      default:
        return <Badge className="bg-slate-100 text-slate-800">{status}</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "test":
        return <Badge className="bg-blue-100 text-blue-800">Test</Badge>
      case "practice":
        return <Badge className="bg-purple-100 text-purple-800">Pratique</Badge>
      case "permanent":
        return <Badge className="bg-green-100 text-green-800">Définitif</Badge>
      default:
        return <Badge className="bg-slate-100 text-slate-800">{type}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Administration des Intégrations</h1>
          <p className="text-slate-600">Gérez les demandes d'intégration et les widgets déployés</p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Demandes en attente</CardTitle>
              <Clock className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{pendingRequests.length}</div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Intégrations actives</CardTitle>
              <CheckCircle className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{activeIntegrations.length}</div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Patients total</CardTitle>
              <Users className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeIntegrations.reduce((sum, int) => sum + int.patients, 0)}</div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Consultations</CardTitle>
              <BarChart3 className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {activeIntegrations.reduce((sum, int) => sum + int.consultations, 0)}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-slate-200">
            <TabsTrigger value="requests">Demandes</TabsTrigger>
            <TabsTrigger value="active">Intégrations actives</TabsTrigger>
            <TabsTrigger value="generator">Générateur de code</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          {/* Demandes en attente */}
          <TabsContent value="requests" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Demandes d'intégration en attente</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingRequests.map((request) => (
                    <div key={request.id} className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-slate-900">{request.doctorName}</h3>
                          <p className="text-slate-600">{request.institution}</p>
                          <p className="text-sm text-slate-500">{request.website}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getTypeBadge(request.type)}
                          {getStatusBadge(request.status)}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-slate-700 mb-1">Contact</p>
                          <p className="text-sm text-slate-600">{request.email}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-700 mb-1">Date de demande</p>
                          <p className="text-sm text-slate-600">{request.date}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-slate-700 mb-2">Fonctionnalités demandées</p>
                        <div className="flex flex-wrap gap-2">
                          {request.features.map((feature, index) => (
                            <Badge key={index} className="bg-blue-100 text-blue-800">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          onClick={() => handleApprove(request.id)}
                          className="bg-green-600 hover:bg-green-700"
                          size="sm"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approuver
                        </Button>
                        <Button
                          onClick={() => handleReject(request.id)}
                          variant="outline"
                          className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent"
                          size="sm"
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Rejeter
                        </Button>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          Détails
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Intégrations actives */}
          <TabsContent value="active" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Intégrations actives</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeIntegrations.map((integration) => (
                    <div key={integration.id} className="p-6 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-slate-900">{integration.doctorName}</h3>
                          <p className="text-slate-600">{integration.institution}</p>
                          <p className="text-sm text-slate-500">{integration.website}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getTypeBadge(integration.type)}
                          {getStatusBadge(integration.status)}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-slate-700 mb-1">Actif depuis</p>
                          <p className="text-sm text-slate-600">{integration.activeSince}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-700 mb-1">Patients</p>
                          <p className="text-sm text-slate-600">{integration.patients}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-700 mb-1">Consultations</p>
                          <p className="text-sm text-slate-600">{integration.consultations}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-700 mb-1">Expire le</p>
                          <p className="text-sm text-slate-600">{integration.expiresAt}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Settings className="h-4 w-4 mr-2" />
                          Configurer
                        </Button>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <BarChart3 className="h-4 w-4 mr-2" />
                          Statistiques
                        </Button>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Code className="h-4 w-4 mr-2" />
                          Code d'intégration
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Générateur de code */}
          <TabsContent value="generator" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>Générateur de code d'intégration</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nom du médecin</label>
                    <Input placeholder="Dr Martin Mukisi" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Institution</label>
                    <Input placeholder="Cabinet Soins Miel" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email de contact</label>
                    <Input placeholder="contact@soinsmiel.cd" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Téléphone</label>
                    <Input placeholder="+243 XXX XXX XXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Couleur principale</label>
                  <Input type="color" defaultValue="#0f172a" />
                </div>

                <Button className="w-full bg-slate-800 hover:bg-slate-900">
                  <Code className="h-4 w-4 mr-2" />
                  Générer le code d'intégration
                </Button>

                <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <pre>{`<script src="https://dermato-pro.com/widget.js"></script>
<div id="dermato-widget" 
     data-doctor="Dr Martin Mukisi"
     data-institution="Cabinet Soins Miel"
     data-email="contact@soinsmiel.cd"
     data-phone="+243 XXX XXX XXX"
     data-color="#0f172a">
</div>`}</pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Paramètres */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5" />
                  <span>Paramètres généraux</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Notifications</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Nouvelle demande d'intégration</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Expiration d'intégration</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span className="text-sm">Rapport hebdomadaire</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Sécurité</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Validation manuelle obligatoire</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Vérification RPPS automatique</span>
                      </label>
                    </div>
                  </div>
                </div>

                <Button className="bg-slate-800 hover:bg-slate-900">Sauvegarder les paramètres</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
