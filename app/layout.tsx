import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Dr Martin Mukisi - Excellence Médicale • Guadeloupe",
    template: "%s | Dr Martin Mukisi - Dermatologue Guadeloupe",
  },
  description:
    "Dr Martin Mukisi, dermatologue expert en Guadeloupe. Spécialiste en apithérapie, télémédecine avancée et formations médicales d'excellence. Soins dermatologiques innovants au miel thérapeutique.",
  keywords: [
    "dermatologue Guadeloupe",
    "Dr Martin Mukisi",
    "apithérapie",
    "miel thérapeutique",
    "télémédecine dermatologie",
    "soins peau Antilles",
    "formation médicale Guadeloupe",
    "dermatologie tropicale",
    "consultation dermatologique",
    "médecine naturelle Caraïbe",
  ],
  authors: [{ name: "Dr Martin Mukisi" }],
  creator: "Dr Martin Mukisi",
  publisher: "Cabinet Médical Dr Mukisi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dr-mukisi.gp"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-GP": "/",
      "fr-FR": "/fr",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_GP",
    url: "https://dr-mukisi.gp",
    title: "Dr Martin Mukisi - Excellence Médicale • Guadeloupe",
    description:
      "Dermatologue expert en Guadeloupe. Spécialiste en apithérapie, télémédecine et formations médicales d'excellence.",
    siteName: "Dr Martin Mukisi",
    images: [
      {
        url: "/images/dr-mukisi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Martin Mukisi - Dermatologue Guadeloupe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Martin Mukisi - Excellence Médicale • Guadeloupe",
    description: "Dermatologue expert en apithérapie et télémédecine en Guadeloupe",
    images: ["/images/dr-mukisi-twitter.jpg"],
    creator: "@DrMukisi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Cabinet Médical Dr Martin Mukisi",
  description: "Dermatologue expert en apithérapie et télémédecine en Guadeloupe",
  url: "https://dr-mukisi.gp",
  logo: "https://dr-mukisi.gp/images/logo-soins-miel.png",
  image: "https://dr-mukisi.gp/images/dr-mukisi-photo.jpg",
  telephone: "+590 590 XX XX XX",
  email: "contact@dr-mukisi.gp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Rue de la Santé",
    addressLocality: "Pointe-à-Pitre",
    postalCode: "97110",
    addressRegion: "Guadeloupe",
    addressCountry: "GP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "16.2431",
    longitude: "-61.5331",
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
  medicalSpecialty: "Dermatology",
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Apithérapie dermatologique",
      description: "Soins dermatologiques au miel thérapeutique",
    },
    {
      "@type": "MedicalService",
      name: "Télémédecine",
      description: "Consultations dermatologiques à distance",
    },
    {
      "@type": "EducationalOrganization",
      name: "Formations médicales",
      description: "Formation continue pour professionnels de santé",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Dr Martin Mukisi",
    jobTitle: "Dermatologue",
    description: "Expert en apithérapie et télémédecine",
  },
  sameAs: [
    "https://www.linkedin.com/in/dr-martin-mukisi",
    "https://twitter.com/DrMukisi",
    "https://www.facebook.com/DrMukisiGuadeloupe",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr-GP">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
