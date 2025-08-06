import MedicalWidgetDomTom from "@/components/medical-widget-dom-tom"

export default function WidgetDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Démonstration du Widget Dermato</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Widget d'intégration avec détection automatique des DOM-TOM et annonces personnalisées
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <MedicalWidgetDomTom
            doctorName="Dr. Martin Mukisi"
            institutionName="Cabinet Soins Miel"
            contactEmail="contact@soins-miel.com"
            contactPhone="+590 590 XX XX XX"
            branding={{
              primaryColor: "#006d77",
              logo: "/images/logo-soins-miel.png",
              customText: "Votre santé, notre priorité",
            }}
          />
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Code d'intégration</h2>
            <div className="bg-slate-100 rounded-lg p-4 text-left">
              <code className="text-sm text-slate-800">
                {`<script src="https://dermato-pro.com/widget-dom-tom.js"></script>
<div id="dermato-widget" 
     data-doctor="Dr Martin Mukisi"
     data-institution="Cabinet Soins Miel"
     data-auto-location="true"
     data-dom-tom-only="true">
</div>`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
