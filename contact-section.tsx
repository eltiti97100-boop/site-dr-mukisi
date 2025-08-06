"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation, Globe } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'envoi du formulaire
    alert("Message envoyé avec succès !")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 mb-6 px-6 py-2 text-lg">
            💬 Nous contacter
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Restons en <span className="text-blue-600">Contact</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Une question ? Un besoin spécifique ? Notre équipe est à votre disposition pour vous accompagner
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900 flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                <span>Envoyez-nous un message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Nom complet *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Votre nom et prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="+590 590 XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Sujet *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="consultation">Demande de consultation</option>
                    <option value="formation">Information sur les formations</option>
                    <option value="telemedecine">Télémédecine</option>
                    <option value="urgence">Urgence médicale</option>
                    <option value="partenariat">Partenariat professionnel</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 py-4 text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Contact principal */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Adresse du cabinet</h4>
                    <p className="text-slate-600">
                      123 Rue de la Santé
                      <br />
                      97110 Pointe-à-Pitre
                      <br />
                      Guadeloupe, Antilles françaises
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Téléphone</h4>
                    <p className="text-slate-600">
                      <strong>Cabinet :</strong> +590 590 XX XX XX
                      <br />
                      <strong>Urgences :</strong> +590 590 XX XX XX
                      <br />
                      <span className="text-green-600 font-medium">Disponible 24h/24</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">
                      <strong>Contact :</strong> contact@dr-mukisi.gp
                      <br />
                      <strong>Formations :</strong> formations@dr-mukisi.gp
                      <br />
                      <span className="text-blue-600 font-medium">Réponse sous 24h</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Télémédecine</h4>
                    <p className="text-slate-600">
                      Consultations à distance
                      <br />
                      Disponible dans toute la Caraïbe
                      <br />
                      <span className="text-purple-600 font-medium">Service 24h/24</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Horaires détaillés */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span>Horaires d'ouverture</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Lundi - Vendredi</span>
                    <span className="font-semibold text-slate-900">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Samedi</span>
                    <span className="font-semibold text-slate-900">8h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Dimanche</span>
                    <span className="font-semibold text-red-600">Fermé</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-200">
                  <h4 className="font-semibold text-slate-900 mb-3">Services spéciaux</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Urgences médicales</span>
                      <Badge className="bg-red-100 text-red-800">24h/24</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Téléconsultations</span>
                      <Badge className="bg-blue-100 text-blue-800">24h/24</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Formations pro</span>
                      <Badge className="bg-green-100 text-green-800">Sur RDV</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accès et transport */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 flex items-center space-x-2">
                  <Navigation className="w-5 h-5 text-green-600" />
                  <span>Accès et transport</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">🚗 En voiture</h4>
                  <p className="text-slate-600 text-sm">
                    Parking gratuit disponible
                    <br />
                    Accès direct depuis la N1
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">🚌 Transport public</h4>
                  <p className="text-slate-600 text-sm">
                    Arrêt "Hôpital" - Lignes 1, 3, 7<br />À 2 minutes à pied
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">♿ Accessibilité</h4>
                  <p className="text-slate-600 text-sm">
                    Cabinet accessible PMR
                    <br />
                    Ascenseur et rampes d'accès
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
