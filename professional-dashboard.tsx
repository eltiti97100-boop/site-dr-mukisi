"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  Users,
  Microscope,
  FileText,
  Calendar,
  Settings,
  Bell,
  Download,
  TrendingUp,
  Clock,
  AlertTriangle,
  User,
  Activity,
  BookOpen,
  Shield,
} from "lucide-react"

interface ProfessionalDashboardProps {
  user: {
    name: string
    specialty: string
    institution: string
    rpps: string
    avatar?: string
  }
  onLogout: () => void
}

export default function ProfessionalDashboard({ user, onLogout }: ProfessionalDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const recentDiagnoses = [
    {
      id: "D001",
      patient: "Patient A.",
      condition: "Mélanome suspect",
      confidence: 94,
      date: "2024-01-15",
      status: "urgent",
    },
    {
      id: "D002",
      patient: "Patient B.",
      condition: "Dermatite atopique",
      confidence: 87,
      date: "2024-01-15",
      status: "normal",
    },
    {
      id: "D003",
      patient: "Patient C.",
      condition: "Naevus bénin",
      confidence: 92,
      date: "2024-01-14",
      status: "normal",
    },
  ]

  const stats = {
    totalDiagnoses: 156,
    thisMonth: 23,
    avgConfidence: 91,
    urgentCases: 3,
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Dashboard */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.avatar || "/placeholder.svg"} />
              <AvatarFallback className="bg-slate-800 text-white">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Dr {user.name}</h1>
              <p className="text-sm text-slate-600">
                {user.specialty} • {user.institution}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="bg-transparent">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm" onClick={onLogout} className="bg-transparent">
              Déconnexion
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white border border-slate-200">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Vue d'ensemble</span>
            </TabsTrigger>
            <TabsTrigger value="diagnoses" className="flex items-center space-x-2">
              <Microscope className="h-4 w-4" />
              <span>Diagnostics</span>
            </TabsTrigger>
            <TabsTrigger value="patients" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Patients</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Rapports</span>
            </TabsTrigger>
            <TabsTrigger value="training" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Formation</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Paramètres</span>
            </TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            {/* Statistiques principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-slate-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Diagnostics totaux</CardTitle>
                  <Microscope className="h-4 w-4 text-slate-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalDiagnoses}</div>
                  <p className="text-xs text-slate-600">+12% ce mois</p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ce mois</CardTitle>
                  <Calendar className="h-4 w-4 text-slate-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.thisMonth}</div>
                  <p className="text-xs text-slate-600">Janvier 2024</p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Confiance moyenne</CardTitle>
                  <TrendingUp className="h-4 w-4 text-slate-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.avgConfidence}%</div>
                  <p className="text-xs text-slate-600">+2% vs mois dernier</p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cas urgents</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">{stats.urgentCases}</div>
                  <p className="text-xs text-slate-600">Nécessitent suivi</p>
                </CardContent>
              </Card>
            </div>

            {/* Diagnostics récents */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5" />
                  <span>Diagnostics récents</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDiagnoses.map((diagnosis) => (
                    <div key={diagnosis.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{diagnosis.patient}</p>
                          <p className="text-sm text-slate-600">{diagnosis.condition}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge
                          className={
                            diagnosis.status === "urgent" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                          }
                        >
                          {diagnosis.confidence}% confiance
                        </Badge>
                        <span className="text-sm text-slate-500">{diagnosis.date}</span>
                        {diagnosis.status === "urgent" && <AlertTriangle className="h-4 w-4 text-red-600" />}
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-slate-800 hover:bg-slate-900">Voir tous les diagnostics</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Nouveau diagnostic */}
          <TabsContent value="diagnoses" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Microscope className="h-5 w-5" />
                    <span>Nouveau diagnostic</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Microscope className="h-8 w-8 text-slate-600" />
                    </div>
                    <p className="text-slate-600 mb-6">Commencer une nouvelle analyse</p>
                    <Button className="bg-slate-800 hover:bg-slate-900">Lancer le diagnostic IA</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Diagnostics en attente</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <span className="text-sm font-medium">Patient D. - Analyse en cours</span>
                      <Badge className="bg-amber-100 text-amber-800">En cours</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm font-medium">Patient E. - Validation requise</span>
                      <Badge className="bg-blue-100 text-blue-800">À valider</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Gestion des patients */}
          <TabsContent value="patients" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Dossiers patients</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-slate-600" />
                  </div>
                  <p className="text-slate-600 mb-6">Gestion sécurisée des dossiers patients</p>
                  <div className="flex gap-4 justify-center">
                    <Button className="bg-slate-800 hover:bg-slate-900">Nouveau patient</Button>
                    <Button variant="outline" className="bg-transparent">
                      Rechercher
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rapports */}
          <TabsContent value="reports" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Rapports et exports</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                    <Download className="h-6 w-6 mb-2" />
                    <span>Rapport mensuel</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                    <BarChart3 className="h-6 w-6 mb-2" />
                    <span>Statistiques</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                    <FileText className="h-6 w-6 mb-2" />
                    <span>Export PDF</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                    <Shield className="h-6 w-6 mb-2" />
                    <span>Audit trail</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Formation */}
          <TabsContent value="training" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Formation continue</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-green-800">Diagnostic des mélanomes</h4>
                      <Badge className="bg-green-100 text-green-800">Complété</Badge>
                    </div>
                    <p className="text-sm text-green-700">Module DPC - 2h validées</p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-blue-800">IA en dermatologie</h4>
                      <Badge className="bg-blue-100 text-blue-800">En cours</Badge>
                    </div>
                    <p className="text-sm text-blue-700">Progression: 60% - 1h restante</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-800">Cas cliniques complexes</h4>
                      <Badge className="bg-slate-100 text-slate-800">Disponible</Badge>
                    </div>
                    <p className="text-sm text-slate-700">Nouveau module - 3h DPC</p>
                  </div>
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
                  <span>Paramètres du compte</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Informations professionnelles</h4>
                    <div className="space-y-2 text-sm text-slate-600">
                      <p>
                        <strong>RPPS:</strong> {user.rpps}
                      </p>
                      <p>
                        <strong>Spécialité:</strong> {user.specialty}
                      </p>
                      <p>
                        <strong>Établissement:</strong> {user.institution}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Sécurité</h4>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Changer mot de passe
                      </Button>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Authentification 2FA
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-medium text-slate-800 mb-4">Préférences</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Notifications email</span>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Rapports automatiques</span>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Mode sombre</span>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
