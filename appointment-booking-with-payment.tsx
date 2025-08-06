"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, CheckCircle } from "lucide-react"
import PaymentSystem from "./payment-system"

const services = [
  {
    id: "consultation-generale",
    name: "Consultation Dermatologique Générale",
    price: 80,
    duration: "30 minutes",
    description: "Examen complet de la peau, diagnostic et conseils personnalisés",
    category: "consultation",
  },
  {
    id: "apitherapie",
    name: "Soins au Miel Thérapeutique",
    price: 120,
    duration: "45 minutes",
    description: "Traitement dermatologique innovant par apithérapie médicale",
    category: "soin",
  },
  {
    id: "teledermatologie",
    name: "Téléconsultation Dermatologique",
    price: 70,
    duration: "30 minutes",
    description: "Consultation à distance par vidéo haute définition",
    category: "telemedicine",
  },
  {
    id: "chirurgie-mineure",
    name: "Chirurgie Dermatologique Mineure",
    price: 200,
    duration: "60 minutes",
    description: "Intervention chirurgicale ambulatoire (grains de beauté, kystes...)",
    category: "chirurgie",
  },
  {
    id: "laser-therapeutique",
    name: "Traitement Laser Dermatologique",
    price: 150,
    duration: "45 minutes",
    description: "Traitement laser pour diverses pathologies cutanées",
    category: "laser",
  },
  {
    id: "formation-apitherapie",
    name: "Formation Apithérapie (Professionnels)",
    price: 400,
    duration: "1 journée",
    description: "Formation complète à l'apithérapie pour professionnels de santé",
    category: "formation",
  },
]

const timeSlots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
]

const generateDates = () => {
  const dates = []
  const today = new Date()
  for (let i = 1; i <= 21; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    dates.push({
      value: date.toISOString().split("T")[0],
      label: date.toLocaleDateString("fr-FR", {
        weekday: "short",
        day: "numeric",
        month: "short",
      }),
      fullDate: date.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    })
  }
  return dates
}

