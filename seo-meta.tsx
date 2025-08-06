import Head from "next/head"

interface SEOMetaProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

export default function SEOMeta({
  title = "Dr Martin Mukisi - Excellence Médicale en Guadeloupe | Soins Miel & Télémédecine",
  description = "Centre médical d'excellence du Dr Martin Mukisi en Guadeloupe. Spécialiste en apithérapie, chirurgie orthopédique, télémédecine et formations médicales. Consultations 24h/24.",
  keywords = "médecin Guadeloupe, soins miel médical, apithérapie, télémédecine, chirurgie orthopédique, formation médicale, Dr Mukisi, drépanocytose, urgences médicales",
  image = "/images/logo-soins-miel-complet.png",
  url = "https://dr-mukisi.gp",
}: SEOMetaProps) {
  return (
    <Head>
      {/* Métadonnées de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dr Martin Mukisi" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Dr Martin Mukisi - Centre Médical d'Excellence" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            name: "Cabinet Médical Dr Martin Mukisi",
            description: description,
            url: url,
            logo: image,
            image: image,
            telephone: "+590590XXXXXX",
            email: "contact@dr-mukisi.gp",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Rue de la Santé",
              addressLocality: "Pointe-à-Pitre",
              postalCode: "97110",
              addressCountry: "GP",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "16.2415",
              longitude: "-61.5331",
            },
            openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
            priceRange: "€€",
            paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
            currenciesAccepted: "EUR",
            medicalSpecialty: ["Apithérapie", "Chirurgie Orthopédique", "Télémédecine", "Médecine Générale"],
            availableService: [
              {
                "@type": "MedicalTherapy",
                name: "Soins au Miel Médical",
                description: "Traitement par apithérapie médicale",
              },
              {
                "@type": "MedicalProcedure",
                name: "Chirurgie Orthopédique Mini-Invasive",
                description: "Interventions chirurgicales orthopédiques",
              },
              {
                "@type": "MedicalService",
                name: "Télémédecine",
                description: "Consultations médicales à distance",
              },
            ],
            physician: {
              "@type": "Physician",
              name: "Dr Martin Mukisi",
              medicalSpecialty: ["Orthopédie", "Apithérapie", "Médecine Générale"],
              alumniOf: "Faculté de Médecine",
              yearsOfExperience: "15+",
            },
          }),
        }}
      />

      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Préchargement des ressources critiques */}
      <link rel="preload" href="/images/logo-soins-miel-complet.png" as="image" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Métadonnées médicales spécifiques */}
      <meta name="medical.specialty" content="Orthopédie, Apithérapie, Médecine Générale" />
      <meta name="medical.location" content="Guadeloupe, Antilles françaises" />
      <meta name="medical.languages" content="Français, Créole" />
      <meta name="medical.insurance" content="Sécurité Sociale, Mutuelles" />
    </Head>
  )
}
