import Image from "next/image"

export function Hero() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="-mx-4 md:mx-0 md:relative mt-">
      <div className="md:rounded-lg overflow-hidden">
        <div
          className="py-8 md:py-14 flex items-center relative 
                     bg-[url('/sports-hero-mobile.jpg')] bg-cover bg-[center_30%] bg-no-repeat 
                     min-h-[280px] md:min-h-[340px]
                     md:bg-none md:bg-slate-900/92"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 md:hidden" />

          <div className="w-full text-center relative z-10 px-4 pt-2">
            {/* Titre sans tiret — deux lignes, design épuré */}
            <h1 className="text-2xl md:text-5xl font-extrabold mb-2 md:mb-3 tracking-tight">
              <span className="text-blue-400">PARIS SPORTIFS</span>{" "}
              <span className="text-white">FRANCE</span>
            </h1>
            <p className="text-white/90 text-base md:text-xl font-semibold mb-4 md:mb-5">
              Votre comparateur
            </p>

            <div className="text-slate-400 mb-4 md:mb-6 text-xs md:text-sm">
              Dernière mise à jour : {formattedDate}
            </div>

            {/* Texte descriptif — réécrit, design sobre */}
            <p className="hidden md:block text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
              Nous classons les bookmakers légaux en France. Licence ANJ, bonus, cotes et sécurité : tout est vérifié
              pour vous aider à choisir en toute confiance.
            </p>

            {/* Trust indicators — nouveau design : cartes discrètes, icône + texte en colonne */}
            <div className="flex flex-wrap items-stretch justify-center gap-3 md:gap-5">
              <div className="flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] py-4 px-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                <Image src="/flag.png" alt="" width={24} height={24} className="w-6 h-6 md:w-7 md:h-7 mb-2 opacity-90" />
                <span className="text-white text-[11px] md:text-xs font-semibold uppercase tracking-wider text-center">
                  Licence
                </span>
              </div>

              <div className="flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] py-4 px-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                <svg className="w-6 h-6 md:w-7 md:h-7 mb-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white text-[11px] md:text-xs font-semibold uppercase tracking-wider text-center">
                  Sites vérifiés
                </span>
              </div>

              <div className="flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] py-4 px-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                <svg className="w-6 h-6 md:w-7 md:h-7 mb-2 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-[11px] md:text-xs font-semibold uppercase tracking-wider text-center">
                  Avis experts
                </span>
              </div>

              <div className="flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] py-4 px-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                <span className="text-red-400 text-2xl md:text-3xl font-black mb-1">18+</span>
                <span className="text-slate-400 text-[10px] md:text-xs font-medium uppercase tracking-wider text-center">
                  Majeurs uniquement
                </span>
              </div>
            </div>

            <div className="sr-only">
              <p>
                Comparateur indépendant de sites de paris sportifs en France. 18+ - Jeu responsable. Liens affiliés
                présents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
