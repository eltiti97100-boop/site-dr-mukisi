"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Lock, UserPlus } from "lucide-react"

interface ProfessionalAuthProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProfessionalAuth({ isOpen, onClose }: ProfessionalAuthProps) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    license: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Connexion:", loginData)
    // Ici vous ajouteriez la logique de connexion
    onClose()
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Inscription:", registerData)
    // Ici vous ajouteriez la logique d'inscription
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-blue-500" />
            Espace Professionnel
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Connexion</TabsTrigger>
            <TabsTrigger value="register">Inscription</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">🔒 Accès réservé aux professionnels de santé certifiés</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="login-email">Email professionnel</Label>
                <Input
                  id="login-email"
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="login-password">Mot de passe</Label>
                <Input
                  id="login-password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  <Lock className="mr-2 h-4 w-4" />
                  Se connecter
                </Button>
                <Button type="button" variant="outline" onClick={onClose}>
                  Annuler
                </Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">✅ Inscription gratuite pour les professionnels de santé</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <Label htmlFor="register-name">Nom complet</Label>
                <Input
                  id="register-name"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="register-email">Email professionnel</Label>
                <Input
                  id="register-email"
                  type="email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="register-license">N° d'ordre / Licence</Label>
                <Input
                  id="register-license"
                  value={registerData.license}
                  onChange={(e) => setRegisterData({ ...registerData, license: e.target.value })}
                  placeholder="Ex: 123456789"
                  required
                />
              </div>

              <div>
                <Label htmlFor="register-password">Mot de passe</Label>
                <Input
                  id="register-password"
                  type="password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="register-confirm">Confirmer le mot de passe</Label>
                <Input
                  id="register-confirm"
                  type="password"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  required
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                  <UserPlus className="mr-2 h-4 w-4" />
                  S'inscrire
                </Button>
                <Button type="button" variant="outline" onClick={onClose}>
                  Annuler
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
