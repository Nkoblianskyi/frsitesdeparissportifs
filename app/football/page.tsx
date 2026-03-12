import { Header } from "@/components/header"
import Link from "next/link"
import { bettingSites } from "@/lib/mock-data"
import { BettingSiteCard } from "@/components/betting-site-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sites de paris football - Meilleurs opérateurs | frsitesdeparissportifs",
  description:
    "Découvrez les meilleurs sites de paris sur le football en France : Ligue 1, Ligue des Champions, cotes et bonus. 18+ - Jeu responsable.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/football" },
  openGraph: {
    title: "Sites de paris football - frsitesdeparissportifs",
    description: "Meilleurs opérateurs pour parier sur le football en France.",
    url: "https://frsitesdeparissportifs.com/football",
  },
}

const topFootballSites = bettingSites.slice(0, 2)

export default function FootballPage() {
  return (
    <>
      <Header />
      <div
        className="hidden md:block fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sports-competition-background.jpg')" }}
      />
      <div className="bg-black md:bg-transparent container mx-auto max-w-[1200px] px-[4px]">
        {/* Titre même style que la page d'accueil */}
        <section className="-mx-4 md:mx-0 md:relative mt-">
          <div className="md:rounded-lg overflow-hidden">
            <div className="py-8 md:py-14 flex items-center relative min-h-[200px] md:min-h-[260px] md:bg-slate-900/92 bg-[url('/sports-hero-mobile.jpg')] bg-cover bg-[center_30%] bg-no-repeat">
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 md:hidden" />
              <div className="w-full text-center relative z-10 px-4 pt-2">
                <h1 className="text-2xl md:text-5xl font-extrabold mb-2 md:mb-3 tracking-tight">
                  <span className="text-blue-400">PARIS SPORTIFS</span>{" "}
                  <span className="text-white">FOOTBALL</span>
                </h1>
                <p className="text-white/90 text-base md:text-xl font-semibold mb-2">
                  Meilleurs opérateurs pour le football
                </p>
                <p className="text-slate-400 text-sm">
                  Ligue 1, C1, Coupe du Monde, Euro
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RATING — même rendu que la page d'accueil */}
        <section className="py-4 mb-4">
          <div className="sr-only">
            <h2>Meilleurs sites de paris football France</h2>
            <p>Opérateurs recommandés pour parier sur le football. 18+ - Jeu responsable.</p>
          </div>
          <div className="space-y-4">
            {topFootballSites.map((site, index) => (
              <BettingSiteCard key={site.id} site={site} rank={index + 1} />
            ))}
          </div>
        </section>

        {/* Infos sur ce sport */}
        <div className="py-12 bg-white rounded-lg border border-teal-200">
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            <h2 className="text-2xl font-bold text-teal-900 mb-6 text-center">
              Le football et les paris sportifs
            </h2>
            <div className="text-teal-800/90 space-y-4 leading-relaxed">
              <p>
                Le <strong className="text-teal-900">football</strong> est le sport le plus parié en France et dans le
                monde. Deux équipes de 11 joueurs s'affrontent pendant 90 minutes (deux mi-temps de 45 minutes). Les
                compétitions phares pour les parieurs sont la <strong className="text-teal-900">Ligue 1</strong>, la{" "}
                <strong className="text-teal-900">Ligue des Champions</strong>, la Coupe de France, l'Euro et la Coupe
                du Monde. Les bookmakers proposent des cotes sur le résultat (1X2), le nombre de buts, les buteurs et
                le live.
              </p>
              <p>
                Pour parier sur le football en toute sécurité, choisissez un opérateur licencié ANJ, avec de bonnes
                cotes et une offre live riche. Les sites que nous classons en tête répondent à ces critères et sont
                adaptés aux parieurs football.
              </p>
            </div>
          </div>
        </div>

        {/* Pourquoi ces opérateurs sont les meilleurs pour ce sport */}
        <div className="py-12 bg-white rounded-lg border border-teal-200 mt-4">
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            <h2 className="text-2xl font-bold text-teal-900 mb-6 text-center">
              Pourquoi ces opérateurs sont les meilleurs pour le football
            </h2>
            <div className="text-teal-800/90 space-y-4 leading-relaxed">
              <p>
                Les opérateurs affichés ci-dessus sont en tête de notre classement général. Ils offrent une couverture
                complète du football français et international : Ligue 1, Ligue 2, Ligue des Champions, Europa League,
                Coupe de France et compétitions FIFA et UEFA. Cotes compétitives, paris en direct et bonus de bienvenue
                en font le meilleur choix pour parier sur le ballon rond en France.
              </p>
              <p>
                Nous les recommandons pour le football car ils allient licence ANJ, interface claire, marchés variés
                (1X2, over/under, handicap, buteur) et retraits fiables. Ce sont les services les mieux adaptés au
                parieur football.
              </p>
            </div>
          </div>
        </div>

        {/* Bloc responsabilité + lien classement — même style que l'accueil */}
        <div className="bg-white/95 backdrop-blur-sm border-t-2 border-teal-200 py-8 px-4 md:px-8 mt-12 rounded-lg shadow-lg">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
              <h3 className="font-bold text-amber-900 mb-2">⚠️ Responsabilité et Risques</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                Les paris sportifs impliquent des risques financiers. Ne misez que des sommes que vous acceptez de
                perdre. 18+ — Jeu responsable.
              </p>
            </div>
            <div className="bg-teal-100 border-l-4 border-teal-500 p-4 rounded text-sm text-teal-800">
              <h3 className="font-bold text-teal-900 mb-1">Éditeur</h3>
              <p>
                Ce site est la propriété de et est géré par <strong>Sigmastart04 GmbH</strong>, Zehmeplatz 14, 15230
                Frankfurt, Deutschland.
              </p>
            </div>
            <div className="text-center pt-4">
              <Link
                href="/"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Voir tout le classement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
