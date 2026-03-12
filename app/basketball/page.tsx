import { Header } from "@/components/header"
import Link from "next/link"
import { bettingSites } from "@/lib/mock-data"
import { BettingSiteCard } from "@/components/betting-site-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sites de paris basketball - Meilleurs opérateurs | frsitesdeparissportifs",
  description:
    "Découvrez les meilleurs sites de paris sur le basketball en France : NBA, EuroLeague, Betclic Élite. Cotes et bonus. 18+ - Jeu responsable.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/basketball" },
  openGraph: {
    title: "Sites de paris basketball - frsitesdeparissportifs",
    description: "Meilleurs opérateurs pour parier sur le basketball en France.",
    url: "https://frsitesdeparissportifs.com/basketball",
  },
}

const topBasketballSites = bettingSites.slice(0, 2)

export default function BasketballPage() {
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
                  <span className="text-white">BASKETBALL</span>
                </h1>
                <p className="text-white/90 text-base md:text-xl font-semibold mb-2">
                  Meilleurs opérateurs pour le basketball
                </p>
                <p className="text-slate-400 text-sm">
                  NBA, EuroLeague, Betclic Élite
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RATING — même rendu que la page d'accueil */}
        <section className="py-4 mb-4">
          <div className="sr-only">
            <h2>Meilleurs sites de paris basketball France</h2>
            <p>Opérateurs recommandés pour parier sur le basketball. 18+ - Jeu responsable.</p>
          </div>
          <div className="space-y-4">
            {topBasketballSites.map((site, index) => (
              <BettingSiteCard key={site.id} site={site} rank={index + 1} />
            ))}
          </div>
        </section>

        {/* Infos sur ce sport */}
        <div className="py-12 bg-white rounded-lg border border-teal-200">
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            <h2 className="text-2xl font-bold text-teal-900 mb-6 text-center">
              Le basketball et les paris sportifs
            </h2>
            <div className="text-teal-800/90 space-y-4 leading-relaxed">
              <p>
                Le <strong className="text-teal-900">basketball</strong> oppose deux équipes de 5 joueurs qui marquent
                des paniers dans l'anneau adverse. Le match se joue en 4 quarts-temps (10 min FIBA, 12 min NBA). Les
                compétitions les plus suivies par les parieurs sont la <strong className="text-teal-900">NBA</strong>, l&apos;
                <strong className="text-teal-900">EuroLeague</strong>, la Betclic Élite (championnat de France), la
                Coupe du Monde FIBA et les Jeux Olympiques. Les bookmakers proposent des cotes sur le score, le
                handicap, le over/under et le live.
              </p>
              <p>
                Pour parier sur le basket en toute sécurité, privilégiez un opérateur licencié ANJ avec une bonne
                couverture des ligues majeures et des marchés variés. Les sites en tête de notre classement sont les
                mieux adaptés aux parieurs basketball.
              </p>
            </div>
          </div>
        </div>

        {/* Pourquoi ces opérateurs sont les meilleurs pour ce sport */}
        <div className="py-12 bg-white rounded-lg border border-teal-200 mt-4">
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            <h2 className="text-2xl font-bold text-teal-900 mb-6 text-center">
              Pourquoi ces opérateurs sont les meilleurs pour le basketball
            </h2>
            <div className="text-teal-800/90 space-y-4 leading-relaxed">
              <p>
                Les opérateurs affichés ci-dessus sont en tête de notre classement général. Ils proposent une offre
                basketball complète : NBA, EuroLeague, Betclic Élite, Coupe du Monde FIBA et Jeux Olympiques. Cotes
                attractives, paris en direct et bonus de bienvenue en font le meilleur choix pour parier sur le basket
                en France.
              </p>
              <p>
                Nous les recommandons pour le basketball car ils allient licence ANJ, couverture des grandes ligues,
                marchés variés (score, handicap, over/under, live) et retraits sécurisés. Ce sont les services les
                mieux adaptés au parieur basketball.
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
