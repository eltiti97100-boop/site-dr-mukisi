"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, Phone, Mail, MapPin, Video, GraduationCap } from "lucide-react"

export default function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedService, setSelectedService] = useState<string>("")
  const [appointmentType, setAppointmentType] = useState<"consultation" | "formation" | "telemedecine">("consultation")

  const services = {
    consultation: [
      { id: "consultation-generale", name: "Consultation générale", duration: "30 min", price: "80€" },
      { id: "soins-miel", name: "Soins au miel médical", duration: "45 min", price: "120€" },
      { id: "chirurgie-ortho", name: "Consultation orthopédique", duration: "45 min", price: "150€" },
      { id: "drepanocytose", name: "Suivi drépanocytose", duration: "60 min", price: "100€" },
      { id: "urgence", name: "Consultation d'urgence", duration: "30 min", price: "200€" },
    ],
    formation: [
      { id: "apitherapie", name: "Formation Apithérapie", duration: "3 jours", price: "1200€" },
      { id: "chirurgie-mini", name: "Chirurgie mini-invasive", duration: "5 jours", price: "2500€" },
      { id: "drepanocytose-formation", name: "Médecine drépanocytaire", duration: "2 jours", price: "800€" },
      { id: "telemedecine-formation", name: "Télémédecine digitale", duration: "1 jour", price: "400€" },
    ],
    telemedecine: [
      { id: "teleconsultation", name: "Téléconsultation vidéo", duration: "30 min", price: "80€" },
      { id: "tele-expertise", name: "Télé-expertise spécialisée", duration: "60 min", price: "150€" },
      { id: "urgence-tele", name: "Urgence télémédecine", duration: "15 min", price: "120€" },
      { id: "suivi-chronique", name: "Suivi chronique digital", duration: "Mensuel", price: "60€/mois" },
    ],
  }

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ]

  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push({
        value: date.toISOString().split("T")[0],
        label: date.toLocaleDateString("fr-FR", {
          weekday: "short",
          day: "numeric",
          month: "short",
        }),
      })
    }
    return dates
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique de soumission du rendez-vous
    alert(`Rendez-vous demandé pour le ${selectedDate} à ${selectedTime} - Service: ${selectedService}`)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 mb-6 px-6 py-2 text-lg">
            📅 Réservation en ligne
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Prendre <span className="text-amber-600">Rendez-vous</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Réservez votre consultation, formation ou téléconsultation avec le Dr Mukisi en quelques clics
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire de réservation */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-amber-600" />
                  <span>Réserver votre rendez-vous</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Type de rendez-vous */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-4">Type de rendez-vous</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setAppointmentType("consultation")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        appointmentType === "consultation"
                          ? "border-amber-500 bg-amber-50 text-amber-700"
                          : "border-slate-200 hover:border-amber-300"
                      }`}
                    >
                      <User className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-semibold">Consultation</div>
                      <div className="text-sm text-slate-600">En cabinet</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAppointmentType("formation")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        appointmentType === "formation"
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-slate-200 hover:border-green-300"
                      }`}
                    >
                      <GraduationCap className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-semibold">Formation</div>
                      <div className="text-sm text-slate-600">Professionnelle</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAppointmentType("telemedecine")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        appointmentType === "telemedecine"
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-slate-200 hover:border-blue-300"
                      }`}
                    >
                      <Video className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-semibold">Télémédecine</div>
                      <div className="text-sm text-slate-600">À distance</div>
                    </button>
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-4">Service souhaité</label>
                  <div className="grid gap-3">
                    {services[appointmentType].map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                          selectedService === service.id
                            ? "border-amber-500 bg-amber-50"
                            : "border-slate-200 hover:border-amber-300"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-semibold text-slate-900">{service.name}</div>
                            <div className="text-sm text-slate-600">Durée: {service.duration}</div>
                          </div>
                          <div className="text-lg font-bold text-amber-600">{service.price}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-4">Date souhaitée</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                    {generateDates().map((date) => (
                      <button
                        key={date.value}
                        type="button"
                        onClick={() => setSelectedDate(date.value)}
                        className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                          selectedDate === date.value
                            ? "border-amber-500 bg-amber-500 text-white"
                            : "border-slate-200 hover:border-amber-300 hover:bg-amber-50"
                        }`}
                      >
                        <div className="text-sm font-medium">{date.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Heure */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-4">Heure souhaitée</label>
                  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                          selectedTime === time
                            ? "border-amber-500 bg-amber-500 text-white"
                            : "border-slate-200 hover:border-amber-300 hover:bg-amber-50"
                        }`}
                      >
                        <div className="text-sm font-medium">{time}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Informations personnelles */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Nom complet</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Votre nom et prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="+590 590 XX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Âge</label>
                    <input
                      type="number"
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Votre âge"
                    />
                  </div>
                </div>

                {/* Motif de consultation */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Motif de consultation</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Décrivez brièvement le motif de votre consultation..."
                  />
                </div>

                {/* Bouton de soumission */}
                <Button
                  onClick={handleSubmit}
                  disabled={!selectedDate || !selectedTime || !selectedService}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 py-4 text-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Confirmer le rendez-vous
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Informations pratiques */}
          <div className="space-y-6">
            {/* Contact */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <div>
                    <div className="font-semibold">+590 590 XX XX XX</div>
                    <div className="text-sm text-slate-600">Urgences 24h/24</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <div>
                    <div className="font-semibold">contact@dr-mukisi.gp</div>
                    <div className="text-sm text-slate-600">Réponse sous 24h</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <div className="font-semibold">Cabinet médical</div>
                    <div className="text-sm text-slate-600">
                      123 Rue de la Santé
                      <br />
                      97110 Pointe-à-Pitre
                      <br />
                      Guadeloupe
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Horaires */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span>Horaires</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Lundi - Vendredi</span>
                  <span className="font-semibold">8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Samedi</span>
                  <span className="font-semibold">8h00 - 12h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Dimanche</span>
                  <span className="font-semibold text-red-600">Fermé</span>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Urgences</span>
                    <span className="font-semibold text-green-600">24h/24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Télémédecine</span>
                    <span className="font-semibold text-blue-600">24h/24</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tarifs */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Tarifs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Consultation générale</span>
                  <span className="font-semibold">80€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Soins au miel</span>
                  <span className="font-semibold">120€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Téléconsultation</span>
                  <span className="font-semibold">80€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Urgence</span>
                  <span className="font-semibold">200€</span>
                </div>
                <div className="pt-3 border-t border-amber-200">
                  <p className="text-sm text-slate-600">💳 Paiement par carte, espèces ou virement</p>
                  <p className="text-sm text-slate-600">🏥 Conventionné Sécurité Sociale</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
