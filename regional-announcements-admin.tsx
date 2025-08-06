"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Plus, Edit, Trash2, Eye, Globe } from "lucide-react"

export default function RegionalAnnouncementsAdmin() {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      region: "Guadeloupe",
      title: "Accès rapide aux soins dermatologiques",
      content: "Face à la pénurie de dermatologues...",
      active: true,
      postalCodes: ["971XX"],
      priority: "high",
    },
  ])

  const [newAnnouncement, setNewAnnouncement] = useState({
    region: "",
    title: "",
    content: "",
    postalCodes: "",
    priority: "normal",
  })

  const regions = [
    { code: "GP", name: "Guadeloupe", flag: "🌴" },
    { code: "MQ", name: "Martinique", flag: "🏝️" },
    { code: "GF", name: "Guyane", flag: "🌿" },
    { code: "RE", name: "Réunion", flag: "🌺" },
    { code: "YT", name: "Mayotte", flag: "🏖️" },
    { code: "FR", name: "France métropolitaine", flag: "🇫🇷" },
  ]

  const handleCreateAnnouncement = () => {
    const announcement = {
      id: Date.now(),
      ...newAnnouncement,
      postalCodes: newAnnouncement.postalCodes.split(",").map((code) => code.trim()),
      active: true,
    }
    setAnnouncements([...announcements, announcement])
    setNewAnnouncement({
      region: "",
      title: "",
      content: "",
      postalCodes: "",
      priority: "normal",
    })
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800">Haute</Badge>
      case "normal":
        return <Badge className="bg-blue-100 text-blue-800">Normale</Badge>
      case "low":
        return <Badge className="bg-gray-100 text-gray-800">Basse</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">{priority}</Badge>
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Gestion des Annonces Régionales</h1>
        <p className="text-slate-600">Configurez les annonces spécifiques par région géographique</p>
      </div>

      <Tabs defaultValue="list" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-white border border-slate-200">
          <TabsTrigger value="list">Liste des annonces</TabsTrigger>
          <TabsTrigger value="create">Créer une annonce</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
        </TabsList>

        {/* Liste des annonces */}
        <TabsContent value="list" className="space-y-4">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="border-slate-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>{announcement.region}</span>
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    {getPriorityBadge(announcement.priority)}
                    <Badge
                      className={announcement.active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                    >
                      {announcement.active ? "Actif" : "Inactif"}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-slate-900 mb-2">{announcement.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-2">{announcement.content}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {announcement.postalCodes.map((code, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {code}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <Eye className="h-4 w-4 mr-1" />
                      Aperçu
                    </Button>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <Edit className="h-4 w-4 mr-1" />
                      Modifier
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Supprimer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Créer une annonce */}
        <TabsContent value="create" className="space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Nouvelle annonce régionale</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="region">Région cible</Label>
                  <select
                    id="region"
                    value={newAnnouncement.region}
                    onChange={(e) => setNewAnnouncement((prev) => ({ ...prev, region: e.target.value }))}
                    className="w-full p-2 border border-slate-300 rounded-md"
                  >
                    <option value="">Sélectionner une région</option>
                    {regions.map((region) => (
                      <option key={region.code} value={region.name}>
                        {region.flag} {region.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Priorité</Label>
                  <select
                    id="priority"
                    value={newAnnouncement.priority}
                    onChange={(e) => setNewAnnouncement((prev) => ({ ...prev, priority: e.target.value }))}
                    className="w-full p-2 border border-slate-300 rounded-md"
                  >
                    <option value="low">Basse</option>
                    <option value="normal">Normale</option>
                    <option value="high">Haute</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Titre de l'annonce</Label>
                <Input
                  id="title"
                  value={newAnnouncement.title}
                  onChange={(e) => setNewAnnouncement((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="Ex: Accès rapide aux soins dermatologiques"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Contenu de l'annonce</Label>
                <Textarea
                  id="content"
                  value={newAnnouncement.content}
                  onChange={(e) => setNewAnnouncement((prev) => ({ ...prev, content: e.target.value }))}
                  placeholder="Rédigez le contenu de votre annonce..."
                  rows={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="postalCodes">Codes postaux (séparés par des virgules)</Label>
                <Input
                  id="postalCodes"
                  value={newAnnouncement.postalCodes}
                  onChange={(e) => setNewAnnouncement((prev) => ({ ...prev, postalCodes: e.target.value }))}
                  placeholder="Ex: 971XX, 97100, 97110"
                />
                <p className="text-xs text-slate-500">
                  Utilisez XX pour tous les codes d'un département (ex: 971XX pour toute la Guadeloupe)
                </p>
              </div>

              <Button
                onClick={handleCreateAnnouncement}
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!newAnnouncement.region || !newAnnouncement.title || !newAnnouncement.content}
              >
                <Plus className="h-4 w-4 mr-2" />
                Créer l'annonce
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Paramètres */}
        <TabsContent value="settings" className="space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Paramètres de géolocalisation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Activer la géolocalisation GPS</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Activer la géolocalisation par IP</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Permettre la sélection manuelle</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span className="text-sm">Forcer l'affichage du sélecteur de région</span>
                </label>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <h4 className="font-medium text-slate-800 mb-2">Statistiques</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Détections GPS :</span>
                    <span className="font-medium ml-2">1,234</span>
                  </div>
                  <div>
                    <span className="text-slate-600">Détections IP :</span>
                    <span className="font-medium ml-2">856</span>
                  </div>
                  <div>
                    <span className="text-slate-600">Sélections manuelles :</span>
                    <span className="font-medium ml-2">432</span>
                  </div>
                  <div>
                    <span className="text-slate-600">Annonces affichées :</span>
                    <span className="font-medium ml-2">2,891</span>
                  </div>
                </div>
              </div>

              <Button className="bg-slate-800 hover:bg-slate-900">Sauvegarder les paramètres</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
