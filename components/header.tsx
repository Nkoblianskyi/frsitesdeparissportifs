import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-teal-900/95 backdrop-blur-sm border-b border-teal-700/50 z-50">
      <div className="container mx-auto max-w-[1200px] px-4 py-2 md:py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/15 transition-colors">
              <Image src="/favicon.ico" alt="Logo" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
              frsitesdeparissportifs
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm font-medium">
            <Link
              href="/"
              className="text-white/90 hover:text-white px-3 py-1.5 rounded-lg hover:bg-teal-700/50 transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/football"
              className="text-white/90 hover:text-white px-3 py-1.5 rounded-lg hover:bg-teal-700/50 transition-colors"
            >
              Football
            </Link>
            <Link
              href="/basketball"
              className="text-white/90 hover:text-white px-3 py-1.5 rounded-lg hover:bg-teal-700/50 transition-colors"
            >
              Basketball
            </Link>
            <Link
              href="/sports"
              className="text-white/90 hover:text-white px-3 py-1.5 rounded-lg hover:bg-teal-700/50 transition-colors"
            >
              Sports
            </Link>
            <Link
              href="/privacy-policy"
              className="text-white/70 hover:text-white px-3 py-1.5 rounded-lg hover:bg-teal-700/50 transition-colors text-xs md:text-sm"
            >
              Confidentialité
            </Link>
            <Link
              href="/cookie-policy"
              className="text-white/70 hover:text-white px-3 py-1.5 rounded-lg hover:bg-teal-700/50 transition-colors text-xs md:text-sm"
            >
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
