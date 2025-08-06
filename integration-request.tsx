"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Globe, Code, CheckCircle, AlertCircle } from "lucide-react"

interface IntegrationRequestProps {
  isOpen: boolean
  onClose: () => void
}

export default function IntegrationRequest({ isOpen, onClose }: IntegrationRequestProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialty: "",
    institution: "",
    websiteUrl: "",
    rppsNumber: "",
    integrationType: "",
    technicalContact: "",
    message: "",
    acceptTerms: false,
    acceptNewsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const specialties = [
    "Dermatologie",
    "Médecine générale",
    "Pédiatrie",
    "Médecine interne",
    "Chirurgie plastique",
    "Autre",
  ]

  const integrationTypes = [
    "Widget simple (iframe)",
    "API complète",
    "Plugin WordPress",
    "Module personnalisé",
    "Autre (à préciser)",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        specialty: "",
        institution: "",
        websiteUrl: "",
        rppsNumber: "",
        integrationType: "",
        technicalContact: "",
        message: "",
        acceptTerms: false,
        acceptNewsletter: false,
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Demande d'intégration envoyée !</h3>
            <p className="text-slate-600">
              Notre équipe technique vous contactera dans les 48h pour étudier votre projet d'intégration.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Globe className="h-6 w-6 mr-2 text-blue-600" />
            Demande d'intégration DermatoPro
          </DialogTitle>
        </DialogHeader>

        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            L'intégration de DermatoPro sur votre site web est réservée aux professionnels de santé certifiés. Notre
            équipe vérifiera votre éligibilité avant de procéder à l'intégration.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informations personnelles */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Informations personnelles</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Prénom *</label>
                <Input
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nom *</label>
                <Input
                  required
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email professionnel *</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="votre@email-pro.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Téléphone *</label>
                <Input
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+33 X XX XX XX XX"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Spécialité *</label>
                <Select onValueChange={(value) => handleInputChange("specialty", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir votre spécialité" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">N° RPPS/ADELI *</label>
                <Input
                  required
                  value={formData.rppsNumber}
                  onChange={(e) => handleInputChange("rppsNumber", e.target.value)}
                  placeholder="Votre numéro professionnel"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Établissement/Cabinet *</label>
              <Input
                required
                value={formData.institution}
                onChange={(e) => handleInputChange("institution", e.target.value)}
                placeholder="Nom de votre établissement ou cabinet"
              />
            </div>
          </div>

          {/* Informations techniques */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-semibold text-slate-900">Informations techniques</h3>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">URL de votre site web *</label>
              <Input
                type="url"
                required
                value={formData.websiteUrl}
                onChange={(e) => handleInputChange("websiteUrl", e.target.value)}
                placeholder="https://votre-site-medical.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Type d'intégration souhaité *</label>
              <Select onValueChange={(value) => handleInputChange("integrationType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir le type d'intégration" />
                </SelectTrigger>
                <SelectContent>
                  {integrationTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Contact technique (optionnel)</label>
              <Input
                value={formData.technicalContact}
                onChange={(e) => handleInputChange("technicalContact", e.target.value)}
                placeholder="Email de votre développeur ou webmaster"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Détails du projet</label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Décrivez votre projet d'intégration, vos besoins spécifiques, contraintes techniques..."
                rows={4}
              />
            </div>
          </div>

          {/* Conditions */}
          <div className="space-y-4 border-t pt-6">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
              />
              <label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                J'accepte les conditions d'utilisation et la politique de confidentialité. Je certifie être un
                professionnel de santé autorisé et que mon site respecte les réglementations en vigueur. *
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="newsletter"
                checked={formData.acceptNewsletter}
                onCheckedChange={(checked) => handleInputChange("acceptNewsletter", checked as boolean)}
              />
              <label htmlFor="newsletter" className="text-sm text-slate-600">
                Je souhaite recevoir les actualités techniques et mises à jour de DermatoPro
              </label>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Annuler
            </Button>
            <Button
              type="submit"
              disabled={!formData.acceptTerms || isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Code className="h-4 w-4 mr-2" />
                  Envoyer la demande
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
