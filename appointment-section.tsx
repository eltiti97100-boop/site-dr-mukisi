"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Phone } from "lucide-react"

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    type: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Rendez-vous demandé:", formData)
    // Ici vous ajouteriez la logique d'envoi
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Prendre Rendez-vous</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consultez le Dr Mukisi pour vos soins dermatologiques spécialisés au miel. Expertise reconnue et approche
            naturelle personnalisée.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Demande de Rendez-vous</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date souhaitée</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Heure préférée</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, time: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir l'heure" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00</SelectItem>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="17:00">17:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="type">Type de consultation</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir le type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Consultation générale</SelectItem>
                      <SelectItem value="miel">Soins au miel</SelectItem>
                      <SelectItem value="cicatrisation">Cicatrisation</SelectItem>
                      <SelectItem value="acne">Traitement acné</SelectItem>
                      <SelectItem value="psoriasis">Psoriasis</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez brièvement votre demande..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  <Calendar className="mr-2 h-5 w-5" />
                  Demander un rendez-vous
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informations pratiques */}
          <div className="space-y-8">
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-amber-500" />
                  Cabinet Médical
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-700">
                  <p>123 Avenue des Soins Naturels</p>
                  <p>75001 Paris, France</p>
                  <p className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-amber-500" />
                    +33 1 23 45 67 89
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-amber-500" />
                  Horaires d'ouverture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>9h00 - 13h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-100 border-amber-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-amber-800 mb-2">🍯 Spécialité Unique</h3>
                <p className="text-amber-700">
                  Premier cabinet en France spécialisé dans les soins dermatologiques au miel. Approche naturelle et
                  scientifiquement prouvée.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
