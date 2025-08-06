import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo-soins-miel-complet.png"
                alt="Dr Mukisi - Soins Miel"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">Dr Martin Mukisi</h3>
                <p className="text-sm text-slate-400">Soins Miel & Médecine</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Spécialiste en médecine moderne et thérapies naturelles au miel, révolutionnant les soins médicaux en
              Guadeloupe.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-slate-400 hover:text-white transition-colors">
                Accueil
              </Link>
              <Link href="/services" className="block text-slate-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/about" className="block text-slate-400 hover:text-white transition-colors">
                À propos
              </Link>
              <Link href="/rendez-vous" className="block text-slate-400 hover:text-white transition-colors">
                Rendez-vous
              </Link>
              <Link href="/contact" className="block text-slate-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Spécialités</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <div>Soins au miel médical</div>
              <div>Chirurgie orthopédique</div>
              <div>Médecine drépanocytaire</div>
              <div>Traumatologie</div>
              <div>Consultations d'urgence</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="text-slate-400 text-sm">
                  123 Rue de la Santé
                  <br />
                  97110 Pointe-à-Pitre
                  <br />
                  Guadeloupe
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+590 590 XX XX XX</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-slate-400 text-sm">contact@dr-mukisi.gp</span>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="text-slate-400 text-sm">
                  Lun-Ven: 8h-18h
                  <br />
                  Sam: 8h-12h
                  <br />
                  Urgences 24/7
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Réseaux sociaux et copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="text-slate-400 text-sm text-center md:text-right">
              <p>&copy; 2024 Dr Martin Mukisi. Tous droits réservés.</p>
              <p className="mt-1">
                <Link href="#" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
                {" • "}
                <Link href="#" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