export default function AppointmentBookingWithPayment() {
  const [currentStep, setCurrentStep] = useState<"service" | "datetime" | "payment" | "confirmation">("service")
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [paymentData, setPaymentData] = useState<any>(null)

  const dates = generateDates()
  const selectedDateObj = dates.find((d) => d.value === selectedDate)

  const handleServiceSelect = (service: (typeof services)[0]) => {
    setSelectedService(service)
    setCurrentStep("datetime")
  }

  const handleDateTimeConfirm = () => {
    if (selectedDate && selectedTime && selectedService) {
      setCurrentStep("payment")
    }
  }

  const handlePaymentComplete = (data: any) => {
    setPaymentData(data)
    setCurrentStep("confirmation")
  }

  const resetBooking = () => {
    setCurrentStep("service")
    setSelectedService(null)
    setSelectedDate("")
    setSelectedTime("")
    setPaymentData(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[
              { step: "service", label: "Service", icon: User },
              { step: "datetime", label: "Date & Heure", icon: Calendar },
              { step: "payment", label: "Paiement", icon: Clock },
              { step: "confirmation", label: "Confirmation", icon: CheckCircle },
            ].map((item, index) => {
              const Icon = item.icon
              const isActive = currentStep === item.step
              const isCompleted =
                (item.step === "service" && ["datetime", "payment", "confirmation"].includes(currentStep)) ||
                (item.step === "datetime" && ["payment", "confirmation"].includes(currentStep)) ||
                (item.step === "payment" && currentStep === "confirmation")

              return (
                <div key={item.step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isCompleted
                        ? "bg-green-500 text-white"
                        : isActive
                          ? "bg-blue-500 text-white"
                          : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`ml-2 text-sm font-medium ${
                      isActive ? "text-blue-600" : isCompleted ? "text-green-600" : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </span>
                  {index < 3 && <div className={`w-8 h-0.5 mx-4 ${isCompleted ? "bg-green-500" : "bg-slate-200"}`} />}
                </div>
              )
            })}
          </div>
        </div>

        {/* Step 1: Service Selection */}
        {currentStep === "service" && (
          <div>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                Choisissez votre <span className="text-blue-600">Service</span>
              </h1>
              <p className="text-lg text-slate-600">Sélectionnez le type de consultation ou de soin souhaité</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group"
                  onClick={() => handleServiceSelect(service)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        className={
                          service.category === "consultation"
                            ? "bg-blue-100 text-blue-800"
                            : service.category === "soin"
                              ? "bg-green-100 text-green-800"
                              : service.category === "telemedicine"
                                ? "bg-purple-100 text-purple-800"
                                : service.category === "chirurgie"
                                  ? "bg-red-100 text-red-800"
                                  : service.category === "laser"
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-indigo-100 text-indigo-800"
                        }
                      >
                        {service.category}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{service.price}€</div>
                        <div className="text-sm text-slate-500">{service.duration}</div>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group">
                      Sélectionner
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date & Time Selection */}
        {currentStep === "datetime" && selectedService && (
          <div>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                Choisissez votre <span className="text-blue-600">Créneau</span>
              </h1>
              <p className="text-lg text-slate-600">Sélectionnez la date et l'heure qui vous conviennent</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Service sélectionné */}
              <Card className="lg:col-span-1 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-blue-800">Service sélectionné</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-bold text-lg mb-2">{selectedService.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{selectedService.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Durée :</span>
                      <span className="font-semibold">{selectedService.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prix :</span>
                      <span className="font-bold text-blue-600">{selectedService.price}€</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep("service")}
                    className="w-full mt-4 bg-transparent"
                  >
                    Changer de service
                  </Button>
                </CardContent>
              </Card>

              {/* Sélection date et heure */}
              <div className="lg:col-span-2 space-y-6">
                {/* Dates */}
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle>Choisissez une date</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
                      {dates.map((date) => (
                        <button
                          key={date.value}
                          onClick={() => setSelectedDate(date.value)}
                          className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                            selectedDate === date.value
                              ? "border-blue-500 bg-blue-500 text-white shadow-lg"
                              : "border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                          }`}
                        >
                          <div className="text-sm font-medium">{date.label}</div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Heures */}
                {selectedDate && (
                  <Card className="border-0 shadow-xl">
                    <CardHeader>
                      <CardTitle>Créneaux disponibles - {selectedDateObj?.fullDate}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                              selectedTime === time
                                ? "border-blue-500 bg-blue-500 text-white shadow-lg"
                                : "border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                            }`}
                          >
                            <div className="text-sm font-medium">{time}</div>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Confirmation */}
                {selectedDate && selectedTime && (
                  <Card className="border-0 shadow-xl bg-gradient-to-r from-green-50 to-emerald-50">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-green-800 mb-4">Récapitulatif de votre rendez-vous</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Service :</span>
                          <span className="font-semibold">{selectedService.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Date :</span>
                          <span className="font-semibold">{selectedDateObj?.fullDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Heure :</span>
                          <span className="font-semibold">{selectedTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Durée :</span>
                          <span className="font-semibold">{selectedService.duration}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span>Prix :</span>
                          <span className="font-bold text-green-600">{selectedService.price}€</span>
                        </div>
                      </div>
                      <Button
                        onClick={handleDateTimeConfirm}
                        className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                      >
                        Continuer vers le paiement
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {currentStep === "payment" && selectedService && (
          <div>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                Finaliser votre <span className="text-green-600">Paiement</span>
              </h1>
              <p className="text-lg text-slate-600">Choisissez votre mode de paiement et finalisez votre réservation</p>
            </div>

            <PaymentSystem service={selectedService} onPaymentComplete={handlePaymentComplete} />
          </div>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === "confirmation" && paymentData && (
          <div className="text-center">
            <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl font-bold text-green-800 mb-4">Réservation Confirmée !</h2>

                <p className="text-green-700 mb-8 text-lg">
                  Votre rendez-vous a été confirmé et votre paiement traité avec succès. Vous recevrez un email de
                  confirmation avec tous les détails.
                </p>

                <div className="bg-white/80 rounded-xl p-6 mb-8 text-left">
                  <h3 className="font-bold text-lg text-slate-900 mb-4">Détails de votre rendez-vous :</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Service :</span>
                      <span className="font-semibold">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Date :</span>
                      <span className="font-semibold">{selectedDateObj?.fullDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Heure :</span>
                      <span className="font-semibold">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Durée :</span>
                      <span className="font-semibold">{selectedService?.duration}</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="text-slate-600">Montant payé :</span>
                      <span className="font-bold text-green-600">{paymentData.amount}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Mode de paiement :</span>
                      <span className="font-semibold capitalize">
                        {paymentData.method === "card" && "Carte bancaire"}
                        {paymentData.method === "check" && "Chèque"}
                        {paymentData.method === "transfer" && "Virement"}
                        {paymentData.method === "installments" && "Paiement échelonné"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Référence :</span>
                      <span className="font-mono text-sm">{paymentData.paymentId}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={resetBooking}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    Prendre un autre rendez-vous
                  </Button>

                  <div className="text-sm text-slate-600">
                    <p className="mb-2">📧 Email de confirmation envoyé</p>
                    <p className="mb-2">📱 SMS de rappel 24h avant</p>
                    <p>☎️ Urgence : +590 590 XX XX XX</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
