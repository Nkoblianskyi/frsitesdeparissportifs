import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { InfoSections } from "@/components/info-sections"
import { SportsHighlight } from "@/components/sports-highlight"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "frsitesdeparissportifs - Comparateur Sites de Paris Sportifs France 2026",
  description:
    "Comparateur indépendant de sites de paris sportifs en France. Avis d'experts, bonus et cotes analysés. 18+ - Jeu responsable. Liens affiliés présents. Jouer comporte des risques.",
  keywords: "paris sportifs, comparateur, bonus, avis, France, 18+, jeu responsable",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "frsitesdeparissportifs - Comparateur Sites de Paris Sportifs France",
    description: "Comparateur indépendant de sites de paris sportifs. 18+ - Jeu responsable.",
    url: "https://frsitesdeparissportifs.com",
    siteName: "frsitesdeparissportifs",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "frsitesdeparissportifs - Comparateur Sites de Paris Sportifs",
    description: "Comparateur indépendant de sites de paris sportifs. 18+ - Jeu responsable.",
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <div
        className="hidden md:block fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/sports-competition-background.jpg')",
        }}
      />
      <div className="bg-black md:bg-transparent container mx-auto max-w-[1200px] px-[4px]">
        <Hero />
        <RatingSection />
        <InfoSections />

        <SportsHighlight />

        <div className="bg-white/95 backdrop-blur-sm border-t-2 border-teal-200 py-8 px-4 md:px-8 mt-12 rounded-lg shadow-lg">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
              <h3 className="font-bold text-amber-900 mb-2">⚠️ Responsabilité et Risques</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                Les paris sportifs impliquent des risques financiers. Ne misez que des sommes que vous acceptez de
                perdre. Les contenus de ce site sont fournis à titre informatif et ne constituent pas des conseils en
                paris ou en finances. Vérifiez les conditions générales de chaque opérateur avant toute inscription.
              </p>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded">
              <h3 className="font-bold text-teal-900 mb-2">🔒 Sécurité et Légalité</h3>
              <p className="text-sm text-teal-800 leading-relaxed">
                Les bookmakers présentés sont titulaires d'une licence délivrée par l'Autorité Nationale des Jeux (ANJ)
                et autorisés à opérer en France. Nous contrôlons régulièrement la validité des licences et la réputation
                des opérateurs. Nous vous invitons à vérifier la licence d'un opérateur sur le site officiel de l'ANJ.
              </p>
            </div>

            <div className="bg-teal-100 border-l-4 border-teal-500 p-4 rounded text-sm text-teal-800">
              <h3 className="font-bold text-teal-900 mb-1">Éditeur</h3>
              <p>
                Ce site est la propriété de et est géré par <strong>Sigmastart04 GmbH</strong>, Zehmeplatz 14, 15230
                Frankfurt, Deutschland.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
