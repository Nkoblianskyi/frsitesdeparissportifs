import Link from "next/link"
import Image from "next/image"
import { TrustIndicatorsFooter } from "./trust-indicators"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto max-w-[1200px] px-4 py-10 md:py-12">
        {/* Top: logo + nav inline */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
              <Image src="/favicon.ico" alt="Logo" width={28} height={28} />
            </div>
            <div>
              <h2 className="font-bold text-lg text-white uppercase">frsitesdeparissportifs</h2>
              <p className="text-slate-400 text-xs">Comparateur indépendant • 18+</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">
              Accueil
            </Link>
            <Link href="/football" className="text-slate-400 hover:text-white transition-colors">
              Football
            </Link>
            <Link href="/basketball" className="text-slate-400 hover:text-white transition-colors">
              Basketball
            </Link>
            <Link href="/sports" className="text-slate-400 hover:text-white transition-colors">
              Sports
            </Link>
            <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
              Confidentialité
            </Link>
            <Link href="/cookie-policy" className="text-slate-400 hover:text-white transition-colors">
              Cookies
            </Link>
          </nav>
        </div>

        {/* Avertissement */}
        <div className="py-6 border-b border-slate-700">
          <p className="text-xs text-slate-400 max-w-2xl">
            <strong className="text-slate-300">Avertissement :</strong> Ce site contient des liens affiliés. Une
            commission peut nous être versée en cas d'inscription via nos liens, sans coût supplémentaire pour vous.
          </p>
        </div>

        {/* Organismes de protection — uniquement dans le footer */}
        <div className="py-8">
          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Protection et régulation du jeu
          </h4>
          <TrustIndicatorsFooter />
        </div>

        {/* Copyright + éditeur */}
        <div className="pt-6 border-t border-slate-800 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            &copy; 2026 frsitesdeparissportifs.com — Tous droits réservés
          </p>
          <p className="text-slate-500 text-sm mt-1">
            Éditeur : <strong className="text-slate-400">Sigmastart04 GmbH</strong>, Zehmeplatz 14, 15230 Frankfurt,
            Deutschland.
          </p>
        </div>
      </div>
    </footer>
  )
}
