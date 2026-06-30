import { useEffect, useState } from "react"

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const duration = 2400
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(next)

      if (elapsed < duration) {
        requestAnimationFrame(tick)
      } else {
        setExiting(true)
        window.setTimeout(onComplete, 700)
      }
    }

    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <div
      className={`loader-screen fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950 ${
        exiting ? "loader-exit" : ""
      }`}
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="loader-grain pointer-events-none absolute inset-0" />

      <div className="loader-glow pointer-events-none absolute h-64 w-64 rounded-full bg-gold-500/20 blur-3xl" />

      <div className={`loader-content flex flex-col items-center ${exiting ? "" : "loader-enter"}`}>
        <div className="loader-logo flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-500 font-display text-3xl font-bold text-navy-950 shadow-lg shadow-gold-500/30">
          MT
        </div>

        <h1 className="mt-6 font-display text-2xl font-bold text-white sm:text-3xl">
          MT & Associates
        </h1>
        <p className="mt-1 text-sm tracking-[0.2em] text-gold-400 uppercase">
          Accounting & IT Services
        </p>

        <div className="mt-10 w-56">
          <div className="h-px w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="loader-bar h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-center text-xs tracking-widest text-slate-500">{progress}%</p>
        </div>
      </div>
    </div>
  )
}
