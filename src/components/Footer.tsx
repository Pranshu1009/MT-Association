import { contactConfig, getWhatsAppUrl } from "../config/contact"
import { containerClass } from "../lib/layout"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className={containerClass}>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold text-navy-950">MT & Associates</p>
            <p className="mt-1 text-sm text-slate-500">Accounting & IT Services</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
            <a href={`tel:${contactConfig.phoneDial}`} className="hover:text-gold-500">
              {contactConfig.phone}
            </a>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <a href={`mailto:${contactConfig.email}`} className="hover:text-gold-500">
              {contactConfig.email}
            </a>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366]"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} MT & Associates. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
