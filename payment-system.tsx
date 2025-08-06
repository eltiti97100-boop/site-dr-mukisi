"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  CreditCard,
  FileText,
  Banknote,
  Calendar,
  Shield,
  CheckCircle,
  AlertCircle,
  Euro,
  Lock,
  Clock,
  Mail,
  MapPin,
} from "lucide-react"

interface PaymentSystemProps {
  service: {
    id: string
    name: string
    price: number
    duration: string
    description: string
  }
  onPaymentComplete: (paymentData: any) => void
}

export default function PaymentSystem({ service, onPaymentComplete }: PaymentSystemProps) {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "check" | "transfer" | "installments">("card")
  const [installmentPlan, setInstallmentPlan] = useState<"2x" | "3x" | "4x">("4x")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)

  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",

    // Informations carte
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",

    // Informations chèque
    checkAmount: service.price,
    checkOrder: `Dr Martin Mukisi`,
    checkAddress: "123 Rue de la Santé, 97110 Pointe-à-Pitre, Guadeloupe",

    // Informations virement
    bankName: "",
    iban: "",
    bic: "",

    // Conditions
    acceptTerms: false,
    acceptMedicalTerms: false,
    newsletter: false,
  })

  const calculateInstallments = (amount: number, plan: string) => {
    const plans = {
      "2x": { count: 2, fees: 0.02 },
      "3x": { count: 3, fees: 0.03 },
      "4x": { count: 4, fees: 0.05 },
    }

    const planData = plans[plan as keyof typeof plans]
    const totalWithFees = amount * (1 + planData.fees)
    const installmentAmount = totalWithFees / planData.count

    return {
      installmentAmount: Math.round(installmentAmount * 100) / 100,
      totalAmount: Math.round(totalWithFees * 100) / 100,
      fees: Math.round((totalWithFees - amount) * 100) / 100,
      count: planData.count,
    }
  }

  const installmentData = calculateInstallments(service.price, installmentPlan)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulation du traitement de paiement
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsProcessing(false)
    setPaymentComplete(true)

    // Appel du callback avec les données de paiement
    onPaymentComplete({
      method: paymentMethod,
      service: service,
      amount: paymentMethod === "installments" ? installmentData.totalAmount : service.price,
      customerData: formData,
      paymentId: `PAY_${Date.now()}`,
      status: "completed",
    })
  }

  if (paymentComplete) {
    return (
      <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-green-50 to-emerald-50">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Paiement Confirmé !</h2>
          <p className="text-green-700 mb-6">
            Votre paiement a été traité avec succès. Vous recevrez un email de confirmation sous peu.
          </p>
          <div className="bg-white/80 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Service :</span>
              <span>{service.name}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Montant :</span>
              <span className="text-green-600 font-bold">
                {paymentMethod === "installments" ? installmentData.totalAmount : service.price}€
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Méthode :</span>
              <span className="capitalize">
                {paymentMethod === "card" && "Carte bancaire"}
                {paymentMethod === "check" && "Chèque"}
                {paymentMethod === "transfer" && "Virement"}
                {paymentMethod === "installments" && `Paiement ${installmentPlan}`}
              </span>
            </div>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">Retour à l'accueil</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Récapitulatif du service */}
      <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center text-blue-800">
            <Shield className="w-5 h-5 mr-2" />
            Récapitulatif de votre réservation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{service.name}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Durée : {service.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Cabinet Dr Mukisi, Guadeloupe</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}€</div>
                <Badge className="bg-blue-100 text-blue-800">Prix tout compris</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sélection du mode de paiement */}
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Euro className="w-5 h-5 mr-2 text-green-600" />
            Choisissez votre mode de paiement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Carte bancaire */}
            <button
              onClick={() => setPaymentMethod("card")}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                paymentMethod === "card"
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              <CreditCard className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">Carte Bancaire</div>
              <div className="text-xs text-slate-600">Paiement sécurisé</div>
            </button>

            {/* Paiement échelonné */}
            <button
              onClick={() => setPaymentMethod("installments")}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                paymentMethod === "installments"
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-slate-200 hover:border-green-300"
              }`}
            >
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">Paiement 4x</div>
              <div className="text-xs text-slate-600">Sans frais</div>
            </button>

            {/* Chèque */}
            <button
              onClick={() => setPaymentMethod("check")}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                paymentMethod === "check"
                  ? "border-purple-500 bg-purple-50 text-purple-700"
                  : "border-slate-200 hover:border-purple-300"
              }`}
            >
              <FileText className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">Chèque</div>
              <div className="text-xs text-slate-600">Par courrier</div>
            </button>

            {/* Virement */}
            <button
              onClick={() => setPaymentMethod("transfer")}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                paymentMethod === "transfer"
                  ? "border-orange-500 bg-orange-50 text-orange-700"
                  : "border-slate-200 hover:border-orange-300"
              }`}
            >
              <Banknote className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">Virement</div>
              <div className="text-xs text-slate-600">Bancaire</div>
            </button>
          </div>

          {/* Formulaire selon le mode de paiement */}
          <div className="space-y-6">
            {/* Informations personnelles (communes) */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Informations personnelles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+590 590 XX XX XX"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Adresse complète *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Votre adresse complète"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city">Ville *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Votre ville"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Code postal *</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    placeholder="97XXX"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Formulaire carte bancaire */}
            {paymentMethod === "card" && (
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <Lock className="w-5 h-5 mr-2" />
                    Paiement sécurisé par carte
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Numéro de carte *</Label>
                    <Input
                      id="cardNumber"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Date d'expiration *</Label>
                      <Input
                        id="expiryDate"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                        placeholder="MM/AA"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange("cvv", e.target.value)}
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Nom sur la carte *</Label>
                    <Input
                      id="cardName"
                      value={formData.cardName}
                      onChange={(e) => handleInputChange("cardName", e.target.value)}
                      placeholder="Nom tel qu'inscrit sur la carte"
                    />
                  </div>
                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertDescription>
                      Paiement 100% sécurisé. Vos données bancaires sont cryptées et ne sont pas stockées.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            )}

            {/* Paiement échelonné */}
            {paymentMethod === "installments" && (
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800">
                    <Calendar className="w-5 h-5 mr-2" />
                    Paiement en plusieurs fois
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Choisissez votre échéancier</Label>
                    <Select
                      value={installmentPlan}
                      onValueChange={(value: "2x" | "3x" | "4x") => setInstallmentPlan(value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2x">2 fois sans frais</SelectItem>
                        <SelectItem value="3x">3 fois (frais 3%)</SelectItem>
                        <SelectItem value="4x">4 fois (frais 5%)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Détail de votre échéancier :</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Montant initial :</span>
                        <span>{service.price}€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Frais de dossier :</span>
                        <span>{installmentData.fees}€</span>
                      </div>
                      <div className="flex justify-between font-semibold border-t pt-2">
                        <span>Total :</span>
                        <span>{installmentData.totalAmount}€</span>
                      </div>
                      <div className="flex justify-between text-green-600 font-semibold">
                        <span>{installmentData.count} mensualités de :</span>
                        <span>{installmentData.installmentAmount}€</span>
                      </div>
                    </div>
                  </div>

                  {/* Informations carte pour le prélèvement */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Carte pour les prélèvements :</h4>
                    <div>
                      <Label htmlFor="cardNumber">Numéro de carte *</Label>
                      <Input
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Date d'expiration *</Label>
                        <Input
                          id="expiryDate"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                          placeholder="MM/AA"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange("cvv", e.target.value)}
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Paiement par chèque */}
            {paymentMethod === "check" && (
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-800">
                    <FileText className="w-5 h-5 mr-2" />
                    Paiement par chèque
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <Mail className="h-4 w-4" />
                    <AlertDescription>Votre rendez-vous sera confirmé dès réception de votre chèque.</AlertDescription>
                  </Alert>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Instructions pour le chèque :</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <span className="font-medium w-24">Montant :</span>
                        <span className="font-bold text-purple-600">{service.price}€</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium w-24">À l'ordre de :</span>
                        <span className="font-semibold">{formData.checkOrder}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium w-24">Adresse :</span>
                        <span>{formData.checkAddress}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium w-24">Libellé :</span>
                        <span>
                          Consultation {service.name} - {formData.firstName} {formData.lastName}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">⚠️ Important :</h4>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• Joignez une copie de cette confirmation</li>
                      <li>• Indiquez votre numéro de téléphone au dos</li>
                      <li>• Envoi en lettre recommandée conseillé</li>
                      <li>• Délai de traitement : 3-5 jours ouvrés</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Paiement par virement */}
            {paymentMethod === "transfer" && (
              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-800">
                    <Banknote className="w-5 h-5 mr-2" />
                    Paiement par virement bancaire
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Votre rendez-vous sera confirmé dès réception du virement (24-48h).
                    </AlertDescription>
                  </Alert>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Coordonnées bancaires :</h4>
                    <div className="space-y-2 text-sm font-mono">
                      <div className="flex">
                        <span className="w-20 font-sans font-medium">IBAN :</span>
                        <span>FR76 1234 5678 9012 3456 7890 123</span>
                      </div>
                      <div className="flex">
                        <span className="w-20 font-sans font-medium">BIC :</span>
                        <span>ABCDEFGH</span>
                      </div>
                      <div className="flex">
                        <span className="w-20 font-sans font-medium">Banque :</span>
                        <span className="font-sans">Crédit Agricole Guadeloupe</span>
                      </div>
                      <div className="flex">
                        <span className="w-20 font-sans font-medium">Titulaire :</span>
                        <span className="font-sans">Dr Martin Mukisi</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Informations à mentionner :</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex">
                        <span className="font-medium w-24">Montant :</span>
                        <span className="font-bold text-orange-600">{service.price}€</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Référence :</span>
                        <span>CONSULT-{Date.now().toString().slice(-6)}</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Motif :</span>
                        <span>
                          {service.name} - {formData.firstName} {formData.lastName}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Conditions générales */}
            <Card className="border-slate-200">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                  />
                  <Label htmlFor="acceptTerms" className="text-sm leading-relaxed">
                    J'accepte les{" "}
                    <a href="/conditions" className="text-blue-600 hover:underline">
                      conditions générales de vente
                    </a>{" "}
                    et la{" "}
                    <a href="/confidentialite" className="text-blue-600 hover:underline">
                      politique de confidentialité
                    </a>
                    . *
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="acceptMedicalTerms"
                    checked={formData.acceptMedicalTerms}
                    onCheckedChange={(checked) => handleInputChange("acceptMedicalTerms", checked as boolean)}
                  />
                  <Label htmlFor="acceptMedicalTerms" className="text-sm leading-relaxed">
                    J'accepte les conditions médicales et autorise le Dr Mukisi à accéder à mes données de santé
                    nécessaires à la consultation. *
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                  />
                  <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                    Je souhaite recevoir les actualités médicales et offres spéciales du Dr Mukisi.
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Bouton de paiement */}
            <div className="text-center">
              <Button
                onClick={handlePayment}
                disabled={!formData.acceptTerms || !formData.acceptMedicalTerms || isProcessing}
                className="w-full max-w-md bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Traitement en cours...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    {paymentMethod === "card" && `Payer ${service.price}€`}
                    {paymentMethod === "installments" && `Confirmer le paiement ${installmentPlan}`}
                    {paymentMethod === "check" && "Confirmer la commande"}
                    {paymentMethod === "transfer" && "Confirmer le virement"}
                  </>
                )}
              </Button>

              <p className="text-xs text-slate-500 mt-3">
                🔒 Paiement 100% sécurisé • Données cryptées • Conforme RGPD
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
