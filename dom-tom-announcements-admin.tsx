"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Save, MapPin, Info } from "lucide-react"
import { DOM_TOM_REGIONS } from "@/utils/dom-tom-geolocation"

interface Announcement {
  id: string
  region: string
  title: string
  content: string
  type: "info" | "warning" | "success"
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export default function DOMTOMAnnouncementsAdmin() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: "1",
      region: "GP",
      title: "Accès rapide aux soins dermatologiques en Guadeloupe",
      content:
        "Face à la pénurie de dermatologues dans notre région, nous avons mis en place une solution innovante pour réduire les délais d'attente...",
      type: "info",
      isActive: true,
      createdAt: "2024-01-15",
      updatedAt: "2024-01-15",
    },
    {
      id: "2",
      region: "MQ",
      title: "Consultation prioritaire Martinique",
      content: "Accès prioritaire aux consultations dermatologiques pour les résidents de Martinique...",
      type: "success",
      isActive: true,
      createdAt: "2024-01-10",
      updatedAt: "2024-01-12",
    },
  ])

  const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [formData, setFormData] = useState({
    region: "",
    title: "",
    content: "",
    type: "info" as "info" | "warning" | "success",
  })

  const handleCreate = () => {
    setIsCreating(true)
    setFormData({ region: "", title: "", content: "", type: "info" })
  }

  const handleEdit = (announcement: Announcement) => {
    setEditingAnnouncement(announcement)
    setFormData({
      region: announcement.region,
      title: announcement.title,
      content: announcement.content,
      type: announcement.type,
    })
  }

  const handleSave = () => {
    if (isCreating) {
      const newAnnouncement: Announcement = {
        id: Date.now().toString(),
        ...formData,
        isActive: true,
        createdAt: new Date().toISOString().split("T")[0],
        updatedAt: new Date().toISOString().split("T")[0],
      }
      setAnnouncements([...announcements, newAnnouncement])
      setIsCreating(false)
    } else if (editingAnnouncement) {
      setAnnouncements(
        announcements.map((a) =>
          a.id === editingAnnouncement.id
            ? { ...a, ...formData, updatedAt: new Date().toISOString().split("T")[0] }
            : a,
        ),
      )
      setEditingAnnouncement(null)
    }
    setFormData({ region: "", title: "", content: "", type: "info" })
  }

  const handleCancel = () => {
    setIsCreating(false)
    setEditingAnnouncement(null)
    setFormData({ region: "", title: "", content: "", type: "info" })
  }

  const handleDelete = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette annonce ?")) {
      setAnnouncements(announcements.filter((a) => a.id !== id))
    }
  }

  const toggleActive = (id: string) => {
    setAnnouncements(announcements.map((a) => (a.id === id ? { ...a, isActive: !a.isActive } : a)))
  }

  const getRegionName = (code: string) => {
    const region = DOM_TOM_REGIONS.find((r) => r.code === code)
    return region ? region.name : code
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "info":
        return "bg-blue-100 text-blue-800"
      case "warning":
        return "bg-orange-100 text-orange-800"
      case "success":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Annonces DOM-TOM</h1>
            <p className="text-gray-600">Gérez les annonces spécifiques à chaque région d'outre-mer</p>
          </div>
          <Button onClick={handleCreate}>
            <Plus className="mr-2 h-4 w-4" />
            Nouvelle annonce
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Formulaire */}
          {(isCreating || editingAnnouncement) && (
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>{isCreating ? "Créer une annonce" : "Modifier l'annonce"}</CardTitle>
                  <CardDescription>Configurez l'annonce pour une région DOM-TOM spécifique</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="region">Région DOM-TOM</Label>
                    <Select
                      value={formData.region}
                      onValueChange={(value) => setFormData({ ...formData, region: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez une région" />
                      </SelectTrigger>
                      <SelectContent>
                        {DOM_TOM_REGIONS.map((region) => (
                          <SelectItem key={region.code} value={region.code}>
                            {region.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="type">Type d'annonce</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value: "info" | "warning" | "success") =>
                        setFormData({ ...formData, type: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="info">Information</SelectItem>
                        <SelectItem value="warning">Avertissement</SelectItem>
                        <SelectItem value="success">Succès</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="title">Titre</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Titre de l'annonce"
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Contenu</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="Contenu détaillé de l'annonce..."
                      rows={6}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleSave} className="flex-1">
                      <Save className="mr-2 h-4 w-4" />
                      Sauvegarder
                    </Button>
                    <Button variant="outline" onClick={handleCancel}>
                      Annuler
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Liste des annonces */}
          <div className={isCreating || editingAnnouncement ? "lg:col-span-2" : "lg:col-span-3"}>
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className={`${announcement.isActive ? "" : "opacity-60"}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <div>
                          <CardTitle className="text-lg">{announcement.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <span>{getRegionName(announcement.region)}</span>
                            <Badge className={getTypeColor(announcement.type)}>{announcement.type}</Badge>
                            <Badge variant={announcement.isActive ? "default" : "secondary"}>
                              {announcement.isActive ? "Active" : "Inactive"}
                            </Badge>
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" onClick={() => toggleActive(announcement.id)}>
                          {announcement.isActive ? "Désactiver" : "Activer"}
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleEdit(announcement)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(announcement.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{announcement.content}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Créé le {announcement.createdAt}</span>
                      <span>Modifié le {announcement.updatedAt}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {announcements.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Info className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucune annonce</h3>
                    <p className="text-gray-600 mb-4">Créez votre première annonce DOM-TOM pour commencer.</p>
                    <Button onClick={handleCreate}>
                      <Plus className="mr-2 h-4 w-4" />
                      Créer une annonce
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
