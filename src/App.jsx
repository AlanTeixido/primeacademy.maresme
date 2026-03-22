import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FreeDayBanner from './components/FreeDayBanner'
import StatsBar from './components/StatsBar'
import Serveis from './components/Serveis'
import Metodologia from './components/Metodologia'
import Destinataris from './components/Destinataris'
import Staff from './components/Staff'
import Preus from './components/Preus'
import Horaris from './components/Horaris'
import SobreNosaltres from './components/SobreNosaltres'
import Contacte from './components/Contacte'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <FreeDayBanner />
      <StatsBar />
      <Serveis />
      <Metodologia />
      <Destinataris />
      <Staff />
      <Preus />
      <Horaris />
      <SobreNosaltres />
      <Contacte />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
