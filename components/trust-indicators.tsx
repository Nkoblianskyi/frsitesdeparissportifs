import Link from "next/link"

const TRUST_LINKS = [
  { href: "https://www.adictel.com", src: "/logo-adictel.svg", alt: "ADICTEL" },
  { href: "https://anj.fr", src: "/logo-anj.svg", alt: "ANJ - Autorité Nationale des Jeux" },
  { href: "https://www.gambleaware.org", src: "/gamble.webp", alt: "GambleAware" },
  { href: "https://mediateurdesjeuxenligne.fr/", src: "/logo-mediateurs-des-jeux.png", alt: "Médiateur des Jeux" },
  { href: "https://www.gamcare.org.uk", src: "/gamecare.svg", alt: "GamCare" },
  { href: "https://www.gamstop.co.uk", src: "/logo-gamstop.svg", alt: "GAMSTOP" },
  { href: "https://www.joueurs-info-service.fr", src: "/jouers-info-service.png", alt: "Joueurs Info Service" },
  { href: "https://www.sosjoueurs.org/", src: "/logo-sos-joueurs.svg", alt: "SOS Joueurs" },
]

export function TrustIndicatorsFooter() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
      {TRUST_LINKS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 hover:bg-slate-700 rounded-lg p-4 md:p-5 flex items-center justify-center transition-all border border-slate-600 hover:border-slate-500 group"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="h-9 md:h-11 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </Link>
      ))}
    </div>
  )
}
