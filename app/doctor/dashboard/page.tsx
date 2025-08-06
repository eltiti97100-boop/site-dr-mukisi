"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Camera, Calendar, FileText, Settings, Bell, TrendingUp, Users, Clock, AlertCircle } from "lucide-react"

export default function DoctorDashboard() {
  const [notifications] = useState([
    { id: 1, message: "3 nouvelles photos reçues", type: "info", time: "Il y a 5 min" },
    { id: 2, message: "Analyse urgente demandée", type: "urgent", time: "Il y a 15 min" },
    { id: 3, message: "Rapport mensuel disponible", type: "info", time: "Il y a 1h" },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Dashboard */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Médecin</h1>
              <p className="text-gray-600">Dr. Mukisi - Dermatologue</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications ({notifications.length})
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Paramètres
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Statistiques */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Photos reçues</p>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-xs text-green-600">+12% ce mois</p>
                </div>
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Patients actifs</p>
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-xs text-green-600">+8% ce mois</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Analyses envoyées</p>
                  <p className="text-2xl font-bold">89</p>
                  <p className="text-xs text-blue-600">Temps moyen: 2h</p>
                </div>
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Taux de satisfaction</p>
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-xs text-green-600">Excellent</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Actions rapides */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
                <CardDescription>Accédez rapidement à vos outils principaux</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="h-20 flex-col" asChild>
                    <a href="/doctor/photos">
                      <Camera className="h-6 w-6 mb-2" />
                      <span>Photos reçues</span>
                      <Badge className="mt-1 bg-red-100 text-red-800">3 nouvelles</Badge>
                    </a>
                  </Button>

                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <Users className="h-6 w-6 mb-2" />
                    <span>Gestion patients</span>
                  </Button>

                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <Calendar className="h-6 w-6 mb-2" />
                    <span>Planning</span>
                  </Button>

                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <FileText className="h-6 w-6 mb-2" />
                    <span>Rapports</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Photos récentes */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Photos récentes</CardTitle>
                <CardDescription>Dernières photos reçues des patients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { patient: "Marie Dubois", time: "Il y a 10 min", urgent: true },
                    { patient: "Jean Martin", time: "Il y a 1h", urgent: false },
                    { patient: "Sophie Leroy", time: "Il y a 2h", urgent: false },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium">{item.patient}</p>
                          <p className="text-sm text-gray-600 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.urgent && (
                          <Badge className="bg-red-100 text-red-800">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Urgent
                          </Badge>
                        )}
                        <Button size="sm" variant="outline">
                          Analyser
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications et activité */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="p-3 border rounded-lg">
                      <div className="flex items-start gap-2">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            notif.type === "urgent" ? "bg-red-500" : "bg-blue-500"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{notif.message}</p>
                          <p className="text-xs text-gray-500">{notif.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Activité DOM-TOM</CardTitle>
                <CardDescription>Répartition par région</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Guadeloupe</span>
                    <Badge>12 patients</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Martinique</span>
                    <Badge>8 patients</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Guyane</span>
                    <Badge>5 patients</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Réunion</span>
                    <Badge>3 patients</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
