import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Award, Users, Heart, Stethoscope, GraduationCap, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4">À propos</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Dr Martin <span className="text-amber-600">Mukisi Mukasa</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Spécialiste reconnu en médecine moderne et thérapies naturelles, révolutionnant les soins médicaux en
            Guadeloupe
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo et informations principales */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-6">
              <Image
                src="/images/logo-soins-miel-complet.png"
                alt="Dr Martin Mukisi Mukasa"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-3 rounded-full">
                <Stethoscope className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-slate-600">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>Guadeloupe, Antilles françaises</span>
              </div>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Badge className="bg-amber-100 text-amber-800">Chirurgie Orthopédique</Badge>
                <Badge className="bg-blue-100 text-blue-800">Apithérapie</Badge>
                <Badge className="bg-green-100 text-green-800">Traumatologie</Badge>
              </div>
            </div>
          </div>

          {/* Présentation */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Excellence médicale & Innovation</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le Dr Martin Mukisi Mukasa est un médecin spécialiste qui a révolutionné l'approche médicale en
                Guadeloupe en combinant l'expertise chirurgicale moderne avec les bienfaits thérapeutiques du miel
                médical.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Fort de plus de 15 années d'expérience, il s'est spécialisé dans le traitement de la drépanocytose,
                maladie particulièrement présente dans les Antilles, tout en développant des protocoles innovants de
                soins au miel.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-amber-600">500+</div>
                <div className="text-sm text-slate-600">Patients traités</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-slate-600">Années d'expérience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-slate-600">Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-slate-600">Disponibilité</div>
              </div>
            </div>
          </div>
        </div>

        {/* Parcours professionnel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Parcours professionnel</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-slate-900 mb-2">Formation</h4>
                <p className="text-sm text-slate-600">Diplômé de la Faculté de Médecine de Paris</p>
                <p className="text-xs text-slate-500 mt-2">2005-2012</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <Award className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-slate-900 mb-2">Spécialisation</h4>
                <p className="text-sm text-slate-600">Chirurgie orthopédique et traumatologie</p>
                <p className="text-xs text-slate-500 mt-2">2013-2015</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6 text-center">
                <Globe className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-slate-900 mb-2">International</h4>
                <p className="text-sm text-slate-600">Missions humanitaires et formations</p>
                <p className="text-xs text-slate-500 mt-2">2016-2018</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="p-6 text-center">
                <Heart className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h4 className="font-semibold text-slate-900 mb-2">Guadeloupe</h4>
                <p className="text-sm text-slate-600">Installation et développement</p>
                <p className="text-xs text-slate-500 mt-2">2019-Aujourd'hui</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission et valeurs */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Humanité</h3>
              <p className="text-slate-600">
                Chaque patient est unique et mérite une attention personnalisée avec empathie et respect.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Excellence</h3>
              <p className="text-slate-600">
                Formation continue et utilisation des technologies les plus avancées pour des soins optimaux.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Accessibilité</h3>
              <p className="text-slate-600">
                Rendre les soins spécialisés accessibles à tous grâce à la télémédecine et l'innovation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
            <Link href="/contact">En savoir plus</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
