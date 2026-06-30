import { useCallback, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import Loader from "./components/Loader"
import Reveal from "./components/Reveal"

export default function App() {
  const [loading, setLoading] = useState(true)
  const [ready, setReady] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setLoading(false)
    requestAnimationFrame(() => setReady(true))
  }, [])

  return (
    <>
      {loading && <Loader onComplete={handleLoadComplete} />}

      <div className={ready ? "opacity-100" : "opacity-0"}>
        <Navbar ready={ready} />
        <main>
          <Hero ready={ready} />
          <Reveal>
            <About />
          </Reveal>
          <Reveal delay={100}>
            <Services />
          </Reveal>
          <Reveal delay={100}>
            <Team />
          </Reveal>
          <Reveal delay={100}>
            <Contact />
          </Reveal>
        </main>
        <Reveal>
          <Footer />
        </Reveal>
        <WhatsAppButton ready={ready} />
      </div>
    </>
  )
}
