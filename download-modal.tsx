"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Smartphone, Download } from "lucide-react"

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    institution: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demande d'app:", formData)
    // Ici vous ajouteriez la logique d'envoi
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-amber-500" />
            Demander l'App Patient
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="text-center p-4 bg-amber-50 rounded-lg">
            <p className="text-sm text-amber-800">🍯 Application mobile dédiée aux soins dermatologiques au miel</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nom complet</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email professionnel</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="profession">Profession</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, profession: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir votre profession" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dermatologue">Dermatologue</SelectItem>
                  <SelectItem value="medecin">Médecin généraliste</SelectItem>
                  <SelectItem value="infirmier">Infirmier(e)</SelectItem>
                  <SelectItem value="pharmacien">Pharmacien(ne)</SelectItem>
                  <SelectItem value="autre">Autre professionnel de santé</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="institution">Établissement</Label>
              <Input
                id="institution"
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                placeholder="Hôpital, clinique, cabinet..."
              />
            </div>

            <div>
              <Label htmlFor="message">Message (optionnel)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Précisez vos besoins spécifiques..."
                rows={3}
              />
            </div>

            <div className="flex gap-2">
              <Button type="submit" className="flex-1 bg-amber-500 hover:bg-amber-600">
                <Download className="mr-2 h-4 w-4" />
                Demander l'accès
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Annuler
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
