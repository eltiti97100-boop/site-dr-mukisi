"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mail,
  Send,
  Users,
  BarChart3,
  Eye,
  MousePointer,
  TrendingUp,
  Filter,
  Plus,
  Edit,
  Trash2,
  Copy,
} from "lucide-react"

const emailTemplates = [
  {
    id: "TEMP001",
    name: "Rappel de rendez-vous",
    subject: "Rappel : Votre consultation avec le Dr Mukisi demain",
    category: "appointment",
    status: "active",
    lastUsed: "2024-01-20",
    openRate: 85,
    clickRate: 12,
  },
  {
    id: "TEMP002",
    name: "Résultats disponibles",
    subject: "Vos résultats d'analyse sont disponibles",
    category: "results",
    status: "active",
    lastUsed: "2024-01-18",
    openRate: 92,
    clickRate: 45,
  },
  {
    id: "TEMP003",
    name: "Promotion soins au miel",
    subject: "🍯 Offre spéciale : 20% sur les soins au miel",
    category: "promotion",
    status: "draft",
    lastUsed: "2024-01-15",
    openRate: 78,
    clickRate: 23,
  },
  {
    id: "TEMP004",
    name: "Newsletter mensuelle",
    subject: "Actualités médicales - Dr Mukisi",
    category: "newsletter",
    status: "active",
    lastUsed: "2024-01-10",
    openRate: 68,
    clickRate: 15,
  },
]

const campaigns = [
  {
    id: "CAMP001",
    name: "Campagne Soins au Miel - Janvier",
    template: "Promotion soins au miel",
    recipients: 1250,
    sent: "2024-01-15",
    status: "completed",
    openRate: 78,
    clickRate: 23,
    revenue: 3400,
  },
  {
    id: "CAMP002",
    name: "Newsletter Janvier 2024",
    template: "Newsletter mensuelle",
    recipients: 2100,
    sent: "2024-01-10",
    status: "completed",
    openRate: 68,
    clickRate: 15,
    revenue: 0,
  },
  {
    id: "CAMP003",
    name: "Rappels RDV - Semaine 3",
    template: "Rappel de rendez-vous",
    recipients: 85,
    sent: "2024-01-20",
    status: "completed",
    openRate: 85,
    clickRate: 12,
    revenue: 0,
  },
]

const segments = [
  { id: "SEG001", name: "Patients fidèles", count: 450, criteria: "Plus de 5 consultations" },
  { id: "SEG002", name: "Nouveaux patients", count: 180, criteria: "Première consultation < 3 mois" },
  { id: "SEG003", name: "Soins au miel", count: 320, criteria: "Intéressés par l'apithérapie" },
  { id: "SEG004", name: "Télémédecine", count: 280, criteria: "Utilisateurs téléconsultation" },
  { id: "SEG005", name: "Formations", count: 95, criteria: "Professionnels de santé" },
]

