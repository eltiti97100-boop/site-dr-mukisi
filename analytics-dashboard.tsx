"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Users, Euro, Calendar, Download, Target } from "lucide-react"

const revenueData = [
  { month: "Jan", revenue: 4500, patients: 45, satisfaction: 4.8 },
  { month: "Fév", revenue: 5200, patients: 52, satisfaction: 4.9 },
  { month: "Mar", revenue: 4800, patients: 48, satisfaction: 4.7 },
  { month: "Avr", revenue: 6100, patients: 61, satisfaction: 4.9 },
  { month: "Mai", revenue: 5800, patients: 58, satisfaction: 4.8 },
  { month: "Jun", revenue: 6500, patients: 65, satisfaction: 5.0 },
]

const servicesData = [
  { name: "Consultations", value: 45, color: "#8884d8" },
  { name: "Télémédecine", value: 30, color: "#82ca9d" },
  { name: "Formations", value: 15, color: "#ffc658" },
  { name: "Analyses", value: 10, color: "#ff7300" },
]

export default function AnalyticsDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0)
  const totalPatients = revenueData.reduce((sum, item) => sum + item.patients, 0)
  const avgSatisfaction = (revenueData.reduce((sum, item) => sum + item.satisfaction, 0) / revenueData.length).toFixed(
    1,
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600">Vue d'ensemble des performances du cabinet</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Download className="w-4 h-4" />
              Exporter
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">Rapport Mensuel</Button>
          </div>
        </div>

        {/* KPIs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenus Totaux</CardTitle>
              <Euro className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalRevenue.toLocaleString()}€</div>
              <p className="text-xs opacity-80">+12% vs mois dernier</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Patients Totaux</CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalPatients}</div>
              <p className="text-xs opacity-80">+8% vs mois dernier</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Satisfaction</CardTitle>
              <TrendingUp className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgSatisfaction}/5</div>
              <p className="text-xs opacity-80">Excellent niveau</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux d'Occupation</CardTitle>
              <Calendar className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs opacity-80">Très bon taux</p>
            </CardContent>
          </Card>
        </div>

        {/* Objectifs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Objectifs Mensuels
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>Revenus (Objectif: 7000€)</span>
                <span className="font-semibold">6500€</span>
              </div>
              <Progress value={93} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Nouveaux Patients (Objectif: 20)</span>
                <span className="font-semibold">18</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Satisfaction (Objectif: 4.8/5)</span>
                <span className="font-semibold">5.0/5</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <Tabs defaultValue="revenue" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="revenue">Revenus</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue">
            <Card>
              <CardHeader>
                <CardTitle>Évolution des Revenus</CardTitle>
                <CardDescription>Revenus mensuels sur les 6 derniers mois</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patients">
            <Card>
              <CardHeader>
                <CardTitle>Évolution des Patients</CardTitle>
                <CardDescription>Nombre de patients par mois</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="patients" stroke="#10b981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Répartition des Services</CardTitle>
                <CardDescription>Distribution des revenus par service</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={servicesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {servicesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
