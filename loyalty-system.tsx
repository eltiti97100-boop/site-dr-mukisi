"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Gift, Users, Trophy, Crown, Gem } from "lucide-react"

const loyaltyLevels = [
  {
    name: "Bronze",
    min: 0,
    max: 499,
    color: "bg-amber-600",
    icon: Star,
    benefits: ["5% réduction", "Points doublés anniversaire"],
  },
  {
    name: "Argent",
    min: 500,
    max: 999,
    color: "bg-gray-400",
    icon: Gift,
    benefits: ["10% réduction", "Consultation gratuite/an", "Priorité RDV"],
  },
  {
    name: "Or",
    min: 1000,
    max: 1999,
    color: "bg-yellow-500",
    icon: Trophy,
    benefits: ["15% réduction", "2 consultations gratuites/an", "Accès formations"],
  },
  {
    name: "Platine",
    min: 2000,
    max: 4999,
    color: "bg-slate-300",
    icon: Crown,
    benefits: ["20% réduction", "Suivi personnalisé", "Télémédecine gratuite"],
  },
  {
    name: "Diamant",
    min: 5000,
    max: 999999,
    color: "bg-blue-400",
    icon: Gem,
    benefits: ["25% réduction", "Concierge médical", "Accès VIP"],
  },
]

const rewardsCatalog = [
  { id: 1, name: "Consultation Gratuite", points: 500, category: "Soins", available: true },
  { id: 2, name: "Analyse Dermatologique", points: 300, category: "Diagnostic", available: true },
  { id: 3, name: "Formation en Ligne", points: 200, category: "Éducation", available: true },
  { id: 4, name: "Téléconsultation", points: 150, category: "Soins", available: true },
  { id: 5, name: "Produits Cosmétiques", points: 800, category: "Produits", available: false },
  { id: 6, name: "Bilan Complet", points: 1000, category: "Diagnostic", available: true },
]

export default function LoyaltySystem() {
  const [currentPoints, setCurrentPoints] = useState(1250)
  const [selectedTab, setSelectedTab] = useState("overview")

  const currentLevel =
    loyaltyLevels.find((level) => currentPoints >= level.min && currentPoints <= level.max) || loyaltyLevels[0]
  const nextLevel = loyaltyLevels.find((level) => level.min > currentPoints)
  const progressToNext = nextLevel
    ? ((currentPoints - currentLevel.min) / (nextLevel.min - currentLevel.min)) * 100
    : 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Programme de Fidélité</h1>
          <p className="text-gray-600">Gagnez des points et débloquez des avantages exclusifs</p>
        </div>

        {/* Current Status */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <currentLevel.icon className="w-8 h-8" />
                <div>
                  <CardTitle className="text-2xl">{currentLevel.name}</CardTitle>
                  <CardDescription className="text-purple-100">{currentPoints.toLocaleString()} points</CardDescription>
                </div>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Niveau {loyaltyLevels.indexOf(currentLevel) + 1}/5
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {nextLevel && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progression vers {nextLevel.name}</span>
                  <span>{nextLevel.min - currentPoints} points restants</span>
                </div>
                <Progress value={progressToNext} className="h-2 bg-white/20" />
              </div>
            )}
          </CardContent>
        </Card>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="rewards">Récompenses</TabsTrigger>
            <TabsTrigger value="history">Historique</TabsTrigger>
            <TabsTrigger value="referral">Parrainage</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loyaltyLevels.map((level, index) => {
                const Icon = level.icon
                const isCurrentLevel = level.name === currentLevel.name
                const isUnlocked = currentPoints >= level.min

                return (
                  <Card key={level.name} className={`relative ${isCurrentLevel ? "ring-2 ring-purple-500" : ""}`}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${level.color} ${isUnlocked ? "" : "opacity-50"}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className={isUnlocked ? "" : "opacity-50"}>{level.name}</CardTitle>
                          <CardDescription>
                            {level.min.toLocaleString()} - {level.max === 999999 ? "∞" : level.max.toLocaleString()}{" "}
                            points
                          </CardDescription>
                        </div>
                      </div>
                      {isCurrentLevel && <Badge className="absolute top-2 right-2 bg-purple-500">Actuel</Badge>}
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {level.benefits.map((benefit, i) => (
                          <div key={i} className={`flex items-center gap-2 text-sm ${isUnlocked ? "" : "opacity-50"}`}>
                            <Star className="w-4 h-4 text-yellow-500" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="rewards">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewardsCatalog.map((reward) => (
                <Card key={reward.id} className={`${!reward.available ? "opacity-50" : ""}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{reward.name}</CardTitle>
                        <CardDescription>{reward.category}</CardDescription>
                      </div>
                      <Badge variant={reward.available ? "default" : "secondary"}>{reward.points} pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" disabled={!reward.available || currentPoints < reward.points}>
                      {currentPoints >= reward.points ? "Échanger" : "Points insuffisants"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Historique des Points</CardTitle>
                <CardDescription>Vos dernières transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "2024-01-15", action: "Consultation", points: "+50", type: "gain" },
                    { date: "2024-01-10", action: "Parrainage réussi", points: "+100", type: "gain" },
                    { date: "2024-01-05", action: "Échange récompense", points: "-300", type: "loss" },
                    { date: "2024-01-01", action: "Bonus anniversaire", points: "+200", type: "gain" },
                  ].map((transaction, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{transaction.action}</p>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                      <Badge variant={transaction.type === "gain" ? "default" : "destructive"}>
                        {transaction.points}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="referral">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Programme de Parrainage
                </CardTitle>
                <CardDescription>Invitez vos proches et gagnez 100 points par parrainage réussi</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Votre code de parrainage</h3>
                  <div className="flex items-center gap-2">
                    <code className="bg-white px-3 py-2 rounded border font-mono">MUKISI2024</code>
                    <Button variant="outline" size="sm">
                      Copier
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">5</div>
                    <div className="text-sm text-gray-600">Parrainages réussis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">500</div>
                    <div className="text-sm text-gray-600">Points gagnés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2</div>
                    <div className="text-sm text-gray-600">En attente</div>
                  </div>
                </div>

                <Button className="w-full">Inviter un ami</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
