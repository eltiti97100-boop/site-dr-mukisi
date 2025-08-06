"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Calendar,
  FileText,
  CreditCard,
  Bell,
  Settings,
  Download,
  Eye,
  Clock,
  CheckCircle,
  Phone,
  MapPin,
  Shield,
} from "lucide-react"

interface PatientPortalProps {
  patient: {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: string
    address: string
    city: string
    postalCode: string
  }
}

export default function PatientPortal({ patient }: PatientPortalProps) {
  const [activeTab, setActiveTab] = useState("dashboard")

  const appointments = [
    {
      id: "RDV001",
      date: "2024-02-15",
      time: "14:30",
      service: "Consultation Dermatologique",
      doctor: "Dr Martin Mukisi",
      status: "confirmed",
      price: 80,
      location: "Cabinet",
    },
    {
      id: "RDV002",
      date: "2024-01-20",
      time: "10:00",
      service: "Soins au Miel Thérapeutique",
      doctor: "Dr Martin Mukisi",
      status: "completed",
      price: 120,
      location: "Cabinet",
    },
    {
      id: "RDV003",
      date: "2023-12-15",
      time: "16:00",
      service: "Téléconsultation",
      doctor: "Dr Martin Mukisi",
      status: "completed",
      price: 70,
      location: "Télémédecine",
    },
  ]

  const medicalRecords = [
    {
      id: "DOS001",
      date: "2024-01-20",
      type: "Consultation",
      diagnosis: "Dermatite atopique",
      treatment: "Traitement au miel médical + crème hydratante",
      notes: "Amélioration notable après 2 semaines de traitement",
      doctor: "Dr Martin Mukisi",
    },
    {
      id: "DOS002",
      date: "2023-12-15",
      type: "Téléconsultation",
      diagnosis: "Suivi dermatite",
      treatment: "Poursuite du traitement, ajustement posologie",
      notes: "Patient très satisfait des résultats",
      doctor: "Dr Martin Mukisi",
    },
  ]

  const payments = [
    {
      id: "PAY001",
      date: "2024-01-20",
      amount: 120,
      method: "Carte bancaire",
      status: "paid",
      service: "Soins au Miel Thérapeutique",
      reference: "PAY_1705747200",
    },
    {
      id: "PAY002",
      date: "2023-12-15",
      amount: 70,
      method: "Paiement 4x",
      status: "paid",
      service: "Téléconsultation",
      reference: "PAY_1702656000",
    },
  ]

  const notifications = [
    {
      id: "NOT001",
      type: "appointment",
      title: "Rappel de rendez-vous",
      message: "Votre consultation est prévue demain à 14h30",
      date: "2024-02-14",
      read: false,
    },
    {
      id: "NOT002",
      type: "result",
      title: "Résultats disponibles",
      message: "Vos résultats d'analyse sont disponibles dans votre dossier",
      date: "2024-01-22",
      read: true,
    },
    {
      id: "NOT003",
      type: "payment",
      title: "Paiement confirmé",
      message: "Votre paiement de 120€ a été traité avec succès",
      date: "2024-01-20",
      read: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  {patient.firstName} {patient.lastName}
                </h1>
                <p className="text-sm text-slate-600">Espace Patient Sécurisé</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800">
                <Shield className="w-3 h-3 mr-1" />
                Compte Vérifié
              </Badge>
              <Button variant="outline" size="sm" className="bg-transparent">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white border border-slate-200">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Tableau de bord</span>
            </TabsTrigger>
            <TabsTrigger value="appointments" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Rendez-vous</span>
            </TabsTrigger>
            <TabsTrigger value="medical" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Dossier médical</span>
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center space-x-2">
              <CreditCard className="w-4 h-4" />
              <span>Paiements</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center space-x-2">
              <Bell className="w-4 h-4" />
              <span>Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Paramètres</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Statistiques */}
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-600 text-sm font-medium">Prochaine consultation</p>
                        <p className="text-2xl font-bold text-blue-800">15 Fév</p>
                        <p className="text-blue-600 text-sm">14h30</p>
                      </div>
                      <Calendar className="w-8 h-8 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-600 text-sm font-medium">Consultations</p>
                        <p className="text-2xl font-bold text-green-800">{appointments.length}</p>
                        <p className="text-green-600 text-sm">Total</p>
                      </div>
                      <FileText className="w-8 h-8 text-green-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-600 text-sm font-medium">Dossiers médicaux</p>
                        <p className="text-2xl font-bold text-purple-800">{medicalRecords.length}</p>
                        <p className="text-purple-600 text-sm">Disponibles</p>
                      </div>
                      <FileText className="w-8 h-8 text-purple-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-600 text-sm font-medium">Paiements</p>
                        <p className="text-2xl font-bold text-orange-800">À jour</p>
                        <p className="text-orange-600 text-sm">Statut</p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-orange-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Notifications récentes */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-blue-600" />
                    Notifications récentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {notifications.slice(0, 3).map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 rounded-lg border ${
                        !notification.read ? "bg-blue-50 border-blue-200" : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-slate-900">{notification.title}</h4>
                          <p className="text-xs text-slate-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-slate-500 mt-2">
                            {new Date(notification.date).toLocaleDateString("fr-FR")}
                          </p>
                        </div>
                        {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Actions rapides */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <Button className="h-20 flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Calendar className="w-6 h-6 mb-2" />
                    <span>Nouveau RDV</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                    <FileText className="w-6 h-6 mb-2" />
                    <span>Mes dossiers</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                    <Download className="w-6 h-6 mb-2" />
                    <span>Télécharger</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                    <Phone className="w-6 h-6 mb-2" />
                    <span>Contact</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rendez-vous */}
          <TabsContent value="appointments" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Mes Rendez-vous</h2>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Calendar className="w-4 h-4 mr-2" />
                Nouveau rendez-vous
              </Button>
            </div>

            <div className="space-y-4">
              {appointments.map((appointment) => (
                <Card key={appointment.id} className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-900">{appointment.service}</h3>
                          <p className="text-slate-600">{appointment.doctor}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-slate-500">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(appointment.date).toLocaleDateString("fr-FR")}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {appointment.time}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {appointment.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          className={
                            appointment.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : appointment.status === "completed"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {appointment.status === "confirmed" && "Confirmé"}
                          {appointment.status === "completed" && "Terminé"}
                          {appointment.status === "pending" && "En attente"}
                        </Badge>
                        <p className="text-lg font-bold text-slate-900 mt-2">{appointment.price}€</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Dossier médical */}
          <TabsContent value="medical" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Dossier Médical</h2>
              <Button variant="outline" className="bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Télécharger tout
              </Button>
            </div>

            <div className="space-y-4">
              {medicalRecords.map((record) => (
                <Card key={record.id} className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge className="bg-purple-100 text-purple-800">{record.type}</Badge>
                          <span className="text-sm text-slate-500">
                            {new Date(record.date).toLocaleDateString("fr-FR")}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">{record.diagnosis}</h3>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-semibold text-slate-700">Traitement : </span>
                            <span className="text-slate-600">{record.treatment}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-700">Notes : </span>
                            <span className="text-slate-600">{record.notes}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-700">Médecin : </span>
                            <span className="text-slate-600">{record.doctor}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Paiements */}
          <TabsContent value="payments" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Historique des Paiements</h2>
              <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Compte à jour
              </Badge>
            </div>

            <div className="space-y-4">
              {payments.map((payment) => (
                <Card key={payment.id} className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-900">{payment.service}</h3>
                          <p className="text-slate-600">Référence : {payment.reference}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-slate-500">
                            <span>{new Date(payment.date).toLocaleDateString("fr-FR")}</span>
                            <span>•</span>
                            <span>{payment.method}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800 mb-2">Payé</Badge>
                        <p className="text-xl font-bold text-green-600">{payment.amount}€</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Notifications</h2>
              <Button variant="outline" className="bg-transparent">
                Marquer tout comme lu
              </Button>
            </div>

            <div className="space-y-4">
              {notifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`border-0 shadow-xl ${!notification.read ? "ring-2 ring-blue-200" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            notification.type === "appointment"
                              ? "bg-blue-100"
                              : notification.type === "result"
                                ? "bg-green-100"
                                : "bg-purple-100"
                          }`}
                        >
                          {notification.type === "appointment" && <Calendar className="w-5 h-5 text-blue-600" />}
                          {notification.type === "result" && <FileText className="w-5 h-5 text-green-600" />}
                          {notification.type === "payment" && <CreditCard className="w-5 h-5 text-purple-600" />}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900">{notification.title}</h3>
                          <p className="text-slate-600 mt-1">{notification.message}</p>
                          <p className="text-sm text-slate-500 mt-2">
                            {new Date(notification.date).toLocaleDateString("fr-FR")}
                          </p>
                        </div>
                      </div>
                      {!notification.read && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Paramètres */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Paramètres du Compte</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Informations personnelles */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Informations personnelles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input id="firstName" defaultValue={patient.firstName} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom</Label>
                      <Input id="lastName" defaultValue={patient.lastName} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={patient.email} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" defaultValue={patient.phone} />
                  </div>
                  <div>
                    <Label htmlFor="address">Adresse</Label>
                    <Input id="address" defaultValue={patient.address} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">Ville</Label>
                      <Input id="city" defaultValue={patient.city} />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Code postal</Label>
                      <Input id="postalCode" defaultValue={patient.postalCode} />
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Mettre à jour
                  </Button>
                </CardContent>
              </Card>

              {/* Préférences */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Préférences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Notifications</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Rappels de rendez-vous</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Résultats d'analyses</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Confirmations de paiement</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Newsletter médicale</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Sécurité</h4>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full bg-transparent">
                        Changer le mot de passe
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Activer l'authentification 2FA
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Télécharger mes données
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
