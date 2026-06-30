import { useState } from "react"
import { containerClass } from "../lib/layout"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar({ ready = false }: { ready?: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-navy-950 ${
        ready ? "nav-enter" : "opacity-0"
      }`}
    >
      <nav className={`${containerClass} grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4 md:grid-cols-[1fr_auto_1fr]`}>
        <a href="#home" className="flex items-center gap-3 md:justify-self-start">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-500 font-display text-base font-bold text-navy-950">
            MT
          </span>
          <div className="leading-tight">
            <span className="block font-display text-base font-bold text-white sm:text-lg">
              MT & Associates
            </span>
            <span className="block text-[11px] text-gold-400 sm:text-xs">
              Accounting & IT Services
            </span>
          </div>
        </a>

        <ul className="hidden items-center justify-center gap-7 md:flex md:justify-self-center lg:gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end md:justify-self-end">
          <a
            href="#contact"
            className="hidden rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400 md:inline-block"
          >
            Get in Touch
          </a>

          <button
            type="button"
            className="inline-flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-white/90 hover:text-gold-400"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-block rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
