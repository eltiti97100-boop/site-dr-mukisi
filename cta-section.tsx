"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Besoin d'une consultation ?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Contactez-moi directement pour une prise en charge rapide et professionnelle
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp immédiat
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Planifier un RDV
          </Button>
        </div>
      </div>
    </section>
  )
}
