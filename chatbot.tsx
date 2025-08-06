"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send, Bot, User, Phone, Calendar, Stethoscope } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
  quickReplies?: string[]
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel du Dr Mukisi. Comment puis-je vous aider aujourd'hui ?",
      sender: "bot",
      timestamp: new Date(),
      quickReplies: [
        "Prendre rendez-vous",
        "Informations sur les soins au miel",
        "Formations disponibles",
        "Téléconsultation",
        "Urgence médicale",
      ],
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const botResponses: { [key: string]: { text: string; quickReplies?: string[] } } = {
    "prendre rendez-vous": {
      text: "Parfait ! Vous pouvez prendre rendez-vous de plusieurs façons :\n\n📞 Par téléphone : +590 590 XX XX XX\n💻 En ligne sur notre site\n📱 Via téléconsultation\n\nQuel type de consultation souhaitez-vous ?",
      quickReplies: ["Consultation générale", "Soins au miel", "Chirurgie orthopédique", "Téléconsultation"],
    },
    "informations sur les soins au miel": {
      text: "Les soins au miel médical sont une spécialité du Dr Mukisi ! 🍯\n\n✨ Propriétés antibactériennes naturelles\n🩹 Cicatrisation accélérée\n💊 Alternative naturelle aux antibiotiques\n🏥 Traitement de plaies chroniques\n\nTarif : 120€ la séance (45 min)\nSouhaitez-vous plus d'informations ?",
      quickReplies: ["Prendre RDV soins miel", "Contre-indications", "Témoignages patients"],
    },
    "formations disponibles": {
      text: "Le Dr Mukisi propose plusieurs formations d'excellence :\n\n🎓 Apithérapie médicale (3 jours) - 1200€\n🔬 Chirurgie mini-invasive (5 jours) - 2500€\n🩸 Médecine drépanocytaire (2 jours) - 800€\n💻 Télémédecine digitale (1 jour) - 400€\n\nToutes certifiantes ! Laquelle vous intéresse ?",
      quickReplies: ["Formation apithérapie", "Formation chirurgie", "Calendrier formations", "Financement possible"],
    },
    téléconsultation: {
      text: "La téléconsultation avec le Dr Mukisi, c'est :\n\n🎥 Consultation vidéo HD sécurisée\n⏰ Disponible 24h/24\n💊 Prescription électronique\n📋 Dossier médical numérique\n\nTarif : 80€ (30-45 min)\nVoulez-vous réserver ?",
      quickReplies: ["Réserver téléconsultation", "Comment ça marche", "Matériel nécessaire"],
    },
    "urgence médicale": {
      text: "🚨 URGENCE MÉDICALE 🚨\n\nPour une urgence immédiate :\n📞 Appelez directement : +590 690 XX XX XX\n\nLe Dr Mukisi est disponible 24h/24 pour :\n• Traumatologie\n• Orthopédie d'urgence\n• Complications post-opératoires\n\nEn cas d'urgence vitale, appelez le 15 !",
      quickReplies: ["Appeler maintenant", "Localiser le cabinet", "Autres urgences"],
    },
    "consultation générale": {
      text: "Consultation générale avec le Dr Mukisi :\n\n⏱️ Durée : 30 minutes\n💰 Tarif : 80€\n🏥 Au cabinet ou en téléconsultation\n📋 Bilan complet de santé\n\nDisponibilités : Lun-Ven 8h-18h, Sam 8h-12h\nSouhaitez-vous réserver ?",
      quickReplies: ["Réserver consultation", "Voir disponibilités", "Préparer ma visite"],
    },
    default: {
      text: "Je ne suis pas sûr de comprendre votre demande. Voici ce que je peux vous aider à faire :",
      quickReplies: [
        "Prendre rendez-vous",
        "Informations médicales",
        "Formations",
        "Contact d'urgence",
        "Parler à un humain",
      ],
    },
  }

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsTyping(true)

    // Simuler la réponse du bot
    setTimeout(() => {
      const key = text.toLowerCase()
      const response = botResponses[key] || botResponses["default"]

      const botMessage: Message = {
        id: messages.length + 2,
        text: response.text,
        sender: "bot",
        timestamp: new Date(),
        quickReplies: response.quickReplies,
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(inputText)
    }
  }

  return (
    <>
      {/* Bouton flottant */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50"
        >
          <MessageCircle className="w-8 h-8 text-white" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </Button>
      )}

      {/* Interface du chatbot */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl border-0 bg-white/95 backdrop-blur-md z-50 flex flex-col">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Assistant Dr Mukisi</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-blue-100">En ligne</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-0 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
                    <div
                      className={`p-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                          : "bg-slate-100 text-slate-900"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 px-2">
                      {message.timestamp.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === "user" ? "order-1 ml-2" : "order-2 mr-2"}`}
                  >
                    {message.sender === "user" ? (
                      <User className="w-5 h-5 text-slate-600" />
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Réponses rapides */}
              {messages[messages.length - 1]?.quickReplies && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {messages[messages.length - 1].quickReplies!.map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs hover:bg-blue-50 hover:border-blue-300"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              )}

              {/* Indicateur de frappe */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Zone de saisie */}
            <div className="p-4 border-t border-slate-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <Button
                  onClick={() => handleSendMessage(inputText)}
                  disabled={!inputText.trim()}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Actions rapides */}
              <div className="flex justify-center space-x-2 mt-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuickReply("Prendre rendez-vous")}
                  className="text-xs"
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  RDV
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuickReply("Urgence médicale")}
                  className="text-xs text-red-600"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  Urgence
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuickReply("Informations sur les soins au miel")}
                  className="text-xs"
                >
                  <Stethoscope className="w-3 h-3 mr-1" />
                  Soins
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
