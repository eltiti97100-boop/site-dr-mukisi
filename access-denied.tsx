import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ShieldX, AlertTriangle, Phone, Mail, ExternalLink } from "lucide-react"

export default function AccessDenied() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldX className="h-12 w-12 text-red-600" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">Accès Restreint</h1>
          <p className="text-xl text-slate-600 mb-8">
            Cette application est exclusivement réservée aux professionnels de santé certifiés
          </p>

          <Alert className="border-red-200 bg-red-50 mb-8">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800 text-left">
              <strong>AVERTISSEMENT LÉGAL :</strong>
              <br />
              L'utilisation de cet outil médical par des personnes non habilitées constitue :
              <ul className="mt-2 ml-4 list-disc">
                <li>Un exercice illégal de la médecine (Art. L4161-1 du CSP)</li>
                <li>Une mise en danger d'autrui (Art. 223-1 du Code pénal)</li>
                <li>Une violation des données de santé (RGPD)</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Vous êtes professionnel ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Médecin, dermatologue, ou autre professionnel de santé diplômé</p>
                <Button className="w-full bg-slate-800 hover:bg-slate-900">Demander l'accès professionnel</Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Vous êtes patient ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Consultez un dermatologue qualifié près de chez vous</p>
                <Button variant="outline" className="w-full bg-transparent border-slate-300">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Trouver un spécialiste
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-semibold text-slate-800 mb-4">Besoin d'aide ?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-transparent border-slate-300">
                <Phone className="h-4 w-4 mr-2" />
                Support technique
              </Button>
              <Button variant="outline" className="bg-transparent border-slate-300">
                <Mail className="h-4 w-4 mr-2" />
                Contact médical
              </Button>
            </div>
          </div>

          <p className="text-xs text-slate-500 mt-8">
            Dermato Pro - Outil médical certifié • Réservé aux professionnels de santé
          </p>
        </div>
      </div>
    </div>
  )
}
