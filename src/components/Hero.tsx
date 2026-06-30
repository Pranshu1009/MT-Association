import { getWhatsAppUrl } from "../config/contact"
import { containerClass } from "../lib/layout"

interface HeroProps {
  ready?: boolean
}

export default function Hero({ ready = false }: HeroProps) {
  const anim = ready ? "hero-enter" : "opacity-0"

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy-950 pt-[4.5rem]">
      <div className="animate-ken-burns absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_#163a5f_0%,_transparent_50%)]" />
      <div className="animate-ken-burns absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,_#1e4d7b_0%,_transparent_40%)] opacity-40 [animation-delay:2s]" />
      <div className="cinematic-grain absolute inset-0" />
      <div className="animate-float-glow pointer-events-none absolute left-1/4 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <div
        className={`${containerClass} relative flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center gap-10 py-12 lg:flex-row lg:items-center lg:gap-14 lg:py-14`}
      >
        <div className="w-full text-center lg:w-[58%] lg:flex-none lg:text-left">
          <p
            className={`${anim} hero-stagger-1 mb-5 inline-block rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-sm font-medium text-gold-400`}
          >
            Trusted Accounting & IT Partner
          </p>
          <h1
            className={`${anim} hero-stagger-2 font-display text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[3.25rem]`}
          >
            Grow Your Business with{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              Confidence
            </span>
          </h1>
          <p
            className={`${anim} hero-stagger-3 mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0`}
          >
            MT & Associates delivers expert accounting, tax, audit, and IT solutions — helping
            businesses stay compliant, efficient, and ahead of the curve.
          </p>
          <div
            className={`${anim} hero-stagger-4 mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start`}
          >
            <a
              href="#contact"
              className="rounded-lg bg-gold-500 px-7 py-3.5 text-center text-sm font-semibold text-navy-950 transition-all duration-300 hover:scale-105 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25 sm:text-base"
            >
              Request a Consultation
            </a>
            <a
              href={getWhatsAppUrl("Hi, I'd like to know more about MT & Associates services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-gold-500/50 hover:bg-white/5 sm:text-base"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className={`${anim} hero-stagger-5 w-full lg:w-[42%] lg:flex-none`}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10+", label: "Professional Services" },
              { value: "3+ years", label: "Combined Professional Experience" },
              { value: "100%", label: "Commitment to Quality" },
              { value: "100%", label: "Client Focus" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="stat-card-hover flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-8 text-center backdrop-blur-sm"
                style={{ animationDelay: ready ? `${0.6 + i * 0.1}s` : undefined }}
              >
                <p className="font-display text-3xl font-bold text-gold-400">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export { WhatsAppIcon }
