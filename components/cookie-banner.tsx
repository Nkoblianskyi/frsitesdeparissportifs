"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 shadow-2xl z-50">
      <div className="container mx-auto max-w-[1200px] px-4 py-4 md:py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-1.5">
              Cookies et confidentialité
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ce site utilise des cookies pour le fonctionnement, l&apos;analyse du trafic et l&apos;amélioration de
              votre expérience. En acceptant, vous consentez à leur utilisation. Détails dans notre{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              >
                politique de confidentialité
              </Link>{" "}
              et notre{" "}
              <Link
                href="/cookie-policy"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              >
                politique des cookies
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={rejectCookies}
              className="px-4 py-2.5 text-sm font-semibold text-slate-300 bg-slate-800 border border-slate-600 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"
            >
              Refuser
            </button>
            <button
              type="button"
              onClick={acceptCookies}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
