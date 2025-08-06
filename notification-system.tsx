"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  Calendar,
  Mail,
  Smartphone,
  Settings,
  CheckCircle,
  Info,
  Heart,
  Clock,
  X,
  Volume2,
  VolumeX,
} from "lucide-react"

interface Notification {
  id: string
  type: "appointment" | "reminder" | "result" | "payment" | "promotion" | "system"
  title: string
  message: string
  timestamp: Date
  read: boolean
  priority: "low" | "medium" | "high" | "urgent"
  actionUrl?: string
  actionText?: string
}

const mockNotifications: Notification[] = [
  {
    id: "NOT001",
    type: "appointment",
    title: "Rappel de rendez-vous",
    message: "Votre consultation avec le Dr Mukisi est prévue demain à 14h30. N'oubliez pas d'apporter vos analyses.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    read: false,
    priority: "high",
    actionUrl: "/rendez-vous",
    actionText: "Voir détails",
  },
  {
    id: "NOT002",
    type: "result",
    title: "Résultats disponibles",
    message: "Vos résultats d'analyse dermatologique sont maintenant disponibles dans votre espace patient.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    read: false,
    priority: "medium",
    actionUrl: "/patient",
    actionText: "Consulter",
  },
  {
    id: "NOT003",
    type: "payment",
    title: "Paiement confirmé",
    message: "Votre paiement de 120€ pour les soins au miel a été traité avec succès.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    read: true,
    priority: "low",
  },
  {
    id: "NOT004",
    type: "promotion",
    title: "Offre spéciale - Soins au miel",
    message: "Profitez de 20% de réduction sur votre prochaine séance de soins au miel thérapeutique.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    read: true,
    priority: "medium",
    actionUrl: "/services",
    actionText: "Réserver",
  },
  {
    id: "NOT005",
    type: "system",
    title: "Mise à jour de sécurité",
    message: "Votre compte a été sécurisé avec l'authentification à deux facteurs.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
    read: true,
    priority: "low",
  },
]