export default function EmailMarketing() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [isCreatingCampaign, setIsCreatingCampaign] = useState(false)

  const [campaignForm, setCampaignForm] = useState({
    name: "",
    template: "",
    segment: "",
    subject: "",
    scheduledDate: "",
    scheduledTime: "",
  })

  const totalRecipients = segments.reduce((sum, segment) => sum + segment.count, 0)
  const avgOpenRate = campaigns.reduce((sum, campaign) => sum + campaign.openRate, 0) / campaigns.length
  const avgClickRate = campaigns.reduce((sum, campaign) => sum + campaign.clickRate, 0) / campaigns.length
  const totalRevenue = campaigns.reduce((sum, campaign) => sum + campaign.revenue, 0)

  const handleCreateCampaign = () => {
    console.log("Création de campagne:", campaignForm)
    setIsCreatingCampaign(false)
    setCampaignForm({
      name: "",
      template: "",
      segment: "",
      subject: "",
      scheduledDate: "",
      scheduledTime: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Email Marketing</h1>
            <p className="text-slate-600 mt-2">Gérez vos campagnes email et newsletters</p>
          </div>
          <Button
            onClick={() => setIsCreatingCampaign(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Nouvelle campagne
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white border border-slate-200">
            <TabsTrigger value="dashboard">Tableau de bord</TabsTrigger>
            <TabsTrigger value="campaigns">Campagnes</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="segments">Segments</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-600 text-sm font-medium">Abonnés Totaux</p>
                      <p className="text-3xl font-bold text-blue-800">{totalRecipients.toLocaleString()}</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-green-600 text-sm font-medium">+8.5%</span>
                      </div>
                    </div>
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-600 text-sm font-medium">Taux d'Ouverture</p>
                      <p className="text-3xl font-bold text-green-800">{Math.round(avgOpenRate)}%</p>
                      <div className="flex items-center mt-2">
                        <Eye className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-green-600 text-sm font-medium">Excellent</span>
                      </div>
                    </div>
                    <Eye className="w-8 h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-600 text-sm font-medium">Taux de Clic</p>
                      <p className="text-3xl font-bold text-purple-800">{Math.round(avgClickRate)}%</p>
                      <div className="flex items-center mt-2">
                        <MousePointer className="w-4 h-4 text-purple-500 mr-1" />
                        <span className="text-purple-600 text-sm font-medium">Bon</span>
                      </div>
                    </div>
                    <MousePointer className="w-8 h-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-600 text-sm font-medium">Revenus Générés</p>
                      <p className="text-3xl font-bold text-orange-800">{totalRevenue.toLocaleString()}€</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-orange-600 text-sm font-medium">Ce mois</span>
                      </div>
                    </div>
                    <BarChart3 className="w-8 h-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Campagnes récentes */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-purple-600" />
                  Campagnes Récentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaigns.slice(0, 3).map((campaign) => (
                    <div key={campaign.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">{campaign.name}</h4>
                          <p className="text-sm text-slate-600">
                            {campaign.recipients} destinataires • {campaign.sent}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <div className="font-bold text-green-600">{campaign.openRate}%</div>
                          <div className="text-slate-500">Ouverture</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-blue-600">{campaign.clickRate}%</div>
                          <div className="text-slate-500">Clic</div>
                        </div>
                        {campaign.revenue > 0 && (
                          <div className="text-center">
                            <div className="font-bold text-purple-600">{campaign.revenue}€</div>
                            <div className="text-slate-500">Revenus</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Templates */}
          <TabsContent value="templates" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Templates Email</h2>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Plus className="w-4 h-4 mr-2" />
                Nouveau template
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emailTemplates.map((template) => (
                <Card key={template.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge
                        className={
                          template.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {template.status}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Copy className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent text-red-600">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 mb-2">{template.name}</h3>
                    <p className="text-sm text-slate-600 mb-4">{template.subject}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-bold text-blue-600">{template.openRate}%</div>
                        <div className="text-blue-800">Ouverture</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-bold text-green-600">{template.clickRate}%</div>
                        <div className="text-green-800">Clic</div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t text-xs text-slate-500">
                      Dernière utilisation : {new Date(template.lastUsed).toLocaleDateString("fr-FR")}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Segments */}
          <TabsContent value="segments" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Segments de Patients</h2>
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <Plus className="w-4 h-4 mr-2" />
                Nouveau segment
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {segments.map((segment) => (
                <Card key={segment.id} className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Filter className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 mb-2">{segment.name}</h3>
                    <p className="text-sm text-slate-600 mb-4">{segment.criteria}</p>

                    <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">{segment.count}</div>
                      <div className="text-sm text-slate-600">patients</div>
                    </div>

                    <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer campagne
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Modal de création de campagne */}
        {isCreatingCampaign && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Mail className="w-6 h-6 mr-2 text-purple-600" />
                    Nouvelle Campagne Email
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsCreatingCampaign(false)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="campaignName">Nom de la campagne</Label>
                    <Input
                      id="campaignName"
                      value={campaignForm.name}
                      onChange={(e) => setCampaignForm({ ...campaignForm, name: e.target.value })}
                      placeholder="Ex: Promotion Février 2024"
                    />
                  </div>
                  <div>
                    <Label htmlFor="template">Template</Label>
                    <Select
                      value={campaignForm.template}
                      onValueChange={(value) => setCampaignForm({ ...campaignForm, template: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir un template" />
                      </SelectTrigger>
                      <SelectContent>
                        {emailTemplates.map((template) => (
                          <SelectItem key={template.id} value={template.id}>
                            {template.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="segment">Segment de destinataires</Label>
                  <Select
                    value={campaignForm.segment}
                    onValueChange={(value) => setCampaignForm({ ...campaignForm, segment: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un segment" />
                    </SelectTrigger>
                    <SelectContent>
                      {segments.map((segment) => (
                        <SelectItem key={segment.id} value={segment.id}>
                          {segment.name} ({segment.count} patients)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subject">Objet de l'email</Label>
                  <Input
                    id="subject"
                    value={campaignForm.subject}
                    onChange={(e) => setCampaignForm({ ...campaignForm, subject: e.target.value })}
                    placeholder="Objet personnalisé (optionnel)"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="scheduledDate">Date d'envoi</Label>
                    <Input
                      id="scheduledDate"
                      type="date"
                      value={campaignForm.scheduledDate}
                      onChange={(e) => setCampaignForm({ ...campaignForm, scheduledDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="scheduledTime">Heure d'envoi</Label>
                    <Input
                      id="scheduledTime"
                      type="time"
                      value={campaignForm.scheduledTime}
                      onChange={(e) => setCampaignForm({ ...campaignForm, scheduledTime: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    onClick={handleCreateCampaign}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Programmer l'envoi
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsCreatingCampaign(false)}
                    className="flex-1 bg-transparent"
                  >
                    Annuler
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