export default function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [settings, setSettings] = useState({
    email: true,
    sms: true,
    push: true,
    appointments: true,
    results: true,
    payments: true,
    promotions: false,
    system: true,
  })

  const unreadCount = notifications.filter((n) => !n.read).length

  useEffect(() => {
    // Simuler l'arrivée de nouvelles notifications
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        // 20% de chance d'avoir une nouvelle notification
        const newNotification: Notification = {
          id: `NOT${Date.now()}`,
          type: "system",
          title: "Nouvelle notification",
          message: "Ceci est une notification de test en temps réel.",
          timestamp: new Date(),
          read: false,
          priority: "low",
        }
        setNotifications((prev) => [newNotification, ...prev])

        if (soundEnabled) {
          // Jouer un son de notification (simulation)
          console.log("🔔 Nouvelle notification!")
        }
      }
    }, 30000) // Toutes les 30 secondes

    return () => clearInterval(interval)
  }, [soundEnabled])

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "appointment":
        return Calendar
      case "reminder":
        return Clock
      case "result":
        return CheckCircle
      case "payment":
        return CheckCircle
      case "promotion":
        return Heart
      case "system":
        return Info
      default:
        return Bell
    }
  }

  const getPriorityColor = (priority: Notification["priority"]) => {
    switch (priority) {
      case "urgent":
        return "border-red-500 bg-red-50"
      case "high":
        return "border-orange-500 bg-orange-50"
      case "medium":
        return "border-blue-500 bg-blue-50"
      case "low":
        return "border-slate-300 bg-slate-50"
    }
  }

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date()
    const diff = now.getTime() - timestamp.getTime()
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (minutes < 60) return `Il y a ${minutes} min`
    if (hours < 24) return `Il y a ${hours}h`
    return `Il y a ${days}j`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-8 h-8 text-blue-600" />
              {unreadCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {unreadCount}
                </Badge>
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
              <p className="text-slate-600">
                {unreadCount > 0 ? `${unreadCount} notification(s) non lue(s)` : "Toutes les notifications sont lues"}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => setSoundEnabled(!soundEnabled)} className="bg-white">
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </Button>
            {unreadCount > 0 && (
              <Button onClick={markAllAsRead} className="bg-blue-600 hover:bg-blue-700">
                Tout marquer comme lu
              </Button>
            )}
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white border border-slate-200">
            <TabsTrigger value="all">Toutes ({notifications.length})</TabsTrigger>
            <TabsTrigger value="unread">Non lues ({unreadCount})</TabsTrigger>
            <TabsTrigger value="appointment">RDV</TabsTrigger>
            <TabsTrigger value="result">Résultats</TabsTrigger>
            <TabsTrigger value="promotion">Offres</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          {/* Toutes les notifications */}
          <TabsContent value="all" className="space-y-4">
            {notifications.map((notification) => {
              const Icon = getNotificationIcon(notification.type)
              return (
                <Card
                  key={notification.id}
                  className={`border-2 transition-all duration-300 hover:shadow-lg ${
                    !notification.read ? getPriorityColor(notification.priority) : "border-slate-200 bg-white"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            !notification.read ? "bg-white/80" : "bg-slate-100"
                          }`}
                        >
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-bold text-slate-900">{notification.title}</h3>
                            {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                            <Badge
                              className={
                                notification.priority === "urgent"
                                  ? "bg-red-100 text-red-800"
                                  : notification.priority === "high"
                                    ? "bg-orange-100 text-orange-800"
                                    : notification.priority === "medium"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-slate-100 text-slate-800"
                              }
                            >
                              {notification.priority}
                            </Badge>
                          </div>
                          <p className="text-slate-600 mb-3">{notification.message}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500">{formatTimestamp(notification.timestamp)}</span>
                            <div className="flex items-center space-x-2">
                              {notification.actionUrl && (
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                  {notification.actionText || "Action"}
                                </Button>
                              )}
                              {!notification.read && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => markAsRead(notification.id)}
                                  className="bg-transparent"
                                >
                                  Marquer comme lu
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteNotification(notification.id)}
                        className="text-slate-400 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </TabsContent>

          {/* Notifications non lues */}
          <TabsContent value="unread" className="space-y-4">
            {notifications
              .filter((n) => !n.read)
              .map((notification) => {
                const Icon = getNotificationIcon(notification.type)
                return (
                  <Card
                    key={notification.id}
                    className={`border-2 transition-all duration-300 hover:shadow-lg ${getPriorityColor(
                      notification.priority,
                    )}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-bold text-slate-900">{notification.title}</h3>
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <p className="text-slate-600 mb-3">{notification.message}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-slate-500">{formatTimestamp(notification.timestamp)}</span>
                              <Button
                                size="sm"
                                onClick={() => markAsRead(notification.id)}
                                className="bg-blue-600 hover:bg-blue-700"
                              >
                                Marquer comme lu
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            {unreadCount === 0 && (
              <Card className="border-0 shadow-xl">
                <CardContent className="p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Toutes les notifications sont lues !</h3>
                  <p className="text-slate-600">Vous êtes à jour avec toutes vos notifications.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Paramètres */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-6 h-6 mr-2 text-blue-600" />
                  Paramètres de Notification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Canaux de notification */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4">Canaux de notification</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <div>
                          <Label className="font-medium">Email</Label>
                          <p className="text-sm text-slate-600">Recevoir les notifications par email</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.email}
                        onCheckedChange={(checked) => setSettings({ ...settings, email: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="w-5 h-5 text-green-600" />
                        <div>
                          <Label className="font-medium">SMS</Label>
                          <p className="text-sm text-slate-600">Recevoir les notifications par SMS</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.sms}
                        onCheckedChange={(checked) => setSettings({ ...settings, sms: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Bell className="w-5 h-5 text-purple-600" />
                        <div>
                          <Label className="font-medium">Notifications Push</Label>
                          <p className="text-sm text-slate-600">Recevoir les notifications push sur l'appareil</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.push}
                        onCheckedChange={(checked) => setSettings({ ...settings, push: checked })}
                      />
                    </div>
                  </div>
                </div>

                {/* Types de notifications */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4">Types de notifications</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <div>
                          <Label className="font-medium">Rendez-vous</Label>
                          <p className="text-sm text-slate-600">Rappels et confirmations de RDV</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.appointments}
                        onCheckedChange={(checked) => setSettings({ ...settings, appointments: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <div>
                          <Label className="font-medium">Résultats</Label>
                          <p className="text-sm text-slate-600">Disponibilité des résultats d'analyses</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.results}
                        onCheckedChange={(checked) => setSettings({ ...settings, results: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                        <div>
                          <Label className="font-medium">Paiements</Label>
                          <p className="text-sm text-slate-600">Confirmations et rappels de paiement</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.payments}
                        onCheckedChange={(checked) => setSettings({ ...settings, payments: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Heart className="w-5 h-5 text-pink-600" />
                        <div>
                          <Label className="font-medium">Promotions</Label>
                          <p className="text-sm text-slate-600">Offres spéciales et réductions</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.promotions}
                        onCheckedChange={(checked) => setSettings({ ...settings, promotions: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Info className="w-5 h-5 text-slate-600" />
                        <div>
                          <Label className="font-medium">Système</Label>
                          <p className="text-sm text-slate-600">Mises à jour et informations importantes</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.system}
                        onCheckedChange={(checked) => setSettings({ ...settings, system: checked })}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Sauvegarder les paramètres
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
